import { MoreVertical } from "lucide-react";
import { useState } from "react";

export default function MobileCard({
    item,
    columns,
    idx,
    currentPage,
    itemsPerPage,
    module,
    resourceTitle,
    resourceLink,
    showView,
}) {
    const [open, setOpen] = useState(false);
    const getValueByPath = (obj, path) =>
        path.split(".").reduce((acc, key) => acc?.[key], obj);

    return (
        <div className="relative bg-white rounded-2xl border px-4 py-5 shadow-sm transition-all hover:shadow-md space-y-4">
            {/* Top bar: Row number and menu */}
            <div className="flex justify-between items-start">
                <span className="text-[10px] text-gray-400">#{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                    </button>
                    {open && (
                        <div className="absolute right-0 z-50 mt-2 w-36 rounded-lg border bg-white shadow-md text-sm overflow-hidden">
                            <ul className="divide-y">
                                {showView && (
                                    <li>
                                        <Link
                                            href={`/dashboard/${module}/${resourceLink}/view/${item.id}`}
                                            className="block px-4 py-2 hover:bg-gray-50"
                                        >
                                            👁 View
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link
                                        href={`/dashboard/${module}/${resourceLink}/update/${item.id}`}
                                        className="block px-4 py-2 hover:bg-gray-50"
                                    >
                                        ✏️ Edit
                                    </Link>
                                </li>
                                <li>
                                    <DeleteBtn
                                        id={item.id}
                                        endpoint={resourceLink}
                                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Card Content */}
            <div className="space-y-4 text-sm">
                {columns.map((col, colIdx) => {
                    const header = col.header;
                    const fields = col.fields;

                    const validFields = fields.filter((f) => getValueByPath(item, f.key) !== undefined);
                    if (validFields.length === 0) return null;

                    // Image handling
                    if (
                        fields.length === 1 &&
                        (fields[0].key.includes("image") || fields[0].key === "imageUrl")
                    ) {
                        const imgUrl = getValueByPath(item, fields[0].key);
                        return (
                            <div key={colIdx}>
                                <div className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
                                    🖼 {header}
                                </div>
                                {imgUrl ? (
                                    <img
                                        src={imgUrl}
                                        alt={header}
                                        className="w-24 h-24 object-cover rounded-md border"
                                    />
                                ) : (
                                    <div className="text-gray-400 italic">No image</div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <div key={colIdx}>
                            {/* Section Header with Icon */}
                            <div className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
                                {col.icon && <span>{col.icon}</span>}
                                {header}
                            </div>

                            {/* Field values */}
                            <div className="space-y-1">
                                {fields.map((field) => {
                                    const value = getValueByPath(item, field.key);
                                    if (value === undefined || value === null) return null;

                                    if (field.key === "isActive") {
                                        return (
                                            <span
                                                key={field.key}
                                                className={`text-xs font-semibold inline-block rounded-full px-2 py-0.5 ${value
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {value ? "Active" : "Inactive"}
                                            </span>
                                        );
                                    }

                                    if (["createdAt", "updatedAt"].includes(field.key)) {
                                        return (
                                            <div key={field.key} className="text-xs text-gray-600">
                                                {format(new Date(value), "dd MMM yyyy")}
                                            </div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={field.key}
                                            className={
                                                field.style === "primary"
                                                    ? "text-sm font-semibold text-gray-900"
                                                    : "text-sm text-gray-700"
                                            }
                                        >
                                            {value}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}