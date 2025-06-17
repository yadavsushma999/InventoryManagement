import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

// ✅ Call NextAuth to create the handler function
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
