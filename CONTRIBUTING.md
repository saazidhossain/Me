# Contributing to Sazid Hossain Portfolio

Thank you for considering contributing to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, professional, and inclusive in all interactions.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (browser, OS, Node version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please open an issue with:
- A clear description of the enhancement
- Use cases and benefits
- Any potential drawbacks or challenges

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/saazidhossain/Me.git
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Add comments for complex logic
   - Update documentation as needed

4. **Test your changes**
   ```bash
   npm run build
   npm run preview
   ```

5. **Format and lint**
   ```bash
   npm run format
   npm run lint:fix
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

## Development Setup

1. **Prerequisites**
   - Node.js 18+ and npm
   - Git

2. **Installation**
   ```bash
   git clone https://github.com/saazidhossain/Me.git
   cd Me
   npm install
   ```

3. **Development**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321`

4. **Build**
   ```bash
   npm run build
   ```

## Code Style Guidelines

### TypeScript/JavaScript
- Use TypeScript for type safety
- Prefer functional components and hooks
- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for public APIs

### React Components
- One component per file
- Use props destructuring
- Prefer arrow functions
- Keep component files under 300 lines

### CSS/Styling
- Use Tailwind CSS classes when possible
- Follow mobile-first approach
- Maintain consistent spacing and sizing
- Use CSS custom properties for theme values

### File Organization
```
src/
├── components/     # React components
├── layouts/        # Astro layouts
├── pages/          # Page routes
├── styles/         # Global styles
└── env.d.ts        # Type definitions
```

## Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add dark mode toggle
fix: correct mobile navigation overflow
docs: update README installation steps
style: format code with prettier
refactor: simplify hero section logic
perf: optimize image loading
```

## Testing

Currently, this project does not have automated tests. If you'd like to contribute by adding tests, that would be greatly appreciated!

## Questions?

Feel free to open an issue for any questions or clarifications.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
