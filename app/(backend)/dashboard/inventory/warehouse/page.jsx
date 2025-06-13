import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'
export const dynamic = "force-dynamic"

export default async function Warehouse() {
    const warehouses = await getData("warehouse");
    const columns = ["title","warehouseType","location","stockQty"]
    const activeWarehouses = warehouses.filter(warehouse => warehouse.isActive !== false);
    return (
        <div>
            {/**Head<Fer */}
            <FixedHeader title="Warehouses" newLink="/dashboard/inventory/warehouse/new" />
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable data={activeWarehouses} columns={columns} resourceTitle="warehouse" />
            </div>
            {/** */}
        </div>
    )
}
