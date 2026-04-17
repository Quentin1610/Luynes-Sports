import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { revealUp, staggerContainer } from '../../constants/animations';

const news = [
  {
    title: "Détections 2026/2027 : Rejoignez l'élite",
    date: "17 Avril 2026",
    category: "Détection",
    image: "/detection.png",
    excerpt: "Le club ouvre ses portes pour la saison prochaine. Venez exprimer votre talent lors de nos sessions de détection officielles.",
    cta: "S'inscrire"
  },
  {
    title: "Le stage de printemps est ouvert !",
    date: "14 Avril 2026",
    category: "Club",
    image: "/match3.png",
    excerpt: "Les inscriptions pour notre traditionnel stage de printemps sont désormais ouvertes. Une semaine de football intensif et de plaisir.",
    cta: "S'inscrire"
  },
  {
    title: "Victoire importante des Seniors face à Berre (3-1)",
    date: "12 Avril 2026",
    category: "Match",
    image: "/match.png",
    excerpt: "Une performance collective remarquable qui permet à l'équipe fanion de consolider sa place en haut de tableau du Régional 1."
  }
];

export const News = () => {
  return (
    <section id="news" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[20vw] font-black uppercase leading-none whitespace-nowrap translate-y-1/2">
          ACTUALITÉS
        </span>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={revealUp} className="text-center mb-20">
            <span className="section-subtitle">Dernières infos</span>
            <h2 className="section-title tracking-tighter">Au cœur de <span className="text-luynes-red">l'actualité</span></h2>
          </motion.div>

          <div className="grid gap-12">
            {news.map((item, idx) => (
              <motion.div
                key={idx}
                variants={revealUp}
                className="group flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-5/12 aspect-[16/10] rounded-lg overflow-hidden shrink-0 shadow-2xl relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-luynes-red/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex flex-col justify-center py-4 grow">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-luynes-red text-white text-xs font-black rounded-md uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                      <Calendar size={14} className="text-luynes-red" /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-luynes-red transition-colors duration-300 tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-6 font-medium">
                    {item.excerpt}
                  </p>
                  
                  {item.cta && (
                    <div className="mb-8">
                      <Link 
                        to="#" 
                        className="inline-flex items-center gap-3 bg-luynes-red text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-luynes-red-hover transition-all duration-300 group/btn shadow-lg hover:shadow-luynes-red/20 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {item.cta}
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}

                  <div className="w-20 h-1 bg-slate-100 group-hover:w-full group-hover:bg-luynes-red transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
