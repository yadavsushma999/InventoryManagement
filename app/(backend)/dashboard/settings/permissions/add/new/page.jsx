"use client";

import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makeApiRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import FormHeader from "@/components/dashboard/FormHeader";

export default function CreatePermissionForm({ initialData = {}, isUpdate = false }) {
    const router = useRouter();
    const redirectTo = "/dashboard/settings/permissions/add";
    const redirectCallback = () => router.replace(redirectTo);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ defaultValues: initialData });

    const [loading, setLoading] = useState(false);

    async function onSubmit(data) {
        console.log("data",data);
        if (isUpdate) {
            await makeApiRequest(
                setLoading,
                `/api/permissions/${initialData.id}`,
                "PUT",
                data,
                "Permission updated successfully",
                reset,
                redirectCallback
            );
        } else {
            await makeApiRequest(
                setLoading,
                "/api/permissions",
                "POST",
                data,
                "New permission created successfully",
                reset,
                redirectCallback
            );
        }
    }

    return (
        <div>
             <FormHeader title={isUpdate ? "Update Permissions" : "New Permissions"} href="/dashboard/settings/permissions/add" />
            <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg 
        shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <TextInput
                    label="Permission Name"
                    name="name"
                    register={register}
                    errors={errors}
                    className="w-full"
                />

                <TextareaInput
                    label="Description"
                    name="description"
                    register={register}
                    errors={errors}
                />

                <SubmitButton
                    isLoading={loading}
                    title={isUpdate ? "Update Permission" : "Create Permission"}
                />
            </form>
        </div>
        </div>
    );
}
