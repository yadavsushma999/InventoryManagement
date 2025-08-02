import DataTable from "@/components/dashboard/DataTable";

// Just define the columns — no fetching here.
const columns = [
  {
    header: "🖼️ Image",
    fields: [
      {
        key: "imageUrl",
        label: "",
        type: "image", // optional for custom handling
        style: "primary",
        className: "w-20 whitespace-nowrap",
      },
    ],
  },
  {
    header: "🏷️ Title & Quantity",
    fields: [
      {
        key: "title",
        label: "🏷️",
        type: "string",
        style: "primary",
        className: "w-40 whitespace-nowrap",
      },
      {
        key: "quantity",
        label: "🔢",
        type: "number",
        style: "secondary",
        className: "w-20 text-center whitespace-nowrap",
      },
    ],
  },
  {
    header: "🗂️ Category",
    fields: [
      {
        key: "category.title",
        label: "📂",
        type: "string",
        style: "secondary",
        className: "w-32 whitespace-nowrap",
      },
    ],
  },
  {
    header: "📦 Total Stock",
    fields: [
      {
        key: "quantity",
        label: "📦",
        type: "number",
        style: "secondary",
        className: "w-24 text-right whitespace-nowrap",
      },
    ],
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
