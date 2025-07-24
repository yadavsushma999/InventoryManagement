import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";


const MODEL = "itemStock"; // example model
const FIELDS = ["reorderPoint"]; // allowed fields
const INT_FIELDS = ["reorderPoint"]; // fields expected as integ

// ✅ GET single by ID
export async function GET(request, { params }) {
    const { id } = params;

    try {
        const item = await db[MODEL].findUnique({
            where: { id },
        });

        if (!item) {
            return NextResponse.json({ message: "Not found" }, { status: 404 });
        }

        return NextResponse.json(item);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: `Failed to fetch ${MODEL}`, error: error.message || error },
            { status: 500 }
        );
    }
}

// ✅ PUT update by ID + audit log
export async function PUT(request, { params }) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const { id } = params;
        const data = await request.json();

        const updateData = {};

        for (const field of FIELDS) {
            if (field in data) {
                const value = data[field];

                // Cast to integer if in INT_FIELDS
                updateData[field] = INT_FIELDS.includes(field)
                    ? parseInt(value, 10)
                    : value;
            }
        }

        // Get current record before update
        const oldItem = await db[MODEL].findUnique({ where: { id } });

        // Update record
        const updated = await db[MODEL].update({
            where: { id },
            data: updateData,
        });

        // Audit log
        await db.auditLog.create({
            data: {
                action: "UPDATE",
                model: MODEL,
                modelId: id,
                userId,
                oldValue: oldItem,
                newValue: updated,
            },
        });

        return NextResponse.json({
            message: `${MODEL} updated successfully`,
            item: updated,
        });
    } catch (error) {
        console.error("UPDATE ERROR:", error);
        return NextResponse.json(
            { message: `Failed to update ${MODEL}`, error: error.message || error },
            { status: 500 }
        );
    }
}