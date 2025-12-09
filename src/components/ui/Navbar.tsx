"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl bg-white/70 dark:bg-black/70 backdrop-blur-xl rounded-full border border-black/10 dark:border-white/10 px-6 py-3 flex items-center justify-between shadow-sm"
        >
            <Link href="/" className="font-semibold text-xl tracking-tight text-black dark:text-white font-giaza">Almego</Link>
            <div className="flex items-center gap-6">
                <Link href="#work" className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">Work</Link>
                <Link href="#services" className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">Services</Link>
                <ThemeToggle />
            </div>
        </motion.nav>
    );
}
