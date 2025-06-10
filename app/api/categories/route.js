export const runtime = "nodejs";

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        const category = await db.category.create({
            data: {
                title,
                description
            },
        });
        return NextResponse.json(category);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to create the category"
        }, {
            status: 500
        })

    }
}

export async function GET(request) {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(categories);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Categories"
        }, {
            status: 500
        })
    }
}



export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Category ID is required" }, { status: 400 });
        }

        try {
            const deletedCategory = await db.category.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Category hard deleted", item: deletedCategory });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedCategory = await db.category.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Category soft deleted due to relation constraint",
                    item: softDeletedCategory
                });
            }

            throw error;
        }
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete",
            error: {
                code: error.code || "UNKNOWN",
                message: error.message || String(error)
            }
        }, { status: 500 });
    }
}