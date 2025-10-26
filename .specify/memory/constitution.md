<!--
Sync Impact Report:
- Version: Initial creation (1.0.0)
- Modified principles: N/A (new constitution)
- Added sections: All sections (initial creation)
- Removed sections: N/A
- Templates status:
  ✅ plan-template.md - reviewed, aligns with principles
  ✅ spec-template.md - reviewed, aligns with principles
  ✅ tasks-template.md - reviewed, aligns with principles
- Follow-up TODOs: None
-->

# Data Science Portfolio Constitution

## Core Principles

### I. Japanese Minimalism (NON-NEGOTIABLE)

**Principle**: Every design element MUST serve a clear purpose. No decoration for decoration's sake.

- Visual hierarchy through whitespace and typography, not color or ornamentation
- Calm, harmonious layouts that guide attention without demanding it
- Remove before adding: question every element's necessity
- Embrace negative space as a design element, not empty space to be filled

**Rationale**: Minimalism reduces cognitive load, speeds comprehension, and creates timeless aesthetics. In data science portfolios, clarity of content outweighs visual complexity.

### II. Warm Palette & Clean Typography

**Principle**: Use warm earth tones (beiges, soft browns, muted terracotta) or neutral grays as the foundation. Typography MUST be highly legible with clear hierarchy.

- Maximum 2-3 typefaces across the entire site
- Font sizes follow a modular scale (e.g., 1.2x or 1.25x ratio)
- Line heights ≥ 1.5 for body text to ensure readability
- Avoid pure black (#000); use dark grays or warm blacks
- Color contrast MUST meet WCAG 2.1 AA standards (4.5:1 for text)

**Rationale**: Warm tones create approachability while maintaining professionalism. Clear typography hierarchy guides users through content without confusion.

### III. Performance First (NON-NEGOTIABLE)

**Principle**: Page load time MUST be under 2 seconds on 3G connections. Every asset MUST be justified.

- Images: WebP or AVIF format, lazy-loaded, responsive sizes
- Fonts: System fonts preferred; custom fonts subset and preloaded
- JavaScript: Minimal, tree-shaken, code-split by route
- CSS: Critical CSS inlined, non-critical deferred
- No heavy frameworks unless load time constraint is met
- Lighthouse performance score target: ≥90

**Rationale**: Fast sites improve user experience, accessibility (low-bandwidth users), and SEO. Data science professionals value efficiency.

### IV. Markdown-Driven Content

**Principle**: All content (projects, blog posts, case studies) MUST be authored in Markdown files. No database for content unless scale demands it.

- Content lives in version control alongside code
- Changes are atomic, reviewable, and rollback-capable
- Static generation preferred over server rendering
- Content schema defined in frontmatter (YAML)

**Rationale**: Markdown ensures longevity, portability, and maintainability. Version control provides audit trails. Static generation maximizes performance.

### V. Accessibility (NON-NEGOTIABLE)

**Principle**: Site MUST meet WCAG 2.1 Level AA standards. Accessibility is not optional.

- Semantic HTML5 elements (nav, main, article, aside, footer)
- ARIA labels only when semantic HTML insufficient
- Keyboard navigation fully supported (tab order, focus states)
- Screen reader tested (VoiceOver/NVDA)
- Color is never the sole conveyor of information
- Alt text for all images; decorative images marked aria-hidden

**Rationale**: Accessibility is a legal requirement and ethical obligation. Inclusive design benefits all users.

### VI. Responsive Design

**Principle**: Mobile-first design. Site MUST be fully functional on 320px screens and scale gracefully to 4K displays.

- Fluid typography using clamp() or viewport units
- Flexible layouts using CSS Grid and Flexbox
- Touch targets ≥44x44px on mobile
- Test breakpoints: 320px, 768px, 1024px, 1440px, 1920px+
- No horizontal scroll except intentional carousels

**Rationale**: Users access content from diverse devices. Mobile traffic often exceeds desktop. Responsive design is a baseline expectation.

### VII. No Animation Clutter

**Principle**: Animations MUST enhance usability, not decoration. Respect prefers-reduced-motion.

- Transitions for interactive feedback (hover, focus, click states)
- Micro-interactions to signal state changes (loading, success, error)
- No auto-playing animations without user control
- Duration: 150-300ms for micro-interactions
- Always provide prefers-reduced-motion alternative (instant or minimal animation)

**Rationale**: Excessive animation distracts and can cause vestibular disorders. Functional animation improves UX; decorative animation harms it.

## Design Standards

### Visual Hierarchy

- Primary actions: Highest contrast, largest touch targets
- Secondary actions: Medium contrast, smaller but still accessible
- Tertiary actions/links: Subtle, discoverable on focus
- Information architecture: Max 3 levels deep for navigation

### Content Guidelines

- Headings: Clear, descriptive, follow semantic order (h1 → h2 → h3)
- Paragraphs: 60-75 characters per line for optimal readability
- Lists: Bullet points for unordered, numbers for sequential
- Code blocks: Syntax highlighting, copy button, language label
- Data visualizations: Alt text describing trends, interactive where beneficial

## Development Workflow

### Technology Constraints

- **Static Site Generation**: Preferred (e.g., Astro, Next.js SSG, Hugo)
- **Build Time**: Full site rebuild MUST complete within 60 seconds
- **Image Pipeline**: Automated optimization, responsive sizes, modern formats
- **CSS Approach**: Utility-first (Tailwind) or scoped component styles; avoid global CSS
- **JavaScript**: Progressive enhancement. Core content accessible without JS.

### Quality Gates

Every deployment MUST pass:

1. **Performance**: Lighthouse score ≥90 (Performance, Accessibility, Best Practices)
2. **Accessibility**: axe-core audit with zero violations
3. **Visual Regression**: Percy/Chromatic comparison (if budget allows)
4. **Broken Links**: Check all internal/external links
5. **Content Validation**: Markdown frontmatter schema validated

### Review Process

- PRs require self-review checklist:
  - [ ] Tested on mobile (320px, 375px, 768px)
  - [ ] Keyboard navigation verified
  - [ ] Screen reader tested (one user flow)
  - [ ] Images optimized and lazy-loaded
  - [ ] No console errors/warnings
  - [ ] Load time under 2s (throttled 3G)

## Governance

### Amendment Process

1. Propose change via pull request to this constitution
2. Justify change with user needs or technical constraints
3. Update all templates and documentation to reflect change
4. Increment version number according to semantic versioning

### Versioning Rules

- **MAJOR**: Breaking changes to principles (e.g., removing accessibility requirement)
- **MINOR**: New principle added or existing principle expanded
- **PATCH**: Clarifications, typos, non-semantic refinements

### Compliance

- All features MUST align with Core Principles before merging
- Constitution supersedes all other style guides or preferences
- Violations require explicit justification in PR description
- Principle conflicts escalated to project owner for decision

**Version**: 1.0.0 | **Ratified**: 2025-10-25 | **Last Amended**: 2025-10-25
