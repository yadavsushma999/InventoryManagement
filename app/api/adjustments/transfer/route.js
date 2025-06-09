import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { transferStockQty, itemId, referenceNumber, givingWarehouseId, receivingWarehouseId, notes } = await request.json();
        const adjustment = await db.transferStockAdjustment.create({
            data: {
                transferStockQty:parseFloat(transferStockQty),
                itemId,
                referenceNumber,
                givingWarehouseId,
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