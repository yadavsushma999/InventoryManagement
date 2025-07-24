import { startOfYear, endOfYear, format } from "date-fns";

export function getYearDates() {
    const now = new Date();
    return {
        first: format(startOfYear(now), "yyyy-MM-dd"),
        last: format(endOfYear(now), "yyyy-MM-dd"),
    };
}

export function exportCSV(data, filename = "export.csv") {
    const replacer = (key, value) => (value === null ? "" : value);
    const header = Object.keys(data[0] || {});
    const csv = [
        header.join(","),
        ...data.map((row) =>
            header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(",")
        ),
    ].join("\r\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
