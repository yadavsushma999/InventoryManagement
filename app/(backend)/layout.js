"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { EdgeStoreProvider } from "@/lib/edgestore"; // ✅ Make sure the path is correct
import Header from "@/components/dashboard/Header.jsx";
import Sidebar from "@/components/dashboard/Sidebar.jsx";
import Loader from "@/components/dashboard/Loader";
import "../globals.css";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("Sidebare visible?", showSidebar, setShowSidebar);


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
      <div className="flex w-full h-screen overflow-hidden">

        {/* Sidebar */}
        {/* Sidebar */}
        <div className="h-full bg-white shadow-md overflow-y-auto w-64 flex-shrink-0">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>

        {/* Main content */}
        <main
          className={`bg-gray-100 transition-all duration-300 lg:ml-5 px-4 md:px-8 py-4 flex-1 relative overflow-x-hidden
    ${showSidebar ? "ml-20 sm:ml-20" : "ml-0"}
  `}
        >
          <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

          {/* Conditional rendering */}
          {isLoading && <Loader />}
          {isRedirecting && <Loader message="Redirecting to login...." />}
          {!isLoading && !isRedirecting && children}
        </main>
      </div>
    </EdgeStoreProvider >
  );
}
