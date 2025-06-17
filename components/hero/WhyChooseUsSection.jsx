export default function WhyChooseUsSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-slate-800">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose InventoryPro?</h2>
                <p className="text-gray-600 mb-10">
                    See how we compare with spreadsheets and traditional inventory methods.
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-slate-300 text-sm text-left">
                        <thead className="bg-slate-100 text-slate-700 font-semibold">
                            <tr>
                                <th className="px-4 py-3 border">Feature</th>
                                <th className="px-4 py-3 border">Manual Tracking</th>
                                <th className="px-4 py-3 border">Excel Sheets</th>
                                <th className="px-4 py-3 border bg-blue-50 text-blue-700">InventoryPro</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="px-4 py-3 border">Real-Time Stock Updates</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border text-blue-600 font-semibold">✅</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="px-4 py-3 border">Auto Alerts</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border text-blue-600 font-semibold">✅</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border">User Access Control</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border">Limited</td>
                                <td className="px-4 py-3 border text-blue-600 font-semibold">✅</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="px-4 py-3 border">Analytics & Reports</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border">Manual</td>
                                <td className="px-4 py-3 border text-blue-600 font-semibold">✅</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border">Cloud Backup</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border">❌</td>
                                <td className="px-4 py-3 border text-blue-600 font-semibold">✅</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
