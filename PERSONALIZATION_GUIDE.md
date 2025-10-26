# Portfolio Personalization Guide

## ✅ What's Been Customized

Your portfolio has been personalized with the following information:

### Profile Information
- **Name**: Pin Shan Chuang
- **Title**: ML Engineer
- **Bio**: "I build machine learning solutions that turn data into actionable insights. Passionate about deep learning, NLP, and creating impactful AI applications that solve real-world problems."
- **Email**: sl08095433@gmail.com
- **GitHub**: https://github.com/5433shan
- **LinkedIn**: https://www.linkedin.com/in/shan-chuang/

### Sample Projects
Your portfolio currently displays 4 sample ML/Data Science projects:
1. Customer Churn Prediction Model
2. NLP Sentiment Analysis Pipeline
3. Computer Vision Defect Detection
4. Predictive Maintenance with LSTM Networks

**Note**: These are placeholder projects with realistic ML content. You can keep them as examples or replace them with your actual projects.

## 📝 Next Steps to Complete Your Portfolio

### 1. Add Your Profile Photo (Recommended)

**Current**: Using a placeholder SVG image
**To replace**:

1. Prepare a professional photo (recommended: 800x800px)
2. Convert to WebP format (use https://squoosh.app/ for best quality/compression)
3. Save as `public/images/profile.webp`
4. Update `src/data/profile.json`:
   ```json
   "photo": "/images/profile.webp"
   ```

**Alternative**: You can also use a high-quality JPG/PNG (will be auto-optimized during build)

### 2. Customize Your Bio (Optional)

If you'd like to personalize your bio further, edit `src/data/profile.json`:

```json
{
  "bio": "Your custom 2-3 sentence bio here. Focus on what you do, your expertise, and what makes you unique as an ML Engineer."
}
```

### 3. Add Your Real Projects (Recommended)

**Option A: Keep sample projects** (good for initial launch)
- The sample projects demonstrate ML expertise with realistic metrics
- Use them as examples while you prepare your real project descriptions

**Option B: Add your own projects**

Create new markdown files in `src/data/projects/` (copy the existing format):

```markdown
---
title: "Your Project Title"
slug: "your-project-slug"  # URL-friendly (lowercase, hyphens)
summary: "1-2 sentence summary highlighting impact and key metrics"
techStack: ["Python", "TensorFlow", "Docker", "AWS"]
repoUrl: "https://github.com/5433shan/your-repo"
demoUrl: "https://your-demo-url.com"  # Optional
featured: true  # Set to true for homepage display
order: 1  # Display order (1-6)
date: "2024-10"  # YYYY-MM format
image: "/images/projects/your-project-slug.svg"
---

## Overview
Describe the problem your project solves...

## Technical Approach
- **Data Pipeline**: How you processed data
- **Model/Architecture**: What you built and why
- **Results**: Quantifiable impact with metrics

## Code Example (Optional)
\`\`\`python
# Your code here
\`\`\`
```

**Steps**:
1. Create markdown file: `src/data/projects/your-project-name.md`
2. Add project image: `public/images/projects/your-project-name.webp` (1200x800px recommended)
3. Update `featured: true` and `order: 1-6` for up to 6 featured projects

### 4. Add Your Resume (Important)

1. Export your resume as PDF
2. Name it: `Pin_Shan_Chuang_Resume.pdf`
3. Save to: `public/resume/Pin_Shan_Chuang_Resume.pdf`

The download link is already configured in your profile.

### 5. Update Vite Base Path for GitHub Pages

When you're ready to deploy, update `vite.config.js`:

**Current**:
```js
base: '/portfolio-web/',
```

**If deploying to https://5433shan.github.io/portfolio-web/**: Keep as is ✅

**If using a different repo name**: Change to match your repository:
```js
base: '/your-repo-name/',
```

**If using custom domain** (e.g., `yourcustomdomain.com`):
```js
base: '/',
```

## 🚀 Testing Your Personalized Portfolio

### Local Development
```bash
npm run dev
```
Visit: http://localhost:5173/portfolio-web/

### Production Build
```bash
npm run build
npm run preview
```
Visit: http://localhost:4173/

## 🎨 Optional Customizations

### Change Color Scheme

Edit `tailwind.config.js` to customize the warm earth tone palette:

```js
colors: {
  primary: {
    500: '#c9a688',  // Main brand color
    // Adjust other shades as needed
  },
  accent: {
    DEFAULT: '#d4977b',  // Accent color for links/highlights
  }
}
```

### Update Social Links

Add/remove social platforms in `src/data/profile.json`:

```json
{
  "socialLinks": [
    // Add Twitter/X if needed:
    {
      "platform": "twitter",
      "url": "https://twitter.com/yourusername",
      "icon": "twitter",
      "label": "Twitter Profile"
    }
  ]
}
```

Note: You'll need to add the Twitter icon to `Hero.jsx` if using this.

### Modify the Bio Placeholder

Current bio is generic. Consider updating with specifics about:
- Your ML specialization (NLP, Computer Vision, RL, etc.)
- Years of experience
- Notable achievements or focus areas
- What you're currently working on

## 📊 Current Status

✅ **Completed Features**:
- Profile section with your name and links
- 4 sample ML projects with detailed descriptions
- Responsive design (mobile/tablet/desktop)
- Smooth animations with accessibility support
- Project detail pages with markdown rendering
- Optimized build with code splitting

⏳ **Pending Features** (Optional - not required for launch):
- Experience section with work history
- Contact form
- Blog section
- GitHub Pages deployment automation

## 🚀 Ready to Deploy?

Once you've added your photo, resume, and (optionally) customized projects:

### Quick Deploy to GitHub Pages

1. Create a new repository on GitHub named `portfolio-web`
2. Push your code:
   ```bash
   git add .
   git commit -m "Personalize portfolio with my information"
   git push origin 001-portfolio-website
   ```

3. Set up GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Create deployment workflow (we'll add this in Phase 7)

4. Your site will be live at: `https://5433shan.github.io/portfolio-web/`

## 📁 Quick Reference: File Locations

- **Profile**: `src/data/profile.json`
- **Projects**: `src/data/projects/*.md`
- **Profile Photo**: `public/images/profile.svg` (replace with .webp)
- **Project Images**: `public/images/projects/*.svg` (replace with .webp)
- **Resume**: `public/resume/Pin_Shan_Chuang_Resume.pdf`
- **Colors**: `tailwind.config.js`
- **Meta Tags**: `index.html`

## 💡 Tips

1. **Start Simple**: Launch with the sample projects first, then gradually replace with your work
2. **Optimize Images**: Use WebP format for 50-80% smaller file sizes
3. **Keep Bio Concise**: 2-3 sentences is ideal for homepage
4. **Quantify Impact**: Always include metrics in project summaries (accuracy %, $ saved, time reduced)
5. **Update Regularly**: Add new projects as you complete them

## ❓ Need Help?

- Check the main `README.md` for technical details
- Review sample projects in `src/data/projects/` for format examples
- Consult specification docs in `specs/001-portfolio-website/`

---

**Your personalized portfolio is ready! 🎉**

Start the dev server with `npm run dev` to see your changes live.
