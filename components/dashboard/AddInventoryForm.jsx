"use client"

import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function AddInventoryForm({ items, warehouses }) {
    const selectOptions = [
        {
            title: "➕ Add",
            id: "add"
        },
        {
            title: "➖ Remove",
            id: "remove"
        }
    ]
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        makeApiRequest(
            setLoading,
            "/api/adjustments/add",
            "POST",
            data,
            "New Adjustment Added Successfully",
            reset
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
        >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                {/* Reference Number */}
                <TextInput
                    label="Reference Number"
                    name="referenceNumber"
                    register={register}
                    errors={errors}

                />

                {/* Adjustment Type: Add / Remove */}
                <SelectInput
                    register={register}
                    name="adjustmentType"
                    label="Adjustment Type"
                    className="w-full"
                    options={selectOptions}
                />

                {/* Item */}
                <SelectInput
                    register={register}
                    name="itemId"
                    label="Select Item"
                    className="w-full"
                    options={items}
                />

                {/* Quantity */}
                <TextInput
                    type="number"
                    label="Quantity"
                    name="quantity"
                    register={register}
                    errors={errors}
                    className="w-full"
                />

                {/* Warehouse */}
                <SelectInput
                    register={register}
                    name="warehouseId"
                    label="Select Warehouse"
                    className="w-full"
                    options={warehouses}
                />

                {/* Notes */}
                <TextareaInput
                    label="Adjustment Notes"
                    name="notes"
                    register={register}
                    errors={errors}
                />
            </div>

            <SubmitButton isLoading={loading} title="Adjustment" />
        </form>
    );
}
