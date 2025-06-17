import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";

export default function FooterSection() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Branding */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-2">InventoryPro</h2>
                    <p className="text-sm">
                        Simplify your inventory, track your stock, and scale your business with confidence.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/features" className="hover:text-white">Features</Link></li>
                        <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                        <li><Link href="/register" className="hover:text-white">Register</Link></li>
                        <li><Link href="/login" className="hover:text-white">Login</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                        <li><Link href="/support" className="hover:text-white">Support</Link></li>
                        <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Connect</h3>
                    <div className="flex space-x-4 items-center">
                        <a href="mailto:support@inventorypro.com" className="hover:text-white">
                            <Mail size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-white">
                            <Twitter size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" className="hover:text-white">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 mt-10 pt-4 text-center text-sm text-slate-400">
                &copy; {new Date().getFullYear()} InventoryPro. All rights reserved.
            </div>
        </footer>
    );
}
