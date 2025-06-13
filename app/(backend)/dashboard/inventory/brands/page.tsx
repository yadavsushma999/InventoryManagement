import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

// ✅ Tell Next.js this page must be dynamic (always server-rendered)
export const dynamic = "force-dynamic";

export default async function Brands() {
    const brands = await getData("brands") || []; // fallback to empty array
    const columns = ["title", "createdAt", "updatedAt"];
    const activeBrands = Array.isArray(brands)
        ? brands.filter(brand => brand?.isActive !== false)
        : [];

    return (
        <div>
            <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new" />
            <div className="my-4 p-8">
                <DataTable data={activeBrands} columns={columns} resourceTitle="brands" />
            </div>
        </div>
    );
}
