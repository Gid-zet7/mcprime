"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroVideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect for video and content
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-neutral-950 text-white"
        >
            {/* Background Video */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover opacity-80"
                    poster="/images/hero-poster.jpg" // Placeholder poster
                >
                    {/* Placeholder video - Replace with your actual asset */}
                    <source src="/vexorin.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-neutral-950/90" />

                {/* Film Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>

            {/* Content Container */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center"
            >
                {/* Animated Subheadline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 overflow-hidden"
                >
                    <p className="text-sm md:text-base font-medium tracking-[0.2em] text-indigo-400 uppercase">
                        The Future of Visual Storytelling
                    </p>
                </motion.div>

                {/* Animated Headline */}
                <div className="max-w-4xl mb-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white drop-shadow-2xl">
                        <RevealText text="Stories that move." delay={0.4} />
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 pb-2">
                            <RevealText text="Powered by AI." delay={0.6} />
                        </span>
                    </h1>
                </div>

                {/* Supporting Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="max-w-xl text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed drop-shadow-md"
                >
                    We help brands and creators tell unforgettable stories through AI-powered film and high-impact UGC.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 items-center"
                >
                    {/* Primary CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center gap-3"
                    >
                        <span className="relative z-10">Watch Showreel</span>
                        <Play className="w-4 h-4 fill-black relative z-10 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                    {/* Secondary CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-3"
                    >
                        Start a Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-12 rounded-full bg-gradient-to-b from-white/0 via-white/50 to-white/0"
                />
            </motion.div>
        </section>
    );
}

// Reveal Text Component for staggered animation
function RevealText({ text, delay }: { text: string; delay: number }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] }} // Custom easing for cineamtic feel
            className="inline-block"
        >
            {text}
        </motion.span>
    );
}
