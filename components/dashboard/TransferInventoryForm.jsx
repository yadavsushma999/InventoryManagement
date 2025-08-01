"use client"

import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function TransformInventoryForm({items,warehouses}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    async function onSubmit(data) {
        makeApiRequest(setLoading,
            "/api/adjustments/transfer",
            "POST",
            data,
            "New Adjustment Transferred Successfully",
            reset
        )
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white
        border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800
        dark:border-gray-700 mx-auto my-3'>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                <TextInput
                    label="Reference Number"
                    name="referenceNumber"
                    register={register}
                    errors={errors}
                    
                />

                <SelectInput
                    register={register}
                    name="itemId"
                    label="Select the Item"
                    className='w-full'
                    options={Array.isArray(items?.items) ? items.items : []} />

                <TextInput
                    type='number'
                    label="Enter Quantity of Stock to Transfer"
                    name="transferStockQty"
                    register={register}
                    errors={errors}
                    className='w-full'
                />

                <SelectInput
                    register={register}
                    name="givingWarehouseId"
                    label="Select the Warehouse that will give the Stock"
                    className='w-full'
                    options={Array.isArray(warehouses?.items) ? warehouses.items : []} />

                <SelectInput
                    register={register}
                    name="receivingWarehouseId"
                    label="Select the Warehouse that will receive the Stock"
                    className='w-full'
                    options={Array.isArray(warehouses?.items) ? warehouses.items : []} />

                <TextareaInput
                    label="Adjustment Notes"
                    name="notes"
                    register={register}
                    errors={errors} />
            </div>
            <SubmitButton isLoading={loading} title="Adjustment" />
        </form>
    )
}
