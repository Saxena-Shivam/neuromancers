"use client";

import React from "react"

import { useState, useRef } from "react";
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
} from "lucide-react";
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
    url: "https://linkedin.com/company/neuromancers-iitbbs",
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/neuromancers_iitbbs",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20" ref={ref}>
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
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Have questions? Want to collaborate? We would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:neuromancers@iitbbs.ac.in"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        neuromancers@iitbbs.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">
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
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground transition-all hover:border-primary/50 ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-border h-64 lg:h-80">
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
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-neon-green/20 flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-neon-green" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. We will get back to you as soon
                      as possible.
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
                  className="rounded-2xl bg-card border border-border p-6 lg:p-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-12 lg:py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for quick answers? Check out our FAQ section or reach out to
              us directly.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="rounded-xl bg-background border border-border p-6">
                <h3 className="font-semibold mb-2">How can I join?</h3>
                <p className="text-sm text-muted-foreground">
                  Visit our Join Us page and fill out the application form. We
                  recruit new members every semester.
                </p>
              </div>
              <div className="rounded-xl bg-background border border-border p-6">
                <h3 className="font-semibold mb-2">Can non-CSE students join?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We welcome students from all branches who are
                  passionate about programming.
                </p>
              </div>
              <div className="rounded-xl bg-background border border-border p-6">
                <h3 className="font-semibold mb-2">Do you offer mentorship?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Senior members mentor juniors in their chosen domains
                  through regular sessions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
