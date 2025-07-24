"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export default function UnitForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/inventory/units";
    const redirectCallback = () => router.replace(redirectTo);
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
            setLoading(true)
            makeApiRequest(setLoading,
                `api/units/${initialData.id}`,
                "PUT",
                data,
                "Unit Updated Successfully",
                reset,
                redirectCallback
            )

        } else {
                    // ✅ CREATE
                    setLoading(true);
                    const res = await fetch("/api/units", {
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
                            title: "Unit exists but inactive",
                            text: "Do you want to reactivate it instead?",
                            icon: "question",
                            showCancelButton: true,
                            confirmButtonText: "Yes, reactivate",
                        });
        
                        if (confirm.isConfirmed) {
                            const reactivateRes = await fetch("/api/units", {
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
            <FormHeader title={isUpdate ? "Update Unit" : "New Unit"} href="/dashboard/inventory/units" />
            {/**Form */}
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
      shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                        <TextInput
                            label="Unit Title"
                            name="title"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Unit Abbreviation"
                            name="abbreviation"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />

                    </div>
                    <SubmitButton isLoading={loading} title={isUpdate ? "Updated Unit" : "New Unit"} />
                </form>
            </div>
            {/** */}
        </div>
    )
}
