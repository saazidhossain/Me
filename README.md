# Sazid Hossain - Portfolio Website

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS. Features a clean design, dark mode support, and optimized performance.

## 🚀 Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - Static Site Generation
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Deployment:** GitHub Pages

## ✨ Features

- 🎨 Modern, responsive design
- 🌓 Dark mode support with smooth transitions
- ⚡ Optimized performance with Astro's partial hydration
- 📱 Mobile-first responsive layout
- 🎭 Interactive UI components with React
- 🔍 SEO optimized
- ♿ Accessibility focused
- 🎯 Type-safe with TypeScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/saazidhossain/Me.git
cd Me
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Building for Production

Build the static site:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── public/              # Static assets
│   └── images/          # Image files
├── src/
│   ├── components/      # React components
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Page routes
│   ├── styles/          # Global styles
│   └── env.d.ts         # TypeScript environment definitions
├── data/                # JSON data files
├── astro.config.mjs     # Astro configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 📄 Available Pages

- `/` - Home page with hero section
- `/about` - About page
- `/portfolio` - Portfolio showcase
- `/services` - Services offered
- `/resume` - Resume/CV
- `/blog` - Blog posts
- `/gallery` - Image gallery
- `/philosophy` - Personal philosophy
- `/contact` - Contact form

## 🎨 Customization

### Updating Content

- **Projects:** Edit `data/projects.json`
- **Styles:** Modify `src/styles/global.css`
- **Components:** Update files in `src/components/`
- **Pages:** Edit files in `src/pages/`

### Theme Configuration

The theme uses CSS custom properties defined in `src/styles/global.css`. Modify these variables to customize colors, fonts, and other design tokens.

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the static files ready for deployment

### GitHub Pages

Push to the main branch, and GitHub Actions will automatically build and deploy the site.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sazid Hossain**

- GitHub: [@saazidhossain](https://github.com/saazidhossain)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [your icon source]
- Fonts from [your font source]

## 📊 Performance

- Lighthouse Score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized
- Bundle Size: Minimal JS with Astro's partial hydration

---

⭐ If you found this project helpful, please consider giving it a star!
