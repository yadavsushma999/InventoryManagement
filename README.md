# 📦 Inventory Management System

An easy-to-use and responsive **Inventory Management System** built using **Next.js App Router**, **Prisma ORM**, and **Tailwind CSS**. This system helps small to mid-sized businesses efficiently manage their stock, warehouses, and suppliers.

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), React.js, Tailwind CSS
- **Backend:** Node.js (API routes via Next.js)
- **Database:** MongoDB (via Prisma ORM)
- **ORM:** Prisma
- **Deployment:** Vercel

---

## 🌟 Features

✅ Add, update, delete:
- Items / Products
- Categories
- Brands
- Suppliers
- Warehouses

✅ Stock Adjustment:
- Add stock quantities
- Transfer Stock Betwwen Warehouses
- Warehouse-level tracking

✅ User Interface:
- Responsive design with Tailwind CSS

✅ API:
- RESTful APIs using Next.js App Router (`app/api/...`)
- Error handling and proper JSON responses

✅ Form Management:
- Uses `react-hook-form` for easy validation and reset

---
## 🛠️ Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/yadavsushma999/InventoryManagement.git
cd inventory-management-system
```

2. Install dependencies
 ```
   npm install
```

3. Create a .env.local file
```
DATABASE_URL=your_database_connection_url
NEXT_PUBLIC_BASE_URL=http://localhost:3000
UPLOADTHING_TOKEN=uploadthingtoken (for storing Images)
```

4. Generate Prisma Client and migrate DB
```
npx prisma generate
npx prisma migrate 
```
5. Run the development server
```
npm run dev
```

🧪 Usage
Navigate to /items, /categories, /warehouses, etc. to manage records
Use the Add Adjustment page to transfer or add stock.
All forms use dynamic dropdowns from existing categories/suppliers/etc.

🌐 Deployment
This project is easily deployable on Vercel:
Push the project to GitHub
Import it into Vercel
Set environment variables in Vercel:
DATABASE_URL
NEXT_PUBLIC_BASE_URL (optional, set to Vercel app URL)

🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License

📧 Contact
For questions or freelance inquiries, feel free to reach out:

Name: Sushma Yadav
GitHub: https://github.com/yadavsushma999
Email: yadavsushma313@gmail.com







