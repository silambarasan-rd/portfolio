import {useEffect, useState} from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);

    const listener = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, []);

  return {
    initial: prefersReducedMotion ? {opacity: 1, y: 0} : {opacity: 0, y: 20},
    whileInView: {opacity: 1, y: 0},
    viewport: {once: true, amount: threshold},
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  };
};

export const useStaggerAnimation = (delay = 0) => {
  return {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };
};
