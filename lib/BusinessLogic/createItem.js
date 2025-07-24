// lib/items/createItem.js

import db from "../db";



export async function createItemWithStockAndWarehouse({ body, qty, userId }) {
    // ✅ Check for existing item by SKU
    const existing = await db.item.findFirst({
        where: { sku: body.sku },
    });

    if (existing && existing.isActive) {
        return {
            error: {
                message: "Item with this SKU already exists",
                status: 400,
            },
        };
    }

    if (existing && !existing.isActive) {
        return {
            error: {
                message: "Item exists but inactive. Reactivate?",
                existingId: existing.id,
                status: 409,
            },
        };
    }

    // ✅ Check location for warehouseId
    const locationEntry = await db.location.findFirst({
        where: { warehouseId: body.warehouseId, type: "warehouse" },
    });

    if (!locationEntry) {
        return {
            error: {
                message: "Location entry for this warehouse not found. Cannot create item.",
                status: 400,
            },
        };
    }

    // ✅ Transaction: create item, itemStock, increment warehouse quantity
    const [createdItem, createdItemStock, updatedWarehouse] = await db.$transaction(async (tx) => {
        const createdItem = await tx.item.create({
            data: {
                ...body,
                quantity: qty,
                buyingPrice: parseFloat(body.buyingPrice || "0"),
                sellingPrice: parseFloat(body.sellingPrice || "0"),
                weight: parseFloat(body.weight || "0"),
                taxRate: parseFloat(body.taxRate || "0"),
                reOrderPoint: parseInt(body.reOrderPoint || "0"),
            },
        });

        const createdItemStock = await tx.itemStock.create({
            data: {
                itemId: createdItem.id,
                locationId: locationEntry.id,
                quantity: qty,
                reorderPoint: parseInt(body.reOrderPoint || "0"),
            },
        });

        const updatedWarehouse = await tx.warehouse.update({
            where: { id: body.warehouseId },
            data: {
                stockQty: {
                    increment: qty,
                },
            },
        });

        return [createdItem, createdItemStock, updatedWarehouse];
    });

    // ✅ Audit log
    await db.auditLog.create({
        data: {
            action: "CREATE",
            model: "Item",
            modelId: createdItem.id,
            userId,
            newValue: createdItem,
        },
    });

    return {
        success: {
            message: "Item created successfully",
            item: createdItem,
            itemStock: createdItemStock,
            warehouse: updatedWarehouse,
        },
    };
}
