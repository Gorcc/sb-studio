"use client";

import CurvedLoop from "@/components/CurvedLoop";

const brands = [
    "Digital Product Design",
    "Brand Identity",
    "Web Development",
    "Design Systems",
    "UI/UX Strategy",
    "Creative Direction",
];


export default function BrandMarquee() {
    const marqueeText = brands.join(" ✦ ") + " ✦ ";

    return (
        <CurvedLoop
            marqueeText={marqueeText}
            className="fill-black dark:fill-white"
            speed={1}
            curveAmount={80}
            interactive={true}
        />
    );
}
