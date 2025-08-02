"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Plus, SlidersHorizontal } from "lucide-react";
import ListTable from "@/components/dashboard/ListTable";
import FilterBar from "@/components/dashboard/FilterBar";
import FilterSlideOver from "@/components/dashboard/FilterSildeOver";
import { getYearDates, exportCSV } from "@/lib/helpers";
import { encryptStorage } from "@/lib/storageCrypto";
import { useSearchStore } from '@/lib/searchStore'


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
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [loading, setLoading] = useState(false);

  const { search, setSearch } = useSearchStore();
  const [status, setStatus] = useState("active");
  const [fromDate, setFromDate] = useState(enableDateFilter ? first : "");
  const [toDate, setToDate] = useState(enableDateFilter ? last : "");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("");
  const [groupBy, setGroupBy] = useState("");

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

  useEffect(() => {
    if (showView && data.length > 0) {
      const idsArray = data.map((item) => item.id);
      async function secureStore() {
        try {
          const encrypted = await encryptStorage(idsArray);
          localStorage.setItem("product_ids_ordered", encrypted);
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

  const showingStart = useMemo(
    () => (currentPage - 1) * itemsPerPage + 1,
    [currentPage, itemsPerPage]
  );
  const showingEnd = useMemo(
    () => Math.min(showingStart + itemsPerPage - 1, totalCount),
    [showingStart, itemsPerPage, totalCount]
  );

  const handleReset = () => {
    setSearch("");
    setStatus("active");
    if (enableDateFilter) {
      setFromDate(first);
      setToDate(last);
    }
    setSortBy("createdAt");
    setSortOrder("");
    setCurrentPage(1);
  };

  const handleExport = () => {
    exportCSV(data, `${resourceTitle}_export.csv`);
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;

    if (search.trim() !== "") count++;

    if (enableStatusFilter && status !== "active") count++;

    if (
      enableDateFilter &&
      (fromDate !== first || toDate !== last)
    ) {
      count++;
    }

    // Only count sortBy if it’s not default "createdAt"
    if (sortBy && sortBy !== "createdAt") count++;

    // Optional: count sortOrder if used
    if (sortOrder && sortOrder !== "") count++;

    return count;
  }, [search, status, fromDate, toDate, sortBy, sortOrder, enableStatusFilter, enableDateFilter, first, last]);


  return (
    <div className="relative flex gap-4">
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h1 className="text-xl font-bold capitalize">{resourceTitle} List</h1>
          <div className="flex gap-2">
            {!isHiddenLink && (
              <Link
                href={`/dashboard/${module}/${finalLink}/new`}
                className="inline-flex items-center gap-1 px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                New {resourceTitle}
              </Link>
            )}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="relative p-2 border rounded hover:bg-gray-100"
            >
              <SlidersHorizontal className="w-4 h-4" />
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
          groupBy={groupBy}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />

        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div>
            Showing <strong>{showingStart}</strong>–<strong>{showingEnd}</strong> of{" "}
            <strong>{totalCount}</strong>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1 || loading}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                ⬅️ Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages || loading}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next ➡️
              </button>
            </div>
          )}
        </div>
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
              groupBy={groupBy}
              setGroupBy={setGroupBy}
            />
          </FilterSlideOver>
        </div>
      </div>
    </div>
  );
}
