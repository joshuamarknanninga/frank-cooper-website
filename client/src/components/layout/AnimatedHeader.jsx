// components/layout/AnimatedHeader.jsx
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

export default function AnimatedHeader() {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const headerRef = useRef();

  // Update gradient position based on mouse movement
  const handleMouseMove = (e) => {
    const rect = headerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  // Header scroll effect
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > previous && latest > 150);
  });

  return (
    <motion.header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `
          radial-gradient(
            circle at ${gradientPos.x}% ${gradientPos.y}%,
            rgba(110, 123, 251, 0.15),
            rgba(115, 200, 240, 0.1)
          ),
          linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          )`
      }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
            <span className="text-xl font-semibold text-white">Frank Cooper</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `relative px-3 py-2 text-sm font-medium transition-colors
                    ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-px bg-white"
                          layoutId="underline"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <motion.div 
            className="hidden md:flex gap-4"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {['twitter', 'facebook', 'instagram'].map((icon) => (
              <motion.a
                key={icon}
                href={`https://${icon}.com`}
                target="_blank"
                rel="noopener"
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white"
              >
                <i className={`fab fa-${icon} text-lg`} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Animated Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.header>
  );
}