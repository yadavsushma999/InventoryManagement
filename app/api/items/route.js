import { NextResponse } from "next/server";
import db from "@/lib/db";
import { softDelete, softReactivate } from "@/lib/softCrud";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { getFilters } from "@/lib/filters/getFilters";
import { createItemWithStockAndWarehouse } from "@/lib/BusinessLogic/createItem";

const MODEL = "item"; // ✅ Corrected

/**
 * POST: Create or reactivate item
 */


export async function POST(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const body = await request.json();
        console.log("body", body);

        const qty = parseInt(body.quantity || "0");
        if (isNaN(qty) || qty < 0) {
            return NextResponse.json(
                { message: "Quantity must be a valid non-negative number" },
                { status: 400 }
            );
        }

        const result = await createItemWithStockAndWarehouse({ body, qty, userId });

        if (result.error) {
            const { status, ...errorData } = result.error;
            return NextResponse.json(errorData, { status });
        }

        return NextResponse.json(result.success);
    } catch (error) {
        console.error("[POST /api/items] Error:", error);
        return NextResponse.json(
            { message: "Failed to create item", error: error.message },
            { status: 500 }
        );
    }
}



/**
 * GET: List items with filtering, sorting, pagination, and status control
 */

export async function GET(request) {
    const { take, skip, sortBy, sortOrder, search, status, fromDate, toDate } = getFilters(request);

    const where = {};

    // Filter by active/inactive status
    if (status === "active") {
        where.isActive = true;
    } else if (status === "inactive") {
        where.isActive = false;
    }

    // Search by title (case-insensitive)
    if (search) {
        where.title = {
            contains: search,
            mode: "insensitive",
        };
    }

    // Filter by createdAt date range
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

    try {
        const [items, totalCount] = await Promise.all([
            db.item.findMany({
                where,
                take,
                skip,
                orderBy:
                    sortBy === "category.title"
                        ? { category: { title: sortOrder } }
                        : { [sortBy || "createdAt"]: sortOrder || "desc" },
                select: {
                    id: true,
                    title: true,
                    quantity: true,
                    imageUrl: true,
                    sellingPrice: true,
                    buyingPrice: true,
                    isActive: true,
                    createdAt: true,
                    category: {
                        select: {
                            title: true,
                        },
                    },
                    stock: {
                        select: {
                            quantity: true,
                            reorderPoint: true,
                            location: {
                                select: {
                                    name: true,
                                    warehouse: {
                                        select: {
                                            title: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            }),
            db.item.count({ where }),
        ]);

        return NextResponse.json({ items, totalCount });
    } catch (error) {
        console.error("[GET /api/items] Error:", error);
        return NextResponse.json(
            {
                message: "Failed to fetch items",
                error: error.message,
            },
            { status: 500 }
        );
    }
}



/**
 * DELETE: Soft delete item by ID
 */
export async function DELETE(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) {
            return NextResponse.json({ message: "ID required" }, { status: 400 });
        }

        const beforeDelete = await db[MODEL].findUnique({ where: { id } });
        const updated = await softDelete(MODEL, id);

        await db.auditLog.create({
            data: {
                action: "DELETE",
                model: MODEL,
                modelId: id,
                userId,
                oldValue: beforeDelete,
            },
        });

        return NextResponse.json({ message: "Soft deleted", item: updated });
    } catch (error) {
        console.error("[DELETE /api/items] Error:", error);
        return NextResponse.json(
            { message: "Failed to delete", error: error.message },
            { status: 500 }
        );
    }
}

/**
 * PATCH: Reactivate item by ID
 */
export async function PATCH(request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id || "unknown";

    try {
        const { id } = await request.json();
        if (!id) {
            return NextResponse.json({ message: "ID required" }, { status: 400 });
        }

        const beforeReactivate = await db[MODEL].findUnique({ where: { id } });
        const updated = await softReactivate(MODEL, id);

        await db.auditLog.create({
            data: {
                action: "REACTIVATE",
                model: MODEL,
                modelId: id,
                userId,
                oldValue: beforeReactivate,
                newValue: updated,
            },
        });

        return NextResponse.json({ message: "Reactivated", item: updated });
    } catch (error) {
        console.error("[PATCH /api/items] Error:", error);
        return NextResponse.json(
            { message: "Failed to reactivate", error: error.message },
            { status: 500 }
        );
    }
}
