"use client";

import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";

export default function ListTable({ data, columns }) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto">
            <table className="min-w-max w-full border border-gray-200">
                <thead className="sticky top-0 bg-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, idx) => (
                                <th
                                    key={header.id}
                                    className={`p-2 border ${idx === 0 ? "sticky left-0 bg-gray-100" : ""}`}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell, idx) => (
                                <td
                                    key={cell.id}
                                    className={`p-2 border ${idx === 0 ? "sticky left-0 bg-white" : ""}`}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
