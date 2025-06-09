
import { getData } from '@/lib/getData';
import SupplierForm from '@/components/dashboard/SupplierForm';
import NewItem from '../../new/page';

export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`items/${id}`)
    return (
        <NewItem initialData={data} isUpdate={true} />
    )
}
