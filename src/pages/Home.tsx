import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Teams } from '../components/sections/Teams';
import { News } from '../components/sections/News';
import { Sponsors } from '../components/sections/Sponsors';
import { Footer } from '../components/sections/Footer';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        
        <section className="py-24 bg-white relative">
          <About />
          <div className="container mx-auto px-6 text-center mt-12">
            <Link to="/le-club" className="btn-secondary flex items-center gap-3 w-fit mx-auto group">
              En savoir plus sur le club <ArrowRight size={18} className="text-luynes-red group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <section className="py-24 bg-slate-50 relative">
          <Teams />
          <div className="container mx-auto px-6 text-center mt-12">
            <Link to="/equipes" className="btn-secondary flex items-center gap-3 w-fit mx-auto group">
              Voir toutes nos catégories <ArrowRight size={18} className="text-luynes-red group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <section className="py-24 bg-white relative">
          <News />
          <div className="container mx-auto px-6 text-center mt-12">
            <Link to="/actualites" className="btn-secondary flex items-center gap-3 w-fit mx-auto group">
              Toutes les actualités <ArrowRight size={18} className="text-luynes-red group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <Sponsors />
      </main>
      <Footer />
    </>
  );
};
