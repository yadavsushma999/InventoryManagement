
import { getData } from '@/lib/getData';
import WarehouseForm from '@/components/dashboard/WarehouseForm';

export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`warehouse/${id}`)
    console.log("data",data);
    return (
        <WarehouseForm initialData={data} isUpdate={true} />
    )
}
