import { NextResponse } from "next/server";
import db from "@/lib/db";
import { softCreate, softDelete, softReactivate } from "@/lib/softCrud";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
 // make sure this points to your NextAuth config

// ✅ CONFIG
const MODEL = "itemStock";
const UNIQUE_FIELD = "reorderPoint";

export async function GET() {
    try {
        const items = await db[MODEL].findMany({
            include: {
                item: {
                    select: {
                        id: true,
                        title: true,
                        sku: true,
                        imageUrl: true,
                        isActive: true,
                        category: {
                            select: {
                                title: true
                            }
                        }
                    }
                },
                location: {
                    select: {
                        id: true,
                        name: true,
                        warehouse: {
                            select: {
                                id: true,
                                title: true
                            }
                        }
                    }
                }
            },
        });

        const flattened = items.map(stock => {
            const item = stock.item;
            const location = stock.location;
            const branch = location?.warehouse?.title || location?.name || "Unknown";

            return {
                id: stock.id,
                itemTitle: item?.title ?? "Untitled",
                sku: item?.sku ?? "N/A",
                warehouse: branch,
                quantity: stock.quantity,
                reorderPoint: stock.reorderPoint,
                status: stock.quantity < stock.reorderPoint ? "⚠️ Low Stock" : "✅ Sufficient",
                category: item?.category?.title ?? "Uncategorized",
                isActive: item?.isActive ? "✅ Active" : "❌ Inactive",
                imageUrl: item?.imageUrl?.[0] ?? null,
                createdAt: stock.createdAt,
                updatedAt: stock.updatedAt,
            };
        });

        return NextResponse.json(flattened);
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
        const { name, description } = body;

        const result = await softCreate(MODEL, UNIQUE_FIELD, name, { name, description });

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
