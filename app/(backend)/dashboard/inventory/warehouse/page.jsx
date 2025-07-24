import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'
export const dynamic = "force-dynamic"

export default async function Warehouse() {
    //const columns = ["title","warehouseType","location","stockQty","isActive"]
      const columns = [
        {
            header: "🏷️ Title",
            fields: [
                { key: "title",style: "primary" },
                { key: "warehouseType", label: "🏬", style: "secondary" },
                
            ],
        },
        {
            header: "🗺️ Location",
            fields: [
                { key: "location", label: " ", style: "primary" },
            ],
        },
         {
            header: "📊 Stock Qty",
            fields: [
                { key: "stockQty", label: " ", style: "primary" },
            ],
        },
        {
            header: "✅ IsActive",
            fields: [
                { key: "isActive", label: " ", style: "primary" },
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
            {/**Head<Fer */}
            <FixedHeader title="Warehouses" newLink="/dashboard/inventory/warehouse/new" />
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable
                columns={columns} 
                resourceTitle="warehouse"
                resourceLink="warehouse"
                module="inventory"/>
            </div>
            {/** */}
        </div>
    )
}
