"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export default function NewCategory({ initialData = {}, isUpdate = false }) {

    const router = useRouter();
    const redirectTo = "/dashboard/inventory/categories";
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
        console.log("data", data);
        if (isUpdate) {
            //Update Request
            makeApiRequest(setLoading,
                `api/categories/${initialData.id}`,
                "PUT",
                data,
                "Categories Updated Successfully",
                reset,
                redirectCallback
            )
        } else {
            // ✅ CREATE
            setLoading(true);
            const res = await fetch("/api/categories", {
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
                    title: "Category exists but inactive",
                    text: "Do you want to reactivate it instead?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, reactivate",
                });

                if (confirm.isConfirmed) {
                    const reactivateRes = await fetch("/api/categories", {
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
            <FormHeader title={isUpdate ? "Update Categories" : "New Categories"} href="/dashboard/inventory/categories" />
            {/**Form */}
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                        <TextInput
                            label="Category Title"
                            name="title"
                            register={register}
                            errors={errors}
                        />
                        <TextareaInput
                            label="Category Description"
                            name="description"
                            register={register}
                            errors={errors} />
                    </div>
                    <SubmitButton isLoading={loading} title={isUpdate ? "Updated Category" : "New Category"} />
                </form>
            </div>
            {/** */}
        </div>
    )
}
