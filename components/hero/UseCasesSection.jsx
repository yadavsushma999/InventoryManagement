import { Boxes, Warehouse, ClipboardCheck, PackageCheck } from "lucide-react";

export default function UseCasesSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-slate-800">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Real Solutions for Real Inventory Challenges
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    InventoryPro simplifies inventory tracking for small and growing businesses. Here’s how it helps you stay in control:
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Use Case 1 */}
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
                        <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                            <Warehouse className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Warehouse Stocking</h3>
                        <p className="text-gray-600">
                            Keep track of incoming and outgoing stock across multiple storage locations.
                        </p>
                    </div>

                    {/* Use Case 2 */}
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
                        <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                            <ClipboardCheck className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Inventory Audits</h3>
                        <p className="text-gray-600">
                            Conduct faster audits with live stock counts and item tracking.
                        </p>
                    </div>

                    {/* Use Case 3 */}
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
                        <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                            <PackageCheck className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Low Stock Alerts</h3>
                        <p className="text-gray-600">
                            Get notified when inventory levels drop below your custom threshold.
                        </p>
                    </div>

                    {/* Use Case 4 */}
                    <div className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
                        <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                            <Boxes className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">Item Categorization</h3>
                        <p className="text-gray-600">
                            Organize your products with clear categories, units, and suppliers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
