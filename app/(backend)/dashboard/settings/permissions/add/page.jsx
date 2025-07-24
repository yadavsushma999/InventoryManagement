import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

// ✅ Tell Next.js this page must be dynamic (always server-rendered)
export const dynamic = "force-dynamic";

export default async function Permissions() {
    const result = await getData("permissions");
    const permissions = result; // always an array
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
                { key: "description", label: "", style: "secondary" },
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
            <FixedHeader title="Permissions" newLink="/dashboard/settings/permissions/add/new" />
            <div className="my-4 p-8">
                <DataTable
                    data={permissions}
                    columns={columns}
                    module="settings"
                    resourceTitle="permissions"
                    resourceLink="permissions/add"
                    enableStatusFilter={false}  // disable status filter for permissions
                    enableDateFilter={true}
                />
            </div>
        </div>
    );
}

