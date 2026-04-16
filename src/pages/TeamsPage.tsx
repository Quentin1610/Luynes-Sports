import { motion } from 'framer-motion';
import { Calendar, User, MapPin } from 'lucide-react';
import { Footer } from '../components/sections/Footer';

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
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0">
          <img
            src="/IMG_4249.jpg"
            alt="Teams Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luynes-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Formation & Excellence</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tighter mb-6">
              Nos <span className="text-luynes-red">Équipes</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tighter border-l-4 border-luynes-red pl-6">
                  {cat.title}
                </h2>

                <div className="grid gap-4">
                  {cat.teams.map((team, tIdx) => (
                    <div
                      key={tIdx}
                      className="glass-card flex items-center justify-between group cursor-pointer hover:bg-luynes-red/[0.02]"
                    >
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-luynes-red transition-colors">
                          {team.name}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium">{team.level}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="hidden md:block text-right">
                          <p className="text-xs tracking-tighter font-bold text-slate-400">Objectif</p>
                          <p className="text-sm font-semibold text-slate-700">{team.stats}</p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Card */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-luynes-dark rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-luynes-red/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
                  Prêt à rejoindre <br /><span className="text-luynes-red">l'aventure sportive ?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Les inscriptions sont ouvertes pour toutes les catégories. Notre équipe pédagogique est à votre disposition pour toute question relative aux licences et aux entraînements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-luynes-red">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold">Saison</p>
                      <p className="font-semibold">2026 - 2027</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-luynes-red">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold">Lieu</p>
                      <p className="font-semibold">Stade L. Ruzzettu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4">
                  <h3 className="text-white font-semibold text-xl mb-4">Besoin d'infos ?</h3>
                  <button className="btn-primary w-full">Dossier d'inscription</button>
                  <button className="btn-secondary w-full !text-white !border-white/20 hover:!bg-white/10">Plannings entraînements</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
