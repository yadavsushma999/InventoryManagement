"use client";
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function DeleteBtn({ id, endpoint }) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter()
    console.log("baseUrl", baseUrl);
    async function handleDelete() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`${baseUrl}/api/${endpoint}?id=${id}`, {
                    method: "DELETE"
                });
                router.refresh()

                Swal.fire({
                    title: "Deleted!",
                    text: `Resource has been deleted sucessfully.`,
                    icon: "success"
                });
            }
        });
    }

    return (
        <button onClick={handleDelete} className="font-medium text-red-600 dark:text-blue-500  flex items-center space-x-1">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
        </button>
    )
}
