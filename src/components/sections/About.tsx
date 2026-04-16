import { motion } from 'framer-motion';
import { Shield, Users, Trophy } from 'lucide-react';

const values = [
  {
    icon: <Users className="w-8 h-8 text-luynes-red" />,
    title: "Formation d'Excellence",
    description: "Plus de 700 licenciés et une école de foot reconnue pour la qualité de son encadrement et son rôle social."
  },
  {
    icon: <Shield className="w-8 h-8 text-luynes-red" />,
    title: "Valeurs & Respect",
    description: "Loyauté, dépassement de soi et respect sont les piliers de Luynes Sports depuis sa création en 1947."
  },
  {
    icon: <Trophy className="w-8 h-8 text-luynes-red" />,
    title: "Ambition Sportive",
    description: "Une équipe première en Régional 1 et des catégories jeunes évoluant au plus haut niveau régional."
  }
];

export const About = () => {
  return (
    <section id="club" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="section-subtitle">Identité</span>
            <h2 className="section-title">
              L'histoire d'une <br /><span className="text-luynes-red line-through decoration-slate-200/50">simple</span> <br /> <span className="text-luynes-red">passion commune</span>
            </h2>
            <p className="text-slate-500 text-xl mb-10 leading-relaxed font-medium">
              Fondé en 1947 au cœur de la Provence, Luynes Sports est bien plus qu'un simple club de football. Fort de son histoire marquée par des exploits et un engagement social sans faille.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-1">700+</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Licenciés</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-slate-900 mb-1">30+</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">Équipes</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card flex gap-6 items-start"
              >
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
