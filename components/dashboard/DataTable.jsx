"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Plus, Filter } from "lucide-react";
import ListTable from "@/components/dashboard/ListTable";
import FilterBar from "@/components/dashboard/FilterBar";
import FilterSlideOver from "@/components/dashboard/FilterSildeOver";
import { getYearDates, exportCSV } from "@/lib/helpers";
import { encryptStorage } from "@/lib/storageCrypto" // ✅ your secure encryption helper

export default function DataTable({
  module,
  resourceTitle,
  resourceLink,
  columns = [],
  enableStatusFilter = true,
  enableDateFilter = false,
  showView = false,
  initialData = [],
  initialTotalCount = 0,
  itemsPerPage = 6,
}) {
  const { first, last } = getYearDates();
  const cleanedLink = (resourceLink || "").trim().replace(/\/$/, "");
  const finalLink = cleanedLink.startsWith("adjustments/")
    ? cleanedLink.replace(/\/(add|transfer)$/, "")
    : cleanedLink;

  const isHiddenLink = ["", "reorder", "adjustments/transfer"].includes(cleanedLink);
  const [data, setData] = useState(initialData);
  console.log("DataTable", data);
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("active");
  const [fromDate, setFromDate] = useState(enableDateFilter ? first : "");
  const [toDate, setToDate] = useState(enableDateFilter ? last : "");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        take: itemsPerPage.toString(),
        skip: ((currentPage - 1) * itemsPerPage).toString(),
        search,
        status,
        fromDate,
        toDate,
        sortBy,
        sortOrder,
      });

      const res = await fetch(`/api/${resourceLink}?${params.toString()}`);
      const json = await res.json();

      if (Array.isArray(json)) {
        setData(json);
        setTotalCount(json.length);
      } else {
        setData(json.items ?? []);
        setTotalCount(json.totalCount ?? 0);
      }
    } catch (error) {
      console.error("[DataTable fetch error]", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, search, status, fromDate, toDate, sortBy, sortOrder]);

  /**
   * ✅ Securely store ordered item IDs for Prev/Next navigation
   */
  useEffect(() => {
    if (showView && data.length > 0) {
      const idsArray = data.map((item) => item.id);
      async function secureStore() {
        try {
          const encrypted = await encryptStorage(idsArray);
          localStorage.setItem(`product_ids_ordered`, encrypted);
        } catch (error) {
          console.error("[DataTable] ID encryption failed", error);
        }
      }
      secureStore();
    }
  }, [data, showView, resourceTitle]);

  const totalPages = useMemo(
    () => Math.ceil(totalCount / itemsPerPage),
    [totalCount, itemsPerPage]
  );

  const handleReset = () => {
    setSearch("");
    setStatus("active");
    if (enableDateFilter) {
      setFromDate(first);
      setToDate(last);
    }
    setSortBy("createdAt");
    setSortOrder("desc");
    setCurrentPage(1);
  };

  const handleExport = () => {
    exportCSV(data, `${resourceTitle}_export.csv`);
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (search) count++;
    if (enableStatusFilter && status && status !== "active") count++;
    if (enableDateFilter && (fromDate !== first || toDate !== last)) count++;
    if (sortBy) count++;
    return count;
  }, [search, status, fromDate, toDate, sortBy, enableStatusFilter, enableDateFilter]);

  return (
    <div className="relative flex gap-4">
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h1 className="text-xl font-bold capitalize">{resourceTitle} List</h1>
          <div className="flex gap-2">

            {!isHiddenLink && (
              <Link
                href={`/dashboard/${module}/${finalLink}/new`}
                className="inline-flex items-center gap-1 px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
              >
                <Plus className="w-4 h-4" /> New {resourceTitle}
              </Link>
            )}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="relative p-2 border rounded hover:bg-gray-100"
            >
              <Filter className="w-4 h-4" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <ListTable
          data={data}
          columns={columns}
          module={module}
          resourceTitle={resourceTitle}
          loading={loading}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          showView={showView}
          resourceLink={resourceLink}
        />

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1 || loading}
              className="px-3 py-1 border rounded-full disabled:opacity-50"
            >
              ⬅️ Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages || loading}
              className="px-3 py-1 border rounded-full disabled:opacity-50"
            >
              Next ➡️
            </button>
          </div>
        )}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l transform transition-transform duration-300 ${showFilter ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setShowFilter(false)}>&times;</button>
          </div>
          <FilterSlideOver isOpen={showFilter} onClose={() => setShowFilter(false)}>
            <FilterBar
              search={search}
              setSearch={setSearch}
              status={status}
              setStatus={setStatus}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              enableStatusFilter={enableStatusFilter}
              enableDateFilter={enableDateFilter}
              handleReset={handleReset}
              handleExport={handleExport}
              closeFilter={() => setShowFilter(false)}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              columns={columns}
            />
          </FilterSlideOver>
        </div>
      </div>
    </div>
  );
}
