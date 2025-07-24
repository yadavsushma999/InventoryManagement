"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import FormHeader from "@/components/dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makeApiRequest } from "@/lib/apiRequest";

export default function ReorderPointForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/settings/reorder/manage";
    const redirectCallback = () => router.replace(redirectTo);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            if (isUpdate) {
                await makeApiRequest(
                    setLoading,
                    `/api/reorder/${initialData.id}`,
                    "PUT",
                    data,
                    "Reorder point updated successfully",
                    reset,
                    redirectCallback
                );
            } else {
                setLoading(true);
                const res = await fetch("/api/reorder", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    reset();
                    router.replace(redirectTo);
                } else if (res.status === 409) {
                    const resData = await res.json();
                    const confirm = await Swal.fire({
                        title: "Already Exists (Inactive)",
                        text: "Do you want to reactivate it?",
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonText: "Yes, Reactivate",
                    });

                    if (confirm.isConfirmed) {
                        const reactivateRes = await fetch("/api/reorder", {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: resData.existingId }),
                        });

                        if (reactivateRes.ok) {
                            reset();
                            router.replace(redirectTo);
                        } else {
                            Swal.fire("Error", "Failed to reactivate record.", "error");
                        }
                    }
                } else {
                    const err = await res.json();
                    Swal.fire("Error", err.message || "Failed to create record", "error");
                }
            }
        } catch (e) {
            Swal.fire("Error", e.message || "Unexpected Error", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <FormHeader
                title={isUpdate ? "Update Reorder Point" : "Set Reorder Point"}
                href={redirectTo}
            />
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        
                        <TextInput
                            label="Reorder Point"
                            name="reorderPoint"
                            type="number"
                            register={register}
                            errors={errors}
                            className="w-full"
                        />
                    </div>
                    <SubmitButton
                        isLoading={loading}
                        title={isUpdate ? "Update Reorder Point" : "Create Reorder Point"}
                    />
                </form>
            </div>
        </div>
    );
}
