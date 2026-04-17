import { motion } from 'framer-motion';
import { Shield, Users, Trophy } from 'lucide-react';
import { Footer } from '../components/sections/Footer';
import { revealUp, staggerContainer, fadeIn } from '../constants/animations';

const stats = [
  { label: 'Licenciés', value: '730+' },
  { label: 'Équipes', value: '34+' },
  { label: 'Bénévoles', value: '50+' },
  { label: 'Années d\'histoire', value: '78' },
];

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Esprit de Famille",
    description: "Plus qu'un club, nous sommes une communauté soudée où l'humain est au cœur de chaque projet."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Respect & Éthique",
    description: "La loyauté et le fair-play sur le terrain comme en dehors sont nos principes fondamentaux."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Excellence Sportive",
    description: "Nous visons le plus haut niveau tout en garantissant un encadrement technique de qualité."
  }
];

export const ClubPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/Gemini_Generated_Image_jd7e9gjd7e9gjd7e.png"
            alt="Club Background"
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
            <span className="section-subtitle !text-white !opacity-80">Notre Identité</span>
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter leading-none">
              Le <span className="text-luynes-red">Club</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={revealUp} className="mb-20">
              <h2 className="section-title tracking-tighter">Une Institution <span className="text-luynes-red">Provençale</span></h2>
              <p className="text-slate-500 text-xl leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
                Depuis 1947, Luynes Sports écrit son histoire au cœur du Pays d'Aix. Un pilier du football régional, alliant ambition et passion.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeIn}
                  className="p-10 bg-slate-50 rounded-xl border border-slate-100 hover:border-luynes-red/20 transition-all duration-500 group"
                >
                  <p className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
                  <p className="text-luynes-red text-[10px] font-bold uppercase tracking-[0.3em]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
          <span className="text-[20vw] font-black uppercase leading-none whitespace-nowrap -rotate-90">
            HERITAGE
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-20"
          >
            <motion.div variants={revealUp} className="lg:w-1/2">
              <span className="section-subtitle">Notre Parcours</span>
              <h2 className="section-title">Plus de 75 ans de <span className="text-luynes-red">Football</span></h2>
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
                <p>
                  Tout commence après-guerre, sous l'impulsion de passionnés souhaitant redonner vie au village à travers le sport. Luynes Sports se distingue par sa ferveur.
                </p>
                <p>
                  Le stade Laurent Ruzzettu, véritable forteresse, a vu passer des générations de joueurs talentueux, certains ayant rejoint les rangs professionnels.
                </p>
                <p>
                  Aujourd'hui, avec plus de 700 licenciés, nous sommes fiers de nos racines et tournés vers l'avenir avec ambition.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={revealUp} className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6 scale-105">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                  <img src="/IMG_4249.jpg" alt="History 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl -skew-y-3 hover:skew-y-0 transition-transform duration-700 mt-12">
                  <img src="/IMG_4246.jpg" alt="History 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.div variants={revealUp} className="text-center mb-20">
            <span className="section-subtitle">Ce qui nous anime</span>
            <h2 className="section-title tracking-tighter">Nos <span className="text-luynes-red">Valeurs</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={revealUp}
                className="p-10 bg-slate-50 border border-slate-100 rounded-3xl text-center group hover:shadow-xl transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-8 border border-slate-100 text-luynes-red group-hover:bg-luynes-red group-hover:text-white transition-all duration-500">
                  <span className="group-hover:scale-125 transition-transform duration-500">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
