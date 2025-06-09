import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description, location, warehouseType } = await request.json();
        const warehouse = await db.warehouse.create({
            data: {
                title,
                description,
                location,
                warehouseType
            },
        });
        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to create the Warehouse"
        }, {
            status: 500
        })

    }
}

export async function GET(request) {
    try {
        const warehouse = await db.warehouse.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Warehouse"
        }, {
            status: 500
        })
    }
}