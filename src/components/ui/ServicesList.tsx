"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Package, PenTool, Smartphone } from "lucide-react";
import React from "react";

const services = [
    {
        id: "01",
        title: "Digital Product Design",
        description: "End-to-end product design from concept to delivery.",
        icon: Monitor,
    },
    {
        id: "02",
        title: "Brand Identity",
        description: "Crafting visual systems that speak faster than words.",
        icon: Package,
    },
    {
        id: "03",
        title: "Development",
        description: "Clean, performant code built on modern stacks.",
        icon: Smartphone, // Using smartphone to represent apps/dev roughly
    },
    {
        id: "04",
        title: "Design Systems",
        description: "Scalable frameworks for consistent UI/UX.",
        icon: PenTool,
    },
];

export default function ServicesList() {
    return (
        <section id="services" className="py-24 px-4 bg-gray-50 dark:bg-[#0a0a0a]">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-2">Our Expertise</h2>
                    <p className="text-3xl font-bold text-black dark:text-white">Technical artistry</p>
                </motion.div>

                <div className="space-y-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col md:flex-row items-center justify-between p-8 border-t border-black/10 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            <div className="flex items-center gap-8 w-full md:w-1/2">
                                <span className="font-mono text-sm text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                    {service.id}
                                </span>
                                <div className="flex items-center gap-3">
                                    <service.icon className="w-5 h-5 stroke-1 text-black dark:text-white" />
                                    <h3 className="text-xl font-medium text-black dark:text-white">{service.title}</h3>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full md:w-1/2 mt-4 md:mt-0">
                                <p className="text-gray-500 text-sm">{service.description}</p>
                                <ArrowUpRight className="w-5 h-5 text-black dark:text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-black/10 dark:border-white/10" />
                </div>
            </div>
        </section>
    );
}
