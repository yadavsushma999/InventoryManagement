import db from "@/lib/db";

export async function checkIfExists(entity, title) {
    entity = entity.toLowerCase();
    title = title.trim();
    console.log("Checking existence for:", entity, `"${title}"`);

    switch (entity) {
        case "category":
            return await db.category.findFirst({
                where: {
                    title: {
                        equals: title,
                        mode: "insensitive",
                    },
                },
            });
        case "unit":
            return await db.unit.findFirst({
                where: {
                    title: {
                        equals: title,
                        mode: "insensitive",
                    },
                },
            });
        case "brand":
            return await db.brand.findFirst({
                where: {
                    title: {
                        equals: title,
                        mode: "insensitive",
                    },
                },
            });
        default:
            return null;
    }
}
