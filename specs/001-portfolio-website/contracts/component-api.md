# Component API Contracts

This document defines the props interfaces and component APIs for all major React components in the portfolio website.

---

## Layout Components

### Header

**Location**: `src/components/layout/Header.jsx`

**Purpose**: Top navigation bar with logo and menu links

```typescript
interface HeaderProps {
  logo?: string;              // Optional custom logo path
  transparent?: boolean;      // Transparent background for hero sections
}
```

**Behavior**:
- Sticky position on scroll
- Mobile: Hamburger menu toggle
- Desktop: Horizontal navigation
- Active link highlighting based on current route
- Smooth scroll to sections on single-page layout

---

### Navigation

**Location**: `src/components/layout/Navigation.jsx`

```typescript
interface NavigationProps {
  items: NavigationItem[];
  isMobile: boolean;
  isOpen?: boolean;           // For mobile menu toggle state
  onClose?: () => void;       // Close callback for mobile menu
}

interface NavigationItem {
  label: string;              // Display text (e.g., "Projects")
  href: string;               // Link target (e.g., "#projects" or "/blog")
  external?: boolean;         // Open in new tab
}
```

**Accessibility**:
- `aria-label` on nav element
- `aria-current="page"` for active link
- Keyboard navigation (Tab, Enter)
- Focus trap for mobile menu

---

### Footer

**Location**: `src/components/layout/Footer.jsx`

```typescript
interface FooterProps {
  socialLinks: SocialLink[];  // From profile.json
  year?: number;              // Copyright year (defaults to current year)
  showPrivacyLink?: boolean;  // Display privacy policy link
}
```

**Content**:
- Social media icons
- Copyright notice
- Optional privacy policy link

---

## Section Components

### Hero

**Location**: `src/components/sections/Hero.jsx`

**Purpose**: Above-the-fold introduction with profile photo and bio

```typescript
interface HeroProps {
  name: string;
  title: string;
  bio: string;
  photo: string;
  socialLinks: SocialLink[];
}
```

**Layout**:
- Desktop: Photo left (40%), text right (60%)
- Mobile: Stacked, photo on top
- Animated entrance (fade-in, subtle slide-up)

---

### About

**Location**: `src/components/sections/About.jsx`

```typescript
interface AboutProps {
  bio: string;                // Extended bio (can be markdown)
  skills?: string[];          // Optional skills/technologies list
}
```

---

### Projects

**Location**: `src/components/sections/Projects.jsx`

```typescript
interface ProjectsProps {
  projects: Project[];        // Filtered featured projects (max 6)
  columns?: 2 | 3;            // Grid columns (default: 3)
}

interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
}
```

**Layout**:
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack
- Lazy load images below fold

---

### Experience

**Location**: `src/components/sections/Experience.jsx`

```typescript
interface ExperienceProps {
  roles: ExperienceRole[];    // From roles.json, sorted by order
}
```

**Layout**:
- Vertical timeline (optional visual timeline line)
- Each role: Company, title, dates, achievements
- Expandable/collapsible on mobile (optional)

---

### Blog

**Location**: `src/components/sections/Blog.jsx`

```typescript
interface BlogProps {
  posts: BlogPost[];          // Filtered published posts
  limit?: number;             // Max posts to display (default: all)
  showTags?: boolean;         // Display tags on cards
}
```

**Layout**:
- Grid of blog post cards
- Each card: Title, excerpt, date, tags, read time
- Click → Navigate to full post page

---

### Contact

**Location**: `src/components/sections/Contact.jsx`

```typescript
interface ContactProps {
  email: string;              // Contact email for display
  resumeUrl: string;          // PDF download link
  formEnabled?: boolean;      // Show/hide contact form (default: true)
}
```

**Features**:
- Contact form (Web3Forms integration)
- Inline validation errors
- Success/error message display
- Download resume button

---

## UI Components

### Button

**Location**: `src/components/ui/Button.jsx`

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;              // If link, renders as <a>
  external?: boolean;         // Open in new tab
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;     // Optional icon (left side)
  iconRight?: React.ReactNode; // Optional icon (right side)
  loading?: boolean;          // Show loading spinner
  className?: string;         // Additional Tailwind classes
}
```

**Variants**:
- `primary`: Solid background, white text
- `secondary`: Muted background
- `outline`: Border only, transparent background
- `ghost`: No border, hover effect only

**Accessibility**:
- Min touch target 44x44px
- Visible focus state
- `aria-label` if icon-only
- `disabled` attribute propagated

---

### Card

**Location**: `src/components/ui/Card.jsx`

```typescript
interface CardProps {
  children: React.ReactNode;
  hover?: boolean;            // Hover lift effect
  clickable?: boolean;        // Cursor pointer
  onClick?: () => void;
  className?: string;
}
```

**Usage**: Project cards, blog post cards, experience cards

---

### Badge

**Location**: `src/components/ui/Badge.jsx`

```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  className?: string;
}
```

**Usage**: Tech stack tags, blog post tags

---

### FormField

**Location**: `src/components/ui/FormField.jsx`

```typescript
interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  required?: boolean;
  error?: string;             // Validation error message
  register: any;              // React Hook Form register function
  placeholder?: string;
  rows?: number;              // For textarea
  className?: string;
}
```

**Accessibility**:
- `htmlFor` linking label to input
- `aria-invalid` when error present
- `aria-describedby` linking to error message
- Required indicator in label

---

## Markdown Components

### MarkdownRenderer

**Location**: `src/components/markdown/MarkdownRenderer.jsx`

```typescript
interface MarkdownRendererProps {
  content: string;            // Raw markdown string
  className?: string;
}
```

**Custom Components**:
- `img`: Lazy-loaded with responsive sizes
- `a`: External links open in new tab
- `code`: Syntax highlighting with copy button
- `h2`-`h6`: Auto-generated IDs for anchor links

---

### CodeBlock

**Location**: `src/components/markdown/CodeBlock.jsx`

```typescript
interface CodeBlockProps {
  inline: boolean;            // Inline code vs block
  className?: string;         // Language class (e.g., "language-python")
  children: React.ReactNode;
}
```

**Features**:
- Syntax highlighting via prism-react-renderer
- Copy to clipboard button
- Language label
- Line numbers (optional)

---

## Hook APIs

### useMarkdown

**Location**: `src/hooks/useMarkdown.js`

```typescript
function useMarkdown(filePath: string): {
  frontmatter: Record<string, any>;
  content: string;
  loading: boolean;
  error: Error | null;
}
```

**Purpose**: Load and parse markdown files with frontmatter

---

### useScrollSpy

**Location**: `src/hooks/useScrollSpy.js`

```typescript
function useScrollSpy(
  sectionIds: string[],
  options?: { offset?: number }
): string | null
```

**Purpose**: Track active section for navigation highlighting

**Returns**: ID of currently visible section

---

### useReducedMotion

**Location**: `src/hooks/useReducedMotion.js`

```typescript
function useReducedMotion(): boolean
```

**Purpose**: Detect `prefers-reduced-motion` media query

**Usage**:
```jsx
const prefersReducedMotion = useReducedMotion();

<motion.div
  initial={prefersReducedMotion ? {} : { opacity: 0 }}
  animate={prefersReducedMotion ? {} : { opacity: 1 }}
>
```

---

### useForm (Web3Forms integration)

**Location**: `src/components/sections/Contact.jsx`

```typescript
import { useForm } from 'react-hook-form';
import { useWeb3Forms } from '@web3forms/react';

const { register, handleSubmit, reset, formState } = useForm();

const { submit } = useWeb3Forms({
  access_key: string;
  settings?: {
    from_name?: string;
    subject?: string;
  };
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
});
```

---

## Page Components

### Home

**Location**: `src/pages/Home.jsx`

**Sections**:
- Hero
- About (optional)
- Projects
- Experience
- Blog (if posts exist)
- Contact

**No props** (loads data internally from JSON/markdown)

---

### ProjectDetail

**Location**: `src/pages/ProjectDetail.jsx`

```typescript
interface ProjectDetailProps {
  slug: string;               // From route parameter
}
```

**Data Loading**:
- Load project markdown by slug
- Render full content with MarkdownRenderer
- Back button to projects section

---

### BlogPost

**Location**: `src/pages/BlogPost.jsx`

```typescript
interface BlogPostProps {
  slug: string;               // From route parameter
}
```

**Features**:
- Full markdown content
- Table of contents (optional)
- Publish date, read time
- Tags
- Back to blog link

---

## Framer Motion Variants

### Standard Animations

**Fade In:**
```typescript
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};
```

**Slide Up:**
```typescript
const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};
```

**Stagger Children:**
```typescript
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

**Reduced Motion Override:**
```typescript
const createVariant = (animation) => {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? {} : animation;
};
```

---

## Global Types

### Social Link Type

```typescript
interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'medium';
  url: string;
  icon: string;
  label: string;
}
```

### Navigation Item Type

```typescript
interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}
```

---

## Component Testing Contracts

### Required Tests

**All UI Components** must have:
- ✅ Renders without crashing
- ✅ Props validation (required vs optional)
- ✅ Accessibility (axe-core audit passes)
- ✅ Keyboard navigation (if interactive)
- ✅ Responsive rendering (mobile vs desktop)

**Form Components** must have:
- ✅ Validation error display
- ✅ Submit handler called with correct data
- ✅ Reset functionality
- ✅ Disabled state

**Animation Components** must have:
- ✅ Reduced motion support (no animation when prefersReducedMotion true)
- ✅ Animation duration within 150-300ms

---

## Performance Requirements

All components must meet:
- ✅ No unnecessary re-renders (React.memo for pure components)
- ✅ Lazy loading for heavy components (React.lazy)
- ✅ Images lazy loaded below fold (loading="lazy")
- ✅ Code splitting by route
- ✅ No console errors/warnings in production build

---

**Next Step**: Create quickstart.md for local development workflow
