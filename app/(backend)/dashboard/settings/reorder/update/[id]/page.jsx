import ReorderPointForm from '@/components/dashboard/ReorderPoint';
import { getData } from '@/lib/getData';


export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`reorder/${id}`);
    return <ReorderPointForm initialData={data} isUpdate={true} />;
}
