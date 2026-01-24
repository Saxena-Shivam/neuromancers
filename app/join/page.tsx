"use client";

import React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Mail,
  Users,
  Target,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const sponsorshipTiers = [
  {
    id: "platinum",
    name: "Platinum",
    amount: "₹5,00,000+",
    benefits: [
      "Title sponsorship of major events",
      "Booth at all events",
      "Featured placement in all collaterals",
      "4 internship opportunities",
      "Keynote slot at summit",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    amount: "₹2,50,000 - ₹4,99,999",
    benefits: [
      "Co-sponsorship of major events",
      "Booth at 3+ events",
      "Logo on website and materials",
      "2 internship opportunities",
      "Workshop opportunity",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    amount: "₹1,00,000 - ₹2,49,999",
    benefits: [
      "Sponsorship of specific events",
      "Booth at 2 events",
      "Logo on website",
      "1 internship opportunity",
    ],
  },
  {
    id: "bronze",
    name: "Bronze",
    amount: "Below ₹1,00,000",
    benefits: [
      "Event sponsorship",
      "Logo on website",
      "Event booth opportunity",
    ],
  },
];

export default function ReachOutPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "", // "sponsor", "partnership", "recruitment", "other"
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        phone: formState.phone || "Not provided",
        company: formState.company,
        inquiry_type: formState.type,
        message: formState.message,
      };

      // console.log("📝 Template Parameters:", templateParams);
      // console.log("🚀 Sending email with Service ID:", serviceId);
      // console.log("🚀 Template ID:", templateId);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
      );

      console.log("✅ Email sent successfully!");
      // console.log("Response Status:", response.status);
      // console.log("Response Text:", response.text);

      setIsSubmitting(false);

      // Show success toast
      toast.success("Message Sent!", {
        description: "Thank you for reaching out. We'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        type: "",
        message: "",
      });
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
              Connect With Us
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Reach Out to <span className="text-primary">Neuromancers</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Interested in sponsoring our events? Have a partnership
              opportunity? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sponsorship Tiers
            </h2>
            <p className="text-muted-foreground">
              Choose the tier that suits your organization
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-primary text-lg font-semibold mb-6">
                  {tier.amount}
                </p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-neon-green flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-lg bg-red-500/10 border border-red-500/50 p-4 flex gap-3"
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
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="rounded-2xl bg-card border border-border p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
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
                  <Label htmlFor="email">Email Address *</Label>
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
                    placeholder="your.email@company.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+91 9XXXXXXXXX"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization *</Label>
                  <Input
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    placeholder="Your company name"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Inquiry Type */}
            <div className="rounded-2xl bg-card border border-border p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Type of Inquiry *
              </h2>
              <div className="space-y-3">
                {[
                  { value: "sponsor", label: "Sponsorship Opportunity" },
                  { value: "partnership", label: "Partnership/Collaboration" },
                  { value: "recruitment", label: "Recruitment" },
                  { value: "other", label: "Other" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="type"
                      value={option.value}
                      checked={formState.type === option.value}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="rounded-2xl bg-card border border-border p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Your Message
              </h2>
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
                  placeholder="Tell us about your interest in sponsoring or partnering with Neuromancers..."
                  rows={6}
                  required
                  className="bg-background resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={
                isSubmitting ||
                !formState.name ||
                !formState.email ||
                !formState.company ||
                !formState.type ||
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
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
