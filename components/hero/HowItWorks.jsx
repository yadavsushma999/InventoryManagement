import { ClipboardList, UploadCloud, BarChart2, BellRing } from "lucide-react";

export default function HowItWorksSection() {
    const steps = [
        {
            icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
            title: "1. Add Items & Categories",
            description: "Start by adding your items, suppliers, and categories to structure your inventory.",
        },
        {
            icon: <UploadCloud className="w-6 h-6 text-blue-600" />,
            title: "2. Stock In & Out",
            description: "Easily manage stock-in and stock-out entries to keep your data always up-to-date.",
        },
        {
            icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
            title: "3. Track Inventory",
            description: "Get real-time visibility of your inventory levels, item history, and stock movement.",
        },
        {
            icon: <BellRing className="w-6 h-6 text-blue-600" />,
            title: "4. Get Alerts & Reports",
            description: "Receive low stock alerts and generate insightful reports to optimize operations.",
        },
    ];

    return (
        <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-24 text-slate-800">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Manage your inventory efficiently in just a few easy steps.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md border rounded-lg p-6 text-left hover:shadow-xl transition-all duration-300"
                        >
                            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
