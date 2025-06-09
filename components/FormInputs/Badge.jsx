import React from "react";

export default function Badge({ children, onClick, className = "" }) {
    return (
        <span
            onClick={onClick}
            className={`inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition-all ${className}`}
        >
            {children}
        </span>
    );
}
