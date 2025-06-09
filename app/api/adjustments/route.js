import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { transferStockQty, receivingBranchId ,notes } = await request.json();
        const adjustment = {transferStockQty, receivingBranchId ,notes };
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
        const items = await db.item.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
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