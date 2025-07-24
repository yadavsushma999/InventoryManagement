import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

// ✅ Tell Next.js this page must be dynamic (always server-rendered)
export const dynamic = "force-dynamic";

export default async function Brands() {
    const brands = await getData("brands") || [];
    const columns = [
        {
            header: "🏷️ Title",
            fields: [
                { key: "title", style: "primary" },

            ],
        },
        {
            header: "✅ Status",
            fields: [
                { key: "isActive", label: "🟢 Active", style: "primary" },
            ],
        },
        {
            header: "⏱ Timestamps",
            fields: [
                { key: "createdAt", label: "📅 CreatedAt: ", style: "secondary" },
                { key: "updatedAt", label: "🔄 UpdatedAt: ", style: "secondary" },
            ],
        },
    ];

    return (
        <div>

            <div className="my-4 p-8">
                <DataTable
                    data={brands}
                    columns={columns}
                    resourceTitle="brands"
                    resourceLink="brands"
                    module="inventory"
                    enableDateFilter
                    enableStatusFilter
                />

            </div>
        </div>
    );
}
