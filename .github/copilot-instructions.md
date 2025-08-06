# GitHub Copilot Instructions

You are working on a professional portfolio website for Silambarasan R, a Senior Software Engineer. This React.js application showcases technical skills, experience, and projects with modern UI/UX practices.

## Project Overview

This is a personal portfolio website built with React.js, featuring dynamic theming, responsive design, and AI-powered analysis capabilities through an integrated MCP server.

**Live Site**: [silambarasan.netlify.app](https://silambarasan.netlify.app/)

## Code Quality Standards

### ESLint Rules (Strictly Enforced)
- **Line Length**: Maximum 80 characters
- **Indentation**: 2 spaces, no tabs
- **Quotes**: Single quotes for strings, prefer single quotes for JSX
- **Objects**: No spaces around curly braces `{key: value}`
- **Arrays**: No spaces around brackets `[item1, item2]`
- **Trailing Commas**: Required for multiline objects/arrays
- **React Props**: One prop per line when multiple props exist
- **Imports**: Destructured format `import {Component} from 'package'`

### Component Standards
- Use functional components with hooks
- Implement PropTypes for all components
- Follow consistent file naming (PascalCase for components)
- Maintain clean component structure with proper exports

## Architecture

### Core Technologies
- **Frontend**: React.js, React Router DOM, React Bootstrap
- **Styling**: SCSS/Sass, Styled Components
- **Animations**: Framer Motion with advanced scroll-triggered animations
- **Icons**: FontAwesome
- **Deployment**: Netlify with automatic CI/CD

### AI Analysis Infrastructure
- **MCP Server**: Real-time UI/UX analysis with browser automation
- **Technologies**: Playwright, Lighthouse, Cheerio
- **Capabilities**: Performance analysis, accessibility testing, responsive design validation

## Project Structure

```
src/
├── components/          # Reusable UI components with advanced animations
├── layouts/            # Page layout templates  
├── pages/             # Route pages (Home, About)
├── providers/         # Context providers (Theme)
├── styled-components/ # Styled component definitions with motion integration
├── styles/           # SCSS stylesheets with smooth transitions
├── hooks/            # Custom hooks (useScrollAnimation, useStaggerAnimation)
├── audio/            # Audio files (name pronunciation)
├── fonts/            # Custom font files
├── images/           # Image assets and icons
└── resume/           # PDF resume file

mcp-server/            # AI Analysis Infrastructure
├── src/
│   ├── index.js              # Main MCP server
│   ├── browser-analyzer.js   # Browser automation & testing
│   ├── lighthouse-analyzer.js # Performance analysis
│   ├── ui-analyzer.js        # UI/UX analysis
│   └── test.js              # Test utilities
├── package.json             # MCP dependencies
└── screenshots/            # Generated screenshots (gitignored)
```

## Key Features

### Portfolio Sections
- **Intro**: Dynamic personal introduction with engineer role display
- **Skills**: Visual skill representation with animated progress bars
- **Experience**: Professional work history with company details
- **Education**: Academic background and certifications
- **Hobbies**: Personal interests with visual elements
- **Contact**: Social media links and contact information

### Technical Features
- **Theme Management**: Light/Dark mode with system detection and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Navigation**: Smooth scrolling single-page application with active section highlighting
- **Audio Integration**: Name pronunciation feature
- **Resume Download**: Direct PDF download functionality
- **Advanced Animations**: Framer Motion with scroll triggers, staggered effects, and interactive feedback

## Development Commands

### Portfolio Application
```bash
npm start          # Start development server
npm run build      # Create production build
npm run lint       # Run ESLint validation
npm run lint:fix   # Auto-fix ESLint issues
```

### MCP Server (AI Analysis)
```bash
cd mcp-server
npm install        # Install dependencies (completed)
npm start          # Start MCP server
npm test           # Test MCP functionality
npm run dev        # Start with file watching
```

## Animation System

The project uses **Framer Motion** for smooth, performant animations:

### Key Features
- **Scroll-triggered animations**: Components animate on viewport entry using `whileInView`
- **Staggered reveals**: Sequential animations for lists and grids  
- **Interactive feedback**: Hover/tap animations for better UX
- **Theme transitions**: Smooth color changes during theme switching

### Custom Hooks
- `useScrollAnimation.js`: Scroll-based animation triggers with reduced motion support
- `useStaggerAnimation.js`: Staggered timing management for lists

### Best Practices
- Use `whileInView` with `viewport={{ once: true }}` for performance
- Apply `staggerChildren` with 0.1-0.2s delays for sequential elements
- Respect `prefers-reduced-motion` accessibility settings
- Keep animations between 0.3s-0.8s for optimal UX
- Use transform-based animations for 60fps performance

## MCP Server Integration

The MCP server enables real-time analysis of the portfolio website. You can use it to:

### Performance Analysis
- Run Lighthouse audits for Core Web Vitals
- Analyze loading performance and optimization opportunities
- Monitor performance regressions

### Accessibility Testing
- Check WCAG compliance and color contrast
- Validate ARIA labels and semantic HTML
- Test keyboard navigation functionality

### UI/UX Analysis
- Analyze typography consistency and hierarchy
- Review color palette and design system adherence
- Check spacing and layout consistency
- Validate component design patterns

### Responsive Design Testing
- Test across multiple viewport sizes (mobile, tablet, desktop)
- Check for layout overflow and responsive breakpoints
- Validate cross-device compatibility

### SEO & Meta Analysis
- Analyze meta tags and Open Graph implementation
- Check structured data and schema markup
- Validate heading structure and content hierarchy

## Usage Guidelines

### When Making Changes
1. Always run ESLint before committing
2. Test responsive design across viewports
3. Verify theme switching functionality
4. Check accessibility compliance
5. Validate performance impact
6. **Test animations are smooth and respect motion preferences**

### Code Review Checklist
- [ ] ESLint passes without errors
- [ ] Components have proper PropTypes
- [ ] Responsive design works on all devices
- [ ] Theme switching functions correctly
- [ ] Performance metrics are maintained
- [ ] Accessibility standards are met
- [ ] **Animations are smooth and respect motion preferences**

### MCP Server Usage
Ask questions like:
- "Analyze my portfolio's performance and suggest optimizations"
- "Check accessibility compliance and provide recommendations"
- "Test responsive design across different devices"
- "Analyze typography and color scheme consistency"
- "Review SEO elements and meta tag implementation"

## Deployment

- **Environment**: Node.js 20+
- **Platform**: Netlify with automatic deployments
- **Quality Gates**: ESLint validation required for deployment
- **SSL**: Automatically managed by Netlify
- **Domain**: Custom domain with automatic redirects

## Important Notes

- All code must pass ESLint validation before deployment
- The MCP server requires the portfolio to be running on `http://localhost:3000`
- Theme preferences persist across sessions using localStorage
- Image assets are optimized for web performance
- The resume PDF is directly downloadable from the site

## Best Practices

- Follow React functional component patterns
- Use semantic HTML for accessibility
- Implement proper error boundaries
- Optimize images and assets for web
- Maintain consistent code formatting
- Write meaningful commit messages
- Test across multiple browsers and devices
- **Use framer-motion for all animations with scroll triggers**
- **Implement staggered animations for visual hierarchy**
- **Respect motion preferences and optimize for 60fps**
