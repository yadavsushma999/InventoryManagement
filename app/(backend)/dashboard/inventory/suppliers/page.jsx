import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'
export const dynamic = "force-dynamic"

export default async function Suppliers() {
    const suppliers = await getData("suppliers");
    //const columns = ["title/phone/email","address","supplierCode","taxID/paymentTerms","notes"]
    const columns = [
        {
            header: "📇 Supplier Info",
            fields: [
                { key: "title",label:" " ,style: "primary" },
                { key: "phone", label: "📞 ", style: "secondary" },
                { key: "email", label: "📧 ", style: "secondary" },
            ],
        },
        {
            header: "🏢 Company",
            fields: [
                { key: "supplierCode", style: "primary" },
                { key: "taxID", label: "💳 ", style: "secondary" },
                { key: "paymentTerms", label: "💰 ", style: "secondary" },
            ],
        },
        {
            header: "Notes",
            fields: [
                { key: "notes", style: "secondary" },
               
            ],
        },
    ];

    return (
        <div>
            {/**Header */}
            <FixedHeader title="Suppliers" newLink="/dashboard/inventory/suppliers/new" />
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable data={suppliers} columns={columns} resourceTitle="suppliers"  resourceLink="suppliers" module="inventory" />
            </div>
            {/** */}
        </div>
    )
}
