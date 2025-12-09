"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Placeholder images - using simple geometric patterns or placeholder services if needed
// For now, I'll use placeholders.
const projects = [
    {
        id: 1,
        title: "Hive Records",
        category: "Web Platform",
        className: "md:col-span-2 md:row-span-2",
        image: "/pages/hiverecords24.png",
        href: "https://www.hiverecords24.com/"
    },
    {
        id: 2,
        title: "Pexah.io",
        category: "Web Application",
        className: "md:col-span-1 md:row-span-1",
        image: "/pages/pexahio.png",
        href: "https://www.pexah.io/"
    },
    {
        id: 3,
        title: "Pund.ex",
        category: "Fintech",
        className: "md:col-span-1 md:row-span-1",
        image: "/pages/pundex.png",
        href: "https://www.pundexcy.com/"
    },
    {
        id: 4,
        title: "Idafin",
        category: "Corporate Identity",
        className: "md:col-span-2 md:row-span-1",
        image: "/pages/idafin.png",
        href: "https://www.idafin.com/"
    },
];

export default function BentoGrid() {
    return (
        <section id="work" className="py-24 px-4 bg-white dark:bg-black">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-2">Selected Works</h2>
                    <p className="text-3xl font-bold text-black dark:text-white">Curated digital experiences</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ${project.className}`}
                        >
                            <Link href={project.href} target="_blank" className="block w-full h-full">
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-all duration-700 ease-in-out filter grayscale -rotate-2 scale-110 group-hover:grayscale-0 group-hover:scale-100 group-hover:rotate-0"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                    <p className="text-gray-200 text-sm">{project.category}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
