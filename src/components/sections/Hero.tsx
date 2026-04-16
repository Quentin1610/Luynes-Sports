import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-between overflow-hidden pt-32 pb-32 bg-luynes-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/heroluynes.png"
          alt="Luynes Sports Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luynes-dark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="w-full relative z-10 flex-grow flex flex-col justify-center px-10 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-row items-center justify-between w-full"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display font-extrabold text-white leading-none uppercase tracking-tighter drop-shadow-2xl">
            Luynes
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display font-extrabold text-luynes-red leading-none uppercase tracking-tighter drop-shadow-2xl">
            Sport
          </h1>
        </motion.div>


      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="btn-primary min-w-[200px]">
              Rejoindre le club
            </Link>
            <Link to="/equipes" className="btn-secondary !text-white !border-white/20 hover:!bg-white/10 min-w-[200px]">
              Nos Équipes
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
