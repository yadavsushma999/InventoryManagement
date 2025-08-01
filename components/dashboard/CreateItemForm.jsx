"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import ImageInput2 from "../FormInputs/ImageInput2";
import TextInput from "@/components/FormInputs/TextInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makeApiRequest } from "@/lib/apiRequest";

export default function CreateItemForm({
    categories,
    units,
    brands,
    warehouses,
    suppliers,
    initialData = {},
    isUpdate = false,
}) {

    const [imageUrl, setImageUrl] = useState(initialData.imageUrl ?? []);
    const [loading, setLoading] = useState(false);
    const imageInputRef = useRef(null);

    const router = useRouter();
    const redirectTo = "/dashboard/inventory/items";
    const redirectCallback = () => router.replace(redirectTo);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            // Upload images via ref before submit
            if (imageInputRef.current && imageInputRef.current.uploadAll) {
                const uploadedUrls = await imageInputRef.current.uploadAll();
                data.imageUrl = uploadedUrls;
                setImageUrl(uploadedUrls);
            } else {
                data.imageUrl = imageUrl ?? [];
            }

            if (isUpdate) {
                await makeApiRequest(
                    setLoading,
                    `/api/items/${initialData.id}`,
                    "PUT",
                    data,
                    "Item Updated Successfully",
                    reset,
                    redirectCallback
                );
            } else {
                const res = await fetch("/api/items", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (res.ok) {
                    Swal.fire("Success", "Item created successfully!", "success");
                    reset();
                    router.replace(redirectTo);
                } else if (res.status === 409) {
                    const resData = await res.json();
                    const confirm = await Swal.fire({
                        title: "Item exists but inactive",
                        text: "Do you want to reactivate it instead?",
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonText: "Yes, reactivate",
                    });
                    if (confirm.isConfirmed) {
                        const reactivateRes = await fetch("/api/items", {
                            method: "PATCH",
                            body: JSON.stringify({ id: resData.existingId }),
                            headers: { "Content-Type": "application/json" },
                        });
                        if (reactivateRes.ok) {
                            Swal.fire("Success", "Item reactivated successfully!", "success");
                            reset();
                            router.replace(redirectTo);
                        } else {
                            Swal.fire("Error", "Failed to reactivate item.", "error");
                        }
                    }
                } else {
                    const errData = await res.json();
                    Swal.fire("Error", errData.message || "Failed to create item.", "error");
                }
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Something went wrong. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Product Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">🛒 Product Info</h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput label="Item Title" name="title" register={register} errors={errors} className="w-full" />
                        <SelectInput label="Category" name="categoryId" register={register} options={categories} className="w-full" />
                        <TextInput label="SKU" name="sku" register={register} errors={errors} className="w-full" />
                        <TextInput label="Barcode" name="barcode" register={register} errors={errors} className="w-full" />
                    </div>
                </div>

                {/* Purchase Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">📦 Purchase Info</h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <SelectInput label="Supplier" name="supplierId" register={register} options={suppliers} className="w-full" />
                        <TextInput label="Buying Price" name="buyingPrice" type="number" register={register} errors={errors} className="w-full" />
                    </div>
                </div>

                {/* Sales Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">💰 Sales Info</h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput label="Selling Price" name="sellingPrice" type="number" register={register} errors={errors} className="w-full" />
                        <TextInput label="Tax Rate (%) (Optional)" name="taxRate" type="number" register={register} errors={errors} className="w-full" isRequired={false} />
                    </div>
                </div>

                {/* Stock & Logistics */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">🚚 Stock & Logistics</h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput label="Quantity" name="quantity" register={register} errors={errors} className="w-full" />
                        <SelectInput label="Unit" name="unitId" register={register} options={units} className="w-full" />
                        <SelectInput label="Brand" name="brandId" register={register} options={brands?.items || []} className="w-full" />
                        <SelectInput label="Warehouse" name="warehouseId" register={register} options={warehouses} className="w-full" />
                        <TextInput label="Re-order Point" name="reOrderPoint" type="number" register={register} errors={errors} className="w-full" />
                        <TextInput label="Weight (kg) (Optional)" name="weight" type="number" register={register} errors={errors} className="w-full" isRequired={false} />
                        <TextInput label="Dimensions (e.g. 20 x 30 x 100 cm) (Optional)" name="dimensions" register={register} errors={errors} className="w-full" isRequired={false} />
                    </div>
                </div>

                {/* Additional Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">📝 Additional Info</h2>
                    <div className="grid gap-4">
                        <TextareaInput label="Description" name="description" register={register} errors={errors} />
                        <TextareaInput label="Notes (Optional)" name="notes" register={register} errors={errors} isRequired={false}/>
                        <ImageInput2
                            ref={imageInputRef}
                            label="Item Image"
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                            endpoint="privateFiles"
                        />
                    </div>
                </div>

                <SubmitButton isLoading={loading} title={isUpdate ? "Update Item" : "Create Item"} />
            </form>
        </div>
    );

}
