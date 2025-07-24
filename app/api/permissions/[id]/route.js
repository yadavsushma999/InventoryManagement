import db from "@/lib/db";
import { NextResponse } from "next/server";
import { permission } from "process";

export async function GET(request, context) {
    const { id } = context.params;

    try {
        const permission = await db.permission.findUnique({
            where: {
                id,
            },
        });

        return NextResponse.json(permission);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to fetch the Permission",
                error: error.message || error,
            },
            { status: 500 }
        );
    }
}

// PUT /api/brands/[id]
export async function PUT(request, context) {
    const { id } = context.params;
    const { name,description} = await request.json();

    try {
        const permission = await db.permission.update({
            where: {
                id,
            },
            data: {
                name,
                description
            },
        });

        return NextResponse.json(permission);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to update the Permission",
                error: error.message || error,
            },
            { status: 500 }
        );
    }
}