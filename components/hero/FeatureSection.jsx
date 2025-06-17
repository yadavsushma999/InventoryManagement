"use client";
import { PackageCheck, BarChart3, Layers3, Settings2 } from "lucide-react";
import React from "react";

const features = [
    {
        icon: <PackageCheck className="w-8 h-8 text-blue-600" />,
        title: "Real-time Stock Tracking",
        description: "Instantly monitor inventory levels and receive low stock alerts to avoid disruptions.",
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-green-600" />,
        title: "Smart Reports & Analytics",
        description: "Visualize sales, purchases, and trends with auto-generated reports.",
    },
    {
        icon: <Layers3 className="w-8 h-8 text-purple-600" />,
        title: "Multi-Warehouse Support",
        description: "Manage multiple locations and warehouses with centralized control.",
    },
    {
        icon: <Settings2 className="w-8 h-8 text-orange-600" />,
        title: "Customizable Workflows",
        description: "Tailor the system to fit your business operations and automate repetitive tasks.",
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Why Choose <span className="text-blue-600">InventoryPro?</span>
                </h2>
                <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
                    Powerful tools and intuitive features designed to streamline your operations and grow your business efficiently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-slate-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:scale-[1.02] group"
                        >
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
