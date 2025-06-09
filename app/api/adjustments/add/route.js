import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { addStockQty, itemId, referenceNumber, receivingWarehouseId, notes } = await request.json();
        const adjustment = await db.addStockAdjustment.create({
            data: {
                addStockQty: parseInt(addStockQty),
                itemId,
                referenceNumber,
                receivingWarehouseId,
                notes
            },
        });
        console.log(adjustment);
        return NextResponse.json(adjustment);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to create the Adjustment"
        }, {
            status: 500
        })
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