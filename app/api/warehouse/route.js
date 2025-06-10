import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description, location, warehouseType } = await request.json();
        const warehouse = await db.warehouse.create({
            data: {
                title,
                description,
                location,
                warehouseType
            },
        });
        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to create the Warehouse"
        }, {
            status: 500
        })

    }
}

export async function GET(request) {
    try {
        const warehouse = await db.warehouse.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Warehouse"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Warehouse ID is required" }, { status: 400 });
        }

        try {
            const deletedWarehouse = await db.warehouse.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Warehouse hard deleted", item: deletedWarehouse });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedWarehouse = await db.warehouse.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Warehouse soft deleted due to relation constraint",
                    item: softDeletedWarehouse
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