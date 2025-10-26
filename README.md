# Personal Portfolio Website

A modern, performant portfolio website for Data Scientists and ML Engineers, built with React, Vite, and Tailwind CSS.

## ✨ Features

### Implemented (MVP - User Story 1) ✅
- **Hero Section**: Profile photo, name, title, bio, and social links
- **Projects Section**: 4 featured projects with:
  - Project cards with hover effects
  - Tech stack badges
  - Summary and links to GitHub/Demo
  - Responsive grid layout (1/2/3 columns)
- **Project Detail Pages**: Full markdown rendering with syntax highlighting
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**:
  - Semantic HTML (nav, main, section, article)
  - ARIA labels
  - Keyboard navigation support
  - Touch targets ≥44px on mobile
  - Reduced motion support
- **Animations**: Framer Motion with `prefers-reduced-motion` support
- **Performance Optimizations**:
  - Code splitting (React, Router, Markdown, Animation vendors)
  - Lazy image loading
  - Brotli compression
  - Minification with Terser

### Pending Implementation
- **User Story 2**: Experience section & Resume download
- **User Story 3**: Blog with markdown posts (optional)
- **User Story 4**: Contact form with Web3Forms integration
- **Phase 7**: Polish, testing, deployment automation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5173/portfolio-web/

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
portfolio-web/
├── public/
│   ├── images/
│   │   ├── profile.svg         # Profile photo
│   │   └── projects/           # Project thumbnails
│   ├── resume/                 # Resume PDF
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── sections/           # Hero, Projects (Experience, Blog, Contact pending)
│   │   ├── ui/                 # Button, Card, Badge, FormField
│   │   └── markdown/           # MarkdownRenderer, CodeBlock
│   ├── pages/
│   │   ├── Home.jsx            # Main landing page ✅
│   │   ├── ProjectDetail.jsx   # Project detail pages ✅
│   │   └── BlogPost.jsx        # Blog post pages (pending)
│   ├── data/
│   │   ├── profile.json        # Profile information
│   │   ├── projects/           # Project markdown files (4 samples)
│   │   ├── experience/         # Work history (pending)
│   │   └── blog/               # Blog posts (pending)
│   ├── hooks/
│   │   ├── useReducedMotion.js ✅
│   │   ├── useScrollSpy.js     ✅
│   │   └── useMarkdown.js      ✅
│   ├── utils/
│   │   ├── validation.js       ✅
│   │   └── markdown.js         ✅
│   ├── styles/
│   │   └── index.css           # Tailwind + custom styles
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── specs/                      # Feature specifications
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Update Profile Information

Edit `src/data/profile.json`:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio (2-3 sentences)",
  "photo": "/images/profile.svg",
  "socialLinks": [...],
  "resumeUrl": "/resume/Your_Name_Resume.pdf"
}
```

### Add Projects

Create markdown files in `src/data/projects/`:

```markdown
---
title: "Project Title"
slug: "project-slug"
summary: "1-2 sentence summary"
techStack: ["Python", "TensorFlow", "Docker"]
repoUrl: "https://github.com/..."
demoUrl: "https://..."
featured: true
order: 1
date: "2024-08"
image: "/images/projects/project-slug.svg"
---

## Project content in markdown...
```

### Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#c9a688',  // Main brand color
    // ... other shades
  },
  accent: {
    DEFAULT: '#d4977b',  // Accent color
  }
}
```

## 🛠️ Technology Stack

### Core
- **React 18**: UI framework
- **Vite 5**: Build tool and dev server
- **Tailwind CSS 3**: Utility-first styling
- **React Router 6**: Client-side routing (HashRouter for GitHub Pages)

### Content
- **react-markdown**: Markdown rendering
- **remark-gfm**: GitHub Flavored Markdown
- **gray-matter**: YAML frontmatter parsing
- **prism-react-renderer**: Syntax highlighting

### Animations & Interactions
- **Framer Motion 11**: Smooth 60fps animations with reduced-motion support

### Build Optimization
- **vite-imagetools**: Image optimization
- **vite-plugin-compression2**: Brotli compression
- **Terser**: JavaScript minification

### Forms (Pending Implementation)
- **react-hook-form**: Form validation
- **@web3forms/react**: Contact form backend

## 📊 Performance Metrics

Build output (gzipped):
- React vendor chunk: ~45 KB
- Markdown vendor: ~49 KB
- Animation vendor: ~36 KB
- App code: ~53 KB
- **Total initial load**: ~183 KB gzipped

Features:
- Code splitting for optimal loading
- Lazy image loading
- Brotli compression (71% reduction)
- Console statements removed in production
- Tree shaking enabled

## ♿ Accessibility

- ✅ Semantic HTML5 structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast meets WCAG 2.1 AA standards
- ✅ Touch targets ≥44x44px on mobile
- ✅ Reduced motion support via `prefers-reduced-motion`

## 📱 Responsive Design

Breakpoints:
- **Mobile**: 320px, 375px (1 column)
- **Tablet**: 768px (2 columns)
- **Desktop**: 1024px+ (3 columns)

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Accessibility tests
npm run test:a11y
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Update `vite.config.js` base path:
   ```js
   base: '/your-repo-name/',
   ```

2. Set up GitHub Actions (workflow file pending in Phase 7)

3. Push to main branch

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📝 Development Status

**Completed**: 55/123 tasks (45%)

- ✅ Phase 1: Project setup and configuration
- ✅ Phase 2: Foundational components and utilities
- ✅ Phase 3: User Story 1 (Homepage + Projects) - **MVP**
- ⏳ Phase 4: User Story 2 (Experience + Resume)
- ⏳ Phase 5: User Story 4 (Contact Form)
- ⏳ Phase 6: User Story 3 (Blog - Optional)
- ⏳ Phase 7: Polish, testing, deployment

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Full Specification](./specs/001-portfolio-website/)

---

**Built with React + Vite + Tailwind CSS**
**Generated with Specify AI Workflow** 🤖
