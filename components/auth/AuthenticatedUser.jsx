"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { generateInitials } from "@/lib/generateInitials";

export default function AuthenticatedUser({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/login");
        }
    }, [status, router]);

    if (status === "loading" || status === "unauthenticated") return null;

    const username = session?.user?.name?.split(" ")[0] || "";
    const initials = generateInitials(session?.user?.name);

    return children({ username, initials, session });
}
