import React from 'react'
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Slack, LayoutGrid, LayoutPanelTop, Warehouse, Scale, Diff, Factory } from 'lucide-react';
import Link from 'next/link';


export default function Inventory() {

  const optionCards = [

    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      linkName: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: LayoutGrid
    },
    {
      title: "Categories Items",
      description: "Bundle different items together and sell tem as kits",
      linkName: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: LayoutPanelTop
    },
    {
      title: "Brands",
      description: "Tweak your item prices for specific contacts or transactions",
      linkName: "/dashboard/inventory/brands/new",
      linkTitle: "New Brands",
      enabled: true,
      icon: Slack
    },
    {
      title: "Warehouse",
      description: "Tweak your item prices for specific contacts or transactions",
      linkName: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: Warehouse
    },
    {
      title: "Units",
      description: "Tweak your item prices for specific contacts or transactions",
      linkName: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Scale
    },
    {
      title: "Suppliers",
      description: "Tweak your item prices for specific contacts or transactions",
      linkName: "/dashboard/inventory/suppliers/new",
      linkTitle: "New Supplier",
      enabled: true,
      icon: Factory
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer Stock from the Main Warehouse",
      linkName: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustment",
      enabled: true,
      icon: Diff
    }

  ]
  return (
    <div>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, i) => {
          return (
            <OptionCard optionData={card} key={i} />
          )
        })}
      </div>
    </div>
  )
}
