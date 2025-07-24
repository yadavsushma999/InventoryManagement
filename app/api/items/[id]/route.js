import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";


const MODEL = "item";

/**
 * GET: Get single item by ID
 */
export async function GET(_request, context) {
    const { id } = context.params;

    try {
        const item = await db.item.findUnique({
    where: { id },
    include: {
        warehouse: true,
        category: true,
        brand: true,
        supplier: true,
        stock: {
            include: {
                location: {
                    include: {
                        warehouse: true, // gets warehouse info for clarity
                    }
                }
            }
        }
    }
        });

        if (!item || !item.isActive || item.deletedAt) {
            return NextResponse.json(
                { message: "Item not found or inactive" },
                { status: 404 }
            );
        }

        return NextResponse.json(item);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to fetch the Item", error: error.message },
            { status: 500 }
        );
    }
}

/**
 * PUT: Update single item by ID
 */
export async function PUT(request, context) {
    const { id } = context.params;
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const itemData = await request.json();

        const parseInteger = (value, fieldName) => {
            if (value === undefined || value === null || value === "") return 0;
            const parsed = parseInt(value);
            if (isNaN(parsed)) throw new Error(`${fieldName} must be a valid integer`);
            return parsed;
        };

        const parseFloatSafe = (value, fieldName) => {
            if (value === undefined || value === null || value === "") return 0;
            const parsed = parseFloat(value);
            if (isNaN(parsed)) throw new Error(`${fieldName} must be a valid number`);
            return parsed;
        };

        if (!itemData.title || typeof itemData.title !== "string") {
            throw new Error("Title is required and must be a string");
        }
        if (!itemData.sku || typeof itemData.sku !== "string") {
            throw new Error("SKU is required and must be a string");
        }

        const oldItem = await db.item.findUnique({ where: { id } });
        if (!oldItem) {
            return NextResponse.json({ message: "Item not found" }, { status: 404 });
        }

        const newQty = parseInteger(itemData.quantity, "Quantity");
        const qtyDifference = newQty - oldItem.quantity;

        // Get locationId for warehouseId
        const location = await db.location.findFirst({
            where: { warehouseId: itemData.warehouseId, type: "warehouse" },
        });
        if (!location) {
            return NextResponse.json({ message: "Associated location for warehouse not found" }, { status: 404 });
        }

        // Get ItemStock for itemId + locationId
        const itemStock = await db.itemStock.findFirst({
            where: {
                itemId: id,
                locationId: location.id,
            },
        });
        if (!itemStock) {
            return NextResponse.json({ message: "ItemStock entry not found for this item and location" }, { status: 404 });
        }

        const [updatedItem, updatedWarehouse, updatedItemStock] = await db.$transaction(async (tx) => {
            const updatedItem = await tx.item.update({
                where: { id },
                data: {
                    title: itemData.title,
                    description: itemData.description || "",
                    categoryId: itemData.categoryId,
                    sku: itemData.sku,
                    barcode: itemData.barcode,
                    quantity: newQty,
                    unitId: itemData.unitId,
                    brandId: itemData.brandId,
                    buyingPrice: parseFloatSafe(itemData.buyingPrice, "Buying Price"),
                    sellingPrice: parseFloatSafe(itemData.sellingPrice, "Selling Price"),
                    supplierId: itemData.supplierId,
                    reOrderPoint: parseInteger(itemData.reOrderPoint, "Re-order Point"),
                    warehouseId: itemData.warehouseId,
                    imageUrl: itemData.imageUrl || "",
                    weight: parseFloatSafe(itemData.weight, "Weight"),
                    dimensions: itemData.dimensions || "",
                    taxRate: parseFloatSafe(itemData.taxRate, "Tax Rate"),
                    notes: itemData.notes || "",
                },
            });

            const updatedWarehouse = await tx.warehouse.update({
                where: { id: itemData.warehouseId },
                data: {
                    stockQty: { increment: qtyDifference },
                },
            });

            const updatedItemStock = await tx.itemStock.update({
                where: { id: itemStock.id },
                data: {
                    quantity: { increment: qtyDifference },
                },
            });

            return [updatedItem, updatedWarehouse, updatedItemStock];
        });

        await db.auditLog.create({
            data: {
                action: "UPDATE",
                model: "item",
                modelId: id,
                userId,
                oldValue: oldItem,
                newValue: updatedItem,
            },
        });

        return NextResponse.json({
            message: "Item, warehouse stock, and itemStock updated successfully",
            item: updatedItem,
            warehouse: updatedWarehouse,
            itemStock: updatedItemStock,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to update the item", error: error.message },
            { status: 400 }
        );
    }
}


