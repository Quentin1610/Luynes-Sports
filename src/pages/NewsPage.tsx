import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import { Footer } from '../components/sections/Footer';

const articles = [
  {
    title: "L'équipe première brille en R1",
    excerpt: "Une victoire éclatante à l'extérieur qui place Luynes Sports dans le trio de tête du championnat.",
    date: "12 Avril 2026",
    category: "Compétition",
    author: "Admin",
    image: "/match.png"
  },
  {
    title: "Stage de Pâques : Les pré-inscriptions ouvertes",
    excerpt: "Offrez à vos enfants une semaine de perfectionnement encadrée par nos coachs diplômés.",
    date: "10 Avril 2026",
    category: "Événement",
    author: "Secrétariat",
    image: "/match3.png"
  },
  {
    title: "U15 : Direction la finale départementale",
    excerpt: "Après une séance de tirs au but épique, nos jeunes U15 se qualifient pour la grande finale.",
    date: "08 Avril 2026",
    category: "Jeunes",
    author: "Coach Sportif",
    image: "/IMG_4247.jpg"
  },
  {
    title: "Nouveau partenaire : Bienvenue à l'Olympique de Marseille",
    excerpt: "Nous sommes fiers d'accueillir un nouveau partenaire majeur pour soutenir nos projets associatifs.",
    date: "05 Avril 2026",
    category: "Partenariat",
    author: "Marketing",
    image: "/match7.png"
  }
];

export const NewsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1600"
            alt="News Background"
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
            <span className="section-subtitle">Vivre la passion</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tighter mb-6">
              Les <span className="text-luynes-red">Actualités</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-tight text-luynes-red border border-white">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-6 text-slate-400 text-xs font-semibold tracking-tight mb-4">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {article.date}</span>
                    <span className="flex items-center gap-2"><User size={14} /> {article.author}</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 leading-tight mb-4 group-hover:text-luynes-red transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                </div>
              </motion.article>
            ))}
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
};
