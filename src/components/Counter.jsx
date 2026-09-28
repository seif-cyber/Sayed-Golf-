import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function Counter({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out function for smoother stop
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
