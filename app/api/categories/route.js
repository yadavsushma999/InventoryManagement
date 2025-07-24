import { NextResponse } from "next/server";
import db from "@/lib/db";
import { softCreate, softDelete, softReactivate } from "@/lib/softCrud";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
 // make sure this points to your NextAuth config

// ✅ CONFIG
const MODEL = "category";
const UNIQUE_FIELD = "title";

/**
 * GET: List only active
 */
export async function GET() {
    try {
        const items = await db[MODEL].findMany({
            where: { isActive: true },
        });
        return NextResponse.json(items);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Failed to list" }, { status: 500 });
    }
}

/**
 * POST: Create or prompt to reactivate
 */
export async function POST(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const body = await request.json();
        const { title, description } = body;

        const result = await softCreate(MODEL, UNIQUE_FIELD, title, { title, description });

        if (result.type === "exists") {
            return NextResponse.json({ message: "Already exists" }, { status: 400 });
        }

        if (result.type === "inactive") {
            return NextResponse.json(
                { message: "Exists but inactive. Reactivate?", existingId: result.existingId },
                { status: 409 }
            );
        }

        // ✅ Audit log
        await db.auditLog.create({
            data: {
                action: "CREATE",
                model: MODEL,
                modelId: result.created.id,
                userId: userId,
                newValue: result.created,
            },
        });

        return NextResponse.json({ message: "Created", item: result.created });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Failed to create", error: err.message }, { status: 500 });
    }
}

/**
 * DELETE: Soft delete by ID
 */
export async function DELETE(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) return NextResponse.json({ message: "ID required" }, { status: 400 });

        const beforeDelete = await db[MODEL].findUnique({ where: { id } });
        const updated = await softDelete(MODEL, id);

        // ✅ Audit log
        await db.auditLog.create({
            data: {
                action: "DELETE",
                model: MODEL,
                modelId: id,
                userId: userId,
                oldValue: beforeDelete,
            },
        });

        return NextResponse.json({ message: "Soft deleted", item: updated });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Failed to delete", error: err.message }, { status: 500 });
    }
}

/**
 * PATCH: Reactivate by ID
 */
export async function PATCH(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const body = await request.json();
        const { id } = body;
        if (!id) return NextResponse.json({ message: "ID required" }, { status: 400 });

        const beforeReactivate = await db[MODEL].findUnique({ where: { id } });
        const updated = await softReactivate(MODEL, id);

        // ✅ Audit log
        await db.auditLog.create({
            data: {
                action: "REACTIVATE",
                model: MODEL,
                modelId: id,
                userId: userId,
                oldValue: beforeReactivate,
                newValue: updated,
            },
        });

        return NextResponse.json({ message: "Reactivated", item: updated });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Failed to reactivate", error: err.message }, { status: 500 });
    }
}
