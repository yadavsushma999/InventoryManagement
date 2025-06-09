
"use client";
import dynamic from 'next/dynamic';

// app/(backend)/dashboard/inventory/brands/new/page.tsx
const WarehouseForm = dynamic(() => import('@/components/dashboard/WarehouseForm'), { ssr: false });

export default function NewBrand() {
  return <WarehouseForm />
}
