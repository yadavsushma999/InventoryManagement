import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import db from "@/lib/db";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();

        // Check if user exists
        const userExist = await db.user.findUnique({ where: { email } });
        if (userExist) {
            return NextResponse.json(
                { message: "User Already exists", user: null },
                { status: 409 }
            );
        }

        // Find default role
        const defaultRole = await db.role.findUnique({
            where: { name: "admin" },
        });
        if (!defaultRole) {
            return NextResponse.json(
                { message: "Default role not found" },
                { status: 500 }
            );
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                name,
                email,
                hashedPassword,
                roleId: defaultRole.id,
            },
        });

        return NextResponse.json(newUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
