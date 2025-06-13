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

        const qty = parseInt(transferStockQty || "0");
        if (isNaN(qty) || qty <= 0) {
            return NextResponse.json({
                message: "transferStockQty must be a positive number"
            }, { status: 400 });
        }

        // ✅ Check giving and receiving are not the same
        if (givingWarehouseId === receivingWarehouseId) {
            return NextResponse.json({
                message: "Giving and Receiving Warehouse cannot be the same"
            }, { status: 400 });
        }

        // ✅ Validate both warehouses exist
        const givingWarehouse = await db.warehouse.findUnique({
            where: { id: givingWarehouseId }
        });
        if (!givingWarehouse) {
            return NextResponse.json({
                message: `Giving Warehouse ${givingWarehouseId} not found`
            }, { status: 404 });
        }

        const receivingWarehouse = await db.warehouse.findUnique({
            where: { id: receivingWarehouseId }
        });
        if (!receivingWarehouse) {
            return NextResponse.json({
                message: `Receiving Warehouse ${receivingWarehouseId} not found`
            }, { status: 404 });
        }

        // ✅ Check if giving warehouse has enough stock
        if (givingWarehouse.stockQty < qty) {
            return NextResponse.json({
                message: `Giving Warehouse has only ${givingWarehouse.stockQty} in stock, cannot transfer ${qty}`
            }, { status: 409 });
        }

        // ✅ Perform all operations in a single transaction
        const [transferAdjustment, updatedGiving, updatedReceiving] = await db.$transaction([
            db.transferStockAdjustment.create({
                data: {
                    transferStockQty: qty,
                    itemId,
                    referenceNumber,
                    givingWarehouseId,
                    receivingWarehouseId,
                    notes
                }
            }),
            db.warehouse.update({
                where: { id: givingWarehouseId },
                data: {
                    stockQty: {
                        decrement: qty
                    }
                }
            }),
            db.warehouse.update({
                where: { id: receivingWarehouseId },
                data: {
                    stockQty: {
                        increment: qty
                    }
                }
            }),
        ]);

        return NextResponse.json({
            transferAdjustment,
            updatedGiving,
            updatedReceiving
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: error.message || error,
            message: "Failed to create the Transfer Adjustment"
        }, {
            status: 500
        });
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