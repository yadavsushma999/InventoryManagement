"use client";
import dynamic from 'next/dynamic';

// app/(backend)/dashboard/inventory/brands/new/page.tsx
const CategoryForm = dynamic(() => import('@/components/dashboard/CategoryForm'), { ssr: false });

export default function NewBrand() {
  return <CategoryForm />
}