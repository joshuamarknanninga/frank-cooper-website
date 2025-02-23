// components/Header.jsx
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const header = document.querySelector('header');
      const { clientX, clientY } = e;
      const { left, top, width, height } = header.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      header.style.setProperty('--gradient-x', x);
      header.style.setProperty('--gradient-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="gradient-header">
      <nav>{/* Your navigation links */}</nav>
    </header>
  );
}