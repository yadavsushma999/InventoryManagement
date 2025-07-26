import DataTable from '@/components/dashboard/DataTable'


export default async function Brands() {
    const columns = [
        {
            header: "🏷️ Title",
            fields: [
                { key: "title", style: "primary" },

            ],
        },
        {
            header: "✅ Status",
            fields: [
                { key: "isActive", label: "🟢 Active", style: "primary" },
            ],
        },
        {
            header: "⏱ Timestamps",
            fields: [
                { key: "createdAt", label: "📅 CreatedAt: ", style: "secondary" },
                { key: "updatedAt", label: "🔄 UpdatedAt: ", style: "secondary" },
            ],
        },
    ];

    return (
        <div>

            <div className="my-4 p-8">
                <DataTable
                    columns={columns}
                    resourceTitle="brands"
                    resourceLink="brands"
                    module="inventory"
                    enableDateFilter
                    enableStatusFilter
                    itemsPerPage={10}
                />
            </div>
        </div>
    );
}
