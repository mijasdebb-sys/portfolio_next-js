"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        if (formRef.current) {
            // Requires VITE_EMAILJS_SERVICE_ID, etc. in a real project
            // For portfolio template, we will simulate or use placeholder IDs
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
                    formRef.current,
                    {
                        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_placeholder",
                    }
                )
                .then(
                    () => {
                        setLoading(false);
                        setStatus("success");
                        if (formRef.current) formRef.current.reset();
                        setTimeout(() => setStatus("idle"), 5000);
                    },
                    (error) => {
                        console.error("FAILED...", error.text);
                        setLoading(false);
                        setStatus("error");
                    }
                );
        }
    };

    return (
        <section id="contact" className="py-24 bg-dark-800 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading gradient-text">Contacto</h2>
                    <div className="w-24 h-1 bg-neon-cyan mx-auto mb-8 rounded-full" />
                    <p className="section-subheading">
                        Ya sea que tengas una pregunta, un proyecto en mente o solo quieras saludar, ¡haré todo lo posible por responderte!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card hover:border-neon-purple/30 p-8 flex flex-col gap-8 h-full relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-[50px] pointer-events-none rounded-full" />

                        <h3 className="text-2xl font-bold text-white tracking-wide">Construyamos juntos</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Actualmente estoy abierto a nuevas oportunidades. Si buscas un desarrollador dedicado para unirse a tu equipo o construir tu idea, no dudes en contactarme.
                        </p>

                        <div className="space-y-6 mt-4 flex-1">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/50 transition-all">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">Correo electrónico</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-neon-cyan transition-colors font-medium">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple/10 group-hover:border-neon-purple/50 transition-all">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-mono mb-1">Ubicación</p>
                                    <p className="text-white font-medium">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="glass-card p-8 space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="input-field"
                                        placeholder="Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="input-field"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Asunto
                                    </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    className="input-field"
                                        placeholder="Consulta de proyecto"
                                />
                            </div>

                            <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    className="input-field resize-none"
                                    placeholder="Hola, me gustaría hablar sobre..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`btn-primary w-full flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <FaPaperPlane /> Enviar mensaje
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-emerald-400 text-sm font-medium text-center bg-emerald-400/10 py-2 rounded-lg"
                                >
                                    ¡Mensaje enviado correctamente!
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm font-medium text-center bg-red-400/10 py-2 rounded-lg"
                                >
                                    ¡Ups! Algo salió mal. Por favor intenta de nuevo.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
