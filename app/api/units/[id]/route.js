import db from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";


const MODEL = "unit";  // ✅ reuse for role, category, etc.
const FIELDS = ["title","abbreviation"];  // ✅ fields allowed for update

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

        // Pick only allowed fields
        const updateData = {};
        for (const field of FIELDS) {
            if (field in data) {
                updateData[field] = data[field];
            }
        }

        // Get before update snapshot
        const oldItem = await db[MODEL].findUnique({ where: { id } });

        const updated = await db[MODEL].update({
            where: { id },
            data: updateData,
        });

        // ✅ Audit log
        await db.auditLog.create({
            data: {
                action: "UPDATE",
                model: MODEL,
                modelId: id,
                userId: userId,
                oldValue: oldItem,
                newValue: updated,
            },
        });

        return NextResponse.json({
            message: `${MODEL} updated`,
            item: updated,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: `Failed to update ${MODEL}`, error: error.message || error },
            { status: 500 }
        );
    }
}
