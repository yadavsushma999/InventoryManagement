// app/api/edgestore/route.ts
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
import { initEdgeStore } from '@edgestore/server';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // your NextAuth options file

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
    privateFiles: es.fileBucket(),
});

const handler = createEdgeStoreNextHandler({
    router: edgeStoreRouter,
    getUserId: async (req) => {
        const session = await getServerSession(authOptions);
        return session?.user?.id ?? "anonymous";
    },
});

export { handler as GET, handler as POST };
