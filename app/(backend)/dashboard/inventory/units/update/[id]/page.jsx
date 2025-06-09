
import { getData } from '@/lib/getData';
import UnitForm from '@/components/dashboard/UnitForm'

export default async function Update({ params: { id } }) {
    const data = await getData(`units/${id}`)
    return (
        <UnitForm initialData={data} isUpdate={true} />
    )
}
