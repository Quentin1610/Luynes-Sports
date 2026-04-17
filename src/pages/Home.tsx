import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Teams } from '../components/sections/Teams';
import { News } from '../components/sections/News';
import { Sponsors } from '../components/sections/Sponsors';
import { StatsSection } from '../components/sections/Stats';
import { Footer } from '../components/sections/Footer';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { revealUp } from '../constants/animations';

export const Home = () => {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        
        <About />
        <div className="container mx-auto px-6 text-center -mt-16 mb-24 relative z-10">
          <motion.div
            variants={revealUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Link to="/le-club" className="btn-secondary inline-flex items-center gap-4 group">
              Découvrir notre histoire <ArrowRight size={18} className="text-luynes-red group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <StatsSection />

        <Teams />
        <div className="container mx-auto px-6 text-center -mt-12 pb-24 bg-transparent relative z-10">
          <motion.div
            variants={revealUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Link to="/equipes" className="btn-secondary inline-flex items-center gap-4 group">
              Voir toutes les catégories <ArrowRight size={18} className="text-luynes-red group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <News />
        <div className="container mx-auto px-6 text-center -mt-12 pb-24 bg-transparent relative z-10">
          <motion.div
            variants={revealUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Link to="/actualites" className="btn-secondary inline-flex items-center gap-4 group">
              Toutes les actualités <ArrowRight size={18} className="text-luynes-red group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <Sponsors />
      </main>
      <Footer />
    </>
  );
};
