"use client";

import React from "react";
import { RotateCw } from "lucide-react";

export default function ResetButton({
    onClick,
    disabled = false,
    title = "Reset",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
        >
            <RotateCw className="w-5 h-5 mr-2" />
            <span>{title}</span>
        </button>
    );
}
