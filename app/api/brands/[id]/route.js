import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request, { params: { id } }) {
    try {
        const brand = await db.brand.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(brand);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Brand"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, { params: { id } }) {
    const { title } = await request.json()
    try {
        const brand = await db.brand.update({
            where: {
                id
            },
            data: {
                title
            }
        })
        return NextResponse.json(brand);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to Update the Brand"
        }, {
            status: 500
        })
    }
}