
import { getData } from '@/lib/getData';
import SupplierForm from '@/components/dashboard/SupplierForm';

export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`suppliers/${id}`)
    return (
        <SupplierForm initialData={data} isUpdate={true} />
    )
}


