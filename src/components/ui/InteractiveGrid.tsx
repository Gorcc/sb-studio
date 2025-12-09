"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        // Grid configuration
        const spacing = 30; // Closer spacing for dot matrix
        const pointRadius = 200; // Larger influence radius
        const strength = 15; // Distortion strength

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.classList.contains("dark");

            // Calculate cols and rows slightly larger than screen to cover edges
            const cols = Math.ceil(width / spacing) + 2;
            const rows = Math.ceil(height / spacing) + 2;
            const startX = -spacing;
            const startY = -spacing;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = startX + i * spacing;
                    const y = startY + j * spacing;

                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let renderX = x;
                    let renderY = y;

                    // Mouse interaction - repel/attract effect
                    if (dist < pointRadius) {
                        const force = (pointRadius - dist) / pointRadius;
                        const ease = force * force; // Quadratic easing

                        // Push points away slightly
                        renderX -= (dx / dist) * strength * ease;
                        renderY -= (dy / dist) * strength * ease;
                    }

                    // Dot size and opacity based on mouse proximity for "flashlight" effect
                    let radius = 1;
                    let opacity = isDark ? 0.15 : 0.1; // Base opacity

                    if (dist < 400) {
                        const highlight = 1 - (dist / 400);
                        opacity += highlight * 0.4;
                        radius += highlight * 0.5;
                    }

                    ctx.beginPath();
                    ctx.arc(renderX, renderY, radius, 0, Math.PI * 2);
                    ctx.fillStyle = isDark
                        ? `rgba(255, 255, 255, ${opacity})`
                        : `rgba(0, 0, 0, ${opacity})`;
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent"
        />
    );
}
