import { getMongoDb } from "@/lib/mongo";

// Map plural path to singular type
const typeMap = {
    items: "item",
    categories: "category",
    suppliers: "supplier",
    warehouse: "warehouse",
    units: "unit",
    brands: "brand",
};

// MongoDB collection names
const collectionMap = {
    item: "Item",
    supplier: "Supplier",
    brand: "Brand",
    category: "Category",
    unit: "Unit",
    warehouse: "Warehouse",
};

// Label builders
const labelBuilder = {
    item: (doc) =>
        `🛒 ${doc.title || "Untitled"}\n🔖 SKU: ${doc.sku || "N/A"}\n📂 Category: ${doc.categoryTitle || "N/A"}`,
    supplier: (doc) =>
        `👤 ${doc.title || "Unknown"}\n📞 Contact: ${doc.contactPerson || "N/A"}`,
    brand: (doc) => `🏷️ Brand: ${doc.title || "Unnamed Brand"}`,
    category: (doc) => `📂 Category: ${doc.title || "Unnamed Category"}`,
    unit: (doc) => `🏷️ Unit: ${doc.title || "Unnamed Unit"}`,
    warehouse: (doc) => `🏢 Warehouse: ${doc.title || "Unnamed Warehouse"}`,
};

export async function GET(request) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q")?.trim() || "";
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const rawType = pathSegments[pathSegments.length - 1];
    const type = typeMap[rawType] || "item";

    if (!q || !collectionMap[type]) {
        return Response.json({ suggestions: [] });
    }

    const db = await getMongoDb();
    const collection = db.collection(collectionMap[type]);

    try {
        let docs = [];

        if (type === "item") {
            docs = await collection
                .aggregate([
                    {
                        $lookup: {
                            from: "Category",
                            localField: "categoryId",
                            foreignField: "_id",
                            as: "category",
                        },
                    },
                    {
                        $unwind: {
                            path: "$category",
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $match: {
                            $or: [
                                { title: { $regex: q, $options: "i" } },
                                { sku: { $regex: q, $options: "i" } },
                                { barcode: { $regex: q, $options: "i" } },
                                { "category.title": { $regex: q, $options: "i" } },
                            ],
                        },
                    },
                    {
                        $project: {
                            title: 1,
                            sku: 1,
                            categoryTitle: "$category.title",
                        },
                    },
                    { $limit: 10 },
                ])
                .toArray();
        } else {
            const query = {
                $or: [{ title: { $regex: q, $options: "i" } }],
            };

            if (type === "supplier") {
                query.$or.push({ contactPerson: { $regex: q, $options: "i" } });
            }

            docs = await collection
                .find(query)
                .project(type === "supplier" ? { title: 1, contactPerson: 1 } : { title: 1 })
                .limit(10)
                .toArray();

        }

        const buildLabel = labelBuilder[type] || ((doc) => doc.title || "Untitled");

        const suggestions = docs.map((doc) => ({
            label: buildLabel(doc),
            value: doc.title,
            fullItem: doc,
        }));

        return Response.json({ suggestions });
    } catch (err) {
        return Response.json({ suggestions: [] }, { status: 500 });
    }
}
