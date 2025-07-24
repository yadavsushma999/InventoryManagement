import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// POST: Create Add/Remove Stock Adjustment
export async function POST(request) {
    try {
        const {
            referenceNumber,
            adjustmentType, // "add" | "remove"
            quantity,
            itemId,
            warehouseId,
            branchLocationId, // pass if you wish to store stock at a specific branch location
            notes,
        } = await request.json();

        // Validate adjustmentType
        if (!["add", "remove"].includes(adjustmentType)) {
            return NextResponse.json(
                { message: "adjustmentType must be 'add' or 'remove'." },
                { status: 400 }
            );
        }

        const qty = parseInt(quantity);
        if (!Number.isInteger(qty) || qty <= 0) {
            return NextResponse.json(
                { message: "Quantity must be a positive integer." },
                { status: 400 }
            );
        }

        // Validate item
        const item = await db.item.findUnique({ where: { id: itemId } });
        if (!item) {
            return NextResponse.json({ message: `Item ${itemId} not found.` }, { status: 404 });
        }

        // Validate warehouse
        const warehouse = await db.warehouse.findUnique({ where: { id: warehouseId } });
        if (!warehouse) {
            return NextResponse.json({ message: `Warehouse ${warehouseId} not found.` }, { status: 404 });
        }

        // Resolve the location where ItemStock will be adjusted
        let location;
        if (branchLocationId) {
            // Use branch location if provided
            location = await db.location.findUnique({ where: { id: branchLocationId } });
            if (!location) {
                return NextResponse.json({ message: `Branch Location ${branchLocationId} not found.` }, { status: 404 });
            }
        } else {
            // Fallback: Use warehouse-linked location
            location = await db.location.findFirst({
                where: { warehouseId: warehouseId, type: "warehouse" },
            });
            if (!location) {
                return NextResponse.json({
                    message: `Location linked to Warehouse ${warehouseId} not found.`,
                }, { status: 404 });
            }
        }

        // For "remove", ensure sufficient stock
        if (adjustmentType === "remove") {
            if (item.quantity < qty) {
                return NextResponse.json(
                    { message: `Item has only ${item.quantity} units. Cannot remove ${qty}.` },
                    { status: 400 }
                );
            }
            if (warehouse.stockQty < qty) {
                return NextResponse.json(
                    { message: `Warehouse has only ${warehouse.stockQty} units. Cannot remove ${qty}.` },
                    { status: 400 }
                );
            }

            const itemStock = await db.itemStock.findFirst({
                where: { itemId, locationId: location.id }
            });
            if (!itemStock || itemStock.quantity < qty) {
                return NextResponse.json(
                    { message: `Location has insufficient stock for this item.` },
                    { status: 400 }
                );
            }
        }

        const [adjustment, updatedItem, updatedWarehouse, updatedItemStock] = await db.$transaction(async (tx) => {
            // Create AddStockAdjustment record
            const adjustment = await tx.addStockAdjustment.create({
                data: {
                    referenceNumber,
                    adjustmentType,
                    addStockQty: qty,
                    itemId,
                    receivingWarehouseId: warehouseId,
                    notes,
                },
            });

            // Update Item quantity
            const updatedItem = await tx.item.update({
                where: { id: itemId },
                data: {
                    quantity: adjustmentType === "add" ? { increment: qty } : { decrement: qty },
                },
            });

            // Update Warehouse quantity
            const updatedWarehouse = await tx.warehouse.update({
                where: { id: warehouseId },
                data: {
                    stockQty: adjustmentType === "add" ? { increment: qty } : { decrement: qty },
                },
            });

            // Update or create ItemStock
            const existingItemStock = await tx.itemStock.findFirst({
                where: { itemId, locationId: location.id },
            });

            let updatedItemStock;
            if (existingItemStock) {
                updatedItemStock = await tx.itemStock.update({
                    where: { id: existingItemStock.id },
                    data: {
                        quantity: adjustmentType === "add" ? { increment: qty } : { decrement: qty },
                    },
                });
            } else {
                if (adjustmentType === "remove") {
                    throw new Error("No existing ItemStock found to remove stock from.");
                }
                updatedItemStock = await tx.itemStock.create({
                    data: {
                        itemId,
                        locationId: location.id,
                        quantity: qty,
                        reorderPoint: 0,
                    },
                });
            }

            return [adjustment, updatedItem, updatedWarehouse, updatedItemStock];
        });

        return NextResponse.json({
            message: `Stock ${adjustmentType}ed successfully.`,
            adjustment,
            updatedItem,
            updatedWarehouse,
            updatedItemStock,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to process stock adjustment.",
                error: error.message || String(error),
            },
            { status: 500 }
        );
    }
}

// GET: List all adjustments
export async function GET() {
    try {
        const items = await db.addStockAdjustment.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(items);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to fetch AddStockAdjustments.", error: error.message || String(error) },
            { status: 500 }
        );
    }
}

// DELETE: Hard/Soft delete adjustment
export async function DELETE(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) {
            return NextResponse.json({ message: "Add Stock Adjustment ID is required." }, { status: 400 });
        }

        const adjustment = await db.addStockAdjustment.findUnique({
            where: { id },
        });

        if (!adjustment) {
            return NextResponse.json({ message: `Add Stock Adjustment ${id} not found.` }, { status: 404 });
        }

        const { addStockQty: qty, adjustmentType, itemId, receivingWarehouseId: warehouseId } = adjustment;

        const [item, warehouse] = await Promise.all([
            db.item.findUnique({ where: { id: itemId } }),
            db.warehouse.findUnique({ where: { id: warehouseId } }),
        ]);

        if (!item || !warehouse) {
            return NextResponse.json({
                message: `Associated Item or Warehouse not found. Cannot reverse adjustment.`,
            }, { status: 404 });
        }

        // Get location for ItemStock
        const location = await db.location.findFirst({
            where: { warehouseId, type: "warehouse" },
        });

        if (!location) {
            return NextResponse.json({
                message: `Location linked to Warehouse ${warehouseId} not found. Cannot reverse ItemStock.`,
            }, { status: 404 });
        }

        const itemStock = await db.itemStock.findFirst({
            where: { itemId, locationId: location.id },
        });

        if (!itemStock) {
            return NextResponse.json({
                message: `ItemStock entry for this item and location not found. Cannot reverse.`,
            }, { status: 404 });
        }

        await db.$transaction(async (tx) => {
            if (adjustmentType === "add") {
                if (
                    item.quantity < qty ||
                    warehouse.stockQty < qty ||
                    itemStock.quantity < qty
                ) {
                    throw new Error(`Insufficient stock to reverse addition of ${qty} units.`);
                }
            }

            // Reverse stock on Item
            await tx.item.update({
                where: { id: itemId },
                data: {
                    quantity: adjustmentType === "add"
                        ? { decrement: qty }
                        : { increment: qty },
                },
            });

            // Reverse stock on Warehouse
            await tx.warehouse.update({
                where: { id: warehouseId },
                data: {
                    stockQty: adjustmentType === "add"
                        ? { decrement: qty }
                        : { increment: qty },
                },
            });

            // Reverse stock on ItemStock
            await tx.itemStock.update({
                where: { id: itemStock.id },
                data: {
                    quantity: adjustmentType === "add"
                        ? { decrement: qty }
                        : { increment: qty },
                },
            });

            // Hard delete the adjustment
            await tx.addStockAdjustment.delete({
                where: { id },
            });

            // Audit log for tracking reversals
            await tx.auditLog.create({
                data: {
                    action: "DELETE_REVERSE",
                    model: "addStockAdjustment",
                    modelId: id,
                    userId,
                    oldValue: adjustment,
                },
            });
        });

        return NextResponse.json({
            message: `Add Stock Adjustment reversed and hard deleted successfully.`,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to delete and reverse Add Stock Adjustment.",
            error: error.message || String(error),
        }, { status: 500 });
    }
}
