"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { generateInitials } from "@/lib/generateInitials";
import { useState } from "react";
import { Menu } from "lucide-react";

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

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="hover:text-blue-300 transition">Features</Link>
                        <Link href="/" className="hover:text-blue-300 transition">Pricing</Link>
                        <Link href="/" className="hover:text-blue-300 transition">Free Tools</Link>

                        {status === "authenticated" ? (
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold">
                                    {initials}
                                </div>

                                {/* User Info */}
                                <div className="text-sm text-left">
                                    <div className="font-medium">{session.user.name}</div>
                                    <div className="text-gray-300">{session.user.email}</div>
                                </div>

                                {/* Logout Button */}
                                <button
                                    onClick={() => signOut()}
                                    className="bg-red-600 hover:bg-red-700 text-sm px-3 py-1 rounded"
                                >
                                    Logout
                                </button>
                            </div>
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
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-700 text-white px-6 pb-4 space-y-2">
                    <Link href="/" className="block hover:text-blue-300">Features</Link>
                    <Link href="/" className="block hover:text-blue-300">Pricing</Link>
                    <Link href="/" className="block hover:text-blue-300">Free Tools</Link>
                    {status === "authenticated" ? (
                        <>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold">
                                    {initials}
                                </div>
                                <div>
                                    <div className="font-medium">{session.user.name}</div>
                                    <div className="text-sm text-gray-300">{session.user.email}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="mt-2 bg-red-600 hover:bg-red-700 text-sm px-3 py-1 rounded"
                            >
                                Logout
                            </button>
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
