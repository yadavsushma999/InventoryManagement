"use client";
import dynamic from 'next/dynamic';

// app/(backend)/dashboard/inventory/brands/new/page.tsx
const SupplierForm = dynamic(() => import('@/components/dashboard/SupplierForm'), { ssr: false });

export default function NewSupplier() {
  return <SupplierForm />
}
