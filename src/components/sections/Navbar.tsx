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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNotHome = location.pathname !== '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen || isNotHome
        ? 'bg-white py-3'
        : 'bg-transparent py-6'
        } ${(isScrolled || isNotHome) && !isMobileMenuOpen ? 'border-b border-slate-200 shadow-lg shadow-slate-900/5' : ''}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className={`bg-white rounded-full overflow-hidden flex items-center justify-center p-[2px] shadow-2xl transition-all duration-500 ${isScrolled || isMobileMenuOpen || isNotHome ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'}`}>
            <img
              src="/luynes_sports_logo.png"
              alt="Luynes Sports Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-tighter leading-none uppercase text-slate-900">
              LUYNES
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-luynes-red leading-none uppercase mt-1">
              SPORTS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                to={link.path}
                className={`text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 relative group ${location.pathname === link.path
                  ? 'text-luynes-red'
                  : 'text-slate-600 hover:text-luynes-red'
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
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest">
              Rejoindre le club
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 transition-colors duration-500 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center"
          >
            <div className="flex flex-col gap-8 p-12 items-center text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-display font-bold uppercase tracking-tighter ${location.pathname === link.path ? 'text-luynes-red' : 'text-slate-900 hover:text-luynes-red'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
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
    </nav>
  );
};
