// app/api/check-exists/route.js
import { NextResponse } from "next/server";
import db from "@/lib/db"; // assuming Prisma

export async function POST(req) {
    const { entity, title } = await req.json();
    console.log(entity,title);

    if (!db[entity]) {
        return NextResponse.json({ error: "Invalid entity" }, { status: 400 });
    }

    try {
        const exists = await db[entity].findFirst({
            where: {
                title: {
                    equals: title.toLowerCase(),
                    mode: "insensitive",
                },
            },
        });

        return NextResponse.json({ exists: !!exists });
    } catch (error) {
        console.error("Error checking existence:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
