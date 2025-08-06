---
applyTo: "src/**/*.{js,jsx,ts,tsx,scss,css}"
---

# Expert Frontend Engineering Instructions

When working with React components, styling, and frontend code in this portfolio, follow these expert-level practices and considerations:

## Architecture & Component Design Principles

### Component Composition Standards
- Use functional components with hooks exclusively
- Implement proper PropTypes validation for all components
- Follow component tree hierarchy with clear parent-child relationships
- Create reusable components like `SectionTitle`, `BackToTop` for consistency
- Use styled-components for dynamic styling needs

### State Management Best Practices
- Leverage React hooks efficiently (useState, useEffect, useContext)
- Implement Context API for theme management across the application
- Use local state for component-specific data
- Ensure proper cleanup in useEffect hooks to prevent memory leaks

### Performance Optimization
- Implement lazy loading for routes and heavy components
- Optimize image assets for web performance
- Use React.memo for pure components to prevent unnecessary re-renders
- Implement smooth scroll and efficient animation patterns
- Consider code splitting for better bundle optimization

## Styling & Design System

### Hybrid Styling Approach
- Use SCSS for global styles and design tokens
- Implement styled-components for component-specific dynamic styles
- Maintain dark/light theme support with CSS variables
- Follow responsive design principles with mobile-first approach
- Use CSS-in-JS for theme-dependent styling

### Animation & Motion Design
- Use Framer Motion for all animations with scroll triggers
- Implement staggered animations for visual hierarchy
- Respect `prefers-reduced-motion` accessibility settings
- Keep animations between 0.3s-0.8s for optimal UX
- Use transform-based animations for 60fps performance

## Code Quality & Standards

### React Best Practices
- Follow controlled component patterns
- Implement proper event handling with event delegation
- Use component composition over inheritance
- Maintain clean import/export statements
- Follow ES6+ features and modern JavaScript patterns

### Code Organization
- Maintain modular code structure with clear separation of concerns
- Use consistent file naming (PascalCase for components, camelCase for utilities)
- Organize imports: React first, third-party libraries, then local imports
- Keep components focused on single responsibility principle

## Areas for Continuous Improvement

### Testing Strategy
- Add unit tests for components using Jest and React Testing Library
- Implement integration tests for user workflows
- Add E2E testing with tools like Cypress or Playwright
- Maintain test coverage metrics above 80%

### Performance Monitoring
- Monitor Core Web Vitals and loading performance
- Implement service worker for PWA capabilities
- Optimize third-party dependencies and bundle size
- Use React DevTools Profiler for performance analysis

### Accessibility Excellence
- Implement proper ARIA labels and semantic HTML
- Ensure keyboard navigation support
- Add skip navigation links for screen readers
- Maintain color contrast ratios according to WCAG guidelines

### SEO & Meta Optimization
- Implement proper meta tags and Open Graph tags
- Add structured data and schema markup
- Maintain proper heading hierarchy (h1-h6)
- Generate sitemap for better search engine indexing

## Technical Debt Management

### Immediate Action Items
- Add comprehensive error boundaries for graceful error handling
- Implement loading states for better user experience
- Add proper TypeScript types if migrating from JavaScript
- Set up automated testing pipeline

### Future Enhancement Considerations
- Consider adding a blog section for content marketing
- Implement internationalization (i18n) for global reach
- Add analytics integration for user behavior insights
- Consider micro-frontend architecture for scalability

## Code Review Guidelines

When reviewing or writing code, ensure:
- [ ] ESLint passes without errors
- [ ] Components have proper PropTypes
- [ ] Responsive design works across all devices
- [ ] Theme switching functions correctly
- [ ] Performance metrics are maintained
- [ ] Accessibility standards are met
- [ ] Animations respect motion preferences
- [ ] Code follows established patterns and conventions

## Expert-Level Recommendations

Focus on creating maintainable, scalable, and performant code that demonstrates senior-level frontend engineering skills. Prioritize user experience, accessibility, and modern web standards while maintaining clean, readable code that other developers can easily understand and contribute to.
