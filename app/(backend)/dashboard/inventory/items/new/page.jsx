import CreateItemForm from '@/components/dashboard/CreateItemForm';
import FormHeader from '@/components/dashboard/FormHeader';
import { getData } from '@/lib/getData';

export const dynamic = "force-dynamic";

export default async function NewItem({ initialData = {}, isUpdate = false }) {
  // Fetch all data in parallel without filtering inactive
  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    getData('categories'),
    getData('units'),
    getData('brands'),
    getData('warehouse'),
    getData('suppliers'),
  ]);
  return (
    <div>
      <FormHeader
        title={isUpdate ? "Update Item" : "New Item"}
        href="/dashboard/inventory/items"
      />

      <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <CreateItemForm
          categories={categories}
          units={units}
          brands={brands}
          suppliers={suppliers}
          warehouses={warehouses.items} // ✅ FIX: use .items here
          initialData={initialData}
          isUpdate={isUpdate}
        />

      </div>
    </div>
  );
}
