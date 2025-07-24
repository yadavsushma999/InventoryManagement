import { NextResponse } from "next/server";
import { read, utils } from "xlsx";
import path from "path";
import fs from "fs";
import axios from "axios";
import { randomUUID } from "crypto";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { createItemWithStockAndWarehouse } from "@/lib/BusinessLogic/createItem";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function uploadImageToSupabase(sourcePathOrUrl, originalFileName) {
    try {
        let buffer;
        if (sourcePathOrUrl.startsWith("http")) {
            const response = await axios.get(sourcePathOrUrl, { responseType: "arraybuffer" });
            buffer = Buffer.from(response.data);
        } else {
            buffer = fs.readFileSync(sourcePathOrUrl);
        }

        const ext = path.extname(originalFileName) || ".jpg";
        const supabasePath = `products/${randomUUID()}${ext}`;

        const { error } = await supabase.storage
            .from("innvento")
            .upload(supabasePath, buffer, {
                contentType: "image/*",
                upsert: true,
            });

        if (error) {
            console.error("❌ Supabase upload error:", error);
            throw new Error(error.message);
        }

        const { data: { publicUrl } } = supabase.storage.from("innvento").getPublicUrl(supabasePath);
        return publicUrl;
    } catch (err) {
        console.error(`❌ Image upload failed for ${originalFileName}:`, err);
        throw new Error(`Supabase upload failed: ${err.message}`);
    }
}

// Generate unique supplierCode respecting your schema
async function generateUniqueSupplierCode(title) {
    const prefix = "SUP";
    const cleanTitle = title.replace(/\s+/g, "").toUpperCase().slice(0, 3) || "SUP";
    let code;
    let isUnique = false;

    while (!isUnique) {
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        code = `${prefix}-${cleanTitle}-${randomDigits}`;

        const existing = await db.supplier.findUnique({
            where: { supplierCode: code },
            select: { id: true },
        });

        if (!existing) {
            isUnique = true;
        }
    }
    return code;
}

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        const userId = session?.user?.id || "unknown";

        const formData = await req.formData();
        const file = formData.get("excel");

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const workbook = read(buffer);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = utils.sheet_to_json(sheet);

        let createdCount = 0;
        const skipped = [];

        for (const row of rows) {
            try {
                const [category, brand, unit] = await Promise.all([
                    db.category.upsert({
                        where: { title: String(row["Category"] || "").trim() },
                        update: {},
                        create: { title: String(row["Category"] || "").trim() },
                    }),
                    db.brand.upsert({
                        where: { title: String(row["Brand"] || "").trim() },
                        update: {},
                        create: { title: String(row["Brand"] || "").trim() },
                    }),
                    db.unit.upsert({
                        where: { title: String(row["Unit"] || "").trim() },
                        update: {},
                        create: {
                            title: String(row["Unit"] || "").trim(),
                            abbreviation: String(row["Unit"] || "").slice(0, 3) || "pcs",
                        },
                    }),
                ]);

                const warehouse = await db.warehouse.findFirst({
                    where: { title: String(row["Warehouse"] || "").trim() },
                });

                if (!warehouse) {
                    skipped.push({
                        title: String(row["Title"] || "Untitled"),
                        reason: "Warehouse not found",
                    });
                    continue;
                }

                // ✅ Supplier creation if not present
                const supplierTitle = String(row["Supplier"] || "").trim();
                let supplier = await db.supplier.findFirst({
                    where: { title: supplierTitle },
                });

                if (!supplier) {
                    const supplierCode = await generateUniqueSupplierCode(supplierTitle);
                    supplier = await db.supplier.create({
                        data: {
                            title: supplierTitle,
                            supplierCode,
                            isActive: true,
                        },
                    });
                }

                const rawImagePaths = String(row["ImagePath"] || "").trim();
                let imageUrl = [];

                if (rawImagePaths) {
                    const paths = rawImagePaths.split(",").map(p => p.trim()).filter(Boolean);
                    imageUrl = await Promise.all(paths.map(async (p) => {
                        let sourcePath = p.startsWith("http") ? p : path.join(process.cwd(), "uploads/images", p);
                        if (!p.startsWith("http") && !fs.existsSync(sourcePath)) {
                            throw new Error(`Local image not found: ${p}`);
                        }
                        return await uploadImageToSupabase(sourcePath, path.basename(p));
                    }));
                }

                const qty = parseInt(String(row["Quantity"] || "0"), 10) || 0;

                const body = {
                    title: String(row["Title"] || "Untitled"),
                    description: String(row["Description"] || ""),
                    sku: String(row["SKU"] || ""),
                    quantity: qty,
                    categoryId: category.id,
                    brandId: brand.id,
                    unitId: unit.id,
                    warehouseId: warehouse.id,
                    supplierId: supplier.id,
                    buyingPrice: parseFloat(String(row["Buying Price"] || "0")),
                    sellingPrice: parseFloat(String(row["Selling Price"] || "0")),
                    reOrderPoint: parseInt(String(row["ReOrder Point"] || "0"), 10) || 0,
                    location: String(row["Location"] || ""),
                    taxRate: parseFloat(String(row["Tax Rate"] || "0")),
                    notes: String(row["Notes"] || ""),
                    imageUrl,
                };

                const result = await createItemWithStockAndWarehouse({
                    body,
                    qty,
                    userId,
                });

                if (result?.error) {
                    skipped.push({
                        title: body.title,
                        reason: result.error.message,
                    });
                    continue;
                }

                createdCount++;
            } catch (err) {
                console.error("❌ Item insert error:", err);
                skipped.push({
                    title: String(row["Title"] || "Untitled"),
                    reason: err.message || "Unknown error",
                });
            }
        }

        return NextResponse.json({
            createdCount,
            skipped,
            totalRows: rows.length,
            message: `✅ Upload complete: ${createdCount} created, ${skipped.length} skipped.`,
        });
    } catch (err) {
        console.error("❌ POST /api/items/bulk failed:", err);
        return NextResponse.json(
            { error: err.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
