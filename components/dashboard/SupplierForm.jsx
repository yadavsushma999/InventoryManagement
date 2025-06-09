"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function SupplierForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/inventory/suppliers";
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
                `api/suppliers/${initialData.id}`,
                "PUT",
                data,
                "Supplier Updated Successfully",
                reset,
                redirectCallback
            )
        } else {
            makeApiRequest(setLoading,
                "api/suppliers",
                "POST",
                data,
                "New Supplier Created Successfully",
                reset
            )
        }
    }

    return (
        <div>
            {/**Head<Fer */}
            <FormHeader title={isUpdate ? "Update Supplier" : "New Supplier"} href="/dashboard/inventory/suppliers" />
            {/**Form */}
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>

                        <TextInput
                            label="Supplier Name"
                            name="title"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Supplier Phone"
                            name="phone"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Supplier Email"
                            name="email"
                            type="email"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Supplier Address"
                            name="address"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Supplier Contact Person"
                            name="contactPerson"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Supplier Code"
                            name="supplierCode"
                            register={register}
                            errors={errors}
                            className='w-full'
                        />
                        <TextInput
                            label="Supplier TIN"
                            name="taxID"
                            register={register}
                            errors={errors}
                        />
                        <TextareaInput
                            label="Supplier Payment Terms"
                            name="paymentTerms"
                            register={register}
                            errors={errors}
                        />
                        <TextareaInput
                            label="Notes"
                            name="notes"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <SubmitButton isLoading={loading} title={isUpdate ? "Updated Supplier" : "New Supplier"} />
                </form>
            </div>
            {/** */}
        </div>
    )
}
