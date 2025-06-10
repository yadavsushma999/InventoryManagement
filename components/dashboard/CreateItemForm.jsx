"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makeApiRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CreateItemForm({ categories, units, brands,
    warehouses, suppliers, initialData = { data }, isUpdate = false }) {
    const [imageUrl, setImageUrl] = useState(initialData.imageUrl)
    const router = useRouter();
    const redirectTo = "/dashboard/inventory/items";
    const redirectCallback = () => router.replace(redirectTo);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: initialData });

    const [loading, setLoading] = useState();
    async function onSubmit(data) {
        console.log("data", data);
        data.imageUrl = imageUrl

        if (isUpdate) {
            //Update Request
            makeApiRequest(setLoading,
                `api/items/${initialData.id}`,
                "PUT",
                data,
                "Item Updated Successfully",
                reset,
                redirectCallback
            );
        } else {
            makeApiRequest(setLoading,
                "/api/items",
                "POST",
                data,
                "New Items Created Successfully",
                reset
            );
            setImageUrl("")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                    <TextInput
                        label="Item Title"
                        name="title"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <SelectInput
                        register={register}
                        name="categoryId"
                        label="Select the Item Category"
                        className='w-full'
                        options={categories}
                    />
                    <TextInput
                        label="Item SKU"
                        name="sku"
                        register={register}
                        errors={errors}
                        //isRequired = 
                        className='w-full'
                    />
                    <TextInput
                        label="Item Barcode"
                        name="barcode"
                        register={register}
                        errors={errors}
                        //isRequired = "false"
                        className='w-full'
                    />
                    <TextInput
                        label="Item Quantity"
                        name="quantity"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <SelectInput
                        register={register}
                        name="unitId"
                        label="Select the Item Unit"
                        className='w-full'
                        options={units}
                    />
                    <SelectInput
                        register={register}
                        name="brandId"
                        label="Select the Item Brand"
                        className='w-full'
                        options={brands}
                    />
                    <TextInput
                        label="Buying Price"
                        name="buyingPrice"
                        register={register}
                        errors={errors}
                        type="number"
                        className='w-full'
                    />
                    <TextInput
                        label="Selling Price"
                        name="sellingPrice"
                        register={register}
                        errors={errors}
                        type='number'
                        className='w-full'
                    />
                    <SelectInput
                        register={register}
                        name="supplierId"
                        label="Select the Item Supplier"
                        className='w-full'
                        options={suppliers}
                    />
                    <TextInput
                        label="Re-order Point"
                        name="reOrderPoint"
                        register={register}
                        errors={errors}
                        type='number'
                        className='w-full'
                    />
                    <SelectInput
                        register={register}
                        name="warehouseId"
                        label="Select the Item Warehouse"
                        className='w-full'
                        options={warehouses}
                    />
                    <TextInput
                        label="Item Weight in Kgs"
                        name="weight"
                        register={register}
                        errors={errors}
                        type='number'
                        className='w-full'
                    />
                    <TextInput
                        label="Item Dimensions in cm (20 x 30 x 100)"
                        name="dimensions"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <TextInput
                        label="Item Tax Rate in %"
                        name="taxRate"
                        register={register}
                        errors={errors}
                        type='number'
                        className='w-full'
                    />
                    <TextareaInput
                        label="Item Description"
                        name="description"
                        register={register}
                        errors={errors} />

                    <TextareaInput
                        label="Item Notes"
                        name="notes"
                        register={register}
                        errors={errors} />

                    <ImageInput
                        label="Item Image"
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint='imageUploader' />
                </div>
                <SubmitButton isLoading={loading} title={isUpdate ? "Update Item" : "New Item"} />
            </form>
        </div>
    )
}
