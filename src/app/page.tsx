"use client";

import Navbar from "@/components/ui/Navbar";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:bg-white/10 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="text-gray-500 text-sm font-mono text-center">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Hecho con Next.js y Tailwind CSS.
        </p>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-6 sm:right-12 bottom-12 w-10 h-10 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/20 transition-colors"
        aria-label="Ir arriba"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <Footer />
    </main>
  );
}
