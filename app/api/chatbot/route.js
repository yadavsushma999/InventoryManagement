import { NextResponse } from "next/server";
import db from "@/lib/db"; // Or wherever your DB helper is

export async function POST(req) {
  console.log("here",req);
  const { entity, title } = await req.json();
  const exists = await db[entity].findFirst({ where: { title } });
  return NextResponse.json({ exists: !!exists });
}
