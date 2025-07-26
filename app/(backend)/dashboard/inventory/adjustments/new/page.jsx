
import AdjustmentForm from '@/components/dashboard/AdjustmentForm'
import { getData } from '@/lib/getData'
export const dynamic = "force-dynamic"

export default async function NewAdjustments() {
  const itemsData = getData("items");
  const warehousesData = getData("warehouse");
  const supplierData = getData("suppliers");
 

  const [items, warehouses, suppliers ]= await Promise.all([itemsData, warehousesData,supplierData]);
   console.log("Items",items);
  return (
    <AdjustmentForm items={items} warehouses={warehouses} suppliers={suppliers} />
  );
}
