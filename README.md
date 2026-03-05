# Sazid Hossain — Portfolio

Personal portfolio website for Sazid Hossain — Creative Technologist & AI Automation Strategist.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) (static site generator)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS + custom CSS design tokens
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── src/
│   ├── components/     # React components (Navbar, HeroSection, etc.)
│   ├── layouts/        # Astro layout template
│   ├── pages/          # Page routes (index, about, blog, contact, …)
│   └── styles/         # Global CSS with design tokens
├── data/
│   └── projects.json   # Portfolio projects data
├── .github/workflows/  # CI/CD deploy workflow
├── astro.config.mjs    # Astro configuration
├── tailwind.config.cjs # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to `main`.

> **GitHub Pages project page note**: By default, `astro.config.mjs` does not set a `base` path,
> so the site works correctly when served from a domain root (e.g. a custom domain or a user-page
> repo named `<username>.github.io`).  
> If you deploy to a project page at `https://saazidhossain.github.io/Me/`, uncomment
> `base: '/Me'` in `astro.config.mjs` and update internal links to use
> `import.meta.env.BASE_URL` as a prefix.
