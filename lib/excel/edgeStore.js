
import { createServerClient } from "@edgestore/server";

export const edgestore = createServerClient({
    accessKey: process.env.EDGE_STORE_ACCESS_KEY,
    secretKey: process.env.EDGE_STORE_SECRET_KEY,
});


