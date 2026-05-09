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

interface BrightStar {
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
  baseAlpha: number;
  glowScale: number;
}

interface SolarSystem {
  x: number;
  y: number;
  starRadius: number;
  orbitRadius: number;
  planetRadius: number;
  orbitSpeed: number;
  angle: number;
  starColor: string;
  planetColor: string;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const themeRef = useRef<"dark" | "light">("dark");
  const particlesRef = useRef<Particle[]>([]);
  const brightStarsRef = useRef<BrightStar[]>([]);
  const solarSystemsRef = useRef<SolarSystem[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const depthRange = 420;
    const fov = 700;
    const particleSpeedMultiplier = 2.8;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const setThemeMode = () => {
      themeRef.current = mediaQuery.matches ? "dark" : "light";
    };
    setThemeMode();

    const getPalette = () => {
      if (themeRef.current === "light") {
        return {
          particleColors: [
            "rgba(14, 116, 144, 0.34)",
            "rgba(30, 64, 175, 0.28)",
            "rgba(51, 65, 85, 0.3)",
          ],
          starTemperaturePalette: [
            "248, 250, 252",
            "241, 245, 249",
            "226, 232, 240",
            "191, 219, 254",
          ],
          nebulaA: "rgba(14, 165, 233, 0.035)",
          nebulaB: "rgba(99, 102, 241, 0.03)",
          orbitStroke: "rgba(51, 65, 85, 0.12)",
          lineColor: "rgba(15, 23, 42, 0.14)",
          mouseLineColor: "rgba(14, 116, 144, 0.2)",
          solarStar: "rgba(255, 255, 255, 0.9)",
          solarPlanet: "rgba(59, 130, 246, 0.56)",
          particleGlowAlpha: "0.18",
          sunlightCore: "rgba(229, 197, 34, 0.24)",
          sunlightRay: "rgba(227, 172, 52, 0.09)",
        };
      }

      return {
        particleColors: [
          "rgba(0, 255, 255, 0.6)",
          "rgba(0, 255, 136, 0.6)",
          "rgba(100, 149, 237, 0.6)",
        ],
        starTemperaturePalette: [
          "255, 244, 234",
          "255, 250, 244",
          "248, 252, 255",
          "221, 235, 255",
        ],
        nebulaA: "rgba(34, 211, 238, 0.08)",
        nebulaB: "rgba(167, 139, 250, 0.07)",
        orbitStroke: "rgba(148, 163, 184, 0.16)",
        lineColor: "rgba(0, 255, 255, 0.15)",
        mouseLineColor: "rgba(0, 255, 136, 0.3)",
        solarStar: "rgba(255, 244, 214, 0.95)",
        solarPlanet: "rgba(125, 211, 252, 0.8)",
        particleGlowAlpha: "0.3",
        sunlightCore: "rgba(255, 248, 214, 0)",
        sunlightRay: "rgba(255, 241, 184, 0)",
      };
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 15));
      const palette = getPalette();

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: (Math.random() - 0.5) * depthRange,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
          color:
            palette.particleColors[
              Math.floor(Math.random() * palette.particleColors.length)
            ],
        });
      }
      particlesRef.current = particles;
    };

    const createUniverseDecor = () => {
      const palette = getPalette();
      const brightStars: BrightStar[] = [];
      const starCount = Math.min(55, Math.floor(window.innerWidth / 28));
      const starTemperaturePalette = palette.starTemperaturePalette;

      for (let i = 0; i < starCount; i++) {
        const isLargeStar = Math.random() > 0.84;
        const starColor =
          starTemperaturePalette[
            Math.floor(Math.random() * starTemperaturePalette.length)
          ];
        brightStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isLargeStar
            ? Math.random() * 1.1 + 1.2
            : Math.random() * 0.9 + 0.35,
          twinkleSpeed: Math.random() * 0.95 + 0.25,
          phase: Math.random() * Math.PI * 2,
          color: starColor,
          baseAlpha: Math.random() * 0.3 + 0.6,
          glowScale: Math.random() * 1.4 + 2.8,
        });
      }

      const solarSystems: SolarSystem[] = [];
      for (let i = 0; i < 2; i++) {
        solarSystems.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          starRadius: Math.random() * 3 + 2,
          orbitRadius: Math.random() * 24 + 24,
          planetRadius: Math.random() * 2.2 + 1.4,
          orbitSpeed: Math.random() * 0.018 + 0.008,
          angle: Math.random() * Math.PI * 2,
          starColor: palette.solarStar,
          planetColor: palette.solarPlanet,
        });
      }

      brightStarsRef.current = brightStars;
      solarSystemsRef.current = solarSystems;
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
      const palette = getPalette();
      const particles = particlesRef.current;
      const projectedParticles = particles.map(projectParticle);
      const now = performance.now() * 0.001;

      // Nebula haze
      const nebulaA = ctx.createRadialGradient(
        canvas.width * 0.18,
        canvas.height * 0.22,
        0,
        canvas.width * 0.18,
        canvas.height * 0.22,
        Math.max(canvas.width, canvas.height) * 0.45,
      );
      nebulaA.addColorStop(0, palette.nebulaA);
      nebulaA.addColorStop(1, "transparent");
      ctx.fillStyle = nebulaA;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebulaB = ctx.createRadialGradient(
        canvas.width * 0.82,
        canvas.height * 0.72,
        0,
        canvas.width * 0.82,
        canvas.height * 0.72,
        Math.max(canvas.width, canvas.height) * 0.42,
      );
      nebulaB.addColorStop(0, palette.nebulaB);
      nebulaB.addColorStop(1, "transparent");
      ctx.fillStyle = nebulaB;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Soft sunlight beams for light mode.
      if (themeRef.current === "light") {
        const sourceX =
          canvas.width * (0.06 + Math.sin(now * 0.2) * 0.008) +
          (mouseRef.current.x / canvas.width - 0.5) * 10;
        const sourceY =
          canvas.height * (0.03 + Math.cos(now * 0.18) * 0.006) +
          (mouseRef.current.y / canvas.height - 0.5) * 6;

        const sunCoreGradient = ctx.createRadialGradient(
          sourceX,
          sourceY,
          0,
          sourceX,
          sourceY,
          Math.max(canvas.width, canvas.height) * 0.24,
        );
        sunCoreGradient.addColorStop(0, palette.sunlightCore);
        sunCoreGradient.addColorStop(1, "transparent");
        ctx.fillStyle = sunCoreGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const beamCount = 6;
        for (let i = 0; i < beamCount; i++) {
          const drift = Math.sin(now * 0.24 + i * 0.9) * 0.03;
          const targetX =
            canvas.width * (0.24 + i * 0.12) +
            Math.sin(now * 0.16 + i * 0.6) * canvas.width * 0.02;
          const targetY = canvas.height * (0.2 + i * 0.1 + drift);
          const direction = Math.atan2(targetY - sourceY, targetX - sourceX);
          const spread = canvas.width * (0.04 + i * 0.01);
          const normalX = Math.cos(direction + Math.PI / 2);
          const normalY = Math.sin(direction + Math.PI / 2);

          const leftX = targetX + normalX * spread;
          const leftY = targetY + normalY * spread;
          const rightX = targetX - normalX * spread;
          const rightY = targetY - normalY * spread;

          const beamGradient = ctx.createLinearGradient(
            sourceX,
            sourceY,
            targetX,
            targetY,
          );
          beamGradient.addColorStop(0, palette.sunlightRay);
          beamGradient.addColorStop(1, "transparent");

          ctx.fillStyle = beamGradient;
          ctx.beginPath();
          ctx.moveTo(sourceX, sourceY);
          ctx.lineTo(leftX, leftY);
          ctx.lineTo(rightX, rightY);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Bright stars with twinkle
      for (const star of brightStarsRef.current) {
        const twinkle =
          0.88 + 0.12 * Math.sin(now * star.twinkleSpeed + star.phase);
        const coreAlpha = Math.max(0.25, Math.min(1, star.baseAlpha * twinkle));
        const starGlow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * star.glowScale,
        );
        starGlow.addColorStop(0, `rgba(${star.color}, ${0.2 * coreAlpha})`);
        starGlow.addColorStop(1, "transparent");
        ctx.fillStyle = starGlow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.glowScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${star.color}, ${coreAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle diffraction spikes only for larger stars.
        if (star.size > 1.2) {
          const spikeLength = star.size * 3;
          ctx.strokeStyle = `rgba(${star.color}, ${0.22 * coreAlpha})`;
          ctx.lineWidth = 0.6;

          ctx.beginPath();
          ctx.moveTo(star.x - spikeLength, star.y);
          ctx.lineTo(star.x + spikeLength, star.y);
          ctx.moveTo(star.x, star.y - spikeLength);
          ctx.lineTo(star.x, star.y + spikeLength);
          ctx.stroke();
        }
      }

      // Tiny solar systems
      for (const system of solarSystemsRef.current) {
        ctx.strokeStyle = palette.orbitStroke;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.arc(system.x, system.y, system.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();

        const orbitX = system.x + Math.cos(system.angle) * system.orbitRadius;
        const orbitY = system.y + Math.sin(system.angle) * system.orbitRadius;

        ctx.fillStyle = system.starColor;
        ctx.beginPath();
        ctx.arc(system.x, system.y, system.starRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = system.planetColor;
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, system.planetRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = projectedParticles[i].x - projectedParticles[j].x;
          const dy = projectedParticles[i].y - projectedParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            const lineOpacity =
              parseFloat(
                palette.lineColor.match(/,\s*([0-9.]+)\)$/)?.[1] || "0.15",
              ) *
              (1 - distance / 150);
            ctx.strokeStyle = palette.lineColor.replace(
              /,\s*[0-9.]+\)$/,
              `, ${lineOpacity})`,
            );
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
          const mouseLineOpacity =
            parseFloat(
              palette.mouseLineColor.match(/,\s*([0-9.]+)\)$/)?.[1] || "0.3",
            ) *
            (1 - mDistance / 200);
          ctx.strokeStyle = palette.mouseLineColor.replace(
            /,\s*[0-9.]+\)$/,
            `, ${mouseLineOpacity})`,
          );
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
        gradient.addColorStop(
          0,
          particle.color.replace(
            /,\s*[0-9.]+\)$/,
            `, ${palette.particleGlowAlpha})`,
          ),
        );
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      for (const particle of particles) {
        particle.x += particle.vx * particleSpeedMultiplier;
        particle.y += particle.vy * particleSpeedMultiplier;
        particle.z += particle.vz * particleSpeedMultiplier;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        if (particle.z < -depthRange / 2 || particle.z > depthRange / 2) {
          particle.vz *= -1;
        }
      }

      for (const system of solarSystemsRef.current) {
        system.angle += system.orbitSpeed;
      }
    };

    let animationFrameId = 0;
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resize();
      createParticles();
      createUniverseDecor();
    };

    const handleThemeChange = () => {
      setThemeMode();
      createParticles();
      createUniverseDecor();
    };

    resize();
    createParticles();
    createUniverseDecor();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleThemeChange);
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
