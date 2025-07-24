"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { EdgeStoreProvider } from "@/lib/edgestore"; // ✅ Make sure the path is correct

import Header from "@/components/dashboard/Header.jsx";
import Sidebar from "@/components/dashboard/Sidebar.jsx";
import Loader from "@/components/dashboard/Loader";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  const isLoading = status === "loading";
  const isRedirecting = status === "unauthenticated";

  return (
    <EdgeStoreProvider>
      <div className="flex w-full min-h-screen">
        {/* Sidebar */}
        <div className="bg-slate-900 text-slate-50">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>

        {/* Main content */}
        <main className="ml-0 lg:ml-60 flex-1 bg-slate-100 relative overflow-x-hidden px-4 md:px-8 py-4">
          <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

          {/* Conditional rendering */}
          {isLoading && <Loader />}
          {isRedirecting && <Loader message="Redirecting to login...." />}
          {!isLoading && !isRedirecting && children}
        </main>
      </div>
    </EdgeStoreProvider>
  );
}
