
import { getData } from '@/lib/getData';
export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`permissions/${id}`)
    return (
        <CreatePermissionForm initialData={data} isUpdate={true} />
    )
}


