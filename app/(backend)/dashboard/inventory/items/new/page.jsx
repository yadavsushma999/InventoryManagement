import CreateItemForm from '@/components/dashboard/CreateItemForm';
import FormHeader from '@/components/dashboard/FormHeader';
import { getData } from '@/lib/getData';
export const dynamic = "force-dynamic"

export default async function NewItem({ initialData = {}, isUpdate = false }) {
  // Fetch all data in parallel
  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    getData('categories'),
    getData('units'),
    getData('brands'),
    getData('warehouse'),
    getData('suppliers'),
  ]);

  // Only show active records
  const activeCategories = categories.filter(c => c.isActive !== false);
  const activeUnits = units.filter(u => u.isActive !== false);
  const activeBrands = brands.filter(b => b.isActive !== false);
  const activeWarehouses = warehouses.filter(w => w.isActive !== false);
  const activeSuppliers = suppliers.filter(s => s.isActive !== false);

  return (
    <div>
      <FormHeader title={isUpdate ? "Update Item" : "New Item"} href="/dashboard/inventory/items" />

      <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <CreateItemForm
          categories={activeCategories}
          units={activeUnits}
          brands={activeBrands}
          warehouses={activeWarehouses}
          suppliers={activeSuppliers}
          initialData={initialData}
          isUpdate={isUpdate}
        />
      </div>
    </div>
  );
}
