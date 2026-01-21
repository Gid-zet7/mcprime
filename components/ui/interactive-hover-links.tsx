"use client"
import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverLinksProps {
    links?: typeof INTERACTIVE_LINKS;
}

export function InteractiveHoverLinks({
    links = INTERACTIVE_LINKS,
}: InteractiveHoverLinksProps) {
    return (
        <section className="bg-neutral-950 p-4 md:px-8 md:py-24 w-full overflow-hidden">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore MC PRIME</h2>
                    <p className="text-neutral-400">Navigate our world of digital storytelling.</p>
                </div>
                {links.map((link, _index) => (
                    <Link key={link.heading} {...link} />
                ))}
            </div>
        </section>
    );
}

interface LinkProps {
    heading: string;
    imgSrc: string;
    subheading: string;
    href: string;
}

function Link({ heading, imgSrc, subheading, href }: LinkProps) {
    const ref = useRef<HTMLAnchorElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "40%"]);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const rect = ref.current!.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b border-neutral-800 py-6 transition-colors duration-500 hover:border-neutral-500 md:py-10"
        >
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-x-4">
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-white md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-300">
                    {subheading}
                </span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: "-12.5deg", opacity: 0 },
                    whileHover: { scale: 1, rotate: "12.5deg", opacity: 1 },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-32 w-48 rounded-lg object-cover shadow-2xl md:h-56 md:w-80 pointer-events-none"
                alt={`Image representing ${heading}`}
            />

            <div className="overflow-hidden">
                <motion.div
                    variants={{
                        initial: {
                            x: "100%",
                            opacity: 0,
                        },
                        whileHover: {
                            x: "0%",
                            opacity: 1,
                        },
                    }}
                    transition={{ type: "spring" }}
                    className="relative z-10 p-4"
                >
                    <ArrowRight className="size-8 text-white md:size-12" />
                </motion.div>
            </div>
        </motion.a>
    );
}

export const INTERACTIVE_LINKS = [
    {
        heading: "Production",
        subheading: "AI-driven commercial video",
        imgSrc:
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
        href: "/services",
    },
    {
        heading: "Studio",
        subheading: "Meet the future of film",
        imgSrc:
            "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&q=80",
        href: "/team",
    },
    {
        heading: "Showcase",
        subheading: "Recent masterpieces",
        imgSrc:
            "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80",
        href: "/projects",
    },
    {
        heading: "Careers",
        subheading: "Join the revolution",
        imgSrc:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        href: "/careers",
    },
    {
        heading: "Labs",
        subheading: "Experimental features",
        imgSrc:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        href: "/labs",
    },
];
