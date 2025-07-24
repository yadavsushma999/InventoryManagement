/*import db from "@/lib/db";
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
}*/

import { NextResponse } from "next/server";
import db from "@/lib/db";
import { softCreate, softDelete, softReactivate } from "@/lib/softCrud";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { getFilters } from "@/lib/filters/getFilters";
 // make sure this points to your NextAuth config

// ✅ CONFIG
const MODEL = "warehouse";
const UNIQUE_FIELD = "title";

/**
 * GET: List only active
 */

export async function GET(request) {
    const { take, skip, sortBy, sortOrder, search, status } = getFilters(request);

    const where = {};

    if (status === "active") {
        where.isActive = true;
    } else if (status === "inactive") {
        where.isActive = false;
    }

    if (search) {
        where.title = { contains: search, mode: "insensitive" };
    }

    try {
        const [items, totalCount] = await Promise.all([
            db[MODEL].findMany({
                where,
                take,
                skip,
                orderBy: { [sortBy]: sortOrder },
            }),
            db[MODEL].count({ where }),
        ]);

        return NextResponse.json({ items, totalCount });
    } catch (err) {
        console.error(`[GET /api/${MODEL}] Error:`, err);
        return NextResponse.json({ message: "Failed to list", error: err.message }, { status: 500 });
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
        const { title, description, location, warehouseType } = body;

        // ✅ Check for existing warehouse by title
        const existing = await db.warehouse.findFirst({
            where: { title },
        });

        if (existing && existing.isActive) {
            return NextResponse.json({ message: "Warehouse already exists" }, { status: 400 });
        }

        if (existing && !existing.isActive) {
            return NextResponse.json({
                message: "Warehouse exists but inactive. Reactivate?",
                existingId: existing.id
            }, { status: 409 });
        }

        // ✅ Create warehouse and corresponding location in a transaction
        const [warehouse, locationEntry] = await db.$transaction(async (tx) => {
            const warehouse = await tx.warehouse.create({
                data: { title, description, location, warehouseType },
            });

            const locationEntry = await tx.location.create({
                data: {
                    name: warehouse.title,
                    type: "warehouse",
                    warehouseId: warehouse.id, // Optional linking field for easier lookups
                },
            });

            return [warehouse, locationEntry];
        });

        // ✅ Audit log
        await db.auditLog.create({
            data: {
                action: "CREATE",
                model: MODEL,
                modelId: warehouse.id,
                userId: userId,
                newValue: warehouse,
            },
        });

        return NextResponse.json({ message: "Warehouse created with location", warehouse, location: locationEntry });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to create warehouse", error: error.message },
            { status: 500 }
        );
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
