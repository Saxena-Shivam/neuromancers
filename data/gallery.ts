export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/team.webp",
    alt: "Society Members",
    title: "Team Meetup",
    category: "team",
  },

  {
    id: 2,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    alt: "Team meetup",
    title: "Team Building Session",
    category: "Meetup",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    alt: "Workshop session",
    title: "ML Workshop",
    category: "Workshop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    alt: "Coding competition",
    title: "CP Contest Finals",
    category: "Competition",
  },
  // {
  //   id: 5,
  //   src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  //   alt: "Guest lecture",
  //   title: "Industry Expert Talk",
  //   category: "Guest Lecture",
  // },
  // {
  //   id: 6,
  //   src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  //   alt: "Team collaboration",
  //   title: "Project Showcase",
  //   category: "Exhibition",
  // },
];
