"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  X,
  ChevronRight,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { events, Event } from "@/data/events";
import { toast } from "sonner";

const eventGallery = [
  {
    id: 1,
    src: "/events/icpc%20_final.png",
    title: "ICPC Asia West Competition",
    type: "image",
  },
  {
    id: 2,
    src: "/events/icpc_contest.png",
    title: "ICPC Contest",
    type: "image",
  },
  {
    id: 3,
    src: "/events/roadtoicpc.png",
    title: "Road to ICPC",
    type: "image",
  },
  {
    id: 4,
    src: "/events/winter_hackathon.png",
    title: "Winter Hackathon",
    type: "image",
  },
  {
    id: 5,
    src: "/events/techzephy_contest.png",
    title: "TechZephyr Contest",
    type: "image",
  },
  {
    id: 6,
    src: "/events/cyber_security.png",
    title: "Cybersecurity Workshop",
    type: "image",
  },
];

function getEventTypeColor(type: string) {
  const colors: Record<string, string> = {
    Hackathon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Workshop: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Contest: "bg-green-500/10 text-green-500 border-green-500/20",
    Bootcamp: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    "Guest Lecture": "bg-pink-500/10 text-pink-500 border-pink-500/20",
  };
  return colors[type] || "bg-primary/10 text-primary border-primary/20";
}

function getEventCloseTimestamp(dateValue: string) {
  const yearOnly = /^\d{4}$/;
  if (yearOnly.test(dateValue.trim())) {
    return new Date(Number(dateValue), 11, 31, 23, 59, 59, 999).getTime();
  }

  const monthYear = dateValue.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const parsed = Date.parse(`1 ${dateValue}`);
    if (!Number.isNaN(parsed)) {
      const d = new Date(parsed);
      return new Date(
        d.getFullYear(),
        d.getMonth() + 1,
        0,
        23,
        59,
        59,
        999,
      ).getTime();
    }
  }

  const parsed = Date.parse(dateValue);
  if (!Number.isNaN(parsed)) {
    const d = new Date(parsed);
    return new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      23,
      59,
      59,
      999,
    ).getTime();
  }

  return null;
}

function isRegistrationClosed(event: Event) {
  if (event.status === "past") return true;

  const closeTs = getEventCloseTimestamp(event.date);
  if (closeTs === null) return false;

  return Date.now() > closeTs;
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedImage, setSelectedImage] = useState<
    (typeof eventGallery)[0] | null
  >(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");
  // Render past events newest-first; keep source array oldest-first so new items just append
  const pastEventsOrdered = [...pastEvents].reverse();
  const featuredEvent = upcomingEvents[0];

  const handleRegistrationAction = (event: Event) => {
    if (isRegistrationClosed(event)) {
      toast.error("Registration closed for this event.", {
        id: `registration-closed-${event.id}`,
        duration: 3500,
      });
      return;
    }

    if (event.registrationLink) {
      window.open(event.registrationLink, "_blank", "noreferrer");
      return;
    }

    toast.info("Registration not started yet. Please check back soon.", {
      id: `registration-pending-${event.id}`,
      duration: 3500,
    });
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
              Events
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
              Learn, Build, <span className="text-primary">Connect</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join us for workshops, hackathons, contests, and networking
              sessions to level up your skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event with Countdown */}
      {featuredEvent && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <Image
                  src={featuredEvent.image || "/placeholder.svg"}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
              </div>

              <div className="relative p-8 lg:p-12">
                <Badge className={getEventTypeColor(featuredEvent.type)}>
                  {featuredEvent.type}
                </Badge>

                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
                  {featuredEvent.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                  {featuredEvent.fullDescription || featuredEvent.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{featuredEvent.attendees}+ registered</span>
                  </div>
                </div>

                {featuredEvent.highlights && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">
                      Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredEvent.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 p-6 rounded-2xl bg-background/50 backdrop-blur max-w-md">
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Event starts in
                  </p>
                  <CountdownTimer targetDate="2026-02-15T10:00:00" />
                </div>

                <Button
                  size="lg"
                  variant={
                    isRegistrationClosed(featuredEvent) ? "outline" : "default"
                  }
                  onClick={() => handleRegistrationAction(featuredEvent)}
                  className={`mt-8 transition-all duration-300 ${
                    isRegistrationClosed(featuredEvent)
                      ? "border-destructive/50 text-destructive hover:bg-destructive/20 hover:border-destructive dark:hover:bg-destructive/30"
                      : "bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
                  }`}
                >
                  {isRegistrationClosed(featuredEvent)
                    ? "Registration Closed"
                    : "Register Now"}
                  {!isRegistrationClosed(featuredEvent) && (
                    <ChevronRight className="ml-2 h-4 w-4" />
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-12 lg:py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-bold mb-8"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(1).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="group relative rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <Badge
                    className={`absolute top-4 left-4 ${getEventTypeColor(
                      event.type,
                    )}`}
                  >
                    {event.type}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
                    {event.description}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-bold mb-8"
          >
            Past Events
          </motion.h2>
          <div className="space-y-4">
            {pastEventsOrdered.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.05 * index }}
                className="group flex gap-6 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className={`${getEventTypeColor(event.type)} text-xs`}
                    >
                      {event.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1 group-hover:text-foreground transition-colors">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees}+ attended</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-12 lg:py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl font-bold mb-8"
          >
            Event Gallery
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {eventGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 * index }}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.type === "video" ? (
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="h-5 w-5 text-primary-foreground ml-1" />
                    </div>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-background/90 text-sm font-medium">
                      {item.title}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <Badge className={getEventTypeColor(selectedEvent.type)}>
                  {selectedEvent.type}
                </Badge>
                <h2 className="mt-4 text-2xl font-bold">
                  {selectedEvent.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {selectedEvent.fullDescription || selectedEvent.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      {selectedEvent.attendees}+{" "}
                      {selectedEvent.status === "past"
                        ? "attended"
                        : "registered"}
                    </span>
                  </div>
                </div>

                {selectedEvent.highlights && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-4 w-4 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedEvent.status !== "past" && (
                  <Button
                    onClick={() => handleRegistrationAction(selectedEvent)}
                    variant={
                      isRegistrationClosed(selectedEvent)
                        ? "outline"
                        : "default"
                    }
                    className={`mt-6 w-full transition-all duration-300 ${
                      isRegistrationClosed(selectedEvent)
                        ? "border-destructive/50 text-destructive hover:bg-destructive/20 hover:border-destructive dark:hover:bg-destructive/30"
                        : "bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
                    }`}
                  >
                    {isRegistrationClosed(selectedEvent)
                      ? "Registration Closed"
                      : "Register Now"}
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <p className="text-center mt-4 text-lg font-medium">
                {selectedImage.title}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
