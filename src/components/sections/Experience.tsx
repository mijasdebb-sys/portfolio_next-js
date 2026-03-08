"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="py-24 bg-dark-900 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading gradient-text">Trayectoria</h2>
                    <div className="w-24 h-1 bgGradient mx-auto mb-8 rounded-full" style={{ background: "linear-gradient(90deg, #00f0ff, #b14eff)" }} />
                </motion.div>

                {/* Timeline Line */}
                <div className="absolute left-6 sm:left-1/2 top-48 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple/50 via-neon-cyan/50 to-transparent -translate-x-1/2 hidden sm:block" />

                <div className="space-y-12 sm:space-y-0 relative">
                    {experience.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                                className={`relative flex items-center justify-between flex-col sm:flex-row w-full sm:mb-16 ${isEven ? "sm:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot  */}
                                <div className="absolute left-6 sm:left-1/2 w-10 h-10 rounded-full border-4 border-dark-900 bg-dark-800 -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,240,255,0.4)] hidden sm:flex">
                                    {item.type === "work" ? (
                                        <FaBriefcase className="text-neon-cyan" size={14} />
                                    ) : (
                                        <FaGraduationCap className="text-neon-purple" size={14} />
                                    )}
                                </div>

                                {/* Empty Space for desktop alternating layout */}
                                <div className="hidden sm:block w-5/12" />

                                {/* Content Card */}
                                <div className="w-full sm:w-5/12">
                                    <div className="glass-card hover:border-white/20 transition-colors p-6 sm:p-8 relative">
                                        <span className="absolute top-0 right-0 px-4 py-1.5 bg-white/5 rounded-bl-xl rounded-tr-xl text-xs font-mono text-neon-cyan/80">
                                            {item.period}
                                        </span>

                                        <div className="flex items-center gap-3 md:hidden mb-4 opacity-70">
                                            {item.type === "work" ? (
                                                <FaBriefcase className="text-neon-cyan" size={20} />
                                            ) : (
                                                <FaGraduationCap className="text-neon-purple" size={20} />
                                            )}
                                            <span className="text-neon-cyan/80 font-mono text-sm">{item.period}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {item.role}
                                        </h3>
                                        <h4 className="text-lg font-medium text-gray-400 mb-4 flex items-center gap-2">
                                            {item.company}
                                        </h4>

                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
