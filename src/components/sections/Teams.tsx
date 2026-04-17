import { motion } from 'framer-motion';
import { revealUp, staggerContainer, fadeIn } from '../../constants/animations';

const teams = [
  {
    category: "École de foot",
    age: "U6 à U11",
    description: "Apprentissage des bases du football dans un cadre ludique et pédagogique.",
    image: "/IMG_4249.jpg"
  },
  {
    category: "Pré-formation",
    age: "U12 à U13",
    description: "Passage au football professionnel et perfectionnement technique.",
    image: "/IMG_4246.jpg"
  },
  {
    category: "Formation",
    age: "U14 à U18",
    description: "Le haut niveau régional. Préparation à l'élite et à l'équipe première.",
    image: "/IMG_4247.jpg"
  },
  {
    category: "Seniors - R1",
    age: "Équipe Fanion",
    description: "La vitrine du club évoluant en Régional 1 avec ambition.",
    image: "/match5.png"
  }
];

export const Teams = () => {
  return (
    <section id="teams" className="py-32 bg-white relative overflow-hidden">
      {/* Background oversized text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden h-full flex items-center">
        <span className="text-[15vw] font-black bg-text-outline-dark uppercase opacity-10 -rotate-90 origin-center translate-x-1/4">
          NOS ÉQUIPES
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12"
        >
          <motion.div variants={revealUp} className="max-w-4xl">
            <span className="section-subtitle">Développement</span>
            <h2 className="section-title md:whitespace-nowrap">
              L'avenir se <span className="text-luynes-red">construit ici</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              De l'éveil au football à l'équipe première, découvrez le parcours d'excellence de nos 700 licenciés.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teams.map((team, idx) => (
            <motion.div
              key={idx}
              variants={revealUp}
              className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                src={team.image}
                alt={team.category}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-luynes-red font-bold text-sm tracking-[0.2em] uppercase mb-2 drop-shadow-lg">{team.age}</span>
                <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">{team.category}</h3>
                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 mb-6 font-medium leading-relaxed">
                  {team.description}
                </p>
                <div className="w-12 h-1 bg-luynes-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
