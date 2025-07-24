"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DateRangePicker({
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    onClose,
}) {
    const [tabIndex, setTabIndex] = useState(0);
    const [localFrom, setLocalFrom] = useState(fromDate);
    const [localTo, setLocalTo] = useState(toDate);

    const years = Array.from({ length: 10 }, (_, i) => 2025 - i);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    function handleConfirm() {
        setFromDate(localFrom);
        setToDate(localTo);
        if (onClose) onClose();
    }

    function handleReset() {
        setLocalFrom("");
        setLocalTo("");
    }

    const options = [
        years.map((y) => y.toString()),
        months.map((m, idx) => (idx + 1).toString().padStart(2, "0")),
        days.map((d) => d.toString().padStart(2, "0")),
    ];

    return (
        <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full">
            <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
                <Tab.List className="flex space-x-2 border-b">
                    {["Year", "Month", "Day"].map((type) => (
                        <Tab
                            key={type}
                            className={({ selected }) =>
                                classNames(
                                    "px-3 py-1 text-sm font-medium",
                                    selected ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                                )
                            }
                        >
                            {type}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {[0, 1, 2].map((idx) => (
                        <Tab.Panel key={idx}>
                            <div className="flex justify-between mt-4">
                                {/* FROM */}
                                <div className="w-1/2 pr-1">
                                    <label className="block mb-1 text-sm text-gray-600">From</label>
                                    <div className="border rounded p-2 h-48 overflow-y-auto space-y-1">
                                        {options[idx].map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => setLocalFrom(opt)}
                                                className={classNames(
                                                    "block w-full text-left px-2 py-1 rounded",
                                                    localFrom === opt ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* TO */}
                                <div className="w-1/2 pl-1">
                                    <label className="block mb-1 text-sm text-gray-600">To</label>
                                    <div className="border rounded p-2 h-48 overflow-y-auto space-y-1">
                                        {options[idx].map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => setLocalTo(opt)}
                                                className={classNames(
                                                    "block w-full text-left px-2 py-1 rounded",
                                                    localTo === opt ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>

            <div className="flex justify-between pt-4 border-t">
                <button
                    onClick={handleReset}
                    className="text-sm text-gray-600 hover:text-gray-800"
                >
                    Reset
                </button>
                <button
                    onClick={handleConfirm}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
