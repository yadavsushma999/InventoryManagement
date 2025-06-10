import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Brands() {
    const brands = await getData("brands");
    const columns = ["title","createdAt","updatedAt"]
    const activeBrands = brands.filter(brand => brand.isActive !== false);


    return (
        <div>
            {/**Head<Fer */}
            <FixedHeader title="Brands" newLink="/dashboard/inventory/brands/new" />
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable data={activeBrands} columns={columns} resourceTitle="brands" />
            </div>
            {/** */}
        </div>
    )
}
