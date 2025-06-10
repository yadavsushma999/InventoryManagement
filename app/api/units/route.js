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


export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Unit ID is required" }, { status: 400 });
        }

        try {
            const deletedUnit = await db.unit.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Unit hard deleted", item: deletedUnit });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedUnit = await db.unit.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Unit soft deleted due to relation constraint",
                    item: softDeletedUnit
                });
            }

            throw error; 
        }
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete the ",
            error: {
                code: error.code || "UNKNOWN",
                message: error.message || String(error)
            }
        }, { status: 500 });
    }
}