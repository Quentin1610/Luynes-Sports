import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sponsors = [
  {
    name: "Olympique de Marseille",
    logo: "/Nouveau-logo-OM.png"
  },
  {
    name: "ParionsSport",
    logo: "/parions-sport-en-ligne.png"
  },
  {
    name: "Mo'Renove",
    logo: "/sponsors/mo_renove.png"
  },
  {
    name: "Ville d'Aix-en-Provence",
    logo: "/sponsors/aix.png"
  },
  {
    name: "Région Sud",
    logo: "/regionsud.png"
  }
];

export const Sponsors = () => {
  return (
    <section id="partners" className="py-32 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 text-balance">
          <span className="section-subtitle">Ils nous soutiennent</span>
          <h2 className="section-title">Nos <span className="text-luynes-red">Partenaires</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, filter: 'none' }}
              whileInView={{ opacity: 1, filter: 'none' }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="flex justify-center cursor-pointer transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
                title={sponsor.name}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="glass-card max-w-2xl w-full flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-slate-50 border-slate-100 shadow-none">
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">Devenir Partenaire</h3>
              <p className="text-slate-500">Associez votre image à un club dynamique et ambitieux.</p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
