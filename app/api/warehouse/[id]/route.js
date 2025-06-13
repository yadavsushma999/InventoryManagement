import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request, context) {
    const { id } = context.params;
    try {
        const warehouse = await db.warehouse.findUnique({
            where: {
                id
            },
            include: {
                item: true,
            }
        })
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the warehouse"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, context) {
    const { title, description, location, warehouseType } = await request.json()
    const { id } = context.params;
    try {
        const warehouse = await db.warehouse.update({
            where: {
                id
            },
            data: {
                title,
                description,
                location,
                warehouseType
            }
        })
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to Update the Warehouse"
        }, {
            status: 500
        })
    }
}