import { motion } from 'framer-motion';
import { Shield, Users, Trophy } from 'lucide-react';
import { revealUp, staggerContainer, fadeIn } from '../../constants/animations';

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Formation d'Excellence",
    description: "Plus de 700 licenciés et une école de foot reconnue pour la qualité de son encadrement et son rôle social."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Valeurs & Respect",
    description: "Loyauté, dépassement de soi et respect sont les piliers de Luynes Sports depuis sa création en 1947."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Ambition Sportive",
    description: "Une équipe première en Régional 1 et des catégories jeunes évoluant au plus haut niveau régional."
  }
];

export const About = () => {
  return (
    <section id="club" className="py-32 bg-white relative overflow-hidden">
      {/* Background oversized text */}
      <div className="absolute top-20 right-0 pointer-events-none select-none overflow-hidden h-full flex items-start">
        <span className="text-[15vw] font-black bg-text-outline-dark uppercase opacity-5 rotate-90 origin-top-left translate-x-full">
          DEPUIS 1947
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-20"
        >
          <motion.div
            variants={revealUp}
            className="lg:w-1/2"
          >
            <span className="section-subtitle">Identité</span>
            <h2 className="section-title">
              L'histoire d'une <br /> <span className="text-luynes-red">passion commune</span>
            </h2>
            <p className="text-slate-500 text-xl mb-10 leading-relaxed font-medium">
              Fondé en 1947 au cœur de la Provence, Luynes Sports est bien plus qu'un simple club de football. Un engagement social sans faille tourné vers l'excellence.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mb-8 lg:mb-0">
              <motion.div variants={fadeIn}>
                <p className="text-5xl font-extrabold text-slate-900 mb-1">700+</p>
                <p className="text-luynes-red text-sm font-black uppercase tracking-[0.2em]">Licenciés</p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <p className="text-5xl font-black text-slate-900 mb-1">30+</p>
                <p className="text-luynes-red text-sm font-bold uppercase tracking-[0.2em]">Équipes</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="lg:w-1/2 grid gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={revealUp}
                className="p-8 bg-slate-50 border border-slate-100 rounded-3xl flex gap-6 items-start group hover:shadow-xl transition-all duration-500"
              >
                <div className="p-4 bg-white rounded-lg border border-slate-100 text-luynes-red group-hover:bg-luynes-red group-hover:text-white transition-colors duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
