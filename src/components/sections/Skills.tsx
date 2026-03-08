"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { useInView } from "react-intersection-observer";

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categories = [
        { title: "Desarrollo Frontend", data: skills.frontend, glowColor: "from-cyan-500/20" },
        { title: "Sistemas Backend", data: skills.backend, glowColor: "from-green-500/20" },
        { title: "Arquitectura de Bases de Datos", data: skills.database, glowColor: "from-blue-500/20" },
        { title: "DevOps y Herramientas", data: skills.tools, glowColor: "from-purple-500/20" },
    ];

    return (
        <section id="skills" className="py-24 bg-dark-800 relative z-10 overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-neon-purple/5 blur-[150px] pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-neon-cyan/5 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading gradient-text">Arsenal técnico</h2>
                    <div className="w-24 h-1 bg-neon-pink mx-auto mb-8 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 neon-border"
                        >
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.data.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && <skill.icon size={16} style={{ color: skill.color }} />}
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-xs font-mono text-neon-cyan/80">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar Container */}
                                        <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden border border-white/5 relative">
                                            {/* Animated Fill */}
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{
                                                    background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                                                }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (Math.random() * 0.5), ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
