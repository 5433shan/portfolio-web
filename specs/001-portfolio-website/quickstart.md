# Quickstart: Portfolio Website Development

**Feature**: Personal Portfolio Website
**Stack**: React 18 + Vite 5 + Tailwind CSS 3
**Last Updated**: 2025-10-25

This guide provides step-by-step instructions for setting up, developing, and deploying the portfolio website locally.

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js**: 18.x or higher ([Download](https://nodejs.org/))
- **npm**: 9.x or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

**Verify Installation:**
```bash
node --version  # Should print v18.x.x or higher
npm --version   # Should print 9.x.x or higher
git --version   # Should print git version 2.x.x
```

---

## Quick Start (5 minutes)

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-web.git
cd portfolio-web
```

### 2. Install Dependencies
```bash
npm install
```

This installs:
- React 18 + React DOM
- Vite 5 (build tool)
- Tailwind CSS 3 (styling)
- Framer Motion 11 (animations)
- react-markdown + plugins (blog rendering)
- vite-imagetools (image optimization)
- Web3Forms integration (contact form)

**Installation time**: ~2-3 minutes

### 3. Environment Setup
Create `.env` file in project root:
```bash
# .env
VITE_WEB3FORMS_KEY=your-web3forms-access-key-here
```

**Get Web3Forms Access Key:**
1. Visit https://web3forms.com
2. Click "Create Access Key"
3. Enter your email
4. Copy key from email and paste in `.env`

### 4. Start Development Server
```bash
npm run dev
```

Expected output:
```
VITE v5.x.x  ready in 400 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 5. Open in Browser
Navigate to http://localhost:5173/

You should see the portfolio homepage with placeholder content.

---

## Project Structure

```
portfolio-web/
├── public/                     # Static assets (not processed by Vite)
│   ├── images/
│   │   ├── profile.webp        # Your profile photo (replace placeholder)
│   │   ├── projects/           # Project thumbnails
│   │   └── blog/               # Blog post images
│   ├── resume/
│   │   └── FirstName_LastName_Resume.pdf
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── sections/           # Hero, Projects, Experience, Blog, Contact
│   │   ├── ui/                 # Button, Card, Badge, FormField
│   │   └── markdown/           # MarkdownRenderer, CodeBlock
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Main landing page
│   │   ├── ProjectDetail.jsx   # Individual project pages
│   │   └── BlogPost.jsx        # Individual blog post pages
│   │
│   ├── data/                   # Content files (edit these!)
│   │   ├── profile.json        # Your profile information
│   │   ├── projects/           # Project markdown files
│   │   │   ├── project-1.md
│   │   │   └── project-2.md
│   │   ├── experience/
│   │   │   └── roles.json      # Your work history
│   │   └── blog/               # Blog post markdown files
│   │       └── post-1.md
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useMarkdown.js
│   │   ├── useScrollSpy.js
│   │   └── useReducedMotion.js
│   │
│   ├── utils/                  # Helper functions
│   │   ├── markdown.js
│   │   └── validation.js
│   │
│   ├── styles/
│   │   └── index.css           # Tailwind imports + custom styles
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── router.jsx              # Route configuration
│
├── .env                        # Environment variables (DO NOT COMMIT!)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js
└── README.md
```

---

## Content Editing

### Step 1: Update Your Profile

Edit `src/data/profile.json`:

```json
{
  "name": "Your Full Name",
  "title": "Data Scientist & ML Engineer",
  "bio": "Write 2-3 sentences about yourself. Focus on your expertise, passion, and what you're currently working on.",
  "photo": "/images/profile.webp",
  "socialLinks": [
    {
      "platform": "github",
      "url": "https://github.com/YOUR_USERNAME",
      "icon": "github",
      "label": "GitHub Profile"
    },
    {
      "platform": "linkedin",
      "url": "https://linkedin.com/in/YOUR_PROFILE",
      "icon": "linkedin",
      "label": "LinkedIn Profile"
    },
    {
      "platform": "email",
      "url": "mailto:your.email@example.com",
      "icon": "email",
      "label": "Email Address"
    }
  ],
  "resumeUrl": "/resume/YourName_Resume.pdf"
}
```

**Add Your Profile Photo:**
1. Export photo as 800x800px JPEG
2. Convert to WebP: https://squoosh.app/ (quality: 80)
3. Save as `public/images/profile.webp`
4. Restart dev server to see changes

---

### Step 2: Add Projects

Create `src/data/projects/project-slug.md`:

```markdown
---
title: "Your Project Name"
slug: "project-slug"
summary: "1-2 sentence summary of your project and its impact. Include metrics if possible."
techStack: ["Python", "TensorFlow", "Docker", "AWS"]
repoUrl: "https://github.com/username/repo"
demoUrl: "https://demo-url.com"
featured: true
order: 1
date: "2024-08"
image: "/images/projects/project-slug.webp"
---

## Overview

Describe the problem your project solves and why it matters.

## Technical Approach

- **Data Pipeline**: How you processed/cleaned data
- **Modeling**: Which algorithms you used and why
- **Deployment**: How you deployed the solution

## Impact

Quantify the results with metrics:
- Improved accuracy by X%
- Reduced costs by $Y
- Processed Z million records

## Challenges & Solutions

Describe 1-2 major challenges and how you overcame them.
```

**Add Project Image:**
1. Take screenshot or create thumbnail (1200x800px recommended)
2. Optimize at https://squoosh.app/
3. Save as `public/images/projects/project-slug.webp`

**Repeat** for 4-6 projects (mark best 6 as `featured: true`)

---

### Step 3: Add Experience

Edit `src/data/experience/roles.json`:

```json
[
  {
    "company": "Company Name",
    "companyUrl": "https://company-website.com",
    "role": "Your Job Title",
    "startDate": "2022-03",
    "endDate": null,
    "location": "City, Country",
    "achievements": [
      {
        "description": "Developed X system that improved Y by Z% and saved $A annually",
        "category": "impact"
      },
      {
        "description": "Built technical solution using technologies A, B, C with specific outcomes",
        "category": "technical"
      },
      {
        "description": "Led team of N people to accomplish specific goal with measurable result",
        "category": "leadership"
      }
    ],
    "order": 1
  }
]
```

**Tips**:
- `endDate: null` for current role
- Include 2-4 achievements per role
- Always include quantifiable metrics (%, $, time saved)
- Use action verbs: Built, Developed, Led, Optimized, Reduced

---

### Step 4: Add Blog Posts (Optional)

Create `src/data/blog/post-slug.md`:

```markdown
---
title: "Your Blog Post Title"
slug: "post-slug"
date: "2024-10-15"
excerpt: "1-2 sentence summary of what readers will learn from this post."
tags: ["Machine Learning", "Python", "Tutorial"]
published: true
image: "/images/blog/post-slug.webp"
---

## Introduction

Hook readers with why this topic matters.

## Main Content

Write your technical content here. You can include:

- **Code blocks** with syntax highlighting:

```python
def example_function():
    return "This will be syntax highlighted!"
```

- **Images** (automatically lazy-loaded):

![Alt text description](/images/blog/diagram.webp)

- **Lists**, **tables**, and other markdown features

## Conclusion

Summarize key takeaways.
```

**Set `published: false`** for draft posts (won't appear on site)

---

## Development Workflow

### Daily Development

1. **Start dev server** (if not running):
   ```bash
   npm run dev
   ```

2. **Make changes** to components, content, or styles

3. **See changes instantly** (Vite Hot Module Replacement)

4. **No restart needed** unless:
   - Changed `.env` file
   - Modified `vite.config.js`
   - Added new dependencies

---

### Adding New Dependencies

```bash
# Example: Add a new library
npm install library-name

# Example: Add dev dependency (build tool)
npm install -D dev-library
```

**Restart dev server** after installing packages.

---

### Testing

**Run All Tests:**
```bash
npm run test
```

**Run Tests in Watch Mode:**
```bash
npm run test:watch
```

**Run Accessibility Audit:**
```bash
npm run test:a11y
```

**Run E2E Tests:**
```bash
npm run test:e2e
```

---

### Building for Production

**Build Site:**
```bash
npm run build
```

Expected output:
```
vite v5.x.x building for production...
✓ 145 modules transformed.
dist/index.html                   1.2 kB
dist/assets/index-abc123.css      45.3 kB │ gzip: 12.1 kB
dist/assets/index-xyz789.js      156.7 kB │ gzip: 52.4 kB
✓ built in 3.47s
```

**Preview Production Build Locally:**
```bash
npm run preview
```

Opens at http://localhost:4173/

**Check Performance:**
1. Open http://localhost:4173/ in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Click "Generate report"
5. Verify Performance ≥90

---

## Customization

### Colors (Tailwind Config)

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Warm earth tones (Japanese minimalist palette)
        primary: {
          50: '#faf8f5',   // Lightest beige
          100: '#f5f1eb',
          500: '#c9a688',  // Mid-tone soft brown
          700: '#8b6f47',  // Darker earth
          900: '#4a3b2a'   // Deep brown
        },
        accent: '#d4977b'  // Muted terracotta
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif']
      }
    }
  }
}
```

**Apply Colors:**
```jsx
<button className="bg-primary-500 hover:bg-primary-700 text-white">
  Click Me
</button>
```

---

### Fonts

**System Fonts (Recommended - Zero Load Time):**
Already configured in `tailwind.config.js`

**Custom Fonts (If Needed):**

1. Add fonts to `public/fonts/`
2. Update `src/styles/index.css`:
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/CustomFont.woff2') format('woff2');
     font-weight: 400;
     font-display: swap;
   }
   ```
3. Update `tailwind.config.js`:
   ```javascript
   fontFamily: {
     custom: ['CustomFont', 'fallback', 'sans-serif']
   }
   ```

**Performance**: Limit to 2 custom fonts max, subset to needed characters

---

### Animations (Framer Motion)

**Edit Duration/Easing** in component files:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  Content
</motion.div>
```

**Always Include Reduced Motion Support:**
```jsx
import { useReducedMotion } from '../hooks/useReducedMotion';

const prefersReducedMotion = useReducedMotion();

<motion.div
  initial={prefersReducedMotion ? {} : { opacity: 0 }}
  animate={prefersReducedMotion ? {} : { opacity: 1 }}
>
```

---

## Deployment

### GitHub Pages Deployment

**One-Time Setup:**

1. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: Select "GitHub Actions"

2. **Update `vite.config.js` Base Path**:
   ```javascript
   export default defineConfig({
     base: '/portfolio-web/', // Replace with your repo name
     // ... rest of config
   })
   ```

3. **Add GitHub Actions Workflow**:
   File already created at `.github/workflows/deploy.yml`

4. **Add Web3Forms Secret**:
   - Go to repo Settings → Secrets → Actions
   - Click "New repository secret"
   - Name: `WEB3FORMS_KEY`
   - Value: Your Web3Forms access key
   - Click "Add secret"

**Deploy:**

```bash
git add .
git commit -m "Update portfolio content"
git push origin portfolio-mia
```

GitHub Actions will automatically:
1. Install dependencies
2. Run tests
3. Build production bundle
4. Deploy to GitHub Pages

**Check Deployment Status:**
- Go to repo → Actions tab
- View workflow run progress
- Site live at: `https://YOUR_USERNAME.github.io/portfolio-web/`

**Deployment Time**: 2-3 minutes after push

---

## Troubleshooting

### Issue: Dev server won't start

**Error**: `Port 5173 already in use`

**Solution**:
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

---

### Issue: Images not loading

**Checklist**:
- ✅ Images in `public/` folder (not `src/`)
- ✅ Paths start with `/` (e.g., `/images/profile.webp`)
- ✅ File extensions match exactly (case-sensitive on Linux)
- ✅ Dev server restarted after adding images

---

### Issue: Contact form not working

**Checklist**:
- ✅ Web3Forms access key in `.env` file
- ✅ `.env` file in project root (same level as `package.json`)
- ✅ Environment variable starts with `VITE_` prefix
- ✅ Dev server restarted after creating `.env`

**Test**:
```javascript
console.log(import.meta.env.VITE_WEB3FORMS_KEY); // Should print your key
```

---

### Issue: Build fails

**Error**: `JavaScript heap out of memory`

**Solution**:
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

---

### Issue: Slow build times

**Causes**:
- Too many large images
- Unoptimized dependencies

**Solutions**:
1. Optimize images before adding (use Squoosh.app)
2. Enable build cache:
   ```bash
   npm run build -- --mode production
   ```

---

## Performance Checklist

Before deploying, verify:

- [ ] Lighthouse Performance score ≥90
- [ ] All images optimized (<200KB each)
- [ ] No console errors in production build
- [ ] Mobile responsive (test at 375px, 768px)
- [ ] Touch targets ≥44px on mobile
- [ ] Contact form submits successfully
- [ ] Resume PDF downloads
- [ ] All social links work
- [ ] Accessibility audit passes (axe-core)
- [ ] Keyboard navigation works
- [ ] Reduced motion respected

---

## Next Steps

1. ✅ Complete content editing (profile, projects, experience)
2. ✅ Add resume PDF to `public/resume/`
3. ✅ Test locally with `npm run dev`
4. ✅ Run Lighthouse audit
5. ✅ Build for production: `npm run build`
6. ✅ Deploy to GitHub Pages
7. ✅ Verify live site works
8. ✅ Share portfolio URL with network!

---

## Getting Help

- **Documentation**: See `/specs/001-portfolio-website/` folder
- **Technical Issues**: Check console errors and troubleshooting section above
- **Content Questions**: Review `data-model.md` for schemas and examples
- **Component APIs**: See `contracts/component-api.md`

---

**Happy building! 🚀**
