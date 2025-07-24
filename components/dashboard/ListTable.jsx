"use client";

import Link from "next/link";
import { Pencil, FileText, Edit } from "lucide-react";
import DeleteBtn from "@/components/dashboard/DeleteBtn";
import { format } from "date-fns";
import React from "react";

export default function ListTable({
  data = [],
  columns = [],
  module,
  resourceTitle,
  currentPage = 1,
  itemsPerPage = 5,
  groupBy = "",
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  showView = false,
  resourceLink = resourceTitle,
}) {
  console.log("data",data);
  if (!data.length) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center border rounded shadow bg-gray-50">
        <FileText className="w-10 h-10 text-gray-400 mb-2" />
        <p className="font-medium">No data found</p>
        <p className="text-sm text-gray-500">
          Try adjusting your filters or add new items.
        </p>
      </div>
    );
  }

  function getValueByPath(obj, path) {
    return path.split(".").reduce((acc, part) => acc?.[part], obj);
  }

  // Group and sort data
  const grouped = groupBy
    ? data.reduce((acc, item) => {
      const key = getValueByPath(item, groupBy) ?? "Undefined";
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    }, {})
    : null;

  const groupedData = grouped
    ? Object.fromEntries(
      Object.entries(grouped)
        .sort(([a], [b]) =>
          sortOrder === "asc" ? a.localeCompare(b) : b.localeCompare(a)
        )
        .map(([groupKey, rows]) => [
          groupKey,
          [...rows].sort((a, b) => {
            const aVal = getValueByPath(a, sortBy);
            const bVal = getValueByPath(b, sortBy);
            return sortOrder === "asc"
              ? String(aVal).localeCompare(String(bVal))
              : String(bVal).localeCompare(String(aVal));
          }),
        ])
    )
    : null;

  return (
    <div className="overflow-x-auto rounded shadow">
      <table className="min-w-full text-md text-left text-gray-700">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">#</th>
            {columns.map((col, idx) => {
              const key = col.fields[0]?.key;
              const isActive = sortBy === key;
              return (
                <th
                  key={idx}
                  className={`px-4 py-2 cursor-pointer select-none ${isActive ? "font-bold" : ""
                    }`}
                  onClick={() => {
                    if (isActive) {
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    } else {
                      setSortBy(key);
                      setSortOrder("asc");
                    }
                  }}
                >
                  {col.header} {isActive && (sortOrder === "asc" ? "🔼" : "🔽")}
                </th>
              );
            })}
            <th className="px-4 py-2">⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {groupBy
            ? Object.entries(groupedData).map(([groupKey, rows]) => (
              <React.Fragment key={groupKey}>
                <tr className="bg-gray-100 font-bold">
                  <td colSpan={columns.length + 2} className="px-4 py-2">
                    📂 {groupKey}
                  </td>
                </tr>
                {rows.map((item, i) => (
                  <Row
                    key={item.id || i}
                    item={item}
                    columns={columns}
                    idx={i}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    module={module}
                    resourceTitle={resourceTitle}
                    showView={showView}
                    resourceLink = {resourceLink}

                  />
                ))}
              </React.Fragment>
            ))
            : [...data]
              .sort((a, b) => {
                const aVal = getValueByPath(a, sortBy);
                const bVal = getValueByPath(b, sortBy);
                return sortOrder === "asc"
                  ? String(aVal).localeCompare(String(bVal))
                  : String(bVal).localeCompare(String(aVal));
              })
              .map((item, i) => (
                <Row
                  key={item.id || i}
                  item={item}
                  columns={columns}
                  idx={i}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  module={module}
                  resourceTitle={resourceTitle}
                  showView={showView}
                  resourceLink={resourceLink}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

function Row({
  item,
  columns,
  idx,
  currentPage,
  itemsPerPage,
  module,
  resourceTitle,
  resourceLink,
  showView = { showView },
}) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        {(currentPage - 1) * itemsPerPage + idx + 1}
      </td>
      {columns.map((col, colIdx) => (
        <td key={colIdx} className="px-4 py-3 space-y-1">
          {col.fields.map((fieldObj) => {
            const val = getNestedValue(item, fieldObj.key);
            const label = fieldObj.label || "";

            if (fieldObj.key === "isActive") {
              return (
                <div key={fieldObj.key}>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${val
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                      }`}
                  >
                    {val ? "✅ Active" : "❌ Inactive"}
                  </span>
                </div>
              );
            }

            if (
              fieldObj.key === "createdAt" ||
              fieldObj.key === "updatedAt"
            ) {
              return (
                <div key={fieldObj.key} className="text-xs text-gray-500">
                  {label} {val ? format(new Date(val), "dd-MM-yyyy") : "N/A"}
                </div>
              );
            }

            if (
              fieldObj.key === "imageUrl" ||
              fieldObj.key.toLowerCase().includes("image")
            ) {
              return val ? (
                <img
                  key={fieldObj.key}
                  src={val}
                  alt={label || "Image"}
                  className="w-16 h-16 object-cover rounded shadow"
                />
              ) : (
                <span
                  key={fieldObj.key}
                  className="text-xs text-gray-400"
                >
                  No Image
                </span>
              );
            }

            return (
              <div
                key={fieldObj.key}
                className={
                  fieldObj.style === "primary"
                    ? "text-base font-semibold text-gray-800"
                    : "text-sm text-gray-500"
                }
              >
                {label} {val}
              </div>
            );
          })}
        </td>
      ))}
      <td className="px-4 py-3 flex gap-2">
        {showView && (
          <Link
            href={`/dashboard/${module}/${resourceLink}/view/${item.id}`}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 rounded-lg shadow-sm transition"
          >
            <FileText className="w-4 h-4" />
            View
          </Link>
        )}

        <Link
          href={`/dashboard/${module}/${resourceLink}/update/${item.id}`}
          className="inline-flex items-center gap-1 px-3 py-1 text-sm text-blue-700 border border-blue-300 bg-blue-100 hover:bg-gray-100 rounded-lg shadow-sm transition"
        >
          <Edit className="w-4 h-4" />
          Edit
        </Link>


        <DeleteBtn
          id={item.id}
          endpoint={resourceLink}
          className="inline-flex items-center gap-1 px-3 py-1 text-sm text-red-700 border border-red-200 bg-red-50 hover:bg-red-100 rounded-lg shadow-sm transition"
        />
      </td>

    </tr>
  );
}
