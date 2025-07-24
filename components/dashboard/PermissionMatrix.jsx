"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import toast from "react-hot-toast";
import ButtonTable from "@/components/FormInputs/ButtonTable"; // ✅ your custom button
import ResetButton from "../FormInputs/ResetButton";

export default function PermissionMatrix({ roles = [], permissions = [], refreshRoles }) {
    // Group permissions by resource
    const grouped = {};
    permissions.forEach((perm) => {
        const [resource, action] = perm.name.split(" ");
        if (!grouped[resource]) grouped[resource] = [];
        grouped[resource].push({ id: perm.id, action });
    });

    // Initial matrix
    const [matrix, setMatrix] = useState(() => {
        const initial = {};
        roles.forEach((role) => {
            initial[role.id] = {};
            permissions.forEach((permission) => {
                initial[role.id][permission.id] = role.permissions?.some(
                    (p) => p.permissionId === permission.id
                );
            });
        });
        return initial;
    });

    // Store original for reset
    const [original] = useState(matrix);

    // Dirty + Loading + Saved state
    const [dirty, setDirty] = useState(false);
    const [loading, setLoading] = useState(false);

    // Toggle matrix cell & mark dirty
    const toggle = (roleId, permissionId) => {
        setMatrix((prev) => {
            const updated = {
                ...prev,
                [roleId]: {
                    ...prev[roleId],
                    [permissionId]: !prev[roleId][permissionId],
                },
            };
            setDirty(true);
            return updated;
        });
    };

    // Reset to original
    const resetMatrix = () => {
        setMatrix(original);
        setDirty(false);
    };

    // Save to API
    const handleSave = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/role-permissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ matrix }),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success("" + data.message);
                setDirty(false);
                refreshRoles && refreshRoles(); // optional re-fetch if you pass this
                // Auto hide badge after 2
            } else {
                toast.error("Failed: " + data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-x-auto p-6">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-6 py-4 text-left font-semibold text-gray-700">Resource</th>
                        {roles.map((role) => (
                            <th key={role.id} className="border px-6 py-4 font-semibold text-gray-700 text-center">
                                {role.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(grouped).map(([resource, actions], index) => (
                        <tr key={resource} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-6 py-4 font-medium text-gray-800">{resource}</td>
                            {roles.map((role) => (
                                <td key={role.id} className="border px-6 py-4 align-top">
                                    <div className="flex flex-col items-start gap-3">
                                        {actions.map(({ id, action }) => (
                                            <div key={id} className="flex items-center justify-between w-full">
                                                <span className="capitalize text-gray-700">{action}</span>
                                                <Switch
                                                    checked={matrix[role.id]?.[id] || false}
                                                    onChange={() => toggle(role.id, id)}
                                                    className={`${matrix[role.id]?.[id] ? "bg-blue-600" : "bg-gray-300"
                                                        } relative inline-flex h-5 w-10 items-center rounded-full transition`}
                                                >
                                                    <span
                                                        className={`${matrix[role.id]?.[id] ? "translate-x-5" : "translate-x-1"
                                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                    />
                                                </Switch>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex items-center gap-4 mt-6">
                <ButtonTable
                    isLoading={loading}
                    title="Permissions"
                    onClick={handleSave}   // ✅ required if no <form>
                    disabled={!dirty || loading}
                />

                <ResetButton
                    onClick={resetMatrix}
                    disabled={!dirty || loading}
                >
                    Reset Changes
                </ResetButton>


            </div>
        </div>
    );
}
