import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title } = await request.json();
        const brand = await db.brand.create({
            data: {
                title,  
            },
        });
        return NextResponse.json(brand);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to create the Brand"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const brands = await db.brand.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(brands);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Brands"
        }, {
            status: 500
        })
    }
}