'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // Need to create lib/utils for tailwind-merge
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { name: 'Work', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    MC<span className="text-muted">PRIME</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-white",
                                pathname === item.href ? "text-white" : "text-muted"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-lg font-medium transition-colors hover:text-white",
                                pathname === item.href ? "text-white" : "text-muted"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
