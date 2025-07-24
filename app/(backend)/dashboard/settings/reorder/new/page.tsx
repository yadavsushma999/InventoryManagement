"use client";
import dynamic from 'next/dynamic';

// app/(backend)/dashboard/inventory/brands/new/page.tsx
const ReOrderPoint = dynamic(() => import('@/components/dashboard/ReOrderPoint'), { ssr: false });

export default function NewReOrder() {
  return <ReOrderPoint />
}
