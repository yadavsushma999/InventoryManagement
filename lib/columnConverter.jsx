// lib/columnConverter.js
export function convertToTabulatorColumns(customColumns, module, resourceTitle) {
    const tabCols = [];

    customColumns.forEach((group) => {
        group.fields.forEach((field) => {
            const col = {
                title: field.label ? `${group.header} ${field.label}` : group.header,
                field: field.key,
                headerSort: true,
            };

            if (field.key === "imageUrl" || field.key.toLowerCase().includes("image")) {
                col.formatter = "image";
                col.formatterParams = { height: "50px", width: "50px" };
                col.width = 70;
            }

            if (field.key === "isActive") {
                col.formatter = (cell) => {
                    const val = cell.getValue();
                    return val
                        ? "<span class='text-green-700 font-semibold'>✅ Active</span>"
                        : "<span class='text-red-700 font-semibold'>❌ Inactive</span>";
                };
            }

            if (field.key.includes("createdAt") || field.key.includes("updatedAt")) {
                col.formatter = (cell) => {
                    const val = cell.getValue();
                    return val ? new Date(val).toLocaleDateString() : "N/A";
                };
            }

            if (field.style === "primary") {
                col.cssClass = "font-semibold text-base text-gray-800";
            } else if (field.style === "secondary") {
                col.cssClass = "text-sm text-gray-500";
            }

            tabCols.push(col);
        });
    });

    tabCols.push({
        title: "⚙️ Actions",
        formatter: (cell) => {
            const id = cell.getRow().getData().id;
            return `
        <a href='/dashboard/${module}/${resourceTitle}/update/${id}' class='text-blue-600'>✏️ Edit</a>
        <button onclick="deleteItem('${id}')" class='text-red-600 ml-2'>🗑️ Delete</button>
      `;
        },
        hozAlign: "center",
        headerSort: false,
    });

    return tabCols;
}
