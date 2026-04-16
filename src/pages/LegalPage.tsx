import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/sections/Footer';

export const LegalPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col pt-32">
      <div className="container mx-auto px-6 max-w-4xl flex-grow mb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-luynes-red transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-slate-900 uppercase italic mb-12"
        >
          Mentions Légales
        </motion.h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wider">1. Présentation du site</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site de <strong>Luynes Sports</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="text-slate-600 space-y-3 mt-6 ml-6 list-disc">
              <li><strong>Propriétaire :</strong> Luynes Sports – Association Loi 1901 – Stade Laurent Ruzzettu, 13080 Luynes</li>
              <li><strong>Directeur de la publication :</strong> Le Président du Club</li>
              <li><strong>Conception et réalisation :</strong> Agentic AI Assistant</li>
              <li><strong>Hébergeur :</strong> Vercel Inc. – 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wider">2. Conditions générales d'utilisation</h2>
            <p className="text-slate-600 leading-relaxed">
              L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wider">3. Description des services fournis</h2>
            <p className="text-slate-600 leading-relaxed">
              Le site a pour objet de fournir une information concernant l'ensemble des activités de l'association. Luynes Sports s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des partenaires tiers qui lui fournissent ces informations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wider">4. Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              Luynes Sports est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Luynes Sports.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wider">5. Gestion des données personnelles</h2>
            <p className="text-slate-600 leading-relaxed">
              En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              A l'occasion de l'utilisation du site, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wider">6. Droit applicable</h2>
            <p className="text-slate-600 leading-relaxed">
              Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Marseille ou d'Aix-en-Provence.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
