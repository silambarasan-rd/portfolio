---
applyTo: "src/styles/**/*.{scss,css}"
---

# Styling and Animation Instructions

When working with SCSS, CSS, and animations in this portfolio, follow these guidelines:

## SCSS Architecture

### File Organization
- Use modular SCSS files for each component
- Import variables and mixins at the top of each file
- Follow BEM naming convention for CSS classes
- Keep specificity low and avoid deep nesting (max 3 levels)

### Variables and Mixins
- Use CSS custom properties for theme-related values
- Define consistent spacing, typography, and color scales
- Create reusable mixins for common patterns
- Maintain a centralized variables file

## Responsive Design Standards

### Breakpoint Strategy
- Mobile-first approach with min-width media queries
- Use consistent breakpoint values across the application
- Test across multiple device sizes and orientations
- Implement fluid typography and spacing

### Grid and Layout
- Use CSS Grid and Flexbox for modern layouts
- Implement responsive container queries when appropriate
- Ensure proper content overflow handling
- Maintain consistent spacing rhythm

## Theme Implementation

### Dark/Light Mode Support
- Use CSS custom properties for all theme-dependent values
- Implement smooth transitions between theme changes
- Ensure proper contrast ratios for accessibility
- Test all components in both theme modes

### Color System
- Maintain a consistent color palette
- Use semantic color naming (primary, secondary, accent)
- Implement proper color contrast for text readability
- Define hover and focus states for interactive elements

## Animation Guidelines

### Framer Motion Integration
- Use motion components for all animated elements
- Implement scroll-triggered animations with `whileInView`
- Apply staggered animations for lists and grids
- Respect user's motion preferences

### Performance Optimization
- Use transform and opacity for 60fps animations
- Avoid animating layout properties (width, height, margin)
- Implement `will-change` property for complex animations
- Use `transform3d` for hardware acceleration

### Motion Design Principles
- Keep animations between 0.3s-0.8s duration
- Use appropriate easing functions for natural motion
- Implement micro-interactions for user feedback
- Ensure animations enhance rather than distract

## CSS Best Practices

### Naming Conventions
- Use BEM methodology for component-specific styles
- Follow consistent naming patterns across files
- Use descriptive class names that indicate purpose
- Avoid presentational names in favor of semantic ones

### Code Organization
- Group related properties together
- Use consistent property ordering
- Comment complex calculations and magic numbers
- Remove unused styles regularly

## Accessibility in Styling

### Motion Accessibility
- Respect `prefers-reduced-motion` media query
- Provide alternative feedback for motion-sensitive users
- Test with motion settings disabled
- Ensure functionality doesn't depend on animation

### Visual Accessibility
- Maintain WCAG AA contrast ratios (4.5:1 for normal text)
- Ensure sufficient color contrast in both themes
- Don't rely solely on color to convey information
- Implement proper focus indicators

## Component-Specific Styling

### Styled Components Integration
- Use styled-components for dynamic, theme-dependent styles
- Implement props-based styling for component variants
- Keep styled-components close to their React components
- Use template literals for complex style calculations

### Global Styles
- Define global reset and base styles
- Implement consistent typography scale
- Set up proper box-sizing and normalize styles
- Define utility classes sparingly

## Performance Considerations

### CSS Optimization
- Use efficient selectors and avoid deep nesting
- Minimize reflows and repaints
- Optimize critical path CSS
- Use CSS containment when appropriate

### Loading Strategy
- Inline critical CSS for above-the-fold content
- Use preload hints for important stylesheets
- Implement proper CSS loading order
- Minimize unused CSS in production builds

## Maintenance Guidelines

### Code Quality
- Use consistent formatting and indentation
- Follow established patterns in the codebase
- Document complex styling decisions
- Regular cleanup of unused styles

### Browser Support
- Test across modern browsers
- Use appropriate vendor prefixes
- Implement graceful degradation for older browsers
- Test with different zoom levels and font sizes
