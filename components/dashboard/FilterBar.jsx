"use client";
import AutoSuggestInput from "@/components/dashboard/AutoSuggestionInput";

export default function FilterBar({
  search,
  setSearch,
  status,
  setStatus,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  enableStatusFilter,
  enableDateFilter,
  handleReset,
  handleExport,
  closeFilter,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  groupBy,
  setGroupBy,
  columns,
  type,
}) {
  const sortOrderOptions = [
    { value: "asc", label: "⬆️ Asc" },
    { value: "desc", label: "⬇️ Desc" },
  ];

  // 🔍 Only include fields with `filter !== false`
  const filterableFields = columns
    .map((col) => ({
      ...col,
      fields: col.fields.filter((field) => field.filter !== false),
    }))
    .filter((col) => col.fields.length > 0);

  return (
    <div className="h-full flex flex-col">
      {/* 🚀 Scrollable Filter Body */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">

        {/* 🔍 Search */}
        <div className="ml-2 mr-1">
          <label className="block mb-1 text-sm font-medium text-gray-700">🔍 Search</label>
          <AutoSuggestInput
            value={search}
            onChange={setSearch}
            apiPath="/api/suggestions"
            placeholder="Type keywords..."
            type = {type}
          />
        </div>

        {/* 📊 Status */}
        {enableStatusFilter && (
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">📊 Status</label>
            <div className="flex flex-wrap gap-2">
              {["", "active", "inactive"].map((option) => (
                <button
                  key={option}
                  onClick={() => setStatus(option)}
                  className={`px-3 py-1 rounded-full text-sm border 
                    ${status === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
                >
                  {option === ""
                    ? "All"
                    : option === "active"
                      ? "🟢 Active"
                      : "🔴 Inactive"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 📅 Date Range */}
        {enableDateFilter && (
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">📅 Date Range</label>
            <div className="flex gap-2">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-200"
              />
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        )}

        {/* ↕️ Sort By */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">↕️ Sort By</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSortBy("")}
              className={`px-3 py-1 rounded-full text-sm border 
                ${sortBy === ""
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
            >
              None
            </button>
            {filterableFields.map((col) => (
              <button
                key={col.header}
                onClick={() => setSortBy(col.fields[0]?.key)}
                className={`px-3 py-1 rounded-full text-sm border 
                  ${sortBy === col.fields[0]?.key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
              >
                {col.header}
              </button>
            ))}
          </div>
        </div>

        {/* 🔃 Sort Order */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">🔃 Sort Order</label>
          <div className="flex flex-wrap gap-2">
            {sortOrderOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSortOrder(option.value)}
                className={`px-3 py-1 rounded-full text-sm border 
                  ${sortOrder === option.value
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* 📂 Group By */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">📂 Group By</label>
          <select
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-200"
          >
            <option value="">None</option>
            {filterableFields.map((col) => (
              <option key={col.header} value={col.fields[0]?.key}>
                {col.header}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🚀 Sticky Actions */}
      <div className="pt-4 mt-4 border-t flex flex-col gap-3 bg-white sticky bottom-0">
        <button
          onClick={() => {
            handleReset();
            closeFilter();
          }}
          className="w-full px-4 py-2 border rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          ♻️ Reset Filters
        </button>
        <button
          onClick={handleExport}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 font-medium shadow"
        >
          ⬇️ Export CSV
        </button>
      </div>
    </div>
  );
}
