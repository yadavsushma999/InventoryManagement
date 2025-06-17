"use client";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
import Image from 'next/image';
import React, { useEffect } from 'react';
import { generateInitials } from '@/lib/generateInitials';
import { SearchInput } from './SearchInput';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ setShowSidebar }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading User...</p>;
  }

  if (status === 'unauthenticated') {
    return null; // prevent rendering while redirecting
  }

  const username = session?.user?.name?.split(' ')[0] ?? '';
  const initials = generateInitials(session?.user?.name);

  return (
    <div className="bg-gray-100 border-b border-slate-200 px-4 md:px-8 py-2 flex items-center justify-between flex-wrap gap-3">
      {/* Mobile Menu & Search */}
      <div className="flex items-center gap-3 flex-1 md:flex-none">
        <button className="block lg:hidden" onClick={() => setShowSidebar(true)}>
          <AlignJustify className="w-6 h-6" />
        </button>
        <button className="hidden sm:block">
          <History className="w-6 h-6" />
        </button>
        <div className="w-full sm:w-auto">
          <SearchInput />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center flex-wrap justify-end gap-3 sm:gap-4 flex-1 md:flex-none">
        <div className="pr-2 border-r border-gray-300 hidden sm:flex">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-white w-4 h-4" />
          </button>
        </div>

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

        {/* Username Dropdown */}
        <div className="hidden md:flex gap-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center cursor-pointer">
                <span className="text-sm font-medium">{username}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <div
                  onClick={() => signOut()}
                  className="cursor-pointer w-full text-left px-2 py-1.5 hover:bg-gray-100"
                >
                  Logout
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Grid Icon */}
        <button className="hidden md:block">
          <LayoutGridIcon className="w-6 h-6 text-slate-900" />
        </button>

        {/* Profile Picture */}
        <button>
          {session.user?.image ? (
            <Image
              src={session.user.image}
              alt="user-image"
              width={96}
              height={96}
              className="w-8 h-8 rounded-full border border-slate-800"
            />
          ) : (
            <div className="w-8 h-8 rounded-full border border-slate-800 bg-white flex items-center justify-center">
              {initials}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
