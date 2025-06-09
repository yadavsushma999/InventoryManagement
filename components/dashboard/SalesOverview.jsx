

import React from 'react'
import SalesActivityCard from './SalesActivityCard'

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600"
    },
    {
      title: "To be Shipped",
      number: 10,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600"
    },
    {
      title: "To be Delivered",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600"
    },
    {
      title: "To be Invoiced",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-orange-600"
    }
  ]

  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number: 10,
    },
    {
      title: "Quantity to be received",
      number: 5,
    }
  ]

  return (
    <div className="bg-blue-50 border-b border-slate-300 grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 py-8">
      {/* Sales Activity */}
      <div className="md:col-span-8 border-b md:border-b-0 md:border-r border-slate-300 pb-6 md:pb-0 md:pr-6">
        <h2 className="mb-6 text-xl font-semibold">Sales Activity</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {salesActivity.map((item, i) => {
            return(
          <SalesActivityCard item={item} key={i} />
          )}
        )}
        </div>
      </div>

      {/* Inventory Summary */}
      <div className="md:col-span-4 pt-6 md:pt-0">
        <h2 className="mb-6 text-xl font-semibold">Inventory Summary</h2>
        <div className="space-y-4">
          {inventorySummary.map((item, i) => (
            <div
              key={i}
              className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white py-3 px-4 flex items-center justify-between transition-all duration-300"
            >
              <span className="text-slate-500 uppercase text-sm">
                {item.title}
              </span>
              <span className="text-2xl font-semibold">{item.number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
