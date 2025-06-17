import Link from "next/link";

export default function CTASection() {
    return (
        <section className="bg-blue-700 py-16 px-6 md:px-12 lg:px-24 text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Simplify Your Inventory?
                </h2>
                <p className="text-lg mb-8">
                    Start using <span className="font-semibold">InventoryPro</span> today and take control of your stock,
                    sales, and operations in one place.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                        href="/register"
                        className="bg-white text-blue-700 hover:bg-blue-100 font-semibold px-6 py-3 rounded-lg transition"
                    >
                        Get Started Free
                    </Link>
                    <Link
                        href="/features"
                        className="border border-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
