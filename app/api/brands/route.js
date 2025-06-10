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


export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Brand ID is required" }, { status: 400 });
        }

        try {
            const deletedBrand = await db.brand.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Brand hard deleted", item: deletedBrand });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedBrand = await db.brand.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Brand soft deleted due to relation constraint",
                    item: softDeletedBrand
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