import React from 'react';
import { useInView } from '../hooks/useInView';

export default function FadeUp({ children, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
