"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const depthRange = 420;
    const fov = 700;

    const colors = [
      "rgba(0, 255, 255, 0.6)",
      "rgba(0, 255, 136, 0.6)",
      "rgba(100, 149, 237, 0.6)",
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 15));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: (Math.random() - 0.5) * depthRange,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      particlesRef.current = particles;
    };

    const projectParticle = (particle: Particle) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const nx = (mouseRef.current.x - centerX) / centerX;
      const ny = (mouseRef.current.y - centerY) / centerY;
      const rotY = nx * 0.22;
      const rotX = -ny * 0.18;

      const x = particle.x - centerX;
      const y = particle.y - centerY;
      const z = particle.z;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const perspective = fov / (fov + z2 + depthRange / 2);

      return {
        x: centerX + x1 * perspective,
        y: centerY + y1 * perspective,
        size: particle.size * perspective,
      };
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const projectedParticles = particles.map(projectParticle);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = projectedParticles[i].x - projectedParticles[j].x;
          const dy = projectedParticles[i].y - projectedParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(projectedParticles[i].x, projectedParticles[i].y);
            ctx.lineTo(projectedParticles[j].x, projectedParticles[j].y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        const mdx = projectedParticles[i].x - mouseRef.current.x;
        const mdy = projectedParticles[i].y - mouseRef.current.y;
        const mDistance = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDistance < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 * (1 - mDistance / 200)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(projectedParticles[i].x, projectedParticles[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const projected = projectedParticles[i];

        ctx.beginPath();
        ctx.arc(projected.x, projected.y, projected.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, projected.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          projected.x,
          projected.y,
          0,
          projected.x,
          projected.y,
          projected.size * 2,
        );
        gradient.addColorStop(0, particle.color.replace("0.6", "0.3"));
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        if (particle.z < -depthRange / 2 || particle.z > depthRange / 2) {
          particle.vz *= -1;
        }
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
