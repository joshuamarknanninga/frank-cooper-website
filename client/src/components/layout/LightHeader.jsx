// components/layout/LightHeader.jsx
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Events', path: '/events' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const gradientColors = [
  'rgba(225, 238, 250, 0.9)',
  'rgba(191, 222, 242, 0.8)',
  'rgba(135, 206, 250, 0.7)',
  'rgba(176, 196, 222, 0.6)',
  'rgba(100, 149, 237, 0.5)',
  'rgba(183, 201, 226, 0.4)'
];

export default function LightHeader() {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const { scrollY } = useScroll();
  const headerRef = useRef();

  const handleMouseMove = (e) => {
    const rect = headerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHidden(latest > scrollY.getPrevious() && latest > 100);
  });

  return (
    <motion.header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(
            circle at ${gradientPos.x}% ${gradientPos.y}%,
            ${gradientColors.join(', ')}
          ),
          linear-gradient(
            150deg,
            rgba(255,255,255,0.3) 0%,
            rgba(255,255,255,0.1) 100%
          )`
      }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-blue-100"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-sm" />
            <span className="text-xl font-semibold text-blue-800">
              Frank Cooper Ministries
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `px-4 py-2 text-sm font-medium transition-colors
                    ${isActive ? 'text-blue-700' : 'text-blue-600 hover:text-blue-800'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                          layoutId="underline"
                          transition={{ type: 'spring', bounce: 0.25 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {['twitter', 'facebook', 'instagram'].map((icon) => (
              <motion.a
                key={icon}
                href={`https://${icon}.com`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-blue-600 hover:text-blue-700"
              >
                <i className={`fab fa-${icon} text-lg`} />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Animated Accent */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200"
        animate={{
          opacity: [0.8, 1, 0.8],
          background: [
            'linear-gradient(90deg, #bfdbfe 0%, #93c5fd 50%, #bfdbfe 100%)',
            'linear-gradient(90deg, #93c5fd 0%, #bfdbfe 50%, #93c5fd 100%)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.header>
  );
}