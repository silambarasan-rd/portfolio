---
applyTo: "src/components/**/*.{js,jsx}"
---

# React Component Development Instructions

When creating or modifying React components in this portfolio, follow these specific guidelines:

## Component Structure Standards

### Functional Component Pattern
- Use arrow function syntax for component definition
- Destructure props at the component level
- Implement PropTypes for all props with detailed validation
- Use React hooks for state and lifecycle management

### Component Organization
- Keep components under 150 lines when possible
- Extract complex logic into custom hooks
- Separate concerns: presentation, logic, and styling
- Use clear, descriptive component and prop names

## Hook Usage Guidelines

### State Management
- Use useState for local component state
- Use useContext for theme management
- Use useEffect for side effects with proper dependency arrays
- Implement useCallback and useMemo for performance optimization

### Custom Hooks Integration
- Use `useScrollAnimation` for scroll-triggered animations
- Use `useStaggerAnimation` for sequential list animations
- Follow the existing hook patterns in the codebase

## Props and PropTypes

### PropTypes Implementation
```javascript
ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  onAction: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark'])
};
```

### Default Props
- Provide sensible defaults for optional props
- Use destructuring with default values when appropriate

## Animation Integration

### Framer Motion Implementation
- Use `motion` components for all animations
- Implement `whileInView` for scroll-triggered animations
- Add `viewport={{ once: true }}` for performance
- Respect reduced motion preferences

### Animation Patterns
- Use staggered children animations for lists
- Implement hover and tap feedback for interactive elements
- Keep animation durations between 0.3s-0.8s
- Use easing functions for natural motion

## Theme Integration

### Theme Context Usage
- Access theme through useContext(ThemeContext)
- Apply theme-specific styles conditionally
- Support both light and dark mode variants
- Use CSS variables for theme-dependent properties

## Accessibility Requirements

### ARIA Implementation
- Add proper ARIA labels for interactive elements
- Use semantic HTML elements when possible
- Implement keyboard navigation support
- Ensure proper focus management

### Screen Reader Support
- Add descriptive alt text for images
- Use proper heading hierarchy
- Implement skip navigation where needed

## Performance Considerations

### Optimization Techniques
- Use React.memo for pure components
- Implement proper key props for list items
- Avoid inline functions in JSX when possible
- Use lazy loading for heavy components

### Event Handling
- Use event delegation when appropriate
- Debounce expensive operations
- Clean up event listeners in useEffect cleanup

## Component Examples

### Basic Component Structure
```javascript
import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {ThemeContext} from '../providers/Context';

const ComponentName = ({title, items, onAction}) => {
  const [state, setState] = useState(null);
  const currentTheme = useContext(ThemeContext);

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      className={`component-name ${currentTheme}`}
    >
      {/* Component content */}
    </motion.div>
  );
};

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  onAction: PropTypes.func
};

export default ComponentName;
```

## Testing Guidelines

### Component Testing
- Test component rendering with different props
- Test user interactions and event handlers
- Test theme switching functionality
- Test accessibility features

### Best Practices
- Write tests alongside component development
- Use React Testing Library for user-centric testing
- Mock external dependencies appropriately
- Maintain test coverage for critical paths
