import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, phone, email, address,
            contactPerson, supplierCode, taxID, paymentTerms, notes, } = await request.json();
        const supplier = await db.supplier.create({
            data: {
                title,
                phone,
                email,
                address,
                contactPerson,
                supplierCode,
                taxID,
                paymentTerms,
                notes,
            },
        });
        return NextResponse.json(supplier);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed to create the Supplier"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const suppliers = await db.supplier.findMany({
            orderBy: {
                createdAt: 'desc' //Latest warehouse
            }
        })
        return NextResponse.json(suppliers);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Suppliers"
        }, {
            status: 500
        })
    }
}


export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Supplier ID is required" }, { status: 400 });
        }

        try {
            const deletedSupplier = await db.supplier.delete({
                where: { id }
            });

            return NextResponse.json({ message: "Supplier hard deleted", item: deletedSupplier });
        } catch (error) {
            if (error?.code === "P2014") {
                console.warn("⚠️ Hard delete failed due to relation. Falling back to soft delete.");

                const softDeletedSupplier = await db.supplier.update({
                    where: { id },
                    data: {
                        isActive: false,
                        deletedAt: new Date()
                    }
                });

                return NextResponse.json({
                    message: "Supplier soft deleted due to relation constraint",
                    item: softDeletedSupplier
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