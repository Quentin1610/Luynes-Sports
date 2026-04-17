import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/sections/Footer';
import { revealUp } from '../constants/animations';

export const LegalPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-32">
      <div className="container mx-auto px-6 max-w-4xl flex-grow mb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-slate-400 hover:text-luynes-red transition-all mb-16 group font-bold uppercase tracking-wider text-[10px]"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour Accueil
        </Link>

        <motion.h1
          variants={revealUp}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-20 tracking-tighter"
        >
          Mentions <span className="text-luynes-red">Légales</span>
        </motion.h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-luynes-red rounded-sm"></span>
              1. Présentation du site
            </h2>
            <div className="text-slate-500 leading-relaxed font-medium space-y-6">
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site de <strong>Luynes Sports</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex gap-4">
                  <span className="font-black text-luynes-red uppercase tracking-widest text-[10px] w-32 shrink-0">Propriétaire</span>
                  <span>Luynes Sports – Association Loi 1901 – Stade Laurent Ruzzettu, 13080 Luynes</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-black text-luynes-red uppercase tracking-widest text-[10px] w-32 shrink-0">Publication</span>
                  <span>Le Président du Club</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-black text-luynes-red uppercase tracking-widest text-[10px] w-32 shrink-0">Hébergeur</span>
                  <span>Vercel Inc. – 340 S Lemon Ave #4133 Walnut, CA 91789, USA</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-luynes-red rounded-sm"></span>
              2. CGU
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-luynes-red rounded-sm"></span>
              3. Services fournis
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Le site a pour objet de fournir une information concernant l'ensemble des activités de l'association. Luynes Sports s'efforce de fournir sur le site des informations aussi précises que possible.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-luynes-red rounded-sm"></span>
              4. Propriété intellectuelle
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Luynes Sports est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-luynes-red rounded-sm"></span>
              5. Données personnelles
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978. A l'occasion de l'utilisation du site, peuvent être recueillies : l'URL des liens, le fournisseur d'accès, l'adresse IP.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
              <span className="w-8 h-1 bg-luynes-red rounded-sm"></span>
              6. Droit applicable
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Marseille ou d'Aix-en-Provence.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
