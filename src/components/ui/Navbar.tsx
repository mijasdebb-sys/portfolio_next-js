"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Habilidades", href: "#skills" },
        { name: "Experiencia", href: "#experience" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-dark-900/80 backdrop-blur-md border-b border-white/10 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
                <Link href="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <span className="text-2xl font-black tracking-tighter text-white">
                            {personalInfo.name.split(" ")[0]}
                            <span className="text-neon-cyan">.</span>dev
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-gray-300 hover:text-neon-cyan transition-colors text-sm font-medium tracking-wide"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link
                            href="#contact"
                            className="px-5 py-2 rounded-full border border-neon-purple text-neon-purple hover:bg-neon-purple/10 text-sm font-semibold transition-all shadow-[0_0_15px_rgba(177,78,255,0.2)] hover:shadow-[0_0_25px_rgba(177,78,255,0.4)]"
                        >
                            Contrátame
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Menu Button  */}
                <button
                    className="md:hidden text-white focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex flex-col gap-1.5 cursor-pointer">
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-neon-cyan" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-neon-cyan" : ""
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-xl border-b border-white/10 md:hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-neon-cyan text-lg font-medium tracking-wider w-full text-center"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-8 py-3 rounded-full bg-neon-purple/20 border border-neon-purple text-neon-purple font-semibold hover:bg-neon-purple/40 transition-colors"
                            >
                                Hablemos
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
