import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            addStockQty,
            itemId,
            referenceNumber,
            receivingWarehouseId,
            supplierId,
            notes
        } = await request.json();

        const qty = parseInt(addStockQty || "0");
        if (isNaN(qty) || qty <= 0) {
            return NextResponse.json({
                message: "addStockQty must be a positive number"
            }, { status: 400 });
        }

        // Optional: Validate item and warehouse exist
        const item = await db.item.findUnique({ where: { id: itemId } });
        if (!item) {
            return NextResponse.json({
                message: `Item ${itemId} not found`
            }, { status: 404 });
        }

        const warehouse = await db.warehouse.findUnique({ where: { id: receivingWarehouseId } });
        if (!warehouse) {
            return NextResponse.json({
                message: `Warehouse ${receivingWarehouseId} not found`
            }, { status: 404 });
        }

        // ✅ Do all operations atomically
        const [adjustment, updatedItem, updatedWarehouse] = await db.$transaction([
            db.addStockAdjustment.create({
                data: {
                    addStockQty: qty,
                    itemId,
                    referenceNumber,
                    receivingWarehouseId,
                    supplierId,
                    notes
                }
            }),
            db.item.update({
                where: { id: itemId },
                data: {
                    quantity: { increment: qty }
                }
            }),
            db.warehouse.update({
                where: { id: receivingWarehouseId },
                data: {
                    stockQty: { increment: qty }
                }
            })
        ]);

        return NextResponse.json({
            adjustment,
            updatedItem,
            updatedWarehouse
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: error.message || error,
            message: "Failed to create the Adjustment"
        }, {
            status: 500
        });
    }
}


export async function GET(request) {
    try {
        const items = await db.addStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(items);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Add Adjustments"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Add Stock ID is required" }, { status: 400 });
        }

        try {
            const deletedAddStock = await db.addStockAdjustment.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Add Stock hard deleted", item: deletedAddStock });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedAddStock = await db.addStockAdjustment.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Add Stock soft deleted due to relation constraint",
                    item: softDeletedAddStock
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