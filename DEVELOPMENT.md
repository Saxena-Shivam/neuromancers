# 📚 Neuromancers - Development & Maintenance Guide

Comprehensive guide for maintaining and developing the Neuromancers website.

---

## Table of Contents

- [📁 Project Structure](#-project-structure)
- [📚 Data Management](#-data-management)
- [🔧 Common Tasks](#-common-tasks)
- [🛠️ Development](#️-development)
- [🐛 Troubleshooting](#-troubleshooting)
- [📋 Checklists](#-checklists)

---

## 📁 Project Structure

```
neuromancers/
├── app/                      # Next.js App Router
│   ├── achievements/
│   ├── alumni/
│   ├── blog/
│   ├── contact/
│   ├── events/
│   ├── faq/
│   ├── gallery/
│   ├── projects/
│   ├── team/
│   ├── under-development/
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── achievements.tsx
│   ├── gallery.tsx
│   ├── testimonials.tsx
│   └── ...
├── data/                     # ⭐ CENTRALIZED DATA FILES
│   ├── team.ts              # Team members, governors, leads
│   ├── alumni.ts            # Alumni profiles
│   ├── projects.ts          # Projects with contributors
│   ├── achievements.ts      # Achievement timeline
│   ├── gallery.ts           # Gallery images
│   ├── blog.ts              # Blog posts
│   └── testinomials.ts      # Testimonials (deprecated - use alumni)
├── lib/                      # Utilities
├── public/                   # Static assets
│   ├── profile/optimized/   # Member photos (WebP)
│   ├── gallery/             # Event photos (WebP)
│   └── projects/            # Project images
├── next.config.ts           # Image quality settings
├── tailwind.config.ts       # Theme configuration
└── package.json
```

---

## 📚 Data Management

### ⭐ GOLDEN RULE

**ALL content lives in `/data/` folder - NEVER hardcode data in components!**

### Team Data (`data/team.ts`)

**Structure:**

```typescript
export const secretary: TeamMember = { ... }
export const governors: TeamMember[] = [ ... ]
export const domainLeads: DomainLeadGroup[] = [
  {
    category: "Competitive Programming",
    members: [ ... ]
  },
  {
    category: "Web Development",
    members: [ ... ]
  },
  // ... more categories
]
export const members: TeamMember[] = [ ... ]
export const alumni: TeamMember[] = [ ... ]
```

**Member Object Structure:**

```typescript
{
  id: 1,                    // Unique, sequential (1, 2, 3, ...)
  name: "John Doe",
  role: "Member",
  domain: "Competitive Programming (CP) Web Development",
  image: "/profile/optimized/john.webp",  // MUST be WebP!
  email: "john@iitbbs.ac.in",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  bio: "Brief biography"
}
```

**Image Guidelines:**

- Format: WebP only (`.webp`)
- Location: `/public/profile/optimized/`
- Naming: `firstname lastname.webp` or `photo - Full Name.webp`
- Quality: Optimized for web

### Alumni Data (`data/alumni.ts`)

**Structure:**

```typescript
export interface Alumni {
  id: number;
  name: string;
  image: string;
  batch: string; // Graduation year like "2020"
  branch: string;
  role: string;
  company: string;
  location: string;
  linkedin: string;
  achievements: string[];
  testimonial?: string; // Optional - AUTO-shows in testimonials!
}

export const alumniData: Alumni[] = [
  {
    id: 1,
    name: "Jane Smith",
    batch: "2020",
    company: "Google",
    role: "SDE",
    location: "Mountain View, CA",
    achievements: ["ICPC Winner", "GSoC Mentor"],
    testimonial: "Neuromancers was instrumental in my success...",
  },
];
```

**Key Point:** If a testimonial is included, it auto-appears in the testimonials component on the home page!

### Blog Data (`data/blog.ts`)

**Structure:**

```typescript
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorImage: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Dynamic Programming Mastery",
    excerpt: "Learn DP patterns that solve 90% of problems",
    author: "Rahul Verma",
    featured: true,
    // ... more fields
  },
];
```

**Empty State:** If `blogPosts` is empty, users see: "No articles available yet"

**Categories:** Machine Learning, Competitive Programming, Web Development, App Development, etc.

### Achievements Data (`data/achievements.ts`)

**Structure:**

```typescript
export interface AchievementItem {
  title: string;
  description: string;
  type: string; // Category
  icon: AchievementIcon; // lucide-react icon
  date: string;
  team?: string[]; // Optional team members
}

export interface AchievementYearGroup {
  year: string;
  items: AchievementItem[];
}

export const achievements: AchievementYearGroup[] = [
  {
    year: "2022",
    items: [
      {
        title: "ICPC Asia West Finalists",
        description: "Qualified for regional competition",
        type: "Competition",
        icon: Trophy,
        date: "December 2022",
        team: ["Member 1", "Member 2", "Member 3"],
      },
    ],
  },
];
```

**Available Icons:** `Trophy`, `Award`, `Star`, `Medal`, `GitBranch`, `FileText`

**Import icons:**

```typescript
import { Trophy, Award, Medal } from "lucide-react";
```

### Gallery Data (`data/gallery.ts`)

**Structure:**

```typescript
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
    alt: "Team at event",
    title: "Team Meetup",
    category: "Team",
  },
];
```

**Important:** The first image (id: 1) becomes the hero image on the gallery page!

**Image Requirements:**

- Format: WebP
- Location: `/public/gallery/`
- Quality: Optimized for web

---

## 🔧 Common Tasks

### ✅ Add a New Team Member

**Step 1:** Get a WebP image

- Take/get photo
- Convert to WebP: `ffmpeg -i photo.jpg -c:v libwebp -quality 80 photo.webp`
- Save to `/public/profile/optimized/`

**Step 2:** Edit `data/team.ts`

```typescript
{
  id: 25,  // Next sequential ID
  name: "Alice Johnson",
  role: "Member",
  domain: "Web Development Machine Learning / AI",
  image: "/profile/optimized/alice.webp",
  email: "alice@iitbbs.ac.in",
  linkedin: "https://linkedin.com/in/alicejohnson",
  github: "https://github.com/alicejohnson",
  bio: "Passionate about web development and AI"
}
```

**Step 3:** Choose right section

- `secretary` - Single person
- `governors` - Array of governors
- `domainLeads` - Add to appropriate category
- `members` - General members

**Step 4:** Restart server

```bash
npm run dev
```

### ✅ Update Alumni Profile

**Step 1:** Open `data/alumni.ts`

**Step 2:** Add or edit alumni object

```typescript
{
  id: 1,
  name: "Priya Sharma",
  batch: "2020",
  company: "Microsoft",
  role: "Senior Engineer",
  location: "Redmond, WA",
  achievements: ["Azure Core Team", "Speaker at Build"],
  testimonial: "The competitive programming culture at Neuromancers..."
}
```

**Step 3:** Save and refresh

**Important:** Include `testimonial` for featured section on home page!

### ✅ Add Blog Post

**Step 1:** Open `data/blog.ts`

**Step 2:** Add new post

```typescript
{
  id: 3,
  title: "Web Performance Optimization",
  excerpt: "Tips and tricks for faster websites",
  author: "Prashant Sharma",
  authorImage: "https://images.unsplash.com/...",
  date: "Jan 25, 2026",
  readTime: "8 min read",
  category: "Web Development",
  tags: ["Performance", "Next.js", "Optimization"],
  image: "https://images.unsplash.com/...",
  featured: true  // Shows in featured section
}
```

**Step 3:** Blog auto-updates with empty state handling

### ✅ Add Achievement

**Step 1:** Open `data/achievements.ts`

**Step 2:** Add to existing year or create new

```typescript
{
  year: "2024",
  items: [
    {
      title: "Smart India Hackathon Winners",
      description: "Won SIH with AI healthcare solution",
      type: "Hackathon",
      icon: Award,
      date: "August 2024",
      team: ["Sneha Patel", "Amit Kumar", "Neha Gupta"]
    }
  ]
}
```

**Step 3:** Timeline auto-updates

### ✅ Update Gallery

**Step 1:** Convert image to WebP

```bash
ffmpeg -i event.jpg -c:v libwebp -quality 80 event.webp
```

**Step 2:** Save to `/public/gallery/`

**Step 3:** Update `data/gallery.ts`

```typescript
{
  id: 5,
  src: "/gallery/event.webp",
  alt: "Workshop event",
  title: "Machine Learning Workshop",
  category: "Workshop"
}
```

**Step 4:** Gallery auto-updates (first image = hero)

---

## 🛠️ Development

### Adding a New Page

**Step 1:** Create page folder and file

```bash
mkdir app/mynewpage
touch app/mynewpage/page.tsx
```

**Step 2:** Create component

```typescript
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function MyNewPage() {
  return (
    <div className="pt-20">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Page Title</h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

**Step 3:** Add navigation links

- Open `components/navbar.tsx`
- Add link in navigation array
- Do the same in `components/footer.tsx`

### Adding a Component

```typescript
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export function AchievementCard({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors"
    >
      <Trophy className="h-6 w-6 text-primary mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </motion.div>
  );
}
```

### Type-Safe Development

Always define interfaces:

```typescript
interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: "Member" | "Governor" | "Lead";
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  featured?: boolean;
}
```

### Styling Rules

- **Framework:** Tailwind CSS utility classes
- **Primary Colors:** `from-neon-cyan to-neon-green`
- **Dark Mode:** Always test both themes with toggle
- **Responsive:** Mobile-first (base styles for mobile, then `md:`, `lg:`)
- **Animations:** Use Framer Motion for interactive elements

**Example:**

```typescript
className =
  "px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green text-background hover:opacity-90 md:px-6 md:py-3 lg:text-lg";
```

---

## 🐛 Troubleshooting

### ❌ Images not showing

**Problem:** Images display as broken or don't load

**Solutions:**

1. Check path uses `/` prefix: `/gallery/image.webp` ✓ (not `./gallery/image.webp`)
2. Verify image exists in `/public/` folder
3. Ensure format is WebP (`.webp`), not JPG or PNG
4. Clear Next.js cache: `rm -rf .next`
5. Restart dev server: `npm run dev`

### ❌ Data not rendering on page

**Problem:** Page shows empty or undefined values

**Solutions:**

1. Check data file syntax is valid TypeScript
2. Verify export statements: `export const dataName = [...];`
3. Check component imports data correctly: `import { data } from "@/data/file"`
4. Check console (F12 → Console tab) for errors
5. Run type-check: `npm run type-check`
6. Restart server: `npm run dev`

### ❌ Image quality warnings

**Problem:** Console warning about unconfigured image qualities

**Solution:**
Image quality settings in `next.config.ts`:

```typescript
images: {
  qualities: [75, 80, 85],  // Supported qualities
}
```

Use appropriate quality when using Image component:

```typescript
<Image quality={80} ... />
```

### ❌ Styles not applying

**Problem:** Tailwind CSS classes not working

**Solutions:**

1. Check class name is spelled correctly
2. Verify `tailwind.config.ts` includes `app/` paths
3. Check `globals.css` has no conflicting styles
4. Restart dev server
5. Clear Next.js cache: `rm -rf .next`

### ❌ Build errors

**Problem:** Build fails with errors

**Solutions:**

```bash
# Full clean rebuild
rm -rf .next node_modules
npm install
npm run build
```

### ❌ TypeScript errors

**Problem:** TypeScript compilation errors

**Solutions:**

```bash
# Check all errors
npm run type-check

# Or just build
npm run build

# Fix reported errors, then rebuild
```

---

## 📋 Checklists

### Pre-Deploy Checklist

Before pushing to production:

- [ ] All team member IDs are unique (1, 2, 3, ... no duplicates)
- [ ] All images are WebP format (not JPG or PNG)
- [ ] All external links (LinkedIn, GitHub) are valid
- [ ] Blog posts have featured images and excerpts
- [ ] Achievements have valid icon types (Trophy, Award, etc.)
- [ ] Gallery images are WebP and in correct folder
- [ ] No TypeScript errors: `npm run type-check`
- [ ] No console errors (F12 → Console)
- [ ] Tested on mobile devices
- [ ] Dark/light theme switching works
- [ ] All navigation links work
- [ ] Alumni with testimonials show in featured section

### Adding New Member Workflow

1. ☐ Get WebP image (optimize if needed)
2. ☐ Save to `/public/profile/optimized/`
3. ☐ Edit `data/team.ts`
4. ☐ Add object with sequential ID
5. ☐ Choose correct section (member, lead, governor, secretary)
6. ☐ Test: `npm run dev`
7. ☐ Verify image displays
8. ☐ Check domain filtering works
9. ☐ Test on mobile

### Blog Post Publishing Workflow

1. ☐ Write content
2. ☐ Add to `data/blog.ts`
3. ☐ Set author and date
4. ☐ Add featured image (WebP recommended)
5. ☐ Write excerpt (2-3 sentences)
6. ☐ Set category (existing categories preferred)
7. ☐ Add relevant tags
8. ☐ Set `featured: true` if priority
9. ☐ Test: `npm run dev`
10. ☐ Verify rendering
11. ☐ Check links work

### Image Conversion Guide

**Using FFmpeg:**

```bash
# Convert JPG to WebP with quality 80
ffmpeg -i photo.jpg -c:v libwebp -quality 80 photo.webp

# Batch convert multiple images
for f in *.jpg; do ffmpeg -i "$f" -c:v libwebp -quality 80 "${f%.jpg}.webp"; done
```

**Online tools:**

- [CloudConvert](https://cloudconvert.com/)
- [Convertio](https://convertio.co/)
- [Zamzar](https://www.zamzar.com/)

---

## 📊 Performance Tips

1. **Use WebP images** - 25% smaller than JPG
2. **Lazy load images** - Next.js Image component does this
3. **Optimize animations** - Don't animate on every scroll
4. **Code split** - Next.js does this automatically
5. **Tree-shake unused code** - Remove unused imports

---

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Built with ❤️ for Neuromancers • Next.js 15 + TypeScript • v2.0
