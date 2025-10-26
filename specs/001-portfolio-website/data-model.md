# Data Model: Portfolio Website

**Feature**: Personal Portfolio Website
**Date**: 2025-10-25
**Input**: Entities from spec.md + technical decisions from research.md

This document defines the data structures, schemas, and validation rules for all content entities in the portfolio website.

---

## Entity Overview

| Entity | Storage Format | Location | Purpose |
|--------|---------------|----------|---------|
| **Profile** | JSON | `src/data/profile.json` | Portfolio owner's identity and social links |
| **Project** | Markdown + YAML frontmatter | `src/data/projects/*.md` | Portfolio work items with descriptions |
| **Experience** | JSON | `src/data/experience/roles.json` | Professional work history |
| **BlogPost** | Markdown + YAML frontmatter | `src/data/blog/*.md` | Technical articles and blog content |
| **ContactMessage** | N/A (ephemeral) | Web3Forms API | Form submissions (not stored locally) |

---

## 1. Profile Entity

**Purpose**: Represents the portfolio owner's identity, bio, and social links.

**Storage**: `src/data/profile.json` (single file)

### Schema

```typescript
interface Profile {
  name: string;              // Full name (e.g., "Jane Doe")
  title: string;             // Professional title (e.g., "Data Scientist & ML Engineer")
  bio: string;               // 2-3 sentence introduction (150-300 characters)
  photo: string;             // Path to profile image (e.g., "/images/profile.webp")
  socialLinks: SocialLink[]; // Array of social media links
  resumeUrl: string;         // Path to PDF resume (e.g., "/resume/Jane_Doe_Resume.pdf")
}

interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'medium';
  url: string;               // Full URL or mailto: for email
  icon: string;              // Icon identifier (e.g., "github", "linkedin")
  label: string;             // Accessible label (e.g., "GitHub Profile")
}
```

### Example Data

```json
{
  "name": "Jane Doe",
  "title": "Data Scientist & ML Engineer",
  "bio": "I build machine learning solutions that turn data into actionable insights. Passionate about deep learning, NLP, and creating impactful AI applications.",
  "photo": "/images/profile.webp",
  "socialLinks": [
    {
      "platform": "github",
      "url": "https://github.com/janedoe",
      "icon": "github",
      "label": "GitHub Profile"
    },
    {
      "platform": "linkedin",
      "url": "https://linkedin.com/in/janedoe",
      "icon": "linkedin",
      "label": "LinkedIn Profile"
    },
    {
      "platform": "email",
      "url": "mailto:jane@example.com",
      "icon": "email",
      "label": "Email Address"
    }
  ],
  "resumeUrl": "/resume/Jane_Doe_Resume.pdf"
}
```

### Validation Rules

- `name`: Required, 2-100 characters
- `title`: Required, 5-150 characters
- `bio`: Required, 50-500 characters (2-3 sentences recommended)
- `photo`: Required, valid file path, image must exist in `/public/images/`
- `socialLinks`: Required, minimum 2 links, maximum 6 links
- `resumeUrl`: Required, must end with `.pdf`, file must exist in `/public/resume/`

### State Transitions

N/A (static data, no state changes)

---

## 2. Project Entity

**Purpose**: Represents a portfolio work item with description, tech stack, and links.

**Storage**: `src/data/projects/*.md` (one file per project)

### Schema

```typescript
interface ProjectFrontmatter {
  title: string;             // Project name (e.g., "Customer Churn Prediction Model")
  slug: string;              // URL-friendly identifier (e.g., "churn-prediction")
  summary: string;           // 1-2 sentence summary (100-200 characters)
  techStack: string[];       // Array of technologies (e.g., ["Python", "TensorFlow", "Docker"])
  repoUrl?: string;          // GitHub repository URL (optional)
  demoUrl?: string;          // Live demo URL (optional, at least one of repo/demo required)
  featured: boolean;         // Display in featured section (max 6 featured projects)
  order: number;             // Display order (1-6 for featured, 7+ for additional)
  date: string;              // Completion date (YYYY-MM format, e.g., "2024-08")
  image: string;             // Project thumbnail path (e.g., "/images/projects/churn-prediction.webp")
}

interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;           // Markdown body with detailed description
}
```

### Example File: `src/data/projects/churn-prediction.md`

```markdown
---
title: "Customer Churn Prediction Model"
slug: "churn-prediction"
summary: "Built a machine learning pipeline to predict customer churn with 92% accuracy, reducing retention costs by 15%."
techStack: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI"]
repoUrl: "https://github.com/janedoe/churn-prediction"
demoUrl: "https://churn-demo.example.com"
featured: true
order: 1
date: "2024-08"
image: "/images/projects/churn-prediction.webp"
---

## Overview

This project addresses customer churn for a SaaS company with 50K+ users. Traditional rule-based approaches had 65% accuracy; our ML model achieved 92% precision.

## Technical Approach

- **Data Pipeline**: Cleaned 2M+ records using pandas, handled class imbalance with SMOTE
- **Feature Engineering**: Created 35 features including user engagement metrics, billing patterns, and support interactions
- **Model Selection**: Compared Logistic Regression, Random Forest, and XGBoost; XGBoost performed best (92% precision, 88% recall)
- **Deployment**: Containerized with Docker, served via FastAPI with 50ms latency

## Impact

- Reduced churn by 15% in first quarter
- Saved $200K annually in retention marketing costs
- Enabled proactive customer outreach for high-risk users

## Challenges & Solutions

**Challenge**: Class imbalance (only 8% churn rate)
**Solution**: Applied SMOTE for synthetic minority oversampling + adjusted decision threshold to optimize F1-score

**Challenge**: Model drift over time
**Solution**: Implemented weekly retraining pipeline with automated performance monitoring
```

### Validation Rules

- `title`: Required, 5-100 characters
- `slug`: Required, lowercase alphanumeric + hyphens, unique across projects
- `summary`: Required, 50-300 characters (1-2 sentences)
- `techStack`: Required, minimum 2 technologies, maximum 10
- `repoUrl` or `demoUrl`: At least one required
- `featured`: Boolean (max 6 projects with `featured: true`)
- `order`: Integer 1-20, unique across featured projects
- `date`: Required, YYYY-MM format, valid date
- `image`: Required, valid file path, image must exist in `/public/images/projects/`
- `content`: Required, minimum 200 characters, valid markdown

### State Transitions

N/A (static content, manually updated)

---

## 3. Experience Entity

**Purpose**: Represents professional work history with achievements and metrics.

**Storage**: `src/data/experience/roles.json` (array of role objects)

### Schema

```typescript
interface ExperienceRole {
  company: string;           // Company name (e.g., "Foxconn Technology Group")
  companyUrl?: string;       // Company website (optional)
  role: string;              // Job title (e.g., "Senior Data Scientist")
  startDate: string;         // YYYY-MM format (e.g., "2022-03")
  endDate: string | null;    // YYYY-MM format or null for current role
  location: string;          // City, Country (e.g., "Taipei, Taiwan")
  achievements: Achievement[]; // Array of accomplishments
  order: number;             // Display order (1 = most recent)
}

interface Achievement {
  description: string;       // Achievement with quantifiable metric
  category?: 'impact' | 'technical' | 'leadership'; // Optional categorization
}
```

### Example Data: `src/data/experience/roles.json`

```json
[
  {
    "company": "Foxconn Technology Group",
    "companyUrl": "https://www.foxconn.com",
    "role": "Senior Data Scientist",
    "startDate": "2022-03",
    "endDate": null,
    "location": "Taipei, Taiwan",
    "achievements": [
      {
        "description": "Developed computer vision model for defect detection, improving quality control accuracy by 23% and reducing manufacturing defects by $2.1M annually",
        "category": "impact"
      },
      {
        "description": "Built predictive maintenance system using LSTM networks, reducing unplanned downtime by 18% across 15 production lines",
        "category": "technical"
      },
      {
        "description": "Led a team of 4 data scientists to deploy real-time anomaly detection for IoT sensors, processing 50M+ events daily",
        "category": "leadership"
      },
      {
        "description": "Optimized ML inference pipeline with TensorRT and ONNX Runtime, achieving 6x speedup (200ms → 33ms latency)",
        "category": "technical"
      }
    ],
    "order": 1
  },
  {
    "company": "Wistron Corporation",
    "companyUrl": "https://www.wistron.com",
    "role": "Data Scientist",
    "startDate": "2020-06",
    "endDate": "2022-02",
    "location": "Hsinchu, Taiwan",
    "achievements": [
      {
        "description": "Designed recommendation engine for supply chain optimization, reducing inventory costs by 12% ($850K savings)",
        "category": "impact"
      },
      {
        "description": "Implemented NLP pipeline for customer feedback analysis, processing 100K+ reviews with 91% sentiment accuracy",
        "category": "technical"
      },
      {
        "description": "Created automated reporting dashboard with Tableau, saving 15 hours/week of manual analysis",
        "category": "impact"
      }
    ],
    "order": 2
  }
]
```

### Validation Rules

- `company`: Required, 2-100 characters
- `role`: Required, 5-100 characters
- `startDate`: Required, YYYY-MM format, valid date
- `endDate`: YYYY-MM format or null (null indicates current role)
- `location`: Required, 5-100 characters
- `achievements`: Required, minimum 2, maximum 6 per role
- `achievements[].description`: Required, 50-300 characters, should include quantifiable metric
- `order`: Integer, unique across roles, determines display order

### Business Rules

- Only one role can have `endDate: null` (current position)
- `startDate` must be before `endDate` (if endDate is not null)
- Roles displayed in reverse chronological order (most recent first)
- Each achievement should include a metric (%, $, time, etc.)

---

## 4. BlogPost Entity

**Purpose**: Represents technical articles and blog content.

**Storage**: `src/data/blog/*.md` (one file per post)

### Schema

```typescript
interface BlogPostFrontmatter {
  title: string;             // Post title (e.g., "Introduction to Transformer Models")
  slug: string;              // URL-friendly identifier (e.g., "intro-transformer-models")
  date: string;              // Publication date (YYYY-MM-DD format)
  excerpt: string;           // 1-2 sentence summary (150-250 characters)
  tags: string[];            // Categorization tags (e.g., ["NLP", "Deep Learning"])
  readTime?: number;         // Estimated read time in minutes (auto-calculated if omitted)
  published: boolean;        // Draft vs published status
  image?: string;            // Optional hero image (e.g., "/images/blog/transformers.webp")
}

interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;           // Markdown body
}
```

### Example File: `src/data/blog/intro-transformer-models.md`

```markdown
---
title: "Introduction to Transformer Models: Attention is All You Need"
slug: "intro-transformer-models"
date: "2024-09-15"
excerpt: "A beginner-friendly guide to understanding transformer architecture, self-attention mechanisms, and why they revolutionized NLP."
tags: ["NLP", "Deep Learning", "Transformers", "Machine Learning"]
readTime: 8
published: true
image: "/images/blog/transformers.webp"
---

## What are Transformers?

Transformers are a neural network architecture introduced in the 2017 paper "Attention is All You Need" by Vaswani et al. They've since become the foundation for modern NLP models like BERT, GPT, and T5.

## The Self-Attention Mechanism

Unlike RNNs that process sequences sequentially, transformers use self-attention to process all tokens in parallel...

```python
def scaled_dot_product_attention(Q, K, V):
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    attention_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attention_weights, V)
```

## Why Transformers Matter

1. **Parallelization**: Unlike RNNs, transformers process sequences in parallel, enabling faster training
2. **Long-range dependencies**: Self-attention captures relationships regardless of distance in sequence
3. **Transfer learning**: Pre-trained transformers (BERT, GPT) excel at downstream tasks with minimal fine-tuning

...
```

### Validation Rules

- `title`: Required, 10-200 characters
- `slug`: Required, lowercase alphanumeric + hyphens, unique across posts
- `date`: Required, YYYY-MM-DD format, not in future
- `excerpt`: Required, 50-300 characters
- `tags`: Optional, maximum 6 tags, each 2-30 characters
- `readTime`: Optional integer (auto-calculated from word count if omitted)
- `published`: Required boolean (only `true` posts displayed on site)
- `image`: Optional, valid file path if provided
- `content`: Required, minimum 500 characters, valid markdown

### Auto-calculated Fields

```javascript
// Calculate read time if not provided in frontmatter
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Generate excerpt if not provided (first 150 characters)
function generateExcerpt(content) {
  const plainText = content.replace(/[#*`\[\]]/g, '');
  return plainText.substring(0, 150).trim() + '...';
}
```

### State Transitions

- **Draft** (`published: false`): Not displayed on site, accessible only via direct URL in dev mode
- **Published** (`published: true`): Visible in blog list, indexed by search engines

---

## 5. ContactMessage Entity

**Purpose**: Represents form submission data (not stored locally, sent via Web3Forms).

**Storage**: N/A (ephemeral, sent to Web3Forms API)

### Schema

```typescript
interface ContactMessage {
  name: string;              // Sender's name
  email: string;             // Sender's email (validated)
  message: string;           // Message content
  honeypot?: string;         // Anti-spam field (should be empty)
  access_key: string;        // Web3Forms API key (from env)
}
```

### Validation Rules (Client-side)

- `name`: Required, 2-100 characters
- `email`: Required, valid RFC 5322 email format
- `message`: Required, 10-2000 characters
- `honeypot`: Optional (should remain empty, bots fill it → reject submission)

### Processing Flow

1. User fills out form → React Hook Form validates inputs
2. Validation passes → Submit to Web3Forms API
3. Web3Forms sends email to portfolio owner
4. User sees success message: "Thank you! I'll get back to you soon."
5. Form resets for new submission

### Example API Payload

```json
{
  "access_key": "abc123...",
  "name": "John Smith",
  "email": "john@example.com",
  "message": "I'd like to discuss a data science opportunity...",
  "from_name": "Portfolio Contact Form",
  "subject": "New Contact Form Submission"
}
```

---

## Relationships

```
┌─────────────────────────────────────────────────────────┐
│                      Portfolio Website                  │
└─────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
            ▼               ▼               ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │   Profile    │  │   Projects   │  │  Experience  │
    │  (1 record)  │  │  (4-6 files) │  │  (2+ roles)  │
    └──────────────┘  └──────────────┘  └──────────────┘
            │
            │
            ▼
    ┌──────────────┐
    │  BlogPosts   │
    │  (0-N files) │
    └──────────────┘

    ┌──────────────────┐
    │ ContactMessage   │ (ephemeral, not stored)
    │ → Web3Forms API  │
    └──────────────────┘
```

- **Profile** → Has many **SocialLinks** (1:N, embedded)
- **Projects** → Independent entities (no relationships)
- **Experience** → Has many **Achievements** (1:N, embedded)
- **BlogPosts** → Independent entities, optionally tagged
- **ContactMessage** → No persistence, sent to external API

---

## File Naming Conventions

### Projects
- Format: `{slug}.md` (e.g., `churn-prediction.md`)
- Location: `src/data/projects/`
- Slug: Lowercase, hyphen-separated, no special characters

### Blog Posts
- Format: `{slug}.md` (e.g., `intro-transformer-models.md`)
- Location: `src/data/blog/`
- Slug: Lowercase, hyphen-separated, no special characters

### Images
- Profile: `/public/images/profile.webp`
- Projects: `/public/images/projects/{slug}.webp`
- Blog: `/public/images/blog/{slug}.webp`

### Resume
- Format: `{FirstName}_{LastName}_Resume.pdf`
- Location: `/public/resume/`

---

## Content Loading Strategy

### Build Time
1. Read all markdown files from `src/data/projects/` and `src/data/blog/`
2. Parse YAML frontmatter with `gray-matter`
3. Generate static routes for each project/blog post
4. Pre-render HTML with content embedded

### Runtime
1. Load JSON data (`profile.json`, `roles.json`) via import
2. Client-side rendering of markdown content with `react-markdown`
3. Lazy load images below the fold with native `loading="lazy"`

### Example Loader

```javascript
// src/utils/content.js
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function loadProjects() {
  const projectsDir = path.join(process.cwd(), 'src/data/projects');
  const files = await fs.readdir(projectsDir);

  const projects = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const content = await fs.readFile(path.join(projectsDir, file), 'utf-8');
        const { data, content: body } = matter(content);
        return { frontmatter: data, content: body };
      })
  );

  return projects
    .filter(p => p.frontmatter.featured)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
    .slice(0, 6); // Max 6 featured projects
}
```

---

## Migration & Seeding

### Initial Content Creation

1. **Profile**: Create `src/data/profile.json` with owner's information
2. **Projects**: Create 4-6 markdown files in `src/data/projects/`
3. **Experience**: Create `src/data/experience/roles.json` with 2+ roles
4. **Blog**: Create 2-3 initial posts in `src/data/blog/` (optional)
5. **Images**: Add optimized images to `/public/images/`
6. **Resume**: Add PDF to `/public/resume/`

### Content Update Workflow

1. Edit markdown/JSON files in `src/data/`
2. Commit changes to git
3. Push to main branch
4. GitHub Actions builds and deploys automatically
5. Changes live on GitHub Pages within 2-3 minutes

---

**Next Steps**: Generate API contracts and component interfaces in `/contracts/`
