import db from "@/lib/db";
import { NextResponse } from "next/server";
import { softDelete, softReactivate } from "@/lib/softCrud";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { getFilters } from "@/lib/filters/getFilters";

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
        const { take, skip, sortBy, sortOrder, search, status, fromDate, toDate } = getFilters(request);

        const where = {};

        // Search filter
        if (search) {
            where.title = {
                contains: search,
                mode: "insensitive",
            };
        }

        // Status filter
        if (status === "active") {
            where.isActive = true;
        } else if (status === "inactive") {
            where.isActive = false;
        }

        // Date filter
        if (fromDate && toDate) {
            where.createdAt = {
                gte: new Date(fromDate),
                lte: new Date(toDate),
            };
        } else if (fromDate) {
            where.createdAt = {
                gte: new Date(fromDate),
            };
        } else if (toDate) {
            where.createdAt = {
                lte: new Date(toDate),
            };
        }

        const [items, totalCount] = await Promise.all([
            db.supplier.findMany({
                where,
                take,
                skip,
                orderBy: {
                    [sortBy]: sortOrder,
                },
            }),
            db.supplier.count({ where }),
        ]);

        return NextResponse.json({ items, totalCount });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to fetch the Suppliers",
                error,
            },
            { status: 500 }
        );
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