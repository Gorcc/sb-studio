"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-20 px-4 bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-semibold text-lg mb-4 text-black dark:text-white font-giaza">Almego</h4>
                        <p className="text-gray-500 max-w-xs">
                            Pioneering the intersection of design, mathematics, and user experience.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-mono text-xs uppercase text-gray-400 mb-6">Socials</h5>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-black dark:text-white hover:text-gray-500 transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="text-black dark:text-white hover:text-gray-500 transition-colors">Instagram</Link></li>
                            <li><Link href="#" className="text-black dark:text-white hover:text-gray-500 transition-colors">LinkedIn</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-mono text-xs uppercase text-gray-400 mb-6">Legal</h5>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-black dark:text-white hover:text-gray-500 transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="text-black dark:text-white hover:text-gray-500 transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100 dark:border-gray-900 text-xs text-gray-400">
                    <span>© 2025 Almego Studio.</span>
                    <span>Istanbul, TR</span>
                </div>
            </div>
        </footer>
    );
}
