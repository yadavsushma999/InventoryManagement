import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

// ✅ Tell Next.js this page must be dynamic (always server-rendered)
export const dynamic = "force-dynamic";

export default async function Roles() {
    const roles = await getData("roles") || []; // fallback to empty array
    //const columns = ["name", "description"];
    const columns = [
        {
            header: "🏷️ Name",
            fields: [
                { key: "name", style: "primary" },

            ],
        },
        {
            header: "✅ Description",
            fields: [
                { key: "description", label: "", style: "primary" },
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
                <DataTable data={roles} columns={columns} module="settings" resourceTitle="roles" resourceLink="roles" />
            </div>
        </div>
    );
}
