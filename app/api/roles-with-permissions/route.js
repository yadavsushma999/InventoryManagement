import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
    try {
        const roles = await db.role.findMany({
            where: { isActive: true },
            include: {
                permissions: {
                    select: {
                        permissionId: true
                    }
                }
            }
        });

        // Format nicely:
        const formatted = roles.map(role => ({
            id: role.id,
            name: role.name,
            permissions: role.permissions.map(p => ({ permissionId: p.permissionId }))
        }));

        return NextResponse.json(formatted);

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch roles with permissions" }, { status: 500 });
    }
}
