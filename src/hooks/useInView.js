import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: options.threshold,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
}
