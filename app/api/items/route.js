import { NextResponse } from "next/server";
import db from "@/lib/db"; // Make sure this import is correct for your Prisma client


export async function POST(request) {
    try {
        const itemData = await request.json();
        console.log("Received item data:", itemData);

        const qty = parseInt(itemData.quantity || "0");
        if (isNaN(qty)) {
            throw new Error("Quantity must be a valid number");
        }

        const warehouse = await db.warehouse.findUnique({
            where: { id: itemData.warehouseId },
        });

        if (!warehouse) {
            return NextResponse.json(
                { message: `Warehouse ${itemData.warehouseId} not found` },
                { status: 404 }
            );
        }

        const [updatedWarehouse, item] = await db.$transaction([
            db.warehouse.update({
                where: { id: itemData.warehouseId },
                data: { stockQty: { increment: qty } },
            }),
            db.item.create({
                data: {
                    title: itemData.title,
                    description: itemData.description || "",
                    categoryId: itemData.categoryId,
                    sku: itemData.sku,
                    barcode: itemData.barcode,
                    quantity: qty,
                    unitId: itemData.unitId,
                    brandId: itemData.brandId,
                    buyingPrice: parseFloat(itemData.buyingPrice || "0"),
                    sellingPrice: parseFloat(itemData.sellingPrice || "0"),
                    supplierId: itemData.supplierId,
                    reOrderPoint: parseInt(itemData.reOrderPoint || "0"),
                    warehouseId: itemData.warehouseId,
                    imageUrl: itemData.imageUrl || "",
                    weight: parseFloat(itemData.weight || "0"),
                    dimensions: itemData.dimensions || "",
                    taxRate: parseFloat(itemData.taxRate || "0"),
                    notes: itemData.notes || "",
                },
            }),
        ]);

        return NextResponse.json(item);
    } catch (error) {
        console.error("Error creating item:", error);
        return NextResponse.json(
            { message: "Failed to create an item", error: error.message || error },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        const items = await db.item.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            },
            include: {
                category: true,
                warehouse: true,

            }
        })
        return NextResponse.json(items);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Items"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Item ID is required" }, { status: 400 });
        }

        try {
            const deletedItem = await db.item.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Item hard deleted", item: deletedItem });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedItem = await db.item.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Item soft deleted due to relation constraint",
                    item: softDeletedItem
                });
            }

            throw error;
        }
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete the ",
            error: {
                code: error.code || "UNKNOWN",
                message: error.message || String(error)
            }
        }, { status: 500 });
    }
}