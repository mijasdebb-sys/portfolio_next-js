"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { personalInfo } from "@/data/portfolio";
import { useInView } from "react-intersection-observer";

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const allSkills = [
        ...skills.frontend,
        ...skills.backend,
        ...skills.database,
        ...skills.tools,
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <section id="about" className="py-24 bg-dark-800">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="section-heading gradient-text"
                    >
                        Sobre mí
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="w-24 h-1 bg-neon-cyan mx-auto mb-16 rounded-full"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Bio */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Creo experiencias digitales que{" "}
                                <span className="text-neon-cyan">importan</span>.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {personalInfo.bio}
                            </p>

                            <div className="pt-6 grid grid-cols-2 gap-4">
                                <div className="glass-card p-6 flex flex-col gap-2">
                                    <span className="text-4xl font-black text-neon-purple">3+</span>
                                    <span className="text-sm text-gray-400 font-medium">Años de experiencia</span>
                                </div>
                                <div className="glass-card p-6 flex flex-col gap-2">
                                    <span className="text-4xl font-black text-neon-cyan">20+</span>
                                    <span className="text-sm text-gray-400 font-medium">Proyectos completados</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tech Stack Icons Orbit / Grid */}
                        <motion.div
                            variants={itemVariants}
                            className="relative lg:h-[500px] flex items-center justify-center"
                        >
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 relative z-10 w-full">
                                {allSkills.slice(0, 12).map((skill) => {
                                    const Icon = skill.icon;
                                    if (!Icon) return null;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: [0, -10, 10, 0],
                                                boxShadow: `0 0 20px ${skill.color}40, inset 0 0 10px ${skill.color}20`
                                            }}
                                            className="glass-card aspect-square flex flex-col items-center justify-center p-4 gap-3 cursor-pointer group"
                                            style={{
                                                borderColor: `rgba(255, 255, 255, 0.05)`
                                            }}
                                        >
                                            <Icon
                                                size={40}
                                                style={{ color: skill.color }}
                                                className="transition-transform group-hover:scale-110"
                                            />
                                            <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors text-center">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-full blur-[100px] z-0" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
