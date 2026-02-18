import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/dsa-stats', label: 'DSA & Stats' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/contact', label: 'Contact' },
];

export function MagicalNavigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-black/40 border border-[var(--gryffindor-gold)]/30 rounded-full px-6 py-3 md:px-8 md:py-4 shadow-2xl transition-all duration-300 ${isOpen ? 'w-[90vw] md:w-auto rounded-2xl' : ''}`}
        style={{
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.3), inset 0 0 20px rgba(139, 0, 0, 0.2)',
        }}
      >
        <div className="flex items-center justify-between gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2 md:hidden">
            <Sparkles className="w-5 h-5 text-[var(--gryffindor-gold)] animate-pulse" />
            <span className="font-magical text-[var(--gryffindor-gold)] text-lg">Menu</span>
          </div>

          <Sparkles className="hidden md:block w-5 h-5 text-[var(--gryffindor-gold)] animate-pulse" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <motion.span
                  className={`font-magical text-sm tracking-wide transition-all duration-300 ${location.pathname === link.path
                      ? 'text-[var(--gryffindor-gold)]'
                      : 'text-[var(--parchment)]'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.span>

                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gryffindor-gold)] to-transparent"
                    style={{
                      boxShadow: '0 0 10px var(--gryffindor-gold)',
                    }}
                  />
                )}

                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--gryffindor-gold)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--gryffindor-gold)] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col items-center justify-start overflow-y-auto"
          >
            <div className="w-full max-w-md space-y-4 pb-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block w-full text-center py-4 border-b border-[var(--gryffindor-gold)]/20 ${location.pathname === link.path
                        ? 'text-[var(--gryffindor-gold)] bg-[var(--gryffindor-gold)]/10 rounded-lg border-none'
                        : 'text-[var(--parchment)]'
                      }`}
                  >
                    <span className="font-magical text-xl tracking-wider">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
