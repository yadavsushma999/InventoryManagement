"use client"
import { Building2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import AuthenticatedUser from '../auth/AuthenticatedUser'

export default function HomeNavbar() {
    const pathname = usePathname();
    const navLinks = [
        { title: "Dashboard", href: "/dashboard/home/overview" },
        { title: "Getting Started", href: "/dashboard/home/getting-started" },
        { title: "Recent Updates", href: "/dashboard/home/updates" },
        { title: "Announcements", href: "/dashboard/home/announcements" },
    ];

    return (
        <AuthenticatedUser>
            {({ username, initials, session }) => (
                <div className='w-full md:pb-1 mb-2 md:pt-6 md:pl-6 md:pr-6 md:pb-0 bg-slate-50 border-b border-slate-300'>

                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                            <Building2 />
                        </div>
                        <div className="flex flex-col">
                            <p className='text-slate-700 font-semibold text-sm md:text-base'>Hello, {username}</p>
                            <span className='text-xs md:text-sm text-slate-500'>
                                {session.user.role.charAt(0).toUpperCase() + session.user.role.slice(1).toLowerCase()}</span>
                        </div>
                    </div>

                    <nav className='mt-4 flex flex-wrap gap-4'>
                        {
                            navLinks.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className={`
                                ${pathname === item.href
                                            ? ' border-b-2 border-blue-600 text-blue-600'
                                            : 'text-slate-600 hover:text-blue-600'
                                        }
                                py-2 text-sm md:text-base transition-colors duration-200
                            `}
                                >
                                    {item.title}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            )}
        </AuthenticatedUser>
    )
}
