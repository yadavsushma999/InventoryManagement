import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            transferStockQty,
            itemId,
            referenceNumber,
            givingWarehouseId,
            receivingWarehouseId,
            notes
        } = await request.json();

        const qty = parseInt(transferStockQty || "0", 10);
        if (isNaN(qty) || qty <= 0) {
            return NextResponse.json({ message: "transferStockQty must be a positive number" }, { status: 400 });
        }

        if (givingWarehouseId === receivingWarehouseId) {
            return NextResponse.json({ message: "Giving and Receiving Warehouse cannot be the same" }, { status: 400 });
        }

        // ✅ Ensure both warehouses exist
        const [givingWarehouse, receivingWarehouse] = await Promise.all([
            db.warehouse.findUnique({ where: { id: givingWarehouseId } }),
            db.warehouse.findUnique({ where: { id: receivingWarehouseId } })
        ]);

        if (!givingWarehouse) {
            return NextResponse.json({ message: `Giving Warehouse ${givingWarehouseId} not found` }, { status: 404 });
        }
        if (!receivingWarehouse) {
            return NextResponse.json({ message: `Receiving Warehouse ${receivingWarehouseId} not found` }, { status: 404 });
        }

        // ✅ Fetch corresponding Location IDs
        const [givingLocation, receivingLocation] = await Promise.all([
            db.location.findFirst({
                where: { warehouseId: givingWarehouseId, type: "warehouse" }
            }),
            db.location.findFirst({
                where: { warehouseId: receivingWarehouseId, type: "warehouse" }
            })
        ]);

        if (!givingLocation || !receivingLocation) {
            return NextResponse.json({
                message: "Location entries for one or both warehouses not found. Ensure each warehouse has a linked Location."
            }, { status: 400 });
        }

        const givingLocationId = givingLocation.id;
        const receivingLocationId = receivingLocation.id;

        await db.$transaction(async (tx) => {
            // ✅ Check item stock at giving warehouse
            const givingItemStock = await tx.itemStock.findFirst({
                where: { itemId, locationId: givingLocationId }
            });

            if (!givingItemStock || givingItemStock.quantity < qty) {
                throw new Error(`Insufficient item stock at giving warehouse for item ${itemId}`);
            }

            // ✅ Create transfer record
            await tx.transferStockAdjustment.create({
                data: {
                    transferStockQty: qty,
                    itemId,
                    referenceNumber,
                    givingWarehouseId,
                    receivingWarehouseId,
                    notes
                }
            });

            // ✅ Update warehouse overall stockQty
            await Promise.all([
                tx.warehouse.update({
                    where: { id: givingWarehouseId },
                    data: { stockQty: { decrement: qty } }
                }),
                tx.warehouse.update({
                    where: { id: receivingWarehouseId },
                    data: { stockQty: { increment: qty } }
                })
            ]);

            // ✅ Update ItemStock at giving warehouse
            await tx.itemStock.update({
                where: { id: givingItemStock.id },
                data: { quantity: { decrement: qty } }
            });

            // ✅ Update or create ItemStock at receiving warehouse
            const receivingItemStock = await tx.itemStock.findFirst({
                where: { itemId, locationId: receivingLocationId }
            });

            if (receivingItemStock) {
                await tx.itemStock.update({
                    where: { id: receivingItemStock.id },
                    data: { quantity: { increment: qty } }
                });
            } else {
                await tx.itemStock.create({
                    data: {
                        itemId,
                        locationId: receivingLocationId,
                        quantity: qty,
                        reorderPoint: 0
                    }
                });
            }
        });

        return NextResponse.json({ message: "Stock transferred successfully." });

    } catch (error) {
        console.error("Transfer error:", error);
        return NextResponse.json({
            error: error.message || String(error),
            message: "Failed to create the Transfer Adjustment"
        }, { status: 500 });
    }
}



export async function GET(request) {
    try {
        const items = await db.transferStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(items);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Transfer Adjustments"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Transfer Stock ID is required" }, { status: 400 });
        }

        try {
            const deletedTransferStock = await db.transferStockAdjustment.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Transfer Stock hard deleted", item: deletedTransferStock });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedTransferStock = await db.transferStockAdjustment.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Transfer Stock soft deleted due to relation constraint",
                    item: softDeletedTransferStock
                });
            }

            throw error;
        }
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete",
            error: {
                code: error.code || "UNKNOWN",
                message: error.message || String(error)
            }
        }, { status: 500 });
    }
}