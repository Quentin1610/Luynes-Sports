import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: "Le stage de Pâques est ouvert !",
    date: "14 Avril 2026",
    category: "Club",
    image: "/match3.png"
  },
  {
    title: "Victoire importante des Seniors face à Berre (3-1)",
    date: "12 Avril 2026",
    category: "Match",
    image: "/match.png"
  }
];

export const News = () => {
  return (
    <section id="news" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main News Area */}
          <div>
            <div className="flex items-center justify-between mb-16 text-center">
              <div className="w-full">
                <span className="section-subtitle">Actualités</span>
                <h2 className="section-title">Vivre la <span className="text-luynes-red">Passion</span></h2>
              </div>
            </div>

            <div className="grid gap-8">
              {news.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row gap-6 bg-slate-50 p-4 rounded-3xl border border-slate-100 hover:border-slate-200 transition-all cursor-pointer"
                >
                  <div className="md:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-luynes-red/10 text-luynes-red text-xs font-semibold rounded-full tracking-tight">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-sm">
                        <Calendar size={14} /> {item.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-luynes-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 line-clamp-2 mb-4">
                      Venez découvrir les coulisses de la préparation de nos équipes lors des prochaines rencontres au stade Laurent Ruzzettu.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
