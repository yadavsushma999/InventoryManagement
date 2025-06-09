
import { getData } from '@/lib/getData';
import UnitForm from '@/components/dashboard/UnitForm'

export default async function Update({params }) {
    const { id } = params;
    const data = await getData(`units/${id}`)
    return (
        <UnitForm initialData={data} isUpdate={true} />
    )
}
