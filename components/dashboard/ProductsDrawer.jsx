"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";
const Barcode = dynamic(() => import("react-barcode"), { ssr: false });

export default function ProductProfile({ product, onNext, onPrev }) {
    if (!product) return null;
    console.log(product);

    const printRef = useRef(null);

    const handlePrint = () => {
        const printContents = printRef.current.innerHTML;
        const newWindow = window.open("", "_blank", "width=800,height=600");
        newWindow.document.write(`
            <html>
              <head>
                <title>Print Product</title>
                <style>
                  body { font-family: sans-serif; padding: 20px; }
                  img { max-width: 200px; height: auto; }
                  table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                  td { padding: 8px; border-bottom: 1px solid #ccc; }
                  h1 { font-size: 24px; }
                </style>
              </head>
              <body>${printContents}</body>
            </html>
        `);
        newWindow.document.close();
        newWindow.focus();
        newWindow.print();
        newWindow.close();
    };

    const getStockStatus = () => {
        if (product.quantity <= product.reOrderPoint)
            return { text: "Low Stock", color: "bg-red-100 text-red-700" };
        return { text: "In Stock", color: "bg-green-100 text-green-700" };
    };

    const getMargin = () => {
        const buy = product.buyingPrice || 0;
        const sell = product.sellingPrice || 0;
        if (!buy || !sell) return "—";
        const margin = ((sell - buy) / buy) * 100;
        return `${margin.toFixed(2)}%`;
    };

    const stockStatus = getStockStatus();
    console.log("Product Image",product.imageUrl);

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 space-y-10">
            {/* Printable Content */}
            <div ref={printRef}>
                {/* Header: Image + Info + Barcode */}
                <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
                    {/* Image */}
                    <Image
                        src={Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl}
                        width={200}
                        height={200}
                        alt={product.title}
                        className="rounded-xl border shadow-md object-cover"
                    />

                    {/* Info */}
                    <div className="flex-1 space-y-3">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                            {product.title}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {product.notes || "No additional notes provided."}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <Badge active={product.isActive} />
                            <StatusBadge color={stockStatus.color} text={`📦 ${stockStatus.text}`} />
                            <StatusBadge color="bg-yellow-100 text-yellow-800" text={`💰 Margin: ${getMargin()}`} />
                            {product.sku && (
                                <StatusBadge color="bg-blue-100 text-blue-800" text={`🏷️ SKU: ${product.sku}`} />
                            )}
                        </div>
                    </div>

                    {/* Barcode */}
                    <div className="w-[220px] px-2 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
                        <Barcode
                            value={product.barcode || product.sku || "000000"}
                            height={40}
                            width={1}
                            displayValue={false}
                            background="transparent"
                        />
                        <p className="mt-1 text-[10px] text-center text-gray-600 dark:text-gray-300 break-words truncate">
                            {product.barcode || product.sku || "—"}
                        </p>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card title="📊 Stock & Pricing">
                        <InfoLine label="Quantity in Stock" value={product.quantity} />
                        <InfoLine label="Reorder Point" value={product.reOrderPoint} />
                        <InfoLine label="Buying Price" value={`₹${product.buyingPrice}`} />
                        <InfoLine label="Selling Price" value={`₹${product.sellingPrice}`} />
                        <InfoLine label="Tax Rate" value={`${product.taxRate}%`} />
                    </Card>

                    <Card title="🏬 Warehouse">
                        <InfoLine label="Name" value={product.warehouse?.title || "-"} />
                        <InfoLine label="Location" value={product.warehouse?.location || "-"} />
                        <InfoLine label="Type" value={product.warehouse?.warehouseType || "-"} />
                    </Card>

                    <Card title="📂 Category">
                        <InfoLine label="Category" value={product.category?.title || "-"} />
                        <InfoLine label="Description" value={product.category?.description || "-"} />
                    </Card>

                    <Card title="📐 Specifications">
                        <InfoLine label="Weight" value={`${product.weight} kg`} />
                        <InfoLine label="Dimensions" value={product.dimensions || "-"} />
                    </Card>
                </div>

                {/* 🔄 Stock by Branch */}
                {product.stock?.length > 0 && (
                    <Card title="🏪 Stock by Branch">
                        {product.stock.map((entry) => (
                            <InfoLine
                                key={entry.id}
                                label={`${entry.location?.warehouse?.title || entry.location?.name} (${entry.location?.warehouse?.location || "-"})`}
                                value={`${entry.quantity} units`}
                            />
                        ))}
                    </Card>
                )}

                {/* Metadata */}
                <div className="text-sm text-gray-500 dark:text-gray-400 border-t pt-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>🕒 Created: {new Date(product.createdAt).toLocaleString()}</div>
                    <div>🔄 Updated: {new Date(product.updatedAt).toLocaleString()}</div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-300 dark:border-gray-700">
                <div className="space-x-2">
                    {onPrev && (
                        <button
                            onClick={onPrev}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            ⬅️ Previous
                        </button>
                    )}
                    {onNext && (
                        <button
                            onClick={onNext}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            Next ➡️
                        </button>
                    )}
                </div>
                <button
                    onClick={handlePrint}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    🖨️ Print
                </button>
            </div>
        </div>
    );
}

/* --- 🔁 Reusable Components --- */

function Badge({ active }) {
    return (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${active ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
            {active ? "🟢 Active" : "🔴 Inactive"}
        </span>
    );
}

function StatusBadge({ color, text }) {
    return (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${color}`}>
            {text}
        </span>
    );
}

function Card({ title, children }) {
    return (
        <div className="border rounded-xl p-6 bg-white dark:bg-gray-900 shadow-sm dark:border-gray-700 mt-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
                {title}
            </h3>
            {children}
        </div>
    );
}

function InfoLine({ label, value }) {
    return (
        <div className="flex justify-between items-center py-1 text-sm text-gray-700 dark:text-gray-300">
            <span className="text-gray-500 dark:text-gray-400">{label}</span>
            <span className="font-semibold text-right">{value}</span>
        </div>
    );
}
