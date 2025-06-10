import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Categories() {
  const categories = await getData("categories");
  const columns =["title", "description"]
  const activeCategories = categories.filter(category => category.isActive !== false);
  return (
    <div>
      {/**Head<Fer */}
      <FixedHeader title="Categories" newLink="/dashboard/inventory/categories/new" />
      {/**Form */}
      <div className="my-4 p-8">
        <DataTable data={activeCategories} columns={columns} resourceTitle="categories" />
      </div>
      {/** */}
    </div>
  )
}
