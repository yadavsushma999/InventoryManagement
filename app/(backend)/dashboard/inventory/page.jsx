import React from 'react';
import OptionCard from "@/components/dashboard/OptionCard";
import {
  AddItems,
  Categories,
  Brands,
  warehouse,
  units,
  suppliers,
  newItems,
} from "@/assets/images/images";

export default function Inventory() {
  const optionCards = [
    {
      title: "Items",
      description: "Create and manage standalone products or services that you buy, sell, or store.",
      linkName: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      imageUrl: newItems,
    },
    {
      title: "Categories Items",
      description: "Group similar items under organized categories for easier tracking and filtering.",
      linkName: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      imageUrl: Categories,
    },
    {
      title: "Brands",
      description: "Assign brand names to items to streamline filtering, reporting, and management.",
      linkName: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      imageUrl: Brands,
    },
    {
      title: "Warehouse",
      description: "Add and manage storage locations to track where your inventory is physically kept.",
      linkName: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      imageUrl: warehouse,
    },
    {
      title: "Units",
      description: "Define measurement units (like Kg, Pcs, Box) for consistent quantity tracking.",
      linkName: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      imageUrl: units,
    },
    {
      title: "Suppliers",
      description: "Manage vendors or partners who provide goods and services to your business.",
      linkName: "/dashboard/inventory/suppliers/new",
      linkTitle: "New Supplier",
      enabled: true,
      imageUrl: suppliers,
    },
    {
      title: "Inventory Adjustment",
      description: "Manually adjust item quantities due to stock corrections, transfers, or audits.",
      linkName: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustment",
      enabled: true,
      imageUrl: AddItems,
    },
  ];

  return (
    <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
      {optionCards.map((card, i) => (
        <OptionCard optionData={card} key={i} />
      ))}
    </div>
  );
}
