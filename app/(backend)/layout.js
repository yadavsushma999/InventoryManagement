"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
    <div className="flex w-full min-h-screen">
      {/* Sidebar (always rendered to maintain hook consistency) */}
      <div className="bg-slate-900 text-slate-50">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>

      {/* Main content */}
      <main className="ml-0 lg:ml-60 flex-1 bg-slate-100 relative overflow-x-hidden px-4 md:px-8 py-4">
        {/* Header (always rendered to avoid hook mismatch) */}
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

        {/* Content conditions */}
        {isLoading && <Loader />}
        {isRedirecting && <Loader message="Redirecting to login...."/>}
        {!isLoading && !isRedirecting && children}
      </main>
    </div>
  );
}
