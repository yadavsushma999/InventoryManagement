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
                { key: "title", label: " ", style: "primary", filter: false },
                { key: "supplierCode", label: "Supplier Code: ", style: "secondary", filter: false },
                { key: "phone", label: "📞 ", style: "secondary", filter: false },
                { key: "email", label: "📧 ", style: "secondary", filter: false },
            ],
        },
        {
            header: "Supplier Name",
            fields: [
                { key: "title", label: "🏷️",style: "secondary", visible: false },
            ],
        },
        {
            header: "Supplier Code",
            fields: [
                { key: "supplierCode",label: "🔢", style: "secondary", visible: false },
            ],
        },
        {
            header: "Phone No",
            fields: [
                { key: "phone",label: "📞 ", style: "secondary", visible: false },
            ],
        },
        {
            header: "Email Id",
            fields: [
                { key: "email", label: "📧 ",style: "secondary", visible: false },
            ],
        },
        {
            header: "Tax Id",
            fields: [
                { key: "taxID",  label: "💰 ",style: "secondary", visible: false },
            ],
        },
        {
            header: "🏢 Terms & Condition",
            fields: [
                { key: "taxID", label: "Tax Id: ", style: "secondary", filter: false },
                { key: "paymentTerms", label: "💰 ", style: "secondary", filter: false },
            ],
        },
        {
            header: "Notes",
            fields: [
                { key: "notes", style: "secondary", filter: false },

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
