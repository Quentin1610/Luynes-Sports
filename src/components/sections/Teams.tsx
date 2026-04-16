import { motion } from 'framer-motion';

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
    <section id="teams" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-4xl">
            <span className="section-subtitle">Nos Catégories</span>
            <h2 className="section-title md:whitespace-nowrap">
              L'avenir se <span className="text-luynes-red">construit ici</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              De l'éveil au football à l'équipe première, découvrez nos différentes catégories et le parcours d'excellence de nos 700 licenciés.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={team.image}
                alt={team.category}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-luynes-red font-semibold text-sm tracking-widest uppercase mb-2">{team.age}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{team.category}</h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                  {team.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
