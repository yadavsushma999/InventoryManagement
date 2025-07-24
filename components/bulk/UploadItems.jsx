"use client";

import { useState } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast"; // or "react-hot-toast"
import { Progress } from "@/components/ui/progress"; // from shadcn/ui
import { cn } from "@/lib/utils"; // if using conditional class utils
import { Loader2 } from "lucide-react";


export default function UploadItems() {
    const [previewData, setPreviewData] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [excelFile, setExcelFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setExcelFile(file);

        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet);
        setPreviewData(rows);
    };

    const handleSubmit = async () => {
        if (!excelFile) {
            toast.error("Please upload a file before submitting.");
            return;
        }

        setUploading(true);
        setProgress(0);

        try {
            const form = new FormData();
            form.append("excel", excelFile);

            const uploadToast = toast.loading("Uploading items...");

            const uploadPromise = new Promise(async (resolve, reject) => {
                try {
                    const res = await fetch("/api/items/bulk", {
                        method: "POST",
                        body: form,
                    });

                    const contentType = res.headers.get("content-type") || "";
                    if (!res.ok) {
                        const errorText = await res.text();
                        reject(`Upload failed: ${errorText}`);
                        return;
                    }

                    if (contentType.includes("application/json")) {
                        const json = await res.json();
                        if (json?.createdCount !== undefined) {
                            resolve(`${json.createdCount} items uploaded successfully.`);
                        } else {
                            reject("Unexpected server response.");
                        }
                    } else {
                        const raw = await res.text();
                        reject(`Server returned non-JSON: ${raw}`);
                    }
                } catch (err) {
                    reject(`Upload error: ${err.message}`);
                }
            });

            const progressInterval = setInterval(() => {
                setProgress((prev) => (prev < 95 ? prev + 5 : prev));
            }, 300);

            uploadPromise
                .then((msg) => {
                    clearInterval(progressInterval);
                    setProgress(100);
                    toast.success(msg);
                    setPreviewData([]);
                    setExcelFile(null);
                })
                .catch((errMsg) => {
                    clearInterval(progressInterval);
                    toast.error(errMsg);
                })
                .finally(() => {
                    setUploading(false);
                    setTimeout(() => setProgress(0), 1000);
                    toast.dismiss(uploadToast);
                });

        } catch (err) {
            toast.error(`Upload failed: ${err.message}`);
            setUploading(false);
        }
    };

    const downloadTemplate = () => {
        const worksheet = XLSX.utils.json_to_sheet([
            {
                "Title": "Sample Item",
                "Description": "Sample description",
                "SKU": "ITEMSKU123",
                "Quantity": 10,
                "Category": "Electronics",
                "Brand": "BrandX",
                "Unit": "pcs",
                "Warehouse": "Main Warehouse",
                "Supplier": "Supplier A",
                "Buying Price": 100,
                "Selling Price": 150,
                "ReOrder Point": 5,
                "Location": "Rack A1",
                "Tax Rate": 18,
                "Notes": "Sample note",
                "ImagePath": "sample.jpg"
            }
        ]);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "ItemsTemplate");
        XLSX.writeFile(workbook, "ItemsUploadTemplate.xlsx");
    };

    return (
        <div className="flex justify-center px-4 py-10">
            <div className="w-full max-w-4xl bg-white border rounded-2xl shadow p-8 space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    📥 Bulk Upload Items via Excel
                </h1>

                <div className="flex flex-wrap gap-3">
                    <label className="bg-green-50 hover:bg-green-100 text-green-800 px-4 py-2 rounded-md text-sm cursor-pointer transition border border-green-100">
                        📤 Upload Excel
                        <input
                            type="file"
                            accept=".xlsx"
                            hidden
                            onChange={handleUpload}
                        />
                    </label>

                    <button
                        onClick={downloadTemplate}
                        className="bg-blue-50 hover:bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm transition border border-blue-100"
                    >
                        📄 Download Template
                    </button>
                </div>

                {uploading && (
                    <div className="space-y-2">
                        <p className="text-sm text-gray-600">Uploading... please wait</p>
                        <Progress value={progress} className="w-full h-2" />
                    </div>
                )}

                {previewData.length > 0 && (
                    <>
                        <h2 className="text-lg font-semibold text-gray-700">
                            Preview ({previewData.length} items)
                        </h2>
                        <div className="overflow-x-auto border rounded max-h-96 overflow-y-auto">
                            <table className="min-w-full text-sm border-collapse">
                                <thead className="bg-gray-100 sticky top-0 z-10">
                                    <tr>
                                        {Object.keys(previewData[0]).map((key) => (
                                            <th
                                                key={key}
                                                className="px-2 py-1 border text-left font-medium text-gray-600"
                                            >
                                                {key}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {previewData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50">
                                            {Object.values(item).map((val, j) => (
                                                <td
                                                    key={j}
                                                    className="px-2 py-1 border text-gray-700 whitespace-nowrap"
                                                >
                                                    {val}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={uploading}
                            className={cn(
                                "bg-indigo-50 hover:bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md text-sm transition border border-indigo-100 mt-4 flex items-center justify-center gap-2",
                                uploading && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            {uploading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    ✅ Submit to Server
                                </>
                            )}
                        </button>

                    </>
                )}
            </div>
        </div>
    );
}
