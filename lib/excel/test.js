const XLSX = require("xlsx");
const fs = require("fs");

const data = [
  {
    Title: "iPhone 15 Pro",
    Description: "Flagship Apple smartphone",
    SKU: "IPH15PRO",
    Quantity: 50,
    Category: "Mobile & Accessories",
    Brand: "Apple",
    Unit: "pc",
    Warehouse: "Main Warehouse",
    Supplier: "Ratandeep Agency",
    "Buying Price": 110000,
    "Selling Price": 124999,
    "ReOrder Point": 10,
    Location: "Rack A1",
    "Tax Rate": 18,
    Notes: "New release",
    ImagePath: "https://example.com/images/iphone15.jpg",
  },
  {
    Title: "Samsung Galaxy S23",
    Description: "High-end Android phone",
    SKU: "SAMS23",
    Quantity: 80,
    Category: "Mobile & Accessories",
    Brand: "Samsung",
    Unit: "pcs",
    Warehouse: "Main Warehouse",
    Supplier: "Ratandeep Agency",
    "Buying Price": 95000,
    "Selling Price": 105000,
    "ReOrder Point": 15,
    Location: "Rack B2",
    "Tax Rate": 18,
    Notes: "Best seller",
    ImagePath: "https://example.com/images/samsung_s23.jpg",
  },
  {
    Title: "OnePlus 11R",
    Description: "Value flagship OnePlus",
    SKU: "OP11R",
    Quantity: 100,
    Category: "Mobile & Accessories",
    Brand: "OnePlus",
    Unit: "pcs",
    Warehouse: "Main Warehouse",
    Supplier: "Ratandeep Agency",
    "Buying Price": 45000,
    "Selling Price": 49999,
    "ReOrder Point": 20,
    Location: "Rack C3",
    "Tax Rate": 12,
    Notes: "Top reviews",
    ImagePath: "https://example.com/images/oneplus_11r.jpg",
  },
];

const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Items");

XLSX.writeFile(workbook, "bulk_item_upload_with_urls.xlsx");
