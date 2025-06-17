// components/home/HeroSection.tsx

import Image from "next/image";
import Link from "next/link";
import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative bg-slate-100 pt-20 pb-24 px-6 md:px-12 lg:px-24 text-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Simplify Your Inventory <br /> With <span className="text-blue-600">InventoryPro</span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Manage stock, track sales, and boost business performance with an easy-to-use inventory management system built for growing businesses.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <Link
                            href="/register"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/features"
                            className="border border-blue-600 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-lg font-medium"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <div className="flex items-start gap-3">
                            <Rocket className="text-blue-600 w-6 h-6" />
                            <span>Fast Deployment</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="text-blue-600 w-6 h-6" />
                            <span>Secure & Reliable</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <TrendingUp className="text-blue-600 w-6 h-6" />
                            <span>Growth Focused</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/hero-inventory.png"
                        alt="Inventory Illustration"
                        width={500}
                        height={500}
                        className="w-full h-auto mix-blend-multiply"

                        priority
                    />
                </div>
            </div>
        </section>
    );
}
