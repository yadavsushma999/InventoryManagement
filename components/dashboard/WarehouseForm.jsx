"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { Plus, X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { title } from 'process'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'


export default function WarehouseForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/inventory/warehouse";
    const redirectCallback = () => router.replace(redirectTo);
    const selectOptions = [
        {
            title: "🔵 Main",
            id: "main"
        },
        {
            title: "🔀 Branch",
            id: "branch"
        }
    ]
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialData
    });

    const [loading, setLoading] = useState(false);
    async function onSubmit(data) {
        if (isUpdate) {
            //Update Request
            makeApiRequest(setLoading,
                `api/warehouse/${initialData.id}`,
                "PUT",
                data,
                "Warehouse Updated Successfully",
                reset,
                redirectCallback
            )
        } else {
            // ✅ CREATE
            setLoading(true);
            const res = await fetch("/api/warehouse", {
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
                    title: "Warehouse exists but inactive",
                    text: "Do you want to reactivate it instead?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, reactivate",
                });

                if (confirm.isConfirmed) {
                    const reactivateRes = await fetch("/api/warehouse", {
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
            {/**Head<Fer */}
            <FormHeader title={isUpdate ? "Update Warehouse" : "New Warehouse"} href="/dashboard/inventory/warehouses" />
            {/**Form */}
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
      shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                        <SelectInput register={register}
                            name="warehouseType" label="Select the Warehouse Type"
                            className='w-full'
                            options={selectOptions} />
                        <TextInput
                            label="Warehouse Title"
                            name="title"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Warehouse Location"
                            name="location"
                            register={register}
                            errors={errors}
                        />
                        <TextareaInput
                            label="Warehouse Description"
                            name="description"
                            register={register}
                            errors={errors} />
                    </div>
                    <SubmitButton isLoading={loading} title={isUpdate ? "Updated Warehouse" : "New Warehouse"} />
                </form>
            </div>
            {/** */}
        </div>
    )
}