import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request, { params: { id } }) {
    try {
        const supplier = await db.supplier.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(supplier);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to fetch the Supplier"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, { params: { id } }) {
    const { title,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        taxID,
        paymentTerms,
        notes, } = await request.json()
    try {
        const supplier = await db.supplier.update({
            where: {
                id
            },
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
            }
        })
        return NextResponse.json(supplier);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: "Failed to Update the Supplier"
        }, {
            status: 500
        })
    }
}