import db from "@/lib/db";

/**
 * Universal soft create: checks unique + reactivate pattern.
 */
export async function softCreate(model, uniqueField, value, data) {
    const existing = await db[model].findUnique({
        where: { [uniqueField]: value },
    });

    if (existing) {
        if (existing.isActive) {
            return { type: "exists" };
        } else {
            return { type: "inactive", existingId: existing.id };
        }
    }

    const created = await db[model].create({ data });
    return { type: "created", created };
}

/**
 * Universal soft delete: sets isActive = false.
 */
export async function softDelete(model, id) {
    console.log("model",model,"id",id);
    return await db[model].update({
        where: { id },
        data: { isActive: false },
    });
}

/**
 * Universal reactivate: sets isActive = true.
 */
export async function softReactivate(model, id) {
    return await db[model].update({
        where: { id },
        data: { isActive: true },
    });
}
