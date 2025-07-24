"use client";

import { useEffect, useRef } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";

export default function TabulatorTable({ data = [], columns = [], height = "500px" }) {
  const tableRef = useRef(null);

  useEffect(() => {
    if (!tableRef.current) return;

    const flatColumns = columns.flatMap(col =>
      col.fields.map(field => ({
        title: field.label || field.key,
        field: field.key,
        formatter: field.type === "image"
          ? (cell) => {
              const url = cell.getValue();
              return url
                ? `<img src="${url}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;" />`
                : "<span style='color:#999'>No Image</span>";
            }
          : undefined,
        headerSort: true,
        widthShrink: 1,
        minWidth: 120,
        tooltip: true,
      }))
    );

    const table = new Tabulator(tableRef.current, {
      data,
      layout: "fitDataFill",
      columns: flatColumns,
      height,
      responsiveLayout: true,
      placeholder: "No data available",
    });

    return () => {
      table.destroy();
    };
  }, [data, columns, height]);

  return <div ref={tableRef} />;
}
