import { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const getActiveLink = () => {
    if (location.pathname === '/') return 'index';
    return null;
  };

  const activeLink = getActiveLink();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-8 text-white">
      <div className="flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className="block group"
          >
            <h1 className="text-base leading-tight transition-opacity duration-200 group-hover:opacity-70">
              Thais L'Hocine
            </h1>
            <h2 className="text-xs text-white/90 leading-tight transition-opacity duration-200 group-hover:text-white/70 hidden sm:block">
              Graphiste & Creative Developer
            </h2>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ul className="flex gap-6 text-sm">
            <li>
              <Link
                to="/"
                className={`relative transition-opacity duration-200 ${
                  activeLink === 'index'
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-100'
                }`}
                onMouseEnter={() => setHoveredLink('index')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Index
                {activeLink === 'index' && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}