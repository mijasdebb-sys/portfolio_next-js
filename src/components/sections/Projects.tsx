"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="py-24 bg-dark-900 relative">
            {/* Background decoration */}
            <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading gradient-text">Proyectos destacados</h2>
                    <div className="w-24 h-1 bg-neon-purple mx-auto mb-8 rounded-full" />
                    <p className="section-subheading">
                        Una selección de mis mejores proyectos, mostrando mi experiencia en arquitectura full-stack, interfaces de usuario fluidas y sistemas backend robustos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card-hover group flex flex-col h-full"
                        >
                            <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
                                {/* Simulated Image Placeholder with Gradients to look premium without real images */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-600 transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-cyan/20 opacity-40 mix-blend-overlay" />

                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <span className="text-4xl font-black text-white/10 tracking-widest uppercase">
                                        {project.title.split(' ')[0]}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-dark-900 to-transparent">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2.5 rounded-lg bg-white/5 border border-neon-cyan/30 text-neon-cyan font-medium text-sm hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaExternalLinkAlt /> Ver demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-12 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
