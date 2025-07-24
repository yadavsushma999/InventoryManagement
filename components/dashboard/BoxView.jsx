"use client";

import { useState } from "react";

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
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* ✅ Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded shadow hover:bg-blue-700 transition"
            >
                🔍 Open Filters
            </button>

            {/* ✅ Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* ✅ Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">🔍 Filter Options</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-800 text-xl font-bold"
                    >
                        &times;
                    </button>
                </div>

                {/* ✅ Filters */}
                <div className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Search
                        </label>
                        <input
                            type="text"
                            placeholder="Type to search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>

                    {enableStatusFilter && (
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">
                                Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="">📊 All Statuses</option>
                                <option value="active">🟢 Active</option>
                                <option value="inactive">🔴 Inactive</option>
                            </select>
                        </div>
                    )}

                    {enableDateFilter && (
                        <>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    From Date
                                </label>
                                <input
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    To Date
                                </label>
                                <input
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                        </>
                    )}

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => {
                                handleReset();
                                setIsOpen(false);
                            }}
                            className="w-full px-4 py-2 border rounded hover:bg-gray-100"
                        >
                            ♻️ Reset
                        </button>

                        <button
                            onClick={handleExport}
                            className="w-full px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 flex items-center justify-center gap-1"
                        >
                            ⬇️ Export CSV
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
