"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

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
            makeApiRequest(setLoading,
                "/api/categories",
                "POST",
                data,
                "New Category Created Successfully",
                reset
            )
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
