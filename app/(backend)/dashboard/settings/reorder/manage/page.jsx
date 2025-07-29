
import DataTable from "@/components/dashboard/DataTable";
import { getData } from "@/lib/getData";

export const dynamic = "force-dynamic";



export default async function ReorderManage() {

    const columns = [
        {
            header: "📦 Item Info",
            fields: [
                { key: "itemTitle", label: "", style: "primary" },
                { key: "sku", label: "SKU", style: "secondary" },
            ],
        },
        {
            header: "🏬 Warehouse",
            fields: [{ key: "warehouse", label: "", style: "secondary" }],
        },
        {
            header: "🔢 Quantity",
            fields: [{ key: "quantity", label: "", style: "secondary" }],
        },
        {
            header: "📉 Reorder Point",
            fields: [{ key: "reorderPoint", label: "", style: "secondary" }],
        },
        {
            header: "🚨 Status",
            fields: [{ key: "status", label: "", style: "secondary" }],
        },
    ];

    return (
        <div>
            
            <div className="my-4 p-8">
                <DataTable
                    //data={data}
                    columns={columns}
                    resourceTitle="Stock Alert"
                    resourceLink="reorder"
                    module="settings"
                />
            </div>
        </div>
    );
}
