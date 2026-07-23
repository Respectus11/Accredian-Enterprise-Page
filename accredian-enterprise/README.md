# Accredian Enterprise Page

A partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website, built with Next.js App Router and Tailwind CSS. This project recreates the enterprise landing page with all major sections, a lead capture form, and mock API integration.

**Live Demo:** [https://accredian-enterprise-page.vercel.app](https://accredian-enterprise-page.vercel.app)

**GitHub Repo:** [https://github.com/Respectus11/Accredian-Enterprise-Page](https://github.com/Respectus11/Accredian-Enterprise-Page)

---

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Respectus11/Accredian-Enterprise-Page.git
   cd Accredian-Enterprise-Page/accredian-enterprise
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework, routing, API routes |
| React 19 | UI rendering, functional components |
| TypeScript | Type safety |
| Tailwind CSS 4 | Utility-first styling |

---

## Project Structure

```
accredian-enterprise/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Inter font
│   │   ├── page.tsx            # Landing page (assembles all sections)
│   │   ├── globals.css         # Tailwind theme + custom utilities
│   │   └── api/
│   │       ├── leads/route.ts  # POST/GET lead capture API
│   │       └── enterprise-data/route.ts  # GET enterprise data API
│   └── components/
│       ├── Navbar.tsx           # Fixed nav with mobile hamburger menu
│       ├── Hero.tsx             # Hero section with stats grid
│       ├── AccredianEdge.tsx    # "Why Accredian" feature cards
│       ├── DomainExpertise.tsx  # 7 domain cards with gradient accents
│       ├── CourseSegmentation.tsx  # Filterable course catalog
│       ├── CATFramework.tsx     # C-A-T methodology pillars
│       ├── HowItWorks.tsx       # 3-step process with connectors
│       ├── FAQ.tsx              # Accordion FAQ section
│       ├── LeadForm.tsx         # Contact form with validation
│       ├── CTASection.tsx       # Final call-to-action banner
│       └── Footer.tsx           # 4-column footer with links
├── public/                      # Static assets (SVG icons)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## Approach Taken

1. **Reference Analysis:** Studied the [enterprise.accredian.com](https://enterprise.accredian.com/) site to identify all sections, layout patterns, and content hierarchy.

2. **Component Decomposition:** Broke the landing page into 11 isolated, reusable React components — each responsible for a single section (Hero, Domains, Courses, FAQ, etc.).

3. **Design System:** Created a custom Tailwind theme in `globals.css` with semantic color tokens (`primary`, `accent`, `surface`, `muted`, `border`) to maintain visual consistency across all components.

4. **Responsive-First:** Used Tailwind's responsive prefixes (`sm:`, `lg:`, `xl:`) throughout. The Navbar has a mobile hamburger toggle. Grids collapse from multi-column to single-column on smaller screens.

5. **API Layer:** Implemented two Next.js API routes:
   - `POST /api/leads` — captures form submissions with validation (name, email, company required; email format check)
   - `GET /api/enterprise-data` — serves mock enterprise data (domains, partners, stats)

6. **Interactive Elements:** Added `useState` hooks for the course category filter, mobile menu toggle, and form submission state management. `useEffect` handles the scroll-based navbar styling.

---

## AI Usage

| Tool | How It Was Used |
|---|---|
| **Claude (opencode)** | Scaffolded component structure, wrote initial component code, generated the Tailwind theme, created API route logic, and helped with responsive layout patterns |
| **GitHub Copilot** | Assisted with autocomplete for repetitive Tailwind class sequences and JSX boilerplate |

**What I modified or improved manually:**

- Adjusted color palette and spacing to better match the reference site's visual identity
- Customized the FAQ accordion behavior using native `<details>`/`<summary>` elements instead of a JS library
- Tuned the course filtering logic and added category-specific badge colors
- Rewrote the README from scratch (the AI initially generated the default create-next-app README)
- Manually tested responsive breakpoints and fixed layout issues on mobile viewports
- Added scroll-based navbar background transition with a custom `useEffect` hook
- Refined form validation messages and loading/success/error states in the LeadForm component

---

## What I Would Improve With More Time

1. **Framer Motion animations** — Add scroll-triggered fade-in/slide-up animations to each section for a more polished feel
2. **Backend persistence** — Replace the in-memory leads array with a proper database (e.g., PostgreSQL via Prisma, or MongoDB) so data survives server restarts
3. **Image optimization** — Add real product screenshots, partner logos, and team photos using Next.js `<Image>` component with proper `alt` text
4. **SEO improvements** — Add Open Graph meta tags, structured data (JSON-LD), and a sitemap
5. **Testing** — Write unit tests for components and API routes using Vitest or Jest
6. **Accessibility audit** — Run through WAVE/Lighthouse to catch any remaining ARIA label or contrast issues
7. **Dark mode** — Add a theme toggle using Tailwind's `dark:` variant and `prefers-color-scheme` media query
8. **Analytics** — Integrate Vercel Analytics or Google Analytics to track section engagement

---

