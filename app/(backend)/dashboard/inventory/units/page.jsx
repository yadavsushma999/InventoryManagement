import DataTable from '@/components/dashboard/DataTable'

export default async function Units() {
    //const columns = ["title","abbreviation","isActive"]
    const columns = [
        {
            header: "🏷️ Title",
            fields: [
                { key: "title",style: "primary" },
                { key: "abbreviation", label: " ", style: "secondary" },
                
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
            {/**Head<Fer */}
            {/**Form */}
            <div className="my-4 p-8">
                <DataTable columns={columns} resourceTitle="units" resourceLink="units" module="inventory"/>
            </div>
            {/** */}
        </div>
    )
}
