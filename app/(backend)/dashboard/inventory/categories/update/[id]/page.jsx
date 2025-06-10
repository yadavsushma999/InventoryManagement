
import { getData } from '@/lib/getData';
import CategoryForm from '@/components/dashboard/CategoryForm';

export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`categories/${id}`)
    return (
        <CategoryForm initialData={data} isUpdate={true} />
    )
}


