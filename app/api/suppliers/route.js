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