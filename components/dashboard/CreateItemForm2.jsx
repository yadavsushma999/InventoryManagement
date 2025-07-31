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

const steps = [
    { title: "Product Info", icon: "📦" },
    { title: "Stock & Pricing", icon: "💰" },
    { title: "Supplier & Storage", icon: "🏬" },
    { title: "Misc Details", icon: "📝" },
];

export default function CreateItemForm({
    categories,
    units,
    brands,
    warehouses,
    suppliers,
    initialData = {},
    isUpdate = false,
}) {
    const [step, setStep] = useState(0);
    const [imageUrl, setImageUrl] = useState(initialData.imageUrl ?? []);
    const [loading, setLoading] = useState(false);
    const imageInputRef = useRef(null);

    const router = useRouter();
    const redirectTo = "/dashboard/inventory/items";

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: initialData });

    const fieldGroups = [
        ["title", "categoryId", "sku", "barcode"],
        ["quantity", "unitId", "brandId", "buyingPrice", "sellingPrice"],
        ["supplierId", "reOrderPoint", "warehouseId", "weight", "dimensions"],
        ["taxRate", "description", "notes"],
    ];

    const nextStep = async () => {
        const valid = await trigger(fieldGroups[step]);
        if (valid) setStep((s) => s + 1);
    };

    const prevStep = () => setStep((s) => s - 1);

    const redirectCallback = () => router.replace(redirectTo);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Stepper */}
            <div className="flex justify-between items-center mb-6">
                {steps.map((s, i) => (
                    <div key={i} className={`flex-1 text-center text-sm font-semibold transition ${i === step ? "text-blue-600" : "text-gray-400"}`}>
                        <div className="text-2xl">{s.icon}</div>
                        <div>{s.title}</div>
                    </div>
                ))}
            </div>

            {/* Step Forms */}
            {step === 0 && (
                <div className="grid sm:grid-cols-2 gap-4">
                    <TextInput label="Item Title" name="title" register={register} errors={errors} />
                    <SelectInput label="Select the Item Category" name="categoryId" register={register} options={categories} />
                    <TextInput label="Item SKU" name="sku" register={register} errors={errors} />
                    <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} />
                </div>
            )}

            {step === 1 && (
                <div className="grid sm:grid-cols-2 gap-4">
                    <TextInput label="Item Quantity" name="quantity" register={register} errors={errors} />
                    <SelectInput label="Select the Item Unit" name="unitId" register={register} options={units} />
                    <SelectInput label="Select the Item Brand" name="brandId" register={register} options={Array.isArray(brands?.items) ? brands.items : []} />
                    <TextInput label="Buying Price" name="buyingPrice" type="number" register={register} errors={errors} />
                    <TextInput label="Selling Price" name="sellingPrice" type="number" register={register} errors={errors} />
                </div>
            )}

            {step === 2 && (
                <div className="grid sm:grid-cols-2 gap-4">
                    <SelectInput label="Select the Item Supplier" name="supplierId" register={register} options={suppliers} />
                    <TextInput label="Re-order Point" name="reOrderPoint" type="number" register={register} errors={errors} />
                    <SelectInput label="Select the Item Warehouse" name="warehouseId" register={register} options={warehouses} />
                    <TextInput label="Item Weight in Kgs (Optional)" name="weight" type="number" register={register} errors={errors} isRequired={false} />
                    <TextInput label="Item Dimensions in cm (20 x 30 x 100) (Optional)" name="dimensions" register={register} errors={errors} isRequired={false} />
                </div>
            )}

            {step === 3 && (
                <div className="grid sm:grid-cols-2 gap-4">
                    <TextInput label="Item Tax Rate in %" name="taxRate" type="number" register={register} errors={errors} />
                    <TextareaInput label="Item Description" name="description" register={register} errors={errors} />
                    <TextareaInput label="Item Notes (Optional)" name="notes" register={register} errors={errors} isRequired={false} />
                    <ImageInput2
                        ref={imageInputRef}
                        label="Item Image (Optional)"
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint="privateFiles"
                    />
                </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6">
                {step > 0 && (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                    >
                        ⬅ Back
                    </button>
                )}

                {step < steps.length - 1 ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                        Next ➡
                    </button>
                ) : (
                    <SubmitButton isLoading={loading} title={isUpdate ? "Update Item" : "New Item"} />
                )}
            </div>
        </form>
    );
}
