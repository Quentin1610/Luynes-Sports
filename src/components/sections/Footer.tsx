import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white rounded-full overflow-hidden flex items-center justify-center p-[2px] shadow-md w-24 h-24">
                <img
                  src="/luynes_sports_logo.png"
                  alt="Luynes Sports Logo"
                  className="w-full h-full object-cover rounded-full scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tight text-slate-900 leading-none uppercase">LUYNES</span>
                <span className="text-sm font-semibold tracking-[0.2em] text-luynes-red leading-none uppercase">SPORTS</span>
              </div>
            </div>
            <p className="text-slate-500 mb-8 max-w-md leading-relaxed">
              Plus qu'un club, une famille. Rejoignez l'élite du football amateur dans le Pays d'Aix.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/groups/103293713083676/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-luynes-red hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
                title="Rejoignez notre groupe Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/luynessports_aixenprovence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-luynes-red hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
                title="Suivez-nous sur Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Le Club', path: '/le-club' },
                { name: 'Équipes', path: '/equipes' },
                { name: 'Actualités', path: '/actualites' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-500 hover:text-luynes-red transition-colors text-sm">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Nous contacter</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-500 text-sm">
                <MapPin size={18} className="text-luynes-red shrink-0" />
                <span>Stade Laurent Ruzzettu,<br />13080 Luynes, France</span>
              </li>
              <li className="flex gap-3 text-slate-500 text-sm items-center">
                <Phone size={18} className="text-luynes-red shrink-0" />
                <span>+33 4 42 24 07 03</span>
              </li>
              <li className="flex gap-3 text-slate-500 text-sm items-center">
                <Mail size={18} className="text-luynes-red shrink-0" />
                <span>contact@luynes-sports.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © 2026 Luynes Sports. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link
              to="/mentions-legales"
              className="hover:text-slate-900 transition-colors"
            >
              Mentions Légales
            </Link>
            <Link to="/mentions-legales" className="hover:text-slate-900 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
