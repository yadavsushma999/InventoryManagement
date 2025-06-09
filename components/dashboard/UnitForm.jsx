"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

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
            setLoading(true)
            makeApiRequest(setLoading,
                "/api/units",
                "POST",
                data,
                "New Unit Created Successfully",
                reset
            )

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
