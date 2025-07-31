"use client";

import Link from "next/link";
import {
  FileText,
  Edit,
  MoveVertical,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  MoreVertical,
} from "lucide-react";
import DeleteBtn from "@/components/dashboard/DeleteBtn";
import MobileCard from "@/components/dashboard/MobileCard";
import { format } from "date-fns";
import React, { useState } from "react";

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
  const getValueByPath = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);

  const visibleColumns = columns
    .filter((col) => col.fields.some((f) => f.visible !== false))
    .map((col) => ({
      ...col,
      fields: col.fields.filter((f) => f.visible !== false),
    }));

  const groupedData = groupBy
    ? Object.entries(
      data.reduce((acc, item) => {
        const key = getValueByPath(item, groupBy) ?? "Undefined";
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
      }, {})
    )
    : null;

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

  return (
    <>
      {/* Desktop Table View */}
      <div className="w-full overflow-x-auto rounded-lg shadow ring-1 ring-gray-200 bg-gray-50 ">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              {visibleColumns.map((col, idx) => {
                const sortKey = col.fields[0]?.key;
                const isActive = sortBy === sortKey;

                return (
                  <th
                    key={idx}
                    className={`px-4 py-3 cursor-pointer select-none ${isActive ? "font-semibold text-blue-600" : "text-gray-700"
                      }`}
                    onClick={() => {
                      if (isActive) {
                        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                      } else {
                        setSortBy(sortKey);
                        setSortOrder("asc");
                      }
                    }}
                  >
                    <div className="flex items-center gap-1">
                      {col.header}
                      {isActive ? (
                        sortOrder === "asc" ? (
                          <ArrowUpWideNarrow className="w-4 h-4" />
                        ) : (
                          <ArrowDownWideNarrow className="w-4 h-4" />
                        )
                      ) : (
                        <MoveVertical className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </th>
                );
              })}
              <th className="px-4 py-3 text-left">⚙️ Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(groupBy && groupedData ? groupedData.flatMap(([, rows]) => rows) : data).map(
              (item, index) => (
                <TableRow
                  key={item.id || index}
                  item={item}
                  columns={visibleColumns}
                  idx={index}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  module={module}
                  resourceTitle={resourceTitle}
                  showView={showView}
                  resourceLink={resourceLink}
                />
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      {/*<div className="md:hidden space-y-4">
        {data.map((item, index) => (
          <MobileCard
            key={item.id || index}
            item={item}
            columns={visibleColumns}
            idx={index}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            module={module}
            resourceTitle={resourceTitle}
            resourceLink={resourceLink}
            showView={showView}
          />
        ))}
      </div>*/}
    </>
  );
}


function TableRow({
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
  const getValueByPath = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3">{(currentPage - 1) * itemsPerPage + idx + 1}</td>

      {columns.map((col, colIdx) => (
        <td key={colIdx} className="px-4 py-3 space-y-1">
          {col.fields.map((field) => {
            const value = getValueByPath(item, field.key);
            const label = field.label || "";

            if (field.key === "isActive") {
              return (
                <span
                  key={field.key}
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${value
                    ? "text-green-700 bg-green-100"
                    : "text-red-700 bg-red-100"
                    }`}
                >
                  {value ? "✅ Active" : "❌ Inactive"}
                </span>
              );
            }

            if (["createdAt", "updatedAt"].includes(field.key)) {
              return (
                <div key={field.key} className="text-xs text-gray-500">
                  {label} {value ? format(new Date(value), "dd-MM-yyyy") : "N/A"}
                </div>
              );
            }

            if (
              field.key === "imageUrl" ||
              field.key.toLowerCase().includes("image")
            ) {
              const imageSrc = Array.isArray(value) ? value[0] : value; // pick first image if it's an array

              return imageSrc ? (
                <img
                  key={field.key}
                  src={imageSrc}
                  alt={label || "Image"}
                  className="w-16 h-16 object-cover rounded shadow"
                />
              ) : (
                <span key={field.key} className="text-xs text-gray-400">
                  No Image
                </span>
              );
            }

            if (!value) return null;

            return (
              <div
                key={field.key}
                className={`${field.style === "primary"
                  ? "text-base font-semibold text-gray-800"
                  : "text-sm text-gray-600"
                  } ${field.className || ""}`}
              >

                {label} {value}
              </div>
            );
          })}
        </td>
      ))}

      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {showView && (
            <Link
              href={`/dashboard/${module}/${resourceLink}/view/${item.id}`}
              className="inline-flex items-center gap-1 px-3 py-1 text-sm text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 rounded-lg shadow-sm"
            >
              <FileText className="w-4 h-4" />
              View
            </Link>
          )}
          <Link
            href={`/dashboard/${module}/${resourceLink}/update/${item.id}`}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm text-blue-700 border border-blue-300 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-sm"
          >
            <Edit className="w-4 h-4" />
            Edit
          </Link>
          <DeleteBtn
            id={item.id}
            endpoint={resourceLink}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm text-red-700 border border-red-200 bg-red-50 hover:bg-red-100 rounded-lg shadow-sm"
          />
        </div>
      </td>
    </tr>
  );
}
