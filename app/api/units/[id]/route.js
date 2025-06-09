import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request, context) {
    const { id } = context.params;
    try {
        const unit = await db.unit.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(unit);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Unit"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, context) {
    const { id } = context.params;
    const { title, abbreviation } = await request.json()
    try {
        const unit = await db.unit.update({
            where: {
                id
            },
            data: {
                title,
                abbreviation
            }
        })
        return NextResponse.json(unit);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to Update the Unit"
        }, {
            status: 500
        })
    }
}