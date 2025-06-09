import { NextResponse } from "next/server";
import db from "@/lib/db"; // Make sure this import is correct for your Prisma client
import { profile } from "console";

export async function POST(request) {
    try {
        const itemData = await request.json();
        console.log("Received item data:", itemData); // Log incoming request

        const item = await db.item.create({
            data: {
                title: itemData.title,
                description: itemData.description || "", // Provide defaults if needed
                categoryId: itemData.categoryId,
                sku: itemData.sku,
                barcode: itemData.barcode,
                quantity: parseInt(itemData.qty || "0"),
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
                notes: itemData.notes || ""
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        console.error("Error creating item:", error); // Log full error in terminal

        return NextResponse.json({
            message: "Failed to create an item",
            error: error.message || error
        }, {
            status: 500
        });
    }
}

export async function GET(request) {
    try {
        const items = await db.item.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            },
            include: {
                category:true,
                supplier:true,
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