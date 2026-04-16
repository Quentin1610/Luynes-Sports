import { motion } from 'framer-motion';
import { Shield, Users, Trophy, Target, Heart, Zap } from 'lucide-react';
import { Footer } from '../components/sections/Footer';

const stats = [
  { label: 'Licenciés', value: '700+' },
  { label: 'Équipes', value: '30+' },
  { label: 'Bénévoles', value: '50+' },
  { label: 'Ans d\'histoire', value: '75+' },
];

const values = [
  {
    icon: <Users className="w-8 h-8 text-luynes-red" />,
    title: "Esprit de Famille",
    description: "Plus qu'un club, nous sommes une communauté soudée où l'humain est au cœur de chaque projet."
  },
  {
    icon: <Shield className="w-8 h-8 text-luynes-red" />,
    title: "Respect & Éthique",
    description: "La loyauté et le fair-play sur le terrain comme en dehors sont nos principes fondamentaux."
  },
  {
    icon: <Trophy className="w-8 h-8 text-luynes-red" />,
    title: "Excellence Sportive",
    description: "Nous visons le plus haut niveau tout en garantissant un encadrement technique de qualité."
  }
];

export const ClubPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0">
          <img
            src="/IMG_4248.jpg"
            alt="Club Background"
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
            <span className="section-subtitle">Identité & Histoire</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tighter mb-6">
              Le <span className="text-luynes-red">Club</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Une Institution Provençale</h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-12">
              Depuis 1947, Luynes Sports écrit son histoire au cœur du Pays d'Aix. Notre club est devenu un pilier du football régional, alliant ambition sportive et rôle social prépondérant.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-xs tracking-tight font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="section-subtitle">Notre Parcours</span>
              <h2 className="section-title">Plus de 75 ans de <span className="text-luynes-red">Football</span></h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Tout commence après-guerre, sous l'impulsion de passionnés souhaitant redonner vie au village à travers le sport. Très vite, Luynes Sports se distingue par sa ferveur et ses résultats.
                </p>
                <p>
                  Le stade Laurent Ruzzettu, véritable forteresse, a vu passer des générations de joueurs talentueux, certains ayant rejoint les rangs professionnels. Le club a connu ses plus belles heures en Coupe de France, faisant vibrer toute la région.
                </p>
                <p>
                  Aujourd'hui, avec plus de 700 licenciés, nous sommes l'un des clubs les plus importants du district, fier de nos racines et tourné vers l'avenir avec notre équipe première en Régional 1.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl translate-y-8">
                  <img src="/IMG_4249.jpg" alt="History 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/IMG_4246.jpg" alt="History 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-luynes-red/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="section-subtitle">Ce qui nous anime</span>
          <h2 className="section-title">Nos <span className="text-luynes-red">Valeurs</span></h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-100">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};
