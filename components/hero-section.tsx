"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Play, ArrowRight, Video, Sparkles, MessageCircle, BarChart, Film } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    // Scroll Parallax
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth - 0.5;
        const y = clientY / innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const moveX1 = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const moveY1 = useTransform(springY, [-0.5, 0.5], [-20, 20]);

    const moveX2 = useTransform(springX, [-0.5, 0.5], [30, -30]);
    const moveY2 = useTransform(springY, [-0.5, 0.5], [30, -30]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-cinema-black via-[#0a0a1a] to-cinema-dark text-white selection:bg-cinema-accent selection:text-white"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cinema-accent/10 blur-[120px] mix-blend-screen animate-pulse-glow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cinema-secondary/10 blur-[120px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: "2s" }} />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                {/* Note: noise.png is assumed, but opacity suffices if missing. Or we can use CSS radial gradient noise */}
            </div>

            <div className="container mx-auto px-6 h-full min-h-screen flex flex-col md:flex-row items-center relative z-10 pt-20 md:pt-0">

                {/* Left Section: Copy */}
                <motion.div
                    className="w-full md:w-[45%] flex flex-col justify-center space-y-8 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ y: y1 }}
                >
                    <div className="inline-flex items-center justify-center md:justify-start space-x-2 mb-2">
                        <span className="px-3 py-1 rounded-full border border-cinema-accent/30 bg-cinema-accent/10 text-cinema-accent-foreground text-xs md:text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                            <Sparkles className="w-3 h-3" />
                            AI-Powered Production
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        Stories that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                            Move the World
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Unlock the next generation of UGC and filmmaking.
                        AI-assisted workflows for creators, startups, and global brands who demand cinematic excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-cinema-accent hover:bg-violet-600 text-white font-semibold rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.7)]"
                        >
                            <div className="relative z-10 flex items-center gap-2">
                                Start a Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                            {/* Button Glint Effect */}
                            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_1s_infinite]" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border border-white/10 backdrop-blur-md text-white font-medium hover:border-white/30 transition-all flex items-center gap-2"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            View Showreel
                        </motion.button>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col items-center md:items-start space-y-3">
                        <span className="text-sm text-gray-500">Trusted by modern creators & teams</span>
                        <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder Logos */}
                            <div className="h-6 w-20 bg-white/20 rounded" />
                            <div className="h-6 w-20 bg-white/20 rounded" />
                            <div className="h-6 w-20 bg-white/20 rounded" />
                        </div>
                    </div>
                </motion.div>

                {/* Right Section: Cinematic Visual */}
                <motion.div
                    className="w-full md:w-[55%] h-[60vh] md:h-screen flex items-center justify-center relative perspective-1000"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ y: y2 }}
                >
                    {/* The Orb / Core Visual */}
                    <motion.div
                        className="relative w-[300px] md:w-[500px] h-[300px] md:h-[500px] cursor-pointer"
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        style={{
                            x: moveX1,
                            y: moveY1,
                            rotateX: useTransform(springY, [-0.5, 0.5], [10, -10]),
                            rotateY: useTransform(springX, [-0.5, 0.5], [-10, 10]),
                        }}
                    >
                        {/* Glowing Core */}
                        <div className={cn(
                            "absolute inset-0 rounded-full bg-gradient-to-tr from-cinema-accent via-violet-500 to-cyan-400 opacity-20 blur-[60px] transition-all duration-700",
                            hovered ? "opacity-30 scale-110" : "animate-pulse-glow"
                        )} />

                        {/* Outer Ring System */}
                        <motion.div
                            className="absolute inset-[10%] rounded-full border border-cinema-secondary/30"
                            animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                            transition={{ rotate: { duration: 20, ease: "linear", repeat: Infinity }, scale: { duration: 5, repeat: Infinity, repeatType: "reverse" } }}
                        />
                        <motion.div
                            className="absolute inset-[20%] rounded-full border border-cinema-accent/40 border-dashed"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        />

                        {/* Central Futuristic Sphere (CSS Only for perf) */}
                        <div className="absolute inset-[25%] rounded-full bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cinema-accent/20 to-transparent mix-blend-overlay" />
                            {/* Grid Pattern inside sphere */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50" />
                        </div>
                    </motion.div>

                    {/* Floating Cards */}
                    <FloatingCard
                        icon={<Video className="w-5 h-5 text-cyan-300" />}
                        label="AI Films Generated"
                        value="12.4k+"
                        delay={0}
                        x={moveX2}
                        y={moveY2}
                        position="top-20 right-10 md:right-20"
                    />

                    <FloatingCard
                        icon={<BarChart className="w-5 h-5 text-violet-300" />}
                        label="Engagement Boost"
                        value="+450%"
                        delay={0.5}
                        x={moveX1}
                        y={moveY1}
                        position="bottom-32 left-0 md:left-10"
                    />

                    <FloatingCard
                        icon={<Film className="w-5 h-5 text-pink-300" />}
                        label="Hours Saved"
                        value="85k"
                        delay={1}
                        x={useTransform(springX, [-0.5, 0.5], [40, -40])}
                        y={useTransform(springY, [-0.5, 0.5], [40, -40])}
                        position="bottom-10 right-20"
                    />

                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cinema-black to-transparent pointer-events-none" />
        </section>
    );
}

function FloatingCard({ icon, label, value, delay, x, y, position }: { icon: React.ReactNode, label: string, value: string, delay: number, x: any, y: any, position: string }) {
    return (
        <motion.div
            className={cn(
                "absolute p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-4 w-max",
                position
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + delay, duration: 0.5 }}
            style={{ x, y }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
        >
            <div className="p-2 rounded-lg bg-gradient-to-br from-white/10 to-transparent ring-1 ring-white/20">
                {icon}
            </div>
            <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
                <p className="text-xl font-bold text-white tracking-tight">{value}</p>
            </div>
        </motion.div>
    );
}
