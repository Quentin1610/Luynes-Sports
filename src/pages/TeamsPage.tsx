import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Footer } from '../components/sections/Footer';
import { revealUp, staggerContainer, fadeIn } from '../constants/animations';

const categories = [
  {
    title: "Séniors",
    teams: [
      { name: "Séniors R1", level: "Régional 1", stats: "Haut de tableau" },
      { name: "Séniors D1", level: "Départemental 1", stats: "Formation" },
      { name: "Vétérans", level: "Loisir & Compétition", stats: "Convivialité" },
    ]
  },
  {
    title: "Formation (U14-U20)",
    teams: [
      { name: "U20 R2", level: "Régional 2", stats: "Elite" },
      { name: "U17 R1 / D1", level: "Mixte", stats: "Promotion" },
      { name: "U15 R1 / D2", level: "Mixte", stats: "Performance" },
    ]
  },
  {
    title: "Pré-Formation (U12-U13)",
    teams: [
      { name: "U13 Critérium", level: "Elite", stats: "Apprentissage" },
      { name: "U12 Espoirs", level: "Départemental", stats: "Développement" },
    ]
  },
  {
    title: "École de Football",
    teams: [
      { name: "U6 à U11", level: "Plateaux", stats: "Éveil & Plaisir" },
    ]
  }
];

export const TeamsPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/Gemini_Generated_Image_6e4m6e4m6e4m6e4m.png"
            alt="Teams Background"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luynes-dark/20 via-transparent to-luynes-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-subtitle !text-white !opacity-80">Nos Catégories</span>
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter leading-none">
              Nos <span className="text-luynes-red">Équipes</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <motion.div variants={revealUp}>
              <span className="section-subtitle">Formation & Excellence</span>
              <h2 className="section-title tracking-tighter">Le parcours du <span className="text-luynes-red">Succès</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Du premier plateau d'éveil au haut niveau régional, découvrez l'ensemble de nos catégories.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={revealUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6">
                  <div className="w-2 h-12 bg-luynes-red rounded-sm"></div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                    {cat.title}
                  </h2>
                </div>

                <div className="grid gap-6">
                  {cat.teams.map((team, tIdx) => (
                    <motion.div
                      key={tIdx}
                      variants={fadeIn}
                      className="glass-card flex items-center justify-between group cursor-pointer hover:bg-luynes-red transition-all duration-500 overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-luynes-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex flex-col relative z-10">
                        <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-white transition-colors tracking-tight">
                          {team.name}
                        </h3>
                        <p className="text-slate-500 text-sm font-bold group-hover:text-white/80 uppercase tracking-widest">{team.level}</p>
                      </div>
                      <div className="relative z-10 flex items-center gap-6">
                        <div className="hidden md:block text-right">
                          <p className="text-[10px] tracking-[0.2em] font-black text-luynes-red group-hover:text-white/60 transition-colors uppercase">Objectif</p>
                          <p className="text-sm font-black text-slate-700 group-hover:text-white transition-colors">{team.stats}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Card */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03]">
          <span className="text-[25vw] font-black uppercase translate-x-1/3 -translate-y-1/3">
            GO
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={revealUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-luynes-dark rounded-[2rem] p-16 md:p-24 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-2/3 h-full bg-luynes-red/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">
              <div className="lg:w-1/2">
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-10 leading-none">
                  Prêt à rejoindre <br /><span className="text-luynes-red">l'aventure ?</span>
                </h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                  Les inscriptions sont ouvertes pour 2026-2027. Rejoignez l'un des clubs les plus dynamiques de la région.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="flex items-center gap-6 text-white group">
                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-luynes-red group-hover:bg-luynes-red group-hover:text-white transition-all duration-500">
                      <Calendar size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Saison</p>
                      <p className="text-xl font-extrabold">2026 - 2027</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-white group">
                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-luynes-red group-hover:bg-luynes-red group-hover:text-white transition-all duration-500">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Lieu</p>
                      <p className="text-xl font-black">Aix-Luynes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-5/12 w-full">
                <div className="glass-card !bg-white/5 backdrop-blur-3xl !border-white/10 p-10 space-y-6">
                  <h3 className="text-white font-black text-2xl mb-6 tracking-tight">Besoin d'aide ?</h3>
                  <button className="btn-primary w-full py-6 text-base tracking-widest">Dossier d'inscription</button>
                  <button className="btn-secondary w-full py-6 text-base !text-white !border-white/20 hover:!bg-white/10 tracking-widest">Planning entraînements</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
