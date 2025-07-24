"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { generateInitials } from "@/lib/generateInitials";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const { data: session, status } = useSession();
    const initials = generateInitials(session?.user?.name ?? "John Doe");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-slate-800 text-white fixed w-full z-50 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold">
                        <Link href="/" className="hover:text-blue-300 transition">
                            InventoryPro
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="hover:text-blue-300 transition">
                            Features
                        </Link>
                        <Link href="/" className="hover:text-blue-300 transition">
                            Pricing
                        </Link>
                        <Link href="/" className="hover:text-blue-300 transition">
                            Free Tools
                        </Link>

                        {status === "authenticated" ? (
                            <>
                                {/* Dashboard */}
                                <Link
                                    href="/dashboard/home/overview"
                                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
                                >
                                    Dashboard
                                </Link>

                                {/* User Dropdown */}
                                <div className="flex gap-2 items-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className="flex items-center cursor-pointer">
                                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold">
                                                    {initials}
                                                </div>
                                                <ChevronDown className="w-4 h-4 ml-1" />
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-white text-gray-900 mt-2">
                                            <DropdownMenuLabel className="text-gray-700 font-semibold">
                                                {session.user.name}
                                            </DropdownMenuLabel>
                                            <DropdownMenuLabel className="text-xs text-gray-500">
                                                {session.user.email}
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onClick={() => signOut()}
                                                className="cursor-pointer"
                                            >
                                                Logout
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                            >
                                Login
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-700 text-white px-6 pb-4 space-y-2">
                    <Link href="/" className="block hover:text-blue-300">
                        Features
                    </Link>
                    <Link href="/" className="block hover:text-blue-300">
                        Pricing
                    </Link>
                    <Link href="/" className="block hover:text-blue-300">
                        Free Tools
                    </Link>

                    {status === "authenticated" ? (
                        <>
                            <Link
                                href="/dashboard/home/overview"
                                className="block bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded text-center"
                            >
                                Dashboard
                            </Link>

                            <div className="mt-3 space-y-1 text-sm text-left">
                                <div className="text-white font-medium">{session.user.name}</div>
                                <div className="text-gray-300 text-xs">{session.user.email}</div>
                                <button
                                    onClick={() => signOut()}
                                    className="mt-2 bg-red-600 hover:bg-red-700 text-sm px-3 py-1 rounded w-full"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="block mt-2 bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded text-center"
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}
