"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Zap, Film, Sparkles, Box, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function BentoGridSection() {
    return (
        <section className="bg-neutral-950 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Noise/Glow */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 mb-6"
                    >
                        Redefining Production Workflow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-neutral-400"
                    >
                        Harness the power of AI to generate, edit, and scale your cinematic content faster than ever before.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Primary Feature (Span 2 Cols, 2 Rows) */}
                    <BentoCard
                        className="md:col-span-2 md:row-span-2 min-h-[400px] relative overflow-hidden group border-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 transition-all duration-700 bg-[length:200%_200%] animate-gradient-slow group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                        <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-md"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6">
                                    <Sparkles className="w-3 h-3" />
                                    <span>AI Core Engine</span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    AI that accelerates <br />cinematic storytelling.
                                </h3>
                                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                    From script to screen, our neural engines handle the heavy lifting—color grading, scene extension, and voice synthesis—instantly.
                                </p>
                                <button className="inline-flex items-center gap-2 text-white font-semibold group/btn">
                                    Explore the tech
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </motion.div>
                        </div>
                    </BentoCard>

                    {/* Card 2: Stat Card (Productivity) */}
                    <BentoCard
                        className="md:col-span-1 md:row-span-1 bg-neutral-900 border border-white/5 group"
                        glowColor="rgba(99, 102, 241, 0.15)"
                    >
                        <div className="p-8 flex flex-col h-full justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Speed</span>
                            </div>
                            <div>
                                <h4 className="text-5xl font-bold text-white mb-2 tracking-tighter">
                                    3<span className="text-indigo-400">x</span>
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium">Faster Production Cycles</p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 3: Visual / Icon Card */}
                    <BentoCard
                        className="md:col-span-1 md:row-span-1 bg-neutral-900 border border-white/5 overflow-hidden group"
                        glowColor="rgba(34, 211, 238, 0.15)"
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                            {/* Abstract Neural Network Animation Placeholder */}
                            <div className="relative w-32 h-32">
                                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-4 border-2 border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Box className="w-12 h-12 text-white/20" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 z-10 w-full bg-gradient-to-t from-neutral-900 to-transparent">
                            <p className="text-white font-semibold">Neural Architecture</p>
                            <p className="text-xs text-neutral-500">Self-learning editing flows</p>
                        </div>
                    </BentoCard>

                    {/* Card 4: Stat Card (Scale) */}
                    <BentoCard
                        className="md:col-span-1 md:row-span-1 bg-neutral-900 border border-white/5 group"
                        glowColor="rgba(167, 139, 250, 0.15)"
                    >
                        <div className="p-8 flex flex-col h-full justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-violet-500/20 rounded-xl text-violet-400">
                                    <Film className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Scale</span>
                            </div>
                            <div>
                                <h4 className="text-5xl font-bold text-white mb-2 tracking-tighter">
                                    12<span className="text-violet-400">k+</span>
                                </h4>
                                <p className="text-neutral-400 text-sm font-medium">Unique Scenes Generated</p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 5: Playful / Engagement */}
                    <BentoCard
                        className="md:col-span-2 bg-neutral-900 border border-white/5 group overflow-hidden"
                        glowColor="rgba(255, 255, 255, 0.05)"
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-indigo-900/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm text-green-400 font-medium">System Ready</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Empowering Creators</h3>
                                <p className="text-neutral-400 max-w-sm">
                                    Join thousands of filmmakers using AI to break creative boundaries.
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-white">4.9/5</p>
                                    <p className="text-xs text-neutral-500">Creator Rating</p>
                                </div>
                                <div className="w-px h-12 bg-white/10" />
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-white">24/7</p>
                                    <p className="text-xs text-neutral-500">Rendering</p>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
}

function BentoCard({ children, className, glowColor }: { children: React.ReactNode; className?: string; glowColor?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/10",
                className
            )}
        >
            {glowColor && (
                <motion.div
                    className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px cubic-bezier(0.15, 1, 0.5, 1) at ${mouseX}px ${mouseY}px,
                                ${glowColor},
                                transparent 80%
                            )
                        `,
                    }}
                />
            )}
            {children}
        </motion.div>
    );
}
