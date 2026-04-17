import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { Footer } from '../components/sections/Footer';
import { revealUp, staggerContainer, fadeIn } from '../constants/animations';

const articles = [
  {
    title: "Détections 2026/2027 : Le futur s'écrit maintenant",
    excerpt: "Luynes Sports lance sa campagne de détection pour la saison 2026/2027. Rejoignez l'un des clubs les plus ambitieux de la région.",
    date: "17 Avril 2026",
    category: "Détection",
    author: "Direction Sportive",
    image: "/detection.png"
  },
  {
    title: "L'équipe première brille en R1",
    excerpt: "Une victoire éclatante à l'extérieur qui place Luynes Sports dans le trio de tête du championnat.",
    date: "12 Avril 2026",
    category: "Compétition",
    author: "Admin",
    image: "/match.png"
  },
  {
    title: "Stage de printemps : Les pré-inscriptions ouvertes",
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
    title: "Nouveau partenaire : Bienvenue à l'OM",
    excerpt: "Nous sommes fiers d'accueillir un nouveau partenaire majeur pour soutenir nos projets associatifs.",
    date: "05 Avril 2026",
    category: "Partenariat",
    author: "Marketing",
    image: "/match7.png"
  }
];

export const NewsPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/Gemini_Generated_Image_1hhhtu1hhhtu1hhh.png"
            alt="News Background"
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
            <span className="section-subtitle !text-white !opacity-80">Media & Actu</span>
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter leading-none">
              Les <span className="text-luynes-red">Actualités</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-32 bg-white relative">
        {/* Background Decorative Text */}
        <div className="absolute top-20 right-0 pointer-events-none select-none opacity-[0.03]">
          <span className="text-[20vw] font-black uppercase rotate-90 origin-top-left translate-x-full">
            PASSION
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto text-center mb-24"
          >
            <motion.div variants={revealUp}>
              <h2 className="section-title tracking-tighter">Vivre <span className="text-luynes-red">la Passion</span></h2>
              <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                Retrouvez tous les moments forts, les résultats et les événements qui font vibrer Luynes Sports au quotidien.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                variants={revealUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-8 shadow-2xl relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-luynes-red/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-luynes-red text-white px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-xl">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-6 text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-luynes-red" /> {article.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-luynes-red" /> {article.author}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.1] mb-6 group-hover:text-luynes-red transition-colors duration-300 tracking-tighter">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                    {article.excerpt}
                  </p>
                  <div className="grow"></div>
                  <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-luynes-red transition-all duration-700"></div>
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
