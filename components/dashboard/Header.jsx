'use client';

import {
  AlignJustify,
  Bell,
  ChevronDown,
  History,
  LayoutGridIcon,
  Plus,
  Settings,
  Users
} from 'lucide-react';
import React from 'react';
import { SearchInput } from './SearchInput';
import Image from 'next/image';

export default function Header({setShowSidebar}) {

  return (
    <div className="bg-gray-100 border-b border-slate-200 px-4 md:px-8 py-2 flex items-center justify-between flex-wrap gap-3">

      {/* Left: Mobile Menu Icon & Search */}
      <div className="flex items-center gap-3 flex-1 md:flex-none">
        {/* Hamburger for mobile */}
        <button className="block lg:hidden" onClick={()=>setShowSidebar(true)}>
          <AlignJustify className="w-6 h-6" />
        </button>

        {/* Recent activities - hide on mobile */}
        <button className="hidden sm:block ">
          <History className="w-6 h-6" />
        </button>

        {/* Search bar (responsive width) */}
        <div className="w-full sm:w-auto">
          <SearchInput />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center flex-wrap justify-end gap-3 sm:gap-4 flex-1 md:flex-none">

        {/* Plus icon */}
        <div className="pr-2 border-r border-gray-300 hidden sm:flex">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-white w-4 h-4" />
          </button>
        </div>

        {/* Icon Group */}
        <div className="flex space-x-2 border-r border-gray-300 hidden sm:flex">
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Users className="w-4 h-4 text-slate-900" />
          </button>
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Bell className="w-4 h-4 text-slate-900" />
          </button>
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Settings className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* Username dropdown */}
        <div className="hidden md:flex gap-2 items-center">
          <button className="flex items-center">
            <span className="text-sm font-medium">Garat</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Grid Icon */}
        <button className="hidden md:block">
          <LayoutGridIcon className="w-6 h-6 text-slate-900" />
        </button>

        {/* Profile Image - Always visible */}
        <button>
          <Image
            src="/user.png"
            alt="user-image"
            width={96}
            height={96}
            className="w-8 h-8 rounded-full border border-slate-800"
          />
        </button>
      </div>
    </div>
  );
}
