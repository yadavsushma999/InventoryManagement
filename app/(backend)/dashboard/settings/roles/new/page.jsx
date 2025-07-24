"use client";

import TextInput from '@/components/FormInputs/TextInput';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { makeApiRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function CreateRoleForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/settings/roles";
    const redirectCallback = () => router.replace(redirectTo);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: initialData });

    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        if (isUpdate) {
            // ✅ UPDATE
            makeApiRequest(
                setLoading,
                `/api/roles/${initialData.id}`,
                "PUT",
                data,
                "Role updated successfully",
                reset,
                redirectCallback
            );
        } else {
            // ✅ CREATE
            setLoading(true);
            const res = await fetch("/api/roles", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                // Success: normal creation
                reset();
                router.replace(redirectTo);
            } else if (res.status === 409) {
                // Conflict: inactive exists
                const resData = await res.json();
                const confirm = await Swal.fire({
                    title: "Role exists but inactive",
                    text: "Do you want to reactivate it instead?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, reactivate",
                });

                if (confirm.isConfirmed) {
                    const reactivateRes = await fetch("/api/roles", {
                        method: "PATCH",
                        body: JSON.stringify({ id: resData.existingId }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (reactivateRes.ok) {
                        reset();
                        router.replace(redirectTo);
                    } else {
                        Swal.fire("Error", "Failed to reactivate.", "error");
                    }
                }
            } else {
                const errData = await res.json();
                Swal.fire("Error", errData.message || "Failed to create role", "error");
            }

            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput
                    label="Role Name"
                    name="name"
                    register={register}
                    errors={errors}
                    className="w-full"
                />

                <TextareaInput
                    label="Role Description"
                    name="description"
                    register={register}
                    errors={errors}
                    className="sm:col-span-2"
                />

                <SubmitButton
                    isLoading={loading}
                    title={isUpdate ? "Update Role" : "Create Role"}
                />
            </form>
        </div>
    );
}
