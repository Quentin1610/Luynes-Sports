import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { revealUp } from '../../constants/animations';

const sponsors = [
  { name: "Olympique de Marseille", logo: "/Nouveau-logo-OM.png" },
  { name: "ParionsSport", logo: "/parions-sport-en-ligne.png" },
  { name: "Mo'Renove", logo: "/sponsors/mo_renove.png" },
  { name: "Ville d'Aix-en-Provence", logo: "/sponsors/aix.png" },
  { name: "Région Sud", logo: "/regionsud.png" }
];

// Duplicate for infinite marquee
const allSponsors = [...sponsors, ...sponsors, ...sponsors];

export const Sponsors = () => {
  return (
    <section id="partners" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="text-center">
          <span className="section-subtitle">Engagement durable</span>
          <h2 className="section-title">Nos <span className="text-luynes-red">Partenaires</span></h2>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="flex overflow-hidden group py-10">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-nowrap shrink-0 gap-10 md:gap-20 items-center px-10"
        >
          {allSponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-[140px] md:w-[200px]"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 md:h-16 w-auto object-contain hover:scale-110 transition-transform duration-500 mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-32">
        <motion.div 
          variants={revealUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card flex flex-col md:flex-row items-center justify-between gap-10 p-12 bg-white border-slate-200/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-luynes-red/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-luynes-red/10 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Devenir Partenaire</h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                Associez votre image à un club de football dynamique et ambitieux au cœur de la Provence.
              </p>
            </div>
            
            <Link to="/contact" className="btn-primary min-w-[200px] relative z-10">
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
