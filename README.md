# Expandibill Solutions — Redesign

A modern, animated marketing site for **Expandibill Solutions** (medical billing &
administrative services), built with **Vite + React + Tailwind CSS** and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Folder structure

```
expandibill-redesign/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                       # Tailwind layers + design tokens
    ├── components/
    │   ├── layout/                     # App-shell components
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── sections/                   # Page sections
    │   │   ├── Hero.jsx
    │   │   ├── Stats.jsx
    │   │   ├── Services.jsx
    │   │   ├── Process.jsx
    │   │   ├── WhyUs.jsx
    │   │   ├── Testimonials.jsx
    │   │   ├── CTA.jsx
    │   │   └── Contact.jsx
    │   └── ui/                         # Reusable primitives
    │       ├── Button.jsx
    │       ├── Container.jsx
    │       ├── Icon.jsx
    │       ├── Logo.jsx
    │       └── SectionHeader.jsx
    ├── data/                           # Plain-JS content (easy to edit)
    │   ├── site.js
    │   ├── services.js
    │   ├── process.js
    │   ├── features.js
    │   ├── stats.js
    │   └── testimonials.js
    ├── hooks/
    │   └── useCountUp.js               # IntersectionObserver-based counter
    └── lib/
        └── animations.js               # Shared Framer Motion variants
```

## Design system

- **Palette** — deep navy (`brand-900`) + electric blue (`brand-600`) +
  teal accent (`accent-500`), defined in `tailwind.config.js`.
- **Typography** — Plus Jakarta Sans (display) + Inter (body), loaded from Google Fonts.
- **Components** — `.btn-primary`, `.btn-ghost`, `.btn-dark`, `.card`, `.chip`,
  `.gradient-text`, `.glass` declared in `src/index.css`.
- **Animations** — Framer Motion fade/stagger variants in `src/lib/animations.js`,
  plus custom Tailwind keyframes (`float`, `blob`, `shimmer`).

## Editing content

All copy lives in `src/data/*.js` — change services, stats, testimonials, nav links,
or company contact details without touching components.

## Tech

- React 18
- Vite 5
- Tailwind CSS 3.4
- Framer Motion 11
- lucide-react (icons)
