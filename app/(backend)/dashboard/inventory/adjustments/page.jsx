
import DataTable from '@/components/dashboard/DataTable'
import React from 'react'

export default async function Adjustments() {

  
  const addColumns = [
    {
      header: "🏷️ Ref No.",
      fields: [
        { key: "referenceNumber", style: "primary" },

      ],
    },
    {
      header: "✅ Stock Qty",
      fields: [
        { key: "addStockQty", label: "", style: "primary" },
      ],
    },
    {
      header: "⏱ Timestamps",
      fields: [
        { key: "createdAt", label: "📅 CreatedAt: ", style: "secondary" },

      ],
    },
  ];

  const transferColumns = [
    {
      header: "🏷️ Ref No.",
      fields: [
        { key: "referenceNumber", style: "primary" },

      ],
    },
    {
      header: "✅ Stock Qty",
      fields: [
        { key: "transferStockQty", label: "", style: "primary" },
      ],
    },
    {
      header: "⏱ Timestamps",
      fields: [
        { key: "createdAt", label: "📅 CreatedAt: ", style: "secondary" },

      ],
    },
  ];

  return (
    <div>
      {/**Head<Fer */}
      {/**Form */}
      <div className="my-4 p-8">
        <DataTable
          columns={addColumns}
          module="inventory"
          resourceTitle="Adjustment Add"
          resourceLink="adjustments/add" />
      </div>
      <div className="my-4 p-8">
        <DataTable
          columns={transferColumns}
          module="inventory"
          resourceTitle="Adjustment Transfer"
          resourceLink="adjustments/transfer" />
      </div>
      {/** */}
    </div>
  )
}
