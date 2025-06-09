import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, abbreviation } = await request.json();
        const unit = await db.unit.create({
            data: {
                title, 
                abbreviation 
            },
        });
        return NextResponse.json(unit);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to create the Unit"
        }, {
            status: 500
        })

    }
}

export async function GET(request) {
    try {
        const units = await db.unit.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(units);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Units"
        }, {
            status: 500
        })
    }
}