"use client";

import { motion } from "framer-motion";
import BrandMarquee from "./BrandMarquee";
import PixelBlast from "@/components/PixelBlast";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-[-150px] -z-20 w-full h-full ">
                <PixelBlast variant="circle"
                    pixelSize={6}
                    color="#a3e635"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent />
            </div>


            <div className="relative z-10 container px-4 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter text-black dark:text-white mb-6 leading-[1.1]"
                >
                    We create
                    digital
                    <br />
                    experiences that
                    matter
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl font-sans text-gray-600 dark:text-gray-600 max-w-lg mb-10"
                >
                    Crafting modern, minimalist designs that elevate your brand and engage your audience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link
                        href="#work"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white rounded-full overflow-hidden transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                        <span className="font-medium">View Work</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>

            <div className="absolute bottom-0 w-full z-20">
                <BrandMarquee />
            </div>
        </section>
    );
}
