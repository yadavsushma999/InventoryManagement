
import db from "@/lib/db";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/authOptions";
import { getFilters } from "@/lib/filters/getFilters";

export async function GET(request) {
    try {
        const { take, skip, sortBy, sortOrder, search, fromDate, toDate } = getFilters(request);


        const where = {};

        // Text search on name or description
        if (search) {
            where.OR = [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
            ];
        }



        // Date filter
        if (fromDate || toDate) {
            where.createdAt = {};
            if (fromDate) {
                where.createdAt.gte = new Date(fromDate);
            }
            if (toDate) {
                where.createdAt.lte = new Date(toDate);
            }
        }

        const [items, totalCount] = await Promise.all([
            db.permission.findMany({
                where,
                take,
                skip,
                orderBy: {
                    [sortBy]: sortOrder,
                },
            }),
            db.permission.count({ where }),
        ]);

        return NextResponse.json({ items, totalCount });
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

