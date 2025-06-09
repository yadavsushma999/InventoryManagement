"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';


export default function BrandForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/inventory/brands";
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
                `api/brands/${initialData.id}`,
                "PUT",
                data,
                "Brand Updated Successfully",
                reset,
                redirectCallback
            )
        } else {
            makeApiRequest(setLoading,
                "/api/brands",
                "POST",
                data,
                "New Brands Created Successfully",
                reset
            )
        }
    }
    return (
        <div>
            {/**Head<Fer */}
            <FormHeader title={isUpdate ? "Update Brand" : "New Brand"} href="/dashboard/inventory/brands" />
            {/**Form */}
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                        <TextInput
                            label="Brand Title"
                            name="title"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                    </div>
                    <SubmitButton isLoading={loading} title={isUpdate ? "Updated Brand" : "New Brand"} />
                </form>
            </div>
            {/** */}
        </div>
    )
}
