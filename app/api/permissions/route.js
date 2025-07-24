
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const permissions = await db.permission.findMany({
            //orderBy: { createdAt: "desc" }, // ✅ optional: only if you have createdAt
        });
        console.log("permissions",permissions);
        return NextResponse.json(permissions);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to fetch permissions", error },
            { status: 500 }
        );
    }
}


// POST: Create a new  permission
export async function POST(request) {
    try {
        const { name, description } = await request.json();

        if (!name) {
            return NextResponse.json({ message: "Permission name is required" }, { status: 400 });
        }

        const permission = await db.permission.create({
            data: {
                name,
                description,
            },
        });

        return NextResponse.json({ message: "Permission created", permission });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to create role", error }, { status: 500 });
    }
}


export async function DELETE(request) {
    console.log("request",request);
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { message: "Permission ID is required" },
                { status: 400 }
            );
        }

        // Hard delete the permission
        const deletedPermission = await db.permission.delete({
            where: { id },
        });

        return NextResponse.json({
            message: "Permission permanently deleted",
            item: deletedPermission,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to delete permission",
                error: {
                    code: error.code || "UNKNOWN",
                    message: error.message || String(error),
                },
            },
            { status: 500 }
        );
    }
}

