import { BaggageClaim, BarChart4, Cable, ChevronLeft, FilesIcon, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'

export default function Sidebar({ showSidebar, setShowSidebar }) {
    const inventoryLinks = [
        {
            title: "All",
            href: "/dashboard/inventory"
        },
        {
            title: "Bulk Actions",
            href: "/dashboard/inventory/bulk"
        },
        {
            title: "Items",
            href: "/dashboard/inventory/items"
        },
        {
            title: "Categories",
            href: "/dashboard/inventory/categories"
        },
        {
            title: "Brands",
            href: "/dashboard/inventory/brands"
        },
        {
            title: "Units",
            href: "/dashboard/inventory/units"
        },
        {
            title: "Warehouse",
            href: "/dashboard/inventory/warehouse"
        },
        {
            title: "Suppliers",
            href: "/dashboard/inventory/suppliers"
        },
        {
            title: "Inventory Adjustments",
            href: "/dashboard/inventory/adjustments"
        }
    ]

    const settingLinks = [
        {
            title: "Roles",
            href: "/dashboard/settings/roles"
        },
        {
            title: "Add Permission",
            href: "/dashboard/settings/permissions/action"
        },
        {
            title: "Manage Permission",
            href: "/dashboard/settings/permissions/manage"
        },
        {
            title: "Reorder Manage",
            href: "/dashboard/settings/reorder/manage"
        },
    ]

    const salesLinks = [
        {
            title: "Customers",
            href: "#"
        },
        {
            title: "Sales Orders",
            href: "#"
        },
        {
            title: "Packages",
            href: "#"
        },
        {
            title: "Shipments",
            href: "#"
        },
        {
            title: "Invoices",
            href: "#"
        },
        {
            title: "Sales Receipts",
            href: "#"
        },
        {
            title: "Payment Received",
            href: "#"
        },
        {
            title: "Sales Returns",
            href: "#"
        },
        {
            title: "Credit Notes",
            href: "#"
        }
    ]
    return (
        <div className={`
        w-56 min-h-screen bg-slate-800 text-slate-50 flex flex-col justify-between 
        fixed z-50 top-0 left-0 
        ${showSidebar ? 'block' : 'hidden'} 
        lg:block`}>
            {/* Top Part */}
            <div className='flex flex-col'>
                {/* Logo */}

                <div className="flex justify-between bg-slate-950">
                    <Link href="#" className="flex space-x-2 items-center py-3 px-2 w-full">
                        <ShoppingCart />
                        <span className='text-xl font-semibold'> Inventory </span>
                    </Link>
                    <button className='px-6 py-4 lg:hidden' onClick={() => setShowSidebar(false)} >
                        <X className='w-6 h-6 text-white' />
                    </button>
                </div>
                {/* Links */}
                <nav className='flex flex-col gap-3 px-3 py-6'>
                    <Link className="flex items-center space-x-2 
                    bg-blue-600 text-slate-50 p-2 rounded-md"
                        href="/dashboard/home/overview">
                        <Home className='w-4 h-4' />
                        <span>Home</span>
                    </Link>
                    <SidebarDropdownLink
                        items={inventoryLinks}
                        title="Inventory"
                        icon={BaggageClaim}
                        setShowSidebar={setShowSidebar} />

                    <Link className="flex items-center space-x-2 p-2"
                        href="#">
                        <BarChart4 className='w-4 h-4' />
                        <span>Reports</span>
                    </Link>

                    <Link className="flex items-center space-x-2 p-2"
                        href="#">
                        <FilesIcon className='w-4 h-4' />
                        <span>Documents</span>
                    </Link>
                    <SidebarDropdownLink
                        items={settingLinks}
                        title="Settings"
                        icon={ShoppingBasket} />
                </nav>
                <SubscriptionCard />
            </div>

            {/* Bottom Part - Arrow */}
            <button className="flex space-x-2 items-center justify-center bg-slate-950 py-3 px-2">
                <ChevronLeft />
            </button>
        </div>
    )
}
