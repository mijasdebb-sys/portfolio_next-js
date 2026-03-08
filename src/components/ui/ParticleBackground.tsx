"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        const colors = ["#00f0ff", "#b14eff", "#ff2d95"]; // Neon Cyan, Purple, Pink

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener("resize", resizeCanvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const initParticles = () => {
            particlesArray = [];
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 10000, 100);

            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 0.5;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = (Math.random() - 0.5) * 0.5;
                const speedY = (Math.random() - 0.5) * 0.5;
                const color = colors[Math.floor(Math.random() * colors.length)];

                particlesArray.push({ x, y, size, speedX, speedY, color });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                const p = particlesArray[i];

                // Update positions
                p.x += p.speedX;
                p.y += p.speedY;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;

                // Add glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;

                ctx.fill();
                ctx.closePath();

                // Reset shadow for lines
                ctx.shadowBlur = 0;

                // Draw connecting lines
                for (let j = i; j < particlesArray.length; j++) {
                    const dx = p.x - particlesArray[j].x;
                    const dy = p.y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1500})`; // Fade out lines
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        initParticles();
        drawParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60 mix-blend-screen"
            style={{
                background: "radial-gradient(circle at center, #1a1a2e 0%, #0a0a0f 100%)"
            }}
        />
    );
}
