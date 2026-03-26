"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { Event as EventType } from "@/data/events";
import { events } from "@/data/events";

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

function isRegistrationClosed(event: EventType) {
  if (event.status === "past") return true;

  const closeTs = getEventCloseTimestamp(event.date);
  if (closeTs === null) return false;

  return Date.now() > closeTs;
}

export function EventsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get newest-first lists, showing up to 4 items each
  const { upcomingPreview, pastPreview } = useMemo(() => {
    const upcoming = events.filter((e) => e.status === "upcoming");
    const past = events.filter((e) => e.status === "past");

    return {
      upcomingPreview: [...upcoming].reverse().slice(0, 4), // newest upcoming first
      pastPreview: past.slice(-4).reverse(), // take last 4 past, show newest first
    };
  }, []);

  const handleRegisterClick = (event: EventType) => {
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
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Events
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Join us for workshops, hackathons, contests, and networking
              sessions.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 self-start md:self-auto bg-transparent"
          >
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Events grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {upcomingPreview.length > 0 ? (
            upcomingPreview.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Event type badge */}
                <Badge
                  variant="outline"
                  className={getEventTypeColor(event.type)}
                >
                  {event.type}
                </Badge>

                {/* Content */}
                <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                {/* Meta info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.attendees}+ attending</span>
                  </div>
                </div>

                {/* Register button */}
                <Button
                  variant={isRegistrationClosed(event) ? "outline" : "default"}
                  onClick={() => handleRegisterClick(event)}
                  className={`mt-6 w-full transition-all duration-300 ${
                    isRegistrationClosed(event)
                      ? "border-destructive/50 text-destructive hover:bg-destructive/20 hover:border-destructive dark:hover:bg-destructive/30"
                      : "bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90"
                  }`}
                >
                  {isRegistrationClosed(event)
                    ? "Registration Closed"
                    : "Register Now"}
                </Button>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <p className="text-lg text-muted-foreground">
                No events are available
              </p>
            </div>
          )}
        </div>

        {/* Past events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Recent Events
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pastPreview.map((event) => (
              <div
                key={event.id}
                className="p-4 rounded-xl bg-card/50 border border-border flex items-center gap-4"
              >
                <div className="flex-shrink-0">
                  <Badge
                    variant="outline"
                    className={`${getEventTypeColor(event.type)} opacity-70`}
                  >
                    {event.type}
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.date} • {event.attendees}+ attended
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
