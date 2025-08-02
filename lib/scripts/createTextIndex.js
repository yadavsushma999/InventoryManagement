require("dotenv").config({ path: "../.env" }); // ✅ FIXED path to .env
console.log("Database URL:", process.env.DATABASE_URL); 
const { getMongoDb } = require("../mongo");


async function run() {
    const db = await getMongoDb();
    const collection = db.collection("Item");

    await collection.createIndex(
        {
            title: "text",
            description: "text",
            notes: "text",
            sku: "text",
            barcode: "text",
            location: "text",
            dimensions: "text",
            imageUrl: "text",
            categoryTitle: "text",
            unitTitle: "text",
            brandTitle: "text",
            warehouseTitle: "text",
            supplierTitle: "text"
        },
        {
            name: "ItemGlobalSearchIndex",
            default_language: "english"
        }
    );

    console.log("✅ Global search index created.");
    process.exit(0);
}

run().catch((err) => {
    console.error("❌ Failed to create index:", err);
    process.exit(1);
});
