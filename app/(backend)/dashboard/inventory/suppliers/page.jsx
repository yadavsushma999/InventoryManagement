import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'
import React from 'react'
export const dynamic = "force-dynamic"

export default async function Suppliers() {

    const columns = [
        {
            header: "📇 Supplier Info",
            fields: [
                { key: "title", label: " ", style: "primary" },
                { key: "supplierCode", label:"Supplier Code: ",style: "secondary" },
                { key: "phone", label: "📞 ", style: "secondary" },
                { key: "email", label: "📧 ", style: "secondary" },
            ],
        },
        {
            header: "🏢 Terms & Condition",
            fields: [
                { key: "taxID", label: "Tax Id: " , style: "secondary" },
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
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable columns={columns} resourceTitle="suppliers" resourceLink="suppliers" module="inventory" />
            </div>
            {/** */}
        </div>
    )
}
