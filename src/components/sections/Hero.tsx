"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentTitle = personalInfo.titles[titleIndex];

        const handleTyping = () => {
            if (!isDeleting && displayText === currentTitle) {
                timer = setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
            } else {
                const nextText = isDeleting
                    ? currentTitle.substring(0, displayText.length - 1)
                    : currentTitle.substring(0, displayText.length + 1);

                setDisplayText(nextText);
                setTypingSpeed(isDeleting ? 50 : 150 - Math.random() * 50); // Variable typing speed
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, titleIndex, typingSpeed]);

    return (
        <section id="home" className="relative h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-neon-cyan font-mono tracking-wider uppercase text-sm mb-2 block">
                            Hola Mundo, soy
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-glow-cyan">
                            {personalInfo.name}
                        </h1>

                        <div className="h-12 flex items-center">
                            <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
                                {displayText}
                            </span>
                            <span className="inline-block w-[3px] h-8 bg-neon-cyan ml-1 animate-pulse" />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-lg mt-4 leading-relaxed"
                    >
                        Creo experiencias digitales impecables, atractivas y accesibles.
                        Enfocado en código limpio y arquitecturas elegantes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 mt-8"
                    >
                        <Link href="#projects" className="btn-primary">
                            Ver Proyectos
                        </Link>
                        <Link href="#contact" className="btn-secondary">
                            Contacto
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-6 mt-12"
                    >
                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-[#0077B5] hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href="/resume.pdf" // Placeholder path for resume
                            className="flex items-center gap-2 text-sm font-mono text-neon-cyan hover:text-white transition-colors"
                        >
                            <FaDownload /> Descargar CV
                        </a>
                    </motion.div>
                </div>

                {/* Hero Visuals / Image (Optional, using abstract shapes for developer aesthetic) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden lg:flex relative h-full w-full justify-center items-center"
                >
                    <div className="relative w-[400px] h-[400px]">
                        {/* Glowing orb behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple rounded-full blur-[100px] opacity-20 animate-pulse-glow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-neon-cyan rounded-full blur-[80px] opacity-20" />

                        {/* Floating Code Card */}
                        <motion.div
                            animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 glass-card p-6 flex flex-col justify-center font-mono text-sm shadow-neon-glow"
                        >
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2 text-gray-300">
                                <p><span className="text-neon-pink">const</span> coder <span className="text-neon-cyan">=</span> <span className="text-neon-purple">{'{'}</span></p>
                                <p className="pl-4">name: <span className="text-green-400">&apos;{personalInfo.name}&apos;</span>,</p>
                                <p className="pl-4">skills: [<span className="text-green-400">&apos;Next.js&apos;</span>, <span className="text-green-400">&apos;Node.js&apos;</span>, <span className="text-green-400">&apos;Tailwind&apos;</span>],</p>
                                <p className="pl-4">hardWorker: <span className="text-[#FF8C00]">true</span>,</p>
                                <p className="pl-4">problemSolver: <span className="text-[#FF8C00]">true</span>,</p>
                                <p className="pl-4">hireable: <span className="text-[#FF8C00]">true</span></p>
                                <p><span className="text-neon-purple">{'}'}</span>;</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <Link href="#about">
                    <div className="w-8 h-12 rounded-full border-2 border-gray-500 flex justify-center p-2 cursor-pointer hover:border-neon-cyan hover:text-neon-cyan transition-colors">
                        <div className="w-1 h-3 bg-current rounded-full" />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
