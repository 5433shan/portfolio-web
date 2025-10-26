# Implementation Plan: Personal Portfolio Website

**Branch**: `portfolio-mia` | **Date**: 2025-10-25 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

## Summary

Build a static personal portfolio website for a Data Scientist / Machine Learning Engineer using React, Vite, and Tailwind CSS. The site features a Japanese minimalist aesthetic with warm neutral tones, showcasing profile information, 4-6 projects with tech stack badges, professional experience (Foxconn & Wistron), optional blog with markdown posts, and contact form. Primary focus on performance (<2s load time), accessibility (WCAG 2.1 AA), and mobile-first responsive design. Content managed via Markdown/JSON for easy maintenance. Deployed to GitHub Pages via GitHub Actions CI/CD.

## Technical Context

**Language/Version**: JavaScript (ES2022+) / Node.js 18+
**Primary Dependencies**: React 18, Vite 5, Tailwind CSS 3, Framer Motion 11
**Storage**: Markdown files with YAML frontmatter (projects, blog posts, experience), JSON for profile data, static PDF for resume
**Testing**: Vitest (unit), React Testing Library, Playwright (E2E), axe-core (accessibility)
**Target Platform**: Static site hosted on GitHub Pages (browser target: modern browsers with ES2020 support)
**Project Type**: Single-page application with static generation
**Performance Goals**:
- Page load <2 seconds on throttled 3G
- Lighthouse score ≥90 (Performance, Accessibility, Best Practices)
- First Contentful Paint (FCP) <1.5s
- Cumulative Layout Shift (CLS) <0.1
**Constraints**:
- WCAG 2.1 AA compliance mandatory
- Touch targets ≥44x44px on mobile
- Build time <60 seconds
- GitHub Pages deployment (static files only, no server-side logic)
**Scale/Scope**:
- Single user (portfolio owner)
- ~10 pages (Home, 4-6 project pages, 2-5 blog posts, Experience, Contact)
- Expected traffic: <10k visits/month
- Content updates: weekly to monthly

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Japanese Minimalism (NON-NEGOTIABLE)
- ✅ **PASS**: Design emphasizes whitespace, purpose-driven elements, calm hierarchy
- ✅ **PASS**: No decorative animations; Framer Motion used only for functional micro-interactions
- ⚠️ **REVIEW**: Framer Motion library must be tree-shaken; unused features excluded from bundle
- **Action**: Ensure all animations serve usability (hover states, focus indicators, loading feedback)

### II. Warm Palette & Clean Typography
- ✅ **PASS**: Tailwind configured with custom warm earth tone palette (beige, soft brown, muted terracotta)
- ✅ **PASS**: Typography using system font stack or max 2 custom fonts with modular scale
- ✅ **PASS**: Line heights ≥1.5, color contrast meets WCAG 2.1 AA (4.5:1)
- **Action**: Define custom Tailwind theme with warm color variables and typography scale

### III. Performance First (NON-NEGOTIABLE)
- ⚠️ **NEEDS CLARIFICATION**: Vite + React SPA requires static site generation approach for optimal performance
- ✅ **PASS**: Vite provides tree-shaking, code-splitting, and minification out of box
- ⚠️ **NEEDS CLARIFICATION**: Image optimization pipeline (WebP/AVIF conversion, responsive sizes)
- ⚠️ **NEEDS CLARIFICATION**: GitHub Pages routing for SPA (404 fallback or hash routing)
- **Action**: Research Vite static generation plugins/approaches, image optimization tools

### IV. Markdown-Driven Content
- ✅ **PASS**: Projects, blog posts, experience stored as Markdown files with YAML frontmatter
- ⚠️ **NEEDS CLARIFICATION**: Markdown processing library (react-markdown vs MDX vs remark)
- ✅ **PASS**: Static generation ensures content is version-controlled and atomic
- **Action**: Research markdown processing with syntax highlighting and lazy image loading

### V. Accessibility (NON-NEGOTIABLE)
- ✅ **PASS**: Semantic HTML5 structure (nav, main, article, footer)
- ✅ **PASS**: Keyboard navigation, screen reader support planned
- ✅ **PASS**: axe-core integration in testing pipeline
- **Action**: Implement ARIA labels where semantic HTML insufficient, test with VoiceOver/NVDA

### VI. Responsive Design
- ✅ **PASS**: Tailwind's mobile-first approach with breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1440px)
- ✅ **PASS**: Fluid typography via Tailwind's responsive utilities
- ✅ **PASS**: Touch targets ≥44x44px enforced in component design
- **Action**: Test at 320px, 375px, 768px, 1024px, 1440px, 1920px breakpoints

### VII. No Animation Clutter
- ⚠️ **CONDITIONAL PASS**: Framer Motion acceptable ONLY if:
  - Animations are functional (hover, focus, loading states)
  - Duration 150-300ms for micro-interactions
  - Respects `prefers-reduced-motion` media query
  - Library tree-shaken to exclude unused features
- **Action**: Configure Framer Motion with reduced-motion variants for all animations

### Additional Requirements
- ⚠️ **NEEDS CLARIFICATION**: Contact form submission on static site (Formspree, Web3Forms, or GitHub API)
- ✅ **PASS**: No database, no authentication, no backend required
- ✅ **PASS**: CI/CD via GitHub Actions for automated deployment

**Overall Status**: ⚠️ **CONDITIONAL PASS** - Proceed to Phase 0 to resolve NEEDS CLARIFICATION items

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file
├── spec.md              # Feature specification (completed)
├── research.md          # Phase 0 output (pending)
├── data-model.md        # Phase 1 output (pending)
├── quickstart.md        # Phase 1 output (pending)
├── contracts/           # Phase 1 output (pending)
│   ├── content-schema.yaml   # Markdown frontmatter schemas
│   └── component-api.md      # Component props/interfaces
└── tasks.md             # Phase 2 output (NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
portfolio-web/
├── public/
│   ├── resume/
│   │   └── FirstName_LastName_Resume.pdf
│   ├── images/
│   │   ├── profile.webp
│   │   └── projects/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── FormField.jsx
│   │   └── markdown/
│   │       ├── MarkdownRenderer.jsx
│   │       └── CodeBlock.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── BlogPost.jsx
│   │
│   ├── data/
│   │   ├── profile.json
│   │   ├── projects/
│   │   │   ├── project-1.md
│   │   │   ├── project-2.md
│   │   │   └── ...
│   │   ├── experience/
│   │   │   └── roles.json
│   │   └── blog/
│   │       ├── post-1.md
│   │       ├── post-2.md
│   │       └── ...
│   │
│   ├── hooks/
│   │   ├── useMarkdown.js
│   │   ├── useScrollSpy.js
│   │   └── useReducedMotion.js
│   │
│   ├── utils/
│   │   ├── markdown.js
│   │   ├── analytics.js (optional lightweight tracking)
│   │   └── validation.js
│   │
│   ├── styles/
│   │   └── index.css (Tailwind imports + custom base styles)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   └── utils/
│   ├── integration/
│   │   └── pages/
│   ├── e2e/
│   │   └── user-journeys.spec.js
│   └── accessibility/
│       └── axe.spec.js
│
├── .github/
│   └── workflows/
│       ├── deploy.yml (GitHub Actions for deployment)
│       └── test.yml (CI for tests on PR)
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── README.md
```

**Structure Decision**: Single-page application (SPA) structure selected because:
1. Portfolio is a single-user site with limited pages (~10 total)
2. Client-side routing provides smooth transitions (via Framer Motion)
3. Vite's build optimization produces static HTML/CSS/JS for GitHub Pages
4. No need for server-side rendering or complex multi-app architecture
5. All content pre-generated at build time from Markdown/JSON sources

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Framer Motion library | User explicitly requested "smooth 60fps transitions"; enhances UX for page transitions, scroll animations, hover states | CSS-only transitions insufficient for complex orchestrated animations (e.g., staggered project card reveals); Framer Motion provides built-in `prefers-reduced-motion` support and performance optimizations |
| React SPA (not pure SSG) | User specified React + Vite stack; provides component reusability and modern DX; Vite build produces static artifacts | Pure SSG (Hugo, Jekyll) rejected because user requested React; Astro (SSG with React) considered but adds complexity for small site; Vite's static build acceptable if optimized |

**Justification**: Both complexities are user-specified requirements. Framer Motion is acceptable under Constitution Principle VII if constrained to functional animations (150-300ms, reduced-motion support). React SPA is acceptable if build produces optimized static files meeting <2s load time requirement.
