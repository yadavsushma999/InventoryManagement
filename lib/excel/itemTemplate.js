import * as XLSX from "xlsx";

export function downloadItemTemplate() {
    const headers = [
        "Title",
        "SKU",
        "Description",
        "Quantity",
        "Unit",
        "Category",
        "Brand",
        "Warehouse",
        "Supplier",
        "Buying Price",
        "Selling Price",
        "ReOrder Point",
        "Location",
        "ImagePath",
        "Tax Rate",
        "Notes",
    ];

    const sampleRow = [
        "Dettol Soap",
        "DETTOL_SKU_001",
        "Antibacterial hand soap",
        100,
        "Piece",
        "Health",
        "Dettol",
        "Main Warehouse",
        "HUL Supplier",
        15.5,
        25.0,
        20,
        "A1 Shelf",
        5,
        "Bulk added from Excel",
    ];

    const sheet = XLSX.utils.aoa_to_sheet([headers, sampleRow]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet, "ItemTemplate");
    XLSX.writeFile(wb, "bulk_item_template.xlsx");
}
