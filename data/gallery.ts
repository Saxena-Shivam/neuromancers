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
    category: "Team",
  },

  {
    id: 2,
    alt: "ICPC Finalists",
    src: "/gallery/cyber.webp",
    title: "Cyber Security Workshop",
    category: "Workshop",
  },
  {
    id: 3,
    src: "/gallery/asia_west.webp",
    alt: "ICPC Finalists",
    title: "ICPC Regional Finals",
    category: "Competition",
  },
  {
    id: 4,
    src: "/gallery/icpc _final.webp",
    alt: "Competitive Programming Contest",
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
