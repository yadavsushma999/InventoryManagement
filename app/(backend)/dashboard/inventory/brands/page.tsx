import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

// ✅ Tell Next.js this page must be dynamic (always server-rendered)
export const dynamic = "force-dynamic";

export default async function Brands() {
    // ✅ Safely get brands data
    const brands = await getData("brands") || []; // fallback to empty array

    // ✅ Columns for your table
    const columns = ["title", "createdAt", "updatedAt"];

    // ✅ Filter only active brands safely
    const activeBrands = Array.isArray(brands)
        ? brands.filter(brand => brand?.isActive !== false)
        : [];

    return (
        <div>
            {/* ✅ Fixed header with "New Brand" link */}
            <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new" />

            {/* ✅ Table */}
            <div className="my-4 p-8">
                <DataTable data={activeBrands} columns={columns} resourceTitle="brands" />
            </div>
        </div>
    );
}
