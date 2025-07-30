import DataTable from '@/components/dashboard/DataTable'
import React from 'react'

// ✅ Tell Next.js this page must be dynamic (always server-rendered)


export default async function Roles() {

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
                <DataTable  columns={columns} module="settings" resourceTitle="roles" resourceLink="roles" itemsPerPage={10} />
            </div>
        </div>
    );
}
