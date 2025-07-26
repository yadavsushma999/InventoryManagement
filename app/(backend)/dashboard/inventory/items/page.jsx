import DataTable from "@/components/dashboard/DataTable";

// Just define the columns — no fetching here.
const columns = [
  {
    header: "🖼️ Image",
    fields: [{ key: "imageUrl", label: "", style: "primary" }],
  },
  {
    header: "🏷️ Title & Qty",
    fields: [
      { key: "title", label: "🏷️", style: "primary" },
      { key: "quantity", label: "🔢", style: "secondary" },
    ],
  },
  {
    header: "🗂️ Category",
    fields: [{ key: "category.title", label: "📂", style: "secondary" }],
  },
  {
    header: "📦 Total Stock",
    fields: [{ key: "quantity", label: "📦", style: "secondary" }],
  },
 
];

export default function ItemsPage() {
  return (
    <div>
      <div className="my-4 p-8">
        <DataTable
          module="inventory"
          resourceTitle="Items"
          resourceLink="items"
          columns={columns}
          itemsPerPage={6}
          enableDateFilter
          showView
        />
      </div>
    </div>
  );
}
