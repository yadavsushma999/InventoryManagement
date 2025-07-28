"use client";

import {
    Home,
    Boxes,
    FileText,
    BarChart2,
    Settings,
    LogOut,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Package,
    Users,
    Warehouse,
    UserCog,
    ShieldCheck,
    PlusCircle,
    ListChecks,
} from "lucide-react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AuthenticatedUser from "@/components/auth/AuthenticatedUser";


const NavItem = ({ href, icon: Icon, title, isActive, collapsed }) => (
    <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all text-sm font-medium
      ${isActive ? "bg-blue-900 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}
      ${collapsed ? "justify-center" : ""}
    `}
    >
        <Icon size={20} />
        {!collapsed && <span>{title}</span>}
    </Link>
);

export default function Sidebar({ showSidebar, setShowSidebar }) {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({
        inventory: false,
        settings: false,
    });

    const toggleDropdown = (menu) => {
        setOpenDropdowns((prev) => {
            const newState = Object.fromEntries(
                Object.keys(prev).map((key) => [key, key === menu ? !prev[key] : false])
            );
            return newState;
        });
    };

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const updateScreen = () => setIsLargeScreen(mediaQuery.matches);
        updateScreen();
        mediaQuery.addEventListener("change", updateScreen);
        return () => mediaQuery.removeEventListener("change", updateScreen);
    }, []);

    const inventoryLinks = [
        { title: "All", href: "/dashboard/inventory", icon: Boxes },
        { title: "Bulk Actions", href: "/dashboard/inventory/bulk", icon: Package },
        { title: "Items", href: "/dashboard/inventory/items", icon: Package },
        { title: "Categories", href: "/dashboard/inventory/categories", icon: ListChecks },
        { title: "Brands", href: "/dashboard/inventory/brands", icon: Boxes },
        { title: "Units", href: "/dashboard/inventory/units", icon: Boxes },
        { title: "Warehouse", href: "/dashboard/inventory/warehouse", icon: Warehouse },
        { title: "Suppliers", href: "/dashboard/inventory/suppliers", icon: Users },
        { title: "Adjustments", href: "/dashboard/inventory/adjustments", icon: Package },
    ];

    const settingLinks = [
        { title: "Roles", href: "/dashboard/settings/roles", icon: UserCog },
        { title: "Add Permission", href: "/dashboard/settings/permissions/action", icon: PlusCircle },
        { title: "Manage Permission", href: "/dashboard/settings/permissions/manage", icon: ShieldCheck },
        { title: "Reorder Manage", href: "/dashboard/settings/reorder/manage", icon: ListChecks },
    ];

    return (
        <AuthenticatedUser>
            {({ username, initials, session }) => (
                
                <div
                    className={`
    fixed lg:relative top-0 left-0 z-40 h-screen bg-slate-900 text-white
    flex-col transition-all duration-300
    ${isLargeScreen ? (collapsed ? "w-20" : "w-64") : (!collapsed ? "w-64" : "w-20")}
    ${!isLargeScreen && !showSidebar ? "hidden" : "flex"}
   
  `}
                >

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-800">
                        {!collapsed && <h1 className="text-xl font-bold">MyApp</h1>}
                        <button onClick={() => setCollapsed(!collapsed)} className="text-slate-300 hover:text-white">
                            {collapsed ? <ChevronRight /> : <ChevronLeft />}
                        </button>
                    </div>

                    {/* Scrollable Navigation */}
                    <nav className="flex-1 overflow-y-auto px-2 py-4 custom-scroll">
                        {/* Home */}
                        <NavItem
                            title="Home"
                            href="/dashboard/home/overview"
                            icon={Home}
                            isActive={pathname === "/dashboard"}
                            collapsed={collapsed}
                        />

                        {/* Section Divider */}
                        {!collapsed && <p className="px-4 pt-4 text-xs text-slate-500">MANAGE</p>}

                        {/* Inventory */}
                        <div>
                            <button
                                onClick={() => toggleDropdown("inventory")}
                                className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-md transition-all
              ${collapsed ? "justify-center" : ""}
              ${openDropdowns.inventory ? "bg-blue-900 text-white" : "text-slate-300 hover:bg-slate-800"}
            `}
                            >
                                <Boxes size={20} />
                                {!collapsed && (
                                    <>
                                        <span>Inventory</span>
                                        <span className="ml-auto">
                                            {openDropdowns.inventory ? <ChevronUp /> : <ChevronDown />}
                                        </span>
                                    </>
                                )}
                            </button>
                            {openDropdowns.inventory && !collapsed && (
                                <div className="ml-6 mt-1 space-y-1">
                                    {inventoryLinks.map(({ title, href, icon }) => (
                                        <NavItem
                                            key={href}
                                            title={title}
                                            href={href}
                                            icon={icon}
                                            isActive={pathname === href}
                                            collapsed={collapsed}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Documents */}
                        <NavItem
                            title="Documents"
                            href="/dashboard/documents"
                            icon={FileText}
                            isActive={pathname === "/dashboard/documents"}
                            collapsed={collapsed}
                        />

                        {/* Reports */}
                        <NavItem
                            title="Reports"
                            href="/dashboard/reports"
                            icon={BarChart2}
                            isActive={pathname === "/dashboard/reports"}
                            collapsed={collapsed}
                        />

                        {/* Section Divider */}
                        {!collapsed && <p className="px-4 pt-4 text-xs text-slate-500">SYSTEM</p>}

                        {/* Settings */}
                        <div>
                            <button
                                onClick={() => toggleDropdown("settings")}
                                className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-md transition-all
              ${collapsed ? "justify-center" : ""}
              ${openDropdowns.settings ? "bg-blue-900 text-white" : "text-slate-300 hover:bg-slate-800"}
            `}
                            >
                                <Settings size={20} />
                                {!collapsed && (
                                    <>
                                        <span>Settings</span>
                                        <span className="ml-auto">
                                            {openDropdowns.settings ? <ChevronUp /> : <ChevronDown />}
                                        </span>
                                    </>
                                )}
                            </button>
                            {openDropdowns.settings && !collapsed && (
                                <div className="ml-6 mt-1 space-y-1">
                                    {settingLinks.map(({ title, href, icon }) => (
                                        <NavItem
                                            key={href}
                                            title={title}
                                            href={href}
                                            icon={icon}
                                            isActive={pathname === href}
                                            collapsed={collapsed}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Footer */}
                    <div className="border-t border-slate-800 px-4 py-4 flex items-center gap-3">
                        {session?.user?.image ? (
                            <Image
                                src={session?.user?.image}
                                alt="User Avatar"
                                width={32}
                                height={32}
                                className="rounded-full"
                               // onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold text-sm">
                                {initials}
                            </div>
                        )}
                        {!collapsed && (
                            <div className="flex-1">
                                <p className="text-sm font-medium text-white">{username}</p>
                                <p className="text-xs text-slate-400"> {session.user.role.charAt(0).toUpperCase() + session.user.role.slice(1).toLowerCase()?? "User"}</p>
                            </div>
                        )}
                        <LogOut size={20} className="cursor-pointer text-slate-400 hover:text-white" />
                    </div>
                </div>
            )}
        </AuthenticatedUser>
    );
}
