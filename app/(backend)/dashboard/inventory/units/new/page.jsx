"use client";
import dynamic from 'next/dynamic';

const UnitForm = dynamic(() => import('@/components/dashboard/UnitForm'), { ssr: false });

export default function NewUnits() {
  return <UnitForm />
}
