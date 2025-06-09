import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request,context) {
    const { id } = context.params;
    try {
        const item = await db.item.findUnique({
            where: {
                id
            },
            include: {
                warehouse: true,
            },
        })
        return NextResponse.json(item);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Item"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, context) {
    const { id } = context.params;

    try {
        const itemData = await request.json();
        const item = await db.item.update({
            where: {
                id
            },
            data: {
                title: itemData.title,
                description: itemData.description || "", 
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
        })
        return NextResponse.json(item);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to Update the Item"
        }, {
            status: 500
        })
    }
}