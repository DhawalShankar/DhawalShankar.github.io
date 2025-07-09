import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-amber-500 transform-gpu transition-transform duration-300 ease-out z-50"
      style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left' }}
    />
  );
}
