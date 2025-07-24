import { NextResponse } from "next/server";
import db from "@/lib/db"; // adjust if your db import differs

// -----------------------------
// CREATE TRANSFER PLACEHOLDER
// -----------------------------
export async function POST(request) {
    try {
        const { transferStockQty, receivingBranchId, notes } = await request.json();
        const qty = Number(transferStockQty);

        if (!receivingBranchId || !qty || qty <= 0) {
            return NextResponse.json({ message: "Valid receivingBranchId and positive qty required." }, { status: 400 });
        }

        const adjustment = { transferStockQty: qty, receivingBranchId, notes };
        console.log(adjustment);

        // 🚩 Implement your creation logic here when ready

        return NextResponse.json({ message: "Transfer Adjustment created (placeholder).", adjustment });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: error.message || String(error),
            message: "Failed to create the Adjustment",
        }, { status: 500 });
    }
}

// -----------------------------
// GET TRANSFERS
// -----------------------------
export async function GET() {
    try {
        console.log("Fetching transfer adjustments...");

        const transfers = await db.transferStockAdjustment.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                item: { select: { id: true, title: true, sku: true } },
                givingWarehouse: { select: { id: true, title: true } },
                receivingWarehouse: { select: { id: true, title: true } },
            },
        });

        console.log(`Fetched ${transfers.length} transfers.`);
        return NextResponse.json(transfers);
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: error.message || String(error),
            message: "Failed to fetch the transfer adjustments.",
        }, { status: 500 });
    }
}

// -----------------------------
// DELETE + REVERSE TRANSFER
// -----------------------------
export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) {
            return NextResponse.json({ message: "Transfer Adjustment ID is required." }, { status: 400 });
        }

        const result = await db.$transaction(async (tx) => {
            const adjustment = await tx.transferStockAdjustment.findUnique({ where: { id } });
            if (!adjustment) throw new Error(`Transfer Adjustment ${id} not found.`);

            const { transferStockQty: qty, itemId, givingWarehouseId, receivingWarehouseId } = adjustment;

            const [item, givingWarehouse, receivingWarehouse] = await Promise.all([
                tx.item.findUnique({ where: { id: itemId } }),
                tx.warehouse.findUnique({ where: { id: givingWarehouseId } }),
                tx.warehouse.findUnique({ where: { id: receivingWarehouseId } }),
            ]);
            if (!item || !givingWarehouse || !receivingWarehouse) {
                throw new Error(`Item or Warehouses not found, cannot reverse transfer.`);
            }

            const [givingLocation, receivingLocation] = await Promise.all([
                tx.location.findFirst({ where: { warehouseId: givingWarehouseId, type: "warehouse" } }),
                tx.location.findFirst({ where: { warehouseId: receivingWarehouseId, type: "warehouse" } }),
            ]);
            if (!givingLocation || !receivingLocation) {
                throw new Error("Locations for warehouses not found, cannot reverse transfer.");
            }

            const [givingItemStock, receivingItemStock] = await Promise.all([
                tx.itemStock.findFirst({ where: { itemId, locationId: givingLocation.id } }),
                tx.itemStock.findFirst({ where: { itemId, locationId: receivingLocation.id } }),
            ]);
            if (!givingItemStock || !receivingItemStock) {
                throw new Error("ItemStock missing at source/target, cannot reverse transfer.");
            }

            // Check if sufficient stock to reverse
            if (receivingWarehouse.stockQty < qty || receivingItemStock.quantity < qty) {
                throw new Error(`Insufficient stock in receiving warehouse to reverse ${qty} units.`);
            }

            await Promise.all([
                tx.warehouse.update({
                    where: { id: givingWarehouseId },
                    data: { stockQty: { increment: qty } },
                }),
                tx.warehouse.update({
                    where: { id: receivingWarehouseId },
                    data: { stockQty: { decrement: qty } },
                }),
                tx.itemStock.update({
                    where: { id: givingItemStock.id },
                    data: { quantity: { increment: qty } },
                }),
                tx.itemStock.update({
                    where: { id: receivingItemStock.id },
                    data: { quantity: { decrement: qty } },
                }),
                tx.transferStockAdjustment.delete({
                    where: { id },
                }),
            ]);

            return { id, qty, itemId, givingWarehouseId, receivingWarehouseId };
        }, { timeout: 10000 }); // extend timeout if your DB is slow

        return NextResponse.json({
            message: `Transfer Adjustment reversed and deleted successfully.`,
            result,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to delete and reverse Transfer Adjustment.",
            error: error.message || String(error),
        }, { status: 500 });
    }
}
