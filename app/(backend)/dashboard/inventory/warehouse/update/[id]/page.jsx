
import { getData } from '@/lib/getData';
import WarehouseForm from '@/components/dashboard/WarehouseForm';

export default async function Update({ params: { id } }) {
    const data = await getData(`warehouse/${id}`)
    return (
        <WarehouseForm initialData={data} isUpdate={true} />
    )
}
