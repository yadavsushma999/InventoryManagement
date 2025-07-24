import { NextResponse } from "next/server";
import db from "@/lib/db";

// This expects: { matrix: { [roleId]: { [permissionId]: true/false } } }
export async function POST(request) {
    try {
        const { matrix } = await request.json();

        // Convert matrix to flat rows
        const updates = [];
        for (const [roleId, perms] of Object.entries(matrix)) {
            // Delete old permissions for this role
            await db.rolePermission.deleteMany({ where: { roleId } });

            // Create new permissions for true ones
            for (const [permissionId, isEnabled] of Object.entries(perms)) {
                if (isEnabled) {
                    updates.push(
                        db.rolePermission.create({
                            data: { roleId, permissionId },
                        })
                    );
                }
            }
        }

        // Run all creates in one transaction
        await db.$transaction(updates);

        return NextResponse.json({ message: "Permissions updated successfully!" });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to update permissions", error: error.message || error },
            { status: 500 }
        );
    }
}
