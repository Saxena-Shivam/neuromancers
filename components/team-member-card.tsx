"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  domain?: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  bio?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
  variant?: "large" | "medium" | "small";
}

export function TeamMemberCard({
  member,
  index = 0,
  variant = "medium",
}: TeamMemberCardProps) {
  const sizes = {
    large: "p-8",
    medium: "p-6",
    small: "p-4",
  };

  const imageSizes = {
    large: "w-32 h-32",
    medium: "w-24 h-24",
    small: "w-16 h-16",
  };

  const cardWidths = {
    large: "w-full max-w-md mx-auto",
    medium: "w-full max-w-sm mx-auto",
    small: "w-full max-w-[260px] mx-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative ${sizes[variant]} ${cardWidths[variant]} rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Image */}
        <div
          className={`relative ${imageSizes[variant]} rounded-full overflow-hidden mb-4 ring-2 ring-border group-hover:ring-primary/50 transition-all`}
        >
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover"
            sizes={
              variant === "large"
                ? "128px"
                : variant === "medium"
                  ? "96px"
                  : "64px"
            }
            quality={80}
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Info */}
        <h3
          className={`font-semibold text-foreground group-hover:text-primary transition-colors ${
            variant === "large"
              ? "text-xl"
              : variant === "medium"
                ? "text-lg"
                : "text-base"
          }`}
        >
          {member.name}
        </h3>
        <p className="text-sm text-primary mt-1">{member.role}</p>
        {member.domain && (
          <p className="text-xs text-muted-foreground mt-0.5">
            {member.domain}
          </p>
        )}
        {member.bio && (
          <p
            className={`text-muted-foreground mt-3 leading-relaxed ${
              variant === "large" ? "text-sm" : "text-xs"
            }`}
          >
            {member.bio}
          </p>
        )}

        {/* Social links */}
        <div className="flex items-center gap-2 mt-4">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group/icon"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group/icon"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group/icon"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
            </a>
          )}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
