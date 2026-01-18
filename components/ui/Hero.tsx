'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ShinyText from '@/components/ShinyText';

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video Placeholder - In production, replace with <video> tag */}
            <div className="absolute inset-0 bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                {/* Simulating a video background with CSS or use a real video URL if available */}
                <div className="w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop')] bg-cover bg-center animate-pulse-slow" />
            </div>

            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
                >
                    Visual Storytelling <br />
                    <ShinyText text="Redefined." disabled={false} speed={3} className="text-white/90" />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
                >
                    We craft commercial masterpieces, AI-driven narratives, and cinematic experiences that captivate audiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
                    >
                        Watch Showreel <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
