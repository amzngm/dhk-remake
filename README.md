<div align="center">

# DHK — Architectural Design Studio

A modern, performant rebuild of the DHK architectural studio website.

[![Live Site](https://img.shields.io/badge/Live%20Site-dhk--remake.vercel.app-black?style=flat-square)](https://dhk-remake.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

## Overview

This project is a complete frontend rebuild of [dhk.co.za](https://www.dhk.co.za/), an architectural, urban design, and interior design studio based in South Africa. The rebuild focuses on modern web standards, smooth animations, and optimal performance while maintaining the studio's refined visual identity.

## Features

- **Smooth Scrolling** — Powered by Lenis for buttery-smooth scroll experiences
- **Fluid Typography & Spacing** — Responsive scaling with fluid-tailwindcss
- **Motion Design** — Thoughtful animations using Motion (Framer Motion)
- **Dark Theme First** — Consistent dark mode aesthetic with CSS custom properties
- **Optimized Fonts** — Self-hosted Helvetica Now Display for brand consistency
- **SEO Ready** — Complete metadata, Open Graph, and sitemap configuration
- **React Compiler** — Leveraging Next.js 16's React Compiler for performance

## Tech Stack

| Category      | Technology                                      |
| ------------- | ----------------------------------------------- |
| Framework     | [Next.js](https://nextjs.org/) 16 (App Router)  |
| Runtime       | [React](https://react.dev/) 19                  |
| Language      | [TypeScript](https://www.typescriptlang.org/) 5 |
| Styling       | [Tailwind CSS](https://tailwindcss.com/) 4      |
| Animation     | [Motion](https://motion.dev/) (Framer Motion)   |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering/)    |
| Icons         | Lucide React                                    |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── app-components/
│   ├── home-components/
│   └── nav-components/
├── config/           # Configuration files
├── db/               # Data templates
└── seo/              # SEO utilities
public/
├── font/             # Self-hosted fonts
└── images/           # Static images
```

## License & Attribution

Original design and content © [dhk](https://www.dhk.co.za/).
Rebuild by [NGM](https://github.com/AMZNGM).

---

<div align="center">
  <sub>Crafted with precision. Built for performance.</sub>
</div>
