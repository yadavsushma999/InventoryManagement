
import { getData } from '@/lib/getData';
import CreateRoleForm from '../../new/page';

export default async function Update({ params }) {
    const { id } = params;
    const data = await getData(`roles/${id}`)
    return (
        <CreateRoleForm initialData={data} isUpdate={true} />
    )
}


