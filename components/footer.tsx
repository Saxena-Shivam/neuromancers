"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Code2,
  Globe,
} from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Achievements", href: "/achievements" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Open Source", href: "/projects#opensource" },
  ],
  connect: [
    { label: "Join Us", href: "/join" },
    { label: "Contact", href: "/contact" },
    { label: "Alumni Network", href: "/alumni" },
    { label: "FAQ", href: "/faq" },
  ],
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/neuromancers-iitbbs",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/neuromancers",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/neuromancers_iitbbs",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:secyprogsoc.sg@iitbbs.ac.in", label: "Email" },
];

export function Footer() {
  const router = useRouter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/under-development");
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              The Programming Society of IIT Bhubaneswar. Empowering students to
              excel in competitive programming, machine learning, web
              development, and beyond.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Get updates on events, workshops, and opportunities.
              </p>
            </div>
            <form
              className="flex gap-2 w-full lg:w-auto"
              onSubmit={handleSubscribe}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-xs bg-secondary border-border focus:border-primary"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>IIT Bhubaneswar, Argul, Odisha 752050</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Neuromancers, IIT Bhubaneswar. All
              rights reserved.
            </p>
          </div>

          {/* Developer Credit - Attractive Section */}
          <div className="pt-6 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 flex flex-col items-center"
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green">
                  <Code2 className="h-4 w-4 text-background" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Developed by
                </p>
              </div>
              {/* Developer Card */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 w-full max-w-sm">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-green/0 to-neon-cyan/0 group-hover:from-neon-cyan/10 group-hover:via-neon-green/10 group-hover:to-neon-cyan/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-colors">
                    <Image
                      src="/profile/optimized/shivam2.webp"
                      alt="Shivam Saxena"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                    Shivam Saxena
                  </span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="h-4 w-4 text-neon-green" />
                  </motion.div>
                  {/* Social Links */}
                  <motion.a
                    href="https://portfolio-new-seven-henna.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-md bg-primary/15 hover:bg-primary/30 transition-colors"
                    title="Portfolio"
                  >
                    <Globe className="h-3.5 w-3.5 text-primary" />
                  </motion.a>
                  <motion.a
                    href="mailto:mailto:shivamsaxena562006@gmail.com"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-md bg-primary/15 hover:bg-primary/30 transition-colors"
                    title="Email"
                  >
                    <Mail className="h-3.5 w-3.5 text-primary" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Saxena-Shivam"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-md bg-primary/15 hover:bg-primary/30 transition-colors"
                    title="GitHub"
                  >
                    <Github className="h-3.5 w-3.5 text-primary" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/shivam-saxena-aa8754289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-md bg-primary/15 hover:bg-primary/30 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-primary" />
                  </motion.a>
                </div>
              </div>
              {/* Badge
              <p className="text-xs text-muted-foreground text-center">
                🚀 Website design and development • Next.js + TypeScript • v2.0
              </p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
