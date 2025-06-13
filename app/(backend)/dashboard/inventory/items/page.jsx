import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Items() {
    const items = await getData("items");
    const columns = ["imageUrl","title","quantity","category.title","warehouse.title"]
      const activeItems = items.filter(item => item.isActive !== false);
    return (
        <div>
            {/**Head<Fer */}
            <FixedHeader title="Items" newLink="/dashboard/inventory/items/new" />
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable data={activeItems} columns={columns} resourceTitle="items" />
            </div>
            {/** */}
        </div>
    )
}
