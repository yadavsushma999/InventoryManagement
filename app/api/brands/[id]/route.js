import db from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/brands/[id]
export async function GET(request, context) {
    const { id } = context.params;

    try {
        const brand = await db.brand.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(brand);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to fetch the Brand",
                error: error.message || error,
            },
            { status: 500 }
        );
    }
}

// PUT /api/brands/[id]
export async function PUT(request, context) {
    const { id } = context.params;
    const { title } = await request.json();

    try {
        const brand = await db.brand.update({
            where: {
                id,
            },
            data: {
                title,
            },
        });

        return NextResponse.json(brand);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to update the Brand",
                error: error.message || error,
            },
            { status: 500 }
        );
    }
}
