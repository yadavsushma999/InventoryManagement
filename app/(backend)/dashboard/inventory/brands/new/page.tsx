"use client";
import dynamic from 'next/dynamic';

// app/(backend)/dashboard/inventory/brands/new/page.tsx
const BrandForm = dynamic(() => import('@/components/dashboard/BrandForm'), { ssr: false });

export default function NewBrand() {
  return <BrandForm />
}
