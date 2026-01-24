import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Achievements } from "@/components/achievements";
import { ProjectsPreview } from "@/components/projects-preview";
import { EventsPreview } from "@/components/events-preview";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Achievements />
      <ProjectsPreview />
      <EventsPreview />
      <Testimonials />
    </>
  );
}
