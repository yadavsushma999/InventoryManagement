// page.jsx or your permissions matrix page

import PermissionMatrix from "@/components/dashboard/PermissionMatrix";
import { getData } from "@/lib/getData";


export default async function Page() {
    const roles = await getData("roles-with-permissions");
   const permissions = await getData("permissions"); // plain list, same structure we used before

    return (
        <PermissionMatrix roles={roles} permissions={permissions} />
    );
}
