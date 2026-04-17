import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-luynes-dark"
    >
      {/* Background Image - STATIC */}
      <div className="absolute inset-0 z-0">
        <img
          src="/heroluynes.png"
          alt="Luynes Sports Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luynes-dark/40 via-transparent to-luynes-dark"></div>
      </div>



      {/* Content - Lowered buttons */}
      <div className="w-full h-full relative z-10 flex flex-col items-center justify-end pb-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="btn-primary min-w-[240px] group overflow-hidden relative">
              <span className="relative z-10">Rejoindre le club</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/equipes" className="btn-secondary !text-white !border-white/20 hover:!bg-white/10 min-w-[240px]">
              Nos Équipes
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 pointer-events-none"
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};
