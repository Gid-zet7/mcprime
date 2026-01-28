"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Facebook, Mail } from "lucide-react";

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            className="relative flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900 group transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={label}
        >
            <Icon
                size={20}
                className="text-neutral-400 group-hover:text-white transition-colors duration-300 relative z-10"
            />
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-neutral-800 rounded-full"
                    />
                )}
            </AnimatePresence>
        </a>
    );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <a href={href} className="group relative inline-block text-neutral-400 hover:text-white transition-colors duration-300 py-1">
            <span className="relative z-10">{children}</span>
            <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
        </a>
    );
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-white pt-32 pb-10 overflow-hidden relative border-t border-neutral-900">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-neutral-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* CTA Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500">
                            Ready to create something energetic?
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10">Start a Project</span>
                                <ArrowUpRight className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                                <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-transparent border border-neutral-800 text-white rounded-full font-bold text-lg hover:bg-neutral-900 hover:border-neutral-700 transition-colors"
                                onClick={() => window.location.href = 'mailto:hello@mcprime.com'}
                            >
                                hello@mcprime.com
                            </motion.button>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <SocialLink href="#" icon={Instagram} label="Instagram" />
                        <SocialLink href="#" icon={Twitter} label="Twitter" />
                        <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                        <SocialLink href="#" icon={Facebook} label="Facebook" />
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-neutral-900 pt-16">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Company</h3>
                        <FooterLink href="#">About Us</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">News</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Services</h3>
                        <FooterLink href="#">Commercials</FooterLink>
                        <FooterLink href="#">Brand Stories</FooterLink>
                        <FooterLink href="#">AI Production</FooterLink>
                        <FooterLink href="#">Post-Production</FooterLink>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Resources</h3>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">Case Studies</FooterLink>
                        <FooterLink href="#">Help Center</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Office</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            123 Cinematic Blvd<br />
                            Los Angeles, CA 90028<br />
                            United States
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-neutral-600 text-sm">
                    <p>&copy; {currentYear} MC PRIME. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-neutral-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors">Cookies</a>
                    </div>
                </div>

                {/* Big Text Brand */}
                <div className="mt-24 w-full flex justify-center opacity-10 select-none pointer-events-none">
                    <h1 className="text-[12vw] font-bold leading-none tracking-tighter text-white">
                        MC PRIME
                    </h1>
                </div>
            </div>
        </footer>
    );
}
