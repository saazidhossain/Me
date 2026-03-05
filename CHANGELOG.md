# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-05

### Added
- Comprehensive README.md with full documentation
- MIT LICENSE file
- Code quality tools:
  - ESLint configuration for TypeScript and React
  - Prettier configuration with Astro support
  - EditorConfig for consistent editor settings
- CONTRIBUTING.md guide for contributors
- CHANGELOG.md for tracking changes
- .env.example for environment configuration reference
- Enhanced npm scripts (lint, format, type-check)
- Path aliases in TypeScript configuration (@components, @layouts, @styles, @data)
- Proper package.json metadata (description, author, repository, keywords)

### Changed
- Reorganized project structure:
  - Moved all images to public/images/ directory
  - Renamed images with descriptive names
  - Removed duplicate files from root directory (30+ files)
  - Cleaned up old HTML build artifacts
- Enhanced TypeScript configuration with strict mode
- Improved .gitignore to prevent build artifacts and dependencies
- Updated dependencies to latest versions

### Removed
- Duplicate source files in root (components, pages, layouts, styles)
- Old HTML build artifacts (10+ files)
- Duplicate projects.json
- Irrelevant Jekyll workflow
- Duplicate deploy.yml from root

### Fixed
- Repository organization and file structure
- Build process verification (all pages build successfully)
- No security vulnerabilities in dependencies

## [0.1.0] - Initial Release

### Added
- Initial Astro portfolio website
- React components for interactive UI
- Tailwind CSS styling
- Dark mode support
- Multiple pages: Home, About, Portfolio, Services, Resume, Blog, Gallery, Philosophy, Contact
- GitHub Actions deployment workflow
