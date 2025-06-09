"use client"
import Header from '@/components/dashboard/Header.jsx';
import Sidebar from '@/components/dashboard/Sidebar.jsx';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex w-full min-h-screen">
      <div className=" bg-slate-900 text-slate-50">
        <Sidebar showSidebar = {showSidebar} setShowSidebar={setShowSidebar}/>
      </div>
      <main className="ml-0 lg:ml-60 flex-1 bg-slate-100 relative overflow-x-hidden px-4 md:px-8 py-4">
        <Header setShowSidebar={setShowSidebar} showSidebar = {showSidebar}/>
        {children}
      </main>
    </div>
  );
}

