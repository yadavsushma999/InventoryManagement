import { getData } from '@/lib/getData';
import BrandForm from '@/components/dashboard/BrandForm';

export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`brands/${id}`);
    return <BrandForm initialData={data} isUpdate={true} />;
}
