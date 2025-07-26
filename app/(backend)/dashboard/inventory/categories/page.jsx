import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'
export const dynamic = "force-dynamic"

export default async function Categories() {
  const categories = await getData("categories");
  //const columns =["title/description","isActive","createdAt/updatedAt"]
   const columns = [
        {
            header: "🏷️ Title",
            fields: [
                { key: "title",style: "primary" },
                {key: "description", label: "", style: "secondary" },
                
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
      {/**Head<Fer */}

      {/**Form */}
      <div className="my-4 p-8">
        <DataTable data={categories} columns={columns} resourceTitle="categories" module="inventory" resourceLink="categories" />
      </div>
      {/** */}
    </div>
  )
}
