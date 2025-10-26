# Tasks: Personal Portfolio Website

**Input**: Design documents from `/specs/001-portfolio-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Tests are NOT requested in this specification. Tasks focus on implementation only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- All paths relative to `/Users/shan5433/Desktop/portfolio/portfolio-web/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure with src/, public/, tests/ directories per plan.md
- [X] T002 Initialize Node.js project with package.json (React 18, Vite 5, Tailwind CSS 3)
- [X] T003 [P] Install core dependencies: react, react-dom, react-router-dom, vite
- [X] T004 [P] Install styling dependencies: tailwindcss, postcss, autoprefixer, framer-motion
- [X] T005 [P] Install markdown dependencies: react-markdown, remark-gfm, rehype-slug, gray-matter
- [X] T006 [P] Install image optimization: vite-imagetools, vite-plugin-image-optimizer, sharp
- [X] T007 [P] Install form handling: react-hook-form, @web3forms/react
- [X] T008 [P] Install dev dependencies: @vitejs/plugin-react, eslint, prettier
- [X] T009 Configure Vite in vite.config.js with plugins, base path for GitHub Pages, build optimization
- [X] T010 [P] Configure Tailwind in tailwind.config.js with warm earth tone palette and typography scale
- [X] T011 [P] Configure PostCSS in postcss.config.js
- [X] T012 [P] Create src/styles/index.css with Tailwind imports and base styles
- [X] T013 [P] Setup ESLint configuration in .eslintrc.js
- [X] T014 [P] Setup Prettier configuration in .prettierrc
- [X] T015 Create .gitignore with node_modules/, dist/, .env, .DS_Store
- [X] T016 Create index.html with correct base path and meta tags
- [X] T017 Create src/main.jsx as Vite entry point
- [X] T018 Create src/App.jsx as root component with Router
- [X] T019 Create src/router.jsx with HashRouter and route definitions
- [X] T020 [P] Create public/images/ directory structure (profile/, projects/, blog/)
- [X] T021 [P] Create public/resume/ directory
- [X] T022 [P] Create src/data/ directory structure (projects/, blog/, experience/)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T023 Create useReducedMotion hook in src/hooks/useReducedMotion.js for accessibility
- [X] T024 [P] Create useScrollSpy hook in src/hooks/useScrollSpy.js for navigation highlighting
- [X] T025 [P] Create useMarkdown hook in src/hooks/useMarkdown.js for content loading
- [X] T026 Create validation utility functions in src/utils/validation.js for form validation
- [X] T027 [P] Create markdown utility functions in src/utils/markdown.js for content processing
- [X] T028 Create Button component in src/components/ui/Button.jsx with variants and accessibility
- [X] T029 [P] Create Card component in src/components/ui/Card.jsx with hover effects
- [X] T030 [P] Create Badge component in src/components/ui/Badge.jsx for tech stack tags
- [X] T031 [P] Create FormField component in src/components/ui/FormField.jsx with validation
- [X] T032 Create MarkdownRenderer component in src/components/markdown/MarkdownRenderer.jsx with react-markdown
- [X] T033 [P] Create CodeBlock component in src/components/markdown/CodeBlock.jsx with syntax highlighting
- [X] T034 Create Header component in src/components/layout/Header.jsx with sticky navigation
- [X] T035 [P] Create Navigation component in src/components/layout/Navigation.jsx with mobile menu
- [X] T036 [P] Create Footer component in src/components/layout/Footer.jsx with social links
- [X] T037 Setup environment variables template in .env.example with VITE_WEB3FORMS_KEY placeholder

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Portfolio Visitor First Impression (Priority: P1) 🎯 MVP

**Goal**: Display homepage with profile information (name, photo, bio, social links) and projects section with 4-6 project cards

**Independent Test**: Navigate to homepage, view profile information within 2 seconds, scroll to projects section, see project cards with titles, summaries, tech stack badges, and links. Verify mobile responsive layout.

### Implementation for User Story 1

- [X] T038 [P] [US1] Create src/data/profile.json with placeholder profile data (name, title, bio, photo path, social links, resume URL)
- [X] T039 [P] [US1] Create src/data/projects/sample-project-1.md with frontmatter and markdown content
- [X] T040 [P] [US1] Create src/data/projects/sample-project-2.md with frontmatter and markdown content
- [X] T041 [P] [US1] Create src/data/projects/sample-project-3.md with frontmatter and markdown content
- [X] T042 [P] [US1] Create src/data/projects/sample-project-4.md with frontmatter and markdown content
- [X] T043 [US1] Create Hero section component in src/components/sections/Hero.jsx with profile photo, name, title, bio, and social links
- [X] T044 [US1] Create Projects section component in src/components/sections/Projects.jsx with grid layout and project cards
- [X] T045 [US1] Implement project loading logic to parse markdown files and filter featured projects
- [X] T046 [US1] Create Home page in src/pages/Home.jsx composing Hero and Projects sections
- [X] T047 [US1] Add responsive layout breakpoints (mobile: 1 column, tablet: 2 columns, desktop: 3 columns) to Projects section
- [X] T048 [US1] Implement lazy loading for project images using native loading="lazy"
- [X] T049 [US1] Add Framer Motion animations to Hero section (fade-in, slide-up) with reduced motion support
- [X] T050 [US1] Add Framer Motion stagger animations to project cards with reduced motion support
- [X] T051 [US1] Ensure all social links open correctly (GitHub/LinkedIn in new tab, email triggers mailto:)
- [X] T052 [US1] Add semantic HTML structure (nav, main, section, article) with ARIA labels
- [X] T053 [US1] Verify keyboard navigation works for all interactive elements
- [X] T054 [US1] Test mobile responsive layout at 320px, 375px, 768px breakpoints
- [X] T055 [US1] Verify touch targets are ≥44x44px on mobile

**Checkpoint**: At this point, User Story 1 should be fully functional - homepage displays profile and projects

---

## Phase 4: User Story 2 - Experience & Resume Access (Priority: P2)

**Goal**: Display professional experience section with role details and provide downloadable resume PDF

**Independent Test**: Navigate to Experience section, view Foxconn and Wistron role details with metrics, click Download Resume button, verify PDF downloads with correct filename.

### Implementation for User Story 2

- [ ] T056 [US2] Create src/data/experience/roles.json with 2+ role entries (Foxconn, Wistron) including achievements with metrics
- [ ] T057 [US2] Create Experience section component in src/components/sections/Experience.jsx with timeline layout
- [ ] T058 [US2] Implement role card rendering with company name, title, date range, and achievement bullets
- [ ] T059 [US2] Add Experience section to Home page in src/pages/Home.jsx
- [ ] T060 [US2] Create Contact section component in src/components/sections/Contact.jsx with resume download button
- [ ] T061 [US2] Add Contact section to Home page in src/pages/Home.jsx
- [ ] T062 [US2] Add placeholder resume PDF to public/resume/ directory with filename format FirstName_LastName_Resume.pdf
- [ ] T063 [US2] Implement resume download functionality with correct filename
- [ ] T064 [US2] Add responsive layout for Experience section (mobile: vertical stack, desktop: timeline)
- [ ] T065 [US2] Ensure text readability on mobile (≥16px font size, line height ≥1.5)
- [ ] T066 [US2] Verify keyboard navigation for download button (Enter/Space key triggers download)
- [ ] T067 [US2] Add Framer Motion animations to Experience section with reduced motion support

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - experience and resume accessible

---

## Phase 5: User Story 4 - Contact Form Submission (Priority: P2)

**Goal**: Provide contact form for direct messaging without leaving website

**Independent Test**: Navigate to Contact section, fill out form (name, email, message), submit, receive confirmation message. Verify validation errors for missing/invalid data.

### Implementation for User Story 4

- [ ] T068 [US4] Implement contact form in src/components/sections/Contact.jsx using react-hook-form
- [ ] T069 [US4] Integrate Web3Forms API with access key from environment variables
- [ ] T070 [US4] Add form field components for Name (required), Email (required), Message (textarea, required)
- [ ] T071 [US4] Implement client-side validation with inline error messages (required fields, email format)
- [ ] T072 [US4] Add honeypot field for spam protection
- [ ] T073 [US4] Implement form submission handler with success/error messaging
- [ ] T074 [US4] Display success message: "Thank you! I'll get back to you soon." on successful submission
- [ ] T075 [US4] Display error messages for validation failures (e.g., "Email is required", "Please enter a valid email")
- [ ] T076 [US4] Reset form after successful submission
- [ ] T077 [US4] Ensure mobile keyboard triggers appropriate input types (email input shows @ key)
- [ ] T078 [US4] Verify touch targets ≥44px on mobile for form fields and submit button
- [ ] T079 [US4] Verify keyboard navigation and focus states for form accessibility
- [ ] T080 [US4] Add loading state to submit button during form submission

**Checkpoint**: At this point, User Stories 1, 2, AND 4 should all work independently - contact form functional

---

## Phase 6: User Story 3 - Optional Blog Content Consumption (Priority: P3)

**Goal**: Display blog section with markdown posts, support syntax highlighting and responsive images

**Independent Test**: Navigate to Blog section, view list of posts with titles and dates, click post title, read full markdown content with proper typography and code blocks.

### Implementation for User Story 3

- [ ] T081 [P] [US3] Create src/data/blog/sample-post-1.md with frontmatter and markdown content
- [ ] T082 [P] [US3] Create src/data/blog/sample-post-2.md with frontmatter and markdown content
- [ ] T083 [US3] Create Blog section component in src/components/sections/Blog.jsx with post list
- [ ] T084 [US3] Implement blog post loading logic to parse markdown files and filter published posts
- [ ] T085 [US3] Create BlogPost page in src/pages/BlogPost.jsx for individual post rendering
- [ ] T086 [US3] Add Blog section to Home page in src/pages/Home.jsx
- [ ] T087 [US3] Implement blog post card rendering with title, date, excerpt, and read time
- [ ] T088 [US3] Add routing for individual blog posts using slug parameter
- [ ] T089 [US3] Implement auto-calculation of read time from word count if not in frontmatter
- [ ] T090 [US3] Add syntax highlighting to code blocks using prism-react-renderer
- [ ] T091 [US3] Add copy button to code blocks
- [ ] T092 [US3] Implement lazy loading for blog post images
- [ ] T093 [US3] Constrain blog post line length to 60-75 characters for readability
- [ ] T094 [US3] Add "Back to Blog" link at end of blog post
- [ ] T095 [US3] Handle case when blog has zero posts (show "Coming soon" message or hide navigation link)
- [ ] T096 [US3] Verify markdown rendering with proper heading hierarchy (h1→h2→h3)
- [ ] T097 [US3] Test responsive layout for blog section on mobile and desktop

**Checkpoint**: All user stories should now be independently functional - blog content accessible

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final optimizations

- [ ] T098 [P] Add placeholder profile photo to public/images/profile.webp (800x800px, optimized)
- [ ] T099 [P] Add placeholder project images to public/images/projects/ (1200x800px, optimized)
- [ ] T100 [P] Add placeholder blog images to public/images/blog/ (1200x800px, optimized)
- [ ] T101 [P] Add favicon.svg to public/ directory
- [ ] T102 Optimize all images to WebP format with quality 80 using vite-imagetools
- [ ] T103 [P] Configure responsive image srcset for hero and project images
- [ ] T104 Implement critical CSS inlining for above-the-fold content
- [ ] T105 [P] Configure Vite build optimization (code splitting, tree shaking, minification)
- [ ] T106 [P] Add Brotli compression plugin to Vite config
- [ ] T107 Verify color contrast meets WCAG 2.1 AA standards (4.5:1 minimum)
- [ ] T108 [P] Test with screen reader (VoiceOver or NVDA) for accessibility
- [ ] T109 [P] Run axe-core accessibility audit and fix violations
- [ ] T110 Implement smooth scroll behavior for navigation links to sections
- [ ] T111 [P] Add meta tags for SEO (title, description, Open Graph)
- [ ] T112 Add 404 page for handling invalid routes
- [ ] T113 [P] Create GitHub Actions workflow in .github/workflows/deploy.yml for automated deployment
- [ ] T114 [P] Add Web3Forms access key to GitHub repository secrets
- [ ] T115 Test build locally with npm run build and npm run preview
- [ ] T116 Run Lighthouse audit and verify Performance ≥90, Accessibility ≥90
- [ ] T117 Verify page load time <2 seconds on throttled 3G connection
- [ ] T118 Test on mobile devices (iOS Safari, Android Chrome)
- [ ] T119 Verify all animations respect prefers-reduced-motion setting
- [ ] T120 Update README.md with project description, setup instructions, and deployment guide
- [ ] T121 Validate quickstart.md instructions work for new developer setup
- [ ] T122 Final code cleanup and remove console.log statements
- [ ] T123 Deploy to GitHub Pages and verify live site works correctly

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (US1 → US4 → US2 → US3)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1 but typically follows for logical flow
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Independent of US1 and US2
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Fully optional, independent of all other stories

### Within Each User Story

- Data files before components that consume them
- Section components before page composition
- Core implementation before animations and polish
- Story complete before moving to next priority

### Parallel Opportunities

- Phase 1: T003-T008 (all dependency installations) can run in parallel
- Phase 1: T010-T014 (all configuration files) can run in parallel
- Phase 1: T020-T022 (all directory creation) can run in parallel
- Phase 2: T024-T025, T027 (hooks), T029-T031, T033, T035-T036 (components) can run in parallel
- Phase 3: T038-T042 (all sample project data files) can run in parallel
- Phase 6: T081-T082 (blog post data files) can run in parallel
- Phase 7: T098-T100 (placeholder images), T102-T103, T105-T106, T108-T109, T113-T114 can run in parallel
- Different user stories can be worked on in parallel by different team members after Phase 2 completes

---

## Parallel Example: User Story 1 Setup

```bash
# Launch all project data files together:
Task: "Create src/data/profile.json with placeholder profile data"
Task: "Create src/data/projects/sample-project-1.md"
Task: "Create src/data/projects/sample-project-2.md"
Task: "Create src/data/projects/sample-project-3.md"
Task: "Create src/data/projects/sample-project-4.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T022)
2. Complete Phase 2: Foundational (T023-T037) - CRITICAL, blocks all stories
3. Complete Phase 3: User Story 1 (T038-T055)
4. **STOP and VALIDATE**: Test homepage with profile and projects
5. Add minimal polish tasks from Phase 7 (images, build, deploy)
6. Deploy MVP

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy (MVP!)
3. Add User Story 4 (Contact Form) → Test independently → Deploy
4. Add User Story 2 (Experience & Resume) → Test independently → Deploy
5. Add User Story 3 (Blog) → Test independently → Deploy (Full site!)
6. Complete Polish phase → Final optimizations → Deploy production

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Homepage + Projects)
   - Developer B: User Story 2 (Experience + Resume)
   - Developer C: User Story 4 (Contact Form)
   - Developer D: User Story 3 (Blog) - lowest priority
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Total tasks: 123
- MVP scope: Phases 1-3 (T001-T055) = 55 tasks
- Full feature scope: Phases 1-7 (all 123 tasks)
