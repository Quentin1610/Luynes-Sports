import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Le Club', path: '/le-club' },
  { name: 'Équipes', path: '/equipes' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isNotHome = location.pathname !== '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${isScrolled || isNotHome
          ? 'bg-white/80 backdrop-blur-xl py-3 border-b border-black/5'
          : isMobileMenuOpen
            ? 'bg-transparent py-3'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative z-[110]">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className={`transition-all duration-300 ${isScrolled || isMobileMenuOpen || isNotHome ? 'w-12' : 'w-16 md:w-20'} shrink-0 hover:rotate-6`}>
              <img
                src="/favicon.png"
                alt="Luynes Sports Logo"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-extrabold tracking-tight leading-none uppercase transition-all duration-500 ${isScrolled || isMobileMenuOpen || isNotHome ? 'text-slate-900' : 'text-white'}`}>
                LUYNES
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.1em] text-luynes-red leading-none uppercase mt-1 transition-all duration-500">
                SPORTS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`text-xs uppercase tracking-tight font-extrabold transition-all duration-300 relative group ${location.pathname === link.path
                    ? 'text-luynes-red'
                    : isScrolled || isNotHome ? 'text-slate-600' : 'text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-luynes-red transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link to="/contact" className="btn-primary !py-2.5 !px-6 !text-[10px] tracking-tight">
                Nous rejoindre
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 relative z-[120] ${isScrolled || isMobileMenuOpen || isNotHome ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col pt-32 pb-12 overflow-y-auto"
          >
            {/* Mobile background text decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center opacity-[0.02]">
              <span className="text-[40vw] font-extrabold uppercase rotate-90 origin-center">
                LUYNES
              </span>
            </div>

            <div className="flex flex-col gap-6 p-8 items-center text-center relative z-10 w-full">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-full"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-extrabold uppercase tracking-tight block py-2 ${location.pathname === link.path ? 'text-luynes-red' : 'text-slate-900'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="w-full max-w-xs mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full py-5 text-lg"
                >
                  Rejoindre le club
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
