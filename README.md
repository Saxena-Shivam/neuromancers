# 🧠 Neuromancers - IIT Bhubaneswar

> A modern, interactive website for Neuromancers - the competitive programming and tech innovation club at IIT Bhubaneswar.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

![Neuromancers](public/logo.jpeg)

## ✨ Features

### 🏠 Core Pages

- **Home** - Dynamic hero section with animated statistics, featured projects, and achievements
- **Team** - Interactive team directory with domain-based filtering and member profiles
- **Projects** - Showcase of society projects with GitHub integration and contributor details
- **Events** - Event listings with categorization and timeline view
- **Achievements** - Timeline of major accomplishments with animations
- **Gallery** - Image gallery with optimized WebP images and category filters
- **Blog** - Coming soon - Articles and tutorials
- **Leaderboard** - Coming soon - Member rankings and statistics
- **Alumni** - Alumni network with search, batch filtering, and testimonials
- **FAQ** - Frequently asked questions with smooth accordion UI
- **Contact** - Contact form and information

### 🎨 Design & UI

- **Dark/Light Theme** - Smooth theme switching with system preference detection
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Custom Scrollbars** - Themed scrollbar styling across the application
- **Scroll Progress Bar** - Visual reading progress indicator
- **Animations** - Framer Motion animations for smooth transitions
- **Gradient Effects** - Neon cyan/green gradient accents throughout
- **Glass Morphism** - Modern glassmorphic card designs
- **Loading States** - Skeleton loaders and suspense boundaries

### 🔧 Technical Features

- **Next.js 15** - Latest App Router with React Server Components
- **TypeScript** - Full type safety across the codebase
- **Tailwind CSS** - Utility-first CSS with custom theme configuration
- **Image Optimization** - Next.js Image component with WebP format and quality settings
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Performance** - Lazy loading, code splitting, and optimized bundles
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML

### 📊 Data Management

- **Team Data** - Centralized team member data with roles and domains
  - Secretary, Governors, Domain Leads, Members
  - Competitive Programming, Web/App Development, ML/AI, System Design
- **Alumni Data** - Alumni profiles with batch, company, and achievements
- **Project Data** - Project information with tech stack and contributors
- **Achievement Data** - Society milestones with icons and descriptions
- **Gallery Data** - Curated event and team photos
- **Testimonial Integration** - Alumni testimonials pulled from alumni data

### 🎯 Interactive Components

- **Navbar** - Sticky navigation with mobile menu and theme toggle
- **Hero Section** - Animated statistics and CTA buttons
- **Team Cards** - Hover effects, domain badges, and social links
- **Project Cards** - GitHub stats integration and tech stack visualization
- **Achievement Timeline** - Scrolling timeline with framer-motion
- **Gallery Grid** - Masonry layout with first image as hero
- **FAQ Accordion** - Expandable Q&A sections
- **Newsletter Signup** - Email subscription form
- **Footer** - Comprehensive site map with developer credit

### 🔍 Enhanced User Experience

- **Search & Filter** - Alumni search by name, company, or role
- **Batch Filtering** - Filter alumni by graduation year
- **Domain Filtering** - Filter team members by expertise area
- **Empty States** - Graceful handling of no data scenarios
- **Error Handling** - User-friendly error messages
- **Loading Skeletons** - Skeleton screens during data fetching

### 🛠️ Developer Experience

- **Component Library** - Reusable UI components with shadcn/ui
- **Data Separation** - Centralized data files for easy updates
- **Type Safety** - Comprehensive TypeScript interfaces
- **Code Organization** - Clean folder structure and naming conventions
- **Version Control** - Git-based workflow with clear commits

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/neuromancers-iitbbs/website.git
cd neuromancers

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
neuromancers/
├── app/                    # Next.js App Router pages
│   ├── achievements/
│   ├── alumni/
│   ├── contact/
│   ├── events/
│   ├── faq/
│   ├── gallery/
│   ├── projects/
│   ├── team/
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   └── ...
├── data/                 # Data files
│   ├── team.ts          # Team member data
│   ├── alumni.ts        # Alumni data
│   ├── projects.ts      # Project data
│   ├── achievements.ts  # Achievement data
│   ├── gallery.ts       # Gallery images
│   └── testimonials.ts  # Testimonial data
├── lib/                 # Utility functions
├── public/              # Static assets
│   ├── profile/         # Member photos
│   ├── gallery/         # Event photos
│   └── projects/        # Project images
└── styles/             # Global styles
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui, Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Image Optimization:** Next.js Image, WebP format
- **Theme:** next-themes (dark/light mode)

## 🤝 Contributing

Contributions are welcome! To update content:

1. **Team Members** - Edit `data/team.ts`
2. **Alumni** - Edit `data/alumni.ts`
3. **Projects** - Edit `data/projects.ts`
4. **Achievements** - Edit `data/achievements.ts`
5. **Gallery** - Add images to `public/gallery/` and update `data/gallery.ts`

## 📝 License

All rights reserved © 2026 Neuromancers, IIT Bhubaneswar

## 👨‍💻 Developed By

**Shivam Saxena**

- Portfolio: [portfolio-new-seven-henna.vercel.app](https://portfolio-new-seven-henna.vercel.app/)
- GitHub: [@Saxena-Shivam](https://github.com/Saxena-Shivam)
- LinkedIn: [Shivam Saxena](https://www.linkedin.com/in/shivam-saxena-aa8754289/)
- Email: shivamsaxena562006@gmail.com

---

Built with ❤️ for Neuromancers • Next.js + TypeScript • v2.0
