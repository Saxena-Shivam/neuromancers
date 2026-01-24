"use client";

import React from "react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/neuromancers-iitbbs",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/neuromancers",
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/neuro_iitbbs/",
    color: "hover:text-pink-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/neuromancers_iitbbs",
    color: "hover:text-sky-500",
  },
];

const topics = [
  "General Inquiry",
  "Collaboration Opportunity",
  "Event Partnership",
  "Sponsorship",
  "Technical Query",
  "Feedback",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
      console.log("EmailJS initialized successfully");
    } else {
      console.warn(
        "EmailJS public key not found. Make sure .env.local is configured.",
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log("📧 Starting email submission...");

    try {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      console.log("🔍 Checking credentials:");
      console.log("- Public Key:", publicKey ? "✅ Set" : "❌ Missing");
      console.log("- Service ID:", serviceId ? "✅ Set" : "❌ Missing");
      console.log("- Template ID:", templateId ? "✅ Set" : "❌ Missing");

      if (!publicKey) {
        throw new Error(
          "EmailJS public key is not configured. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local",
        );
      }

      if (!serviceId || !templateId) {
        throw new Error(
          "EmailJS configuration is incomplete. Please check .env.local for SERVICE_ID and TEMPLATE_ID",
        );
      }

      const templateParams = {
        to_email: "project.developer.86@gmail.com",
        from_name: formState.name,
        from_email: formState.email,
        topic: formState.topic,
        message: formState.message,
      };

      console.log("✉️ Sending contact form email...");

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
      );

      console.log("✅ Email sent successfully!");
      console.log("Response Status:", response.status);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Show success toast
      toast.success("Message Sent!", {
        description: "Thank you for reaching out. We'll get back to you soon.",
        duration: 5000,
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          topic: "",
          message: "",
        });
      }, 2000);
    } catch (err) {
      setIsSubmitting(false);
      const errorMessage =
        err instanceof Error ? err.message : "Failed to send message";
      setError(errorMessage);
      console.error("❌ EmailJS error:", err);

      // Show error toast
      toast.error("Failed to Send", {
        description: errorMessage,
        duration: 5000,
      });
    }
  };

  return (
    <div className="pt-20 pb-16" ref={ref}>
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Contact
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground">
              Have questions? Want to collaborate? We would love to hear from
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:neuromancers@iitbbs.ac.in"
                        className="text-muted-foreground hover:text-primary transition-colors break-all dark:hover:text-primary"
                      >
                        secyprogsoc.sg@iitbbs.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Indian Institute of Technology Bhubaneswar
                        <br />
                        Argul, Jatni
                        <br />
                        Khurda - 752050, Odisha, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground transition-all hover:border-primary/50 dark:hover:text-primary ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-border h-64 sm:h-72 lg:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.8975814611336!2d85.67067831490577!3d20.14878998659428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7669b0aefb7%3A0x7f1d2d2f86d7a5cb!2sIndian%20Institute%20of%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1642345678901!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIT Bhubaneswar Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="w-full"
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-neon-green/20 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-neon-green" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. We will get back to you as
                      soon as possible.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          topic: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-card border border-border p-6 sm:p-8 w-full space-y-6"
                >
                  <h2 className="text-2xl font-bold">Send us a Message</h2>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-red-500/10 border border-red-500/50 p-4 flex gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-500">
                          Error sending message
                        </p>
                        <p className="text-sm text-red-400 mt-1">{error}</p>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic *</Label>
                    <Select
                      value={formState.topic}
                      onValueChange={(value) =>
                        setFormState((prev) => ({ ...prev, topic: value }))
                      }
                      required
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Tell us what you have in mind..."
                      rows={6}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={
                      isSubmitting ||
                      !formState.name ||
                      !formState.email ||
                      !formState.topic ||
                      !formState.message
                    }
                    className="w-full bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-12 lg:py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Looking for quick answers about Neuromancers? Check out our
              comprehensive FAQ section.
            </p>
            <Link href="/faq">
              <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-green text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-300">
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
