
import CreateItemForm from '@/components/dashboard/CreateItemForm'
import FormHeader from '@/components/dashboard/FormHeader'
import { getData } from '@/lib/getData';

export default async function NewItem({initialData={},isUpdate = false}) {
  //Parallel Fetching
  const categoriesData = getData('categories');
  const unitsData = getData('units');
  const brandsData = getData('brands');
  const warehousesData = getData('warehouse');
  const suppliersData = getData('suppliers');

  const [categories, units, brands, warehouses, suppliers] = await
    Promise.all([
      categoriesData,
      unitsData,
      brandsData,
      warehousesData,
      suppliersData
  ]);


  return (
    <div>
      {/**Head<Fer */}
      <FormHeader title={isUpdate?"Update Item":"New Item"} href="/dashboard/inventory/items" />
      {/**Form */}
      <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
      shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <CreateItemForm
          categories={categories}
          units={units}
          brands={brands}
          warehouses={warehouses}
          suppliers={suppliers}
          initialData = {initialData}
          isUpdate = {true} />
      </div>
      {/** */}
    </div>
  )
}
