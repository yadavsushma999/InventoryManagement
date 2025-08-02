// /api/suggestions/route.ts
import { getMongoDb } from "@/lib/mongo";

const collectionMap = {
    item: "Item",
    supplier: "Supplier",
    brand: "Brand",
    category: "Category",
};

const labelBuilder = {
    item: (doc) =>
        `🛒 ${doc.title ?? "Untitled"}\n🔖 SKU: ${doc.sku || "N/A"}\n📂 Category: ${doc.categoryTitle || "N/A"}`,
    supplier: (doc) =>
        `👤 ${doc.title ?? "Unknown"}\n📞 Contact: ${doc.contactPerson || "N/A"}`,
    brand: (doc) =>
        `🏷️ Brand: ${doc.title ?? "Unnamed Brand"}`,
    category: (doc) =>
        `📂 Category: ${doc.title ?? "Unnamed Category"}`,
};

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim();
    const type = searchParams.get("type") || "item";

    if (!q || !collectionMap[type]) {
        return Response.json({ suggestions: [] });
    }

    const db = await getMongoDb();
    const collection = db.collection(collectionMap[type]);

    let docs = [];

    if (type === "item") {
        docs = await collection
            .aggregate([
                {
                    $lookup: {
                        from: "Category",
                        localField: "categoryId", // ✅ use categoryId here, it's an ObjectId
                        foreignField: "_id",
                        as: "category",
                    },
                },
                {
                    $unwind: { path: "$category", preserveNullAndEmptyArrays: true },
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
                        categoryTitle: "$category.title", // ✅ this gets passed to frontend
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
            .project({ title: 1, contactPerson: 1 })
            .limit(10)
            .toArray();
    }

    const suggestions = docs.map((doc) => ({
        label: labelBuilder[type](doc),
        value: doc.title,
        fullItem: doc,
    }));

    return Response.json({ suggestions });
}
