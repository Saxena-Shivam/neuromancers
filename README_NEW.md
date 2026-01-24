# 🧠 Neuromancers - IIT Bhubaneswar

> A modern, interactive website for Neuromancers - the competitive programming and tech innovation club at IIT Bhubaneswar.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **🎨 Modern & Responsive Design** - Beautiful UI built with Tailwind CSS and Radix UI components
- **🎬 Smooth Animations** - Framer Motion-powered page transitions and interactive elements
- **📧 Email Integration** - EmailJS for sponsorship inquiries and contact forms
- **🌓 Dark Mode Support** - Seamless light/dark theme switching with next-themes
- **📱 Mobile Optimized** - Fully responsive across all devices
- **⚡ High Performance** - Server components, optimization, and fast load times
- **🎯 SEO Ready** - Next.js built-in SEO features and metadata
- **🔒 Type Safe** - Full TypeScript support for better development experience

## 📋 Pages & Sections

- **Home** - Hero section with about, gallery, achievements, projects, events, and testimonials
- **Events** - Showcase of club events and activities
- **Projects** - Featured projects and initiatives
- **Blog** - Articles and insights from club members
- **Achievements** - Awards, recognitions, and milestones
- **Join/Reach Out** - Sponsorship inquiry form with professional design
- **Contact** - Multiple ways to connect with the club

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18+** - Latest React features

### Styling & UI

- **Tailwind CSS 3** - Utility-first CSS framework
- **Radix UI** - Headless component library
- **Framer Motion** - Advanced animations

### Features & Services

- **EmailJS** - Email sending service for forms
- **Sonner** - Toast notifications
- **next-themes** - Dark mode support
- **lucide-react** - Icon library
- **react-hook-form** - Form management

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vercel** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Neuromancers/neuromancers-website.git
cd neuromancers
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env.local` file with EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed EmailJS configuration guide.

4. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
neuromancers/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with theme & navbar
│   ├── globals.css        # Global styles
│   ├── achievements/      # Achievements page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── join/              # Sponsorship/Reach out form
│   └── projects/          # Projects page
├── components/            # Reusable React components
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer with developer credits
│   ├── go-to-top.tsx     # Scroll-to-top button
│   └── ui/               # Radix UI components
├── lib/                   # Utility functions
├── public/                # Static assets
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
```

## 🎨 Color Scheme

The project uses a custom color palette with neon theme:

- **Neon Cyan** - Primary accent color
- **Neon Green** - Secondary accent
- **Neon Blue** - Tertiary accent
- **Dark Background** - Modern dark theme support

Colors are defined as CSS variables in `app/globals.css`

## 🔧 Configuration

### EmailJS Setup

The join page uses EmailJS for sending sponsorship inquiries. To enable:

1. Visit [emailjs.com](https://www.emailjs.com) and create an account
2. Set up an Email Service (Gmail recommended)
3. Create an Email Template with variables: `{{to_email}}`, `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{company}}`, `{{inquiry_type}}`, `{{message}}`
4. Add credentials to `.env.local`

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for step-by-step guide.

### Theme Customization

Update colors in `app/globals.css`:

```css
:root {
  --neon-cyan: 180 100% 50%;
  --neon-green: 120 100% 50%;
  --neon-blue: 240 100% 50%;
  /* ... more variables */
}
```

## 📧 Contact & Support

**Website**: [neuromancers.iitbbs.ac.in](https://neuromancers.iitbbs.ac.in)

**Email**: contact@iitbbs.ac.in

**Location**: IIT Bhubaneswar, Argul, Odisha 752050

**Social Media**:

- [GitHub](https://github.com/Neuromancers)
- [LinkedIn](https://linkedin.com/company/neuromancers)
- [Instagram](https://instagram.com/neuromancers_iitbbs)

## 👥 Contributors

- **Shivam Saxena** - Full Stack Developer & Web Architect

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- IIT Bhubaneswar
- Neuromancers Club Members
- Next.js & React communities
- All open-source libraries used

## 📝 Notes

- The /join page is for **sponsorship inquiries only** - club members are recruited through offline interviews
- Newsletter functionality available in footer (integration pending)
- More pages and content can be added incrementally
- See EMAILJS_SETUP.md for email configuration troubleshooting

---

**Made with ❤️ by Neuromancers, IIT Bhubaneswar**
