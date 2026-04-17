import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.02]">
        <span className="text-[20vw] font-black uppercase leading-none whitespace-nowrap -translate-y-1/2">
          LUYNES SPORTS
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-24 shrink-0 transition-transform duration-500 hover:rotate-6">
                <img
                  src="/favicon.png"
                  alt="Luynes Sports Logo"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white leading-none uppercase">LUYNES</span>
                <span className="text-sm font-black tracking-[0.4em] text-luynes-red leading-none uppercase mt-1">SPORTS</span>
              </div>
            </div>
            <p className="text-slate-400 mb-10 max-w-md leading-relaxed text-lg font-medium">
              Plus qu'un club, une famille. Rejoignez l'aventure du football à Luynes et portez fièrement nos couleurs.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/groups/103293713083676/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-white hover:text-luynes-red hover:bg-white/10 transition-all border border-white/10"
                title="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/luynessports_aixenprovence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-white hover:text-luynes-red hover:bg-white/10 transition-all border border-white/10"
                title="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-sm">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Le Club', path: '/le-club' },
                { name: 'Équipes', path: '/equipes' },
                { name: 'Actualités', path: '/actualites' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-white transition-colors text-base font-medium flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-luynes-red group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-sm">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-slate-400 text-base font-medium">
                <MapPin size={20} className="text-luynes-red shrink-0" />
                <span>Stade Laurent Ruzzettu,<br />13080 Luynes, France</span>
              </li>
              <li className="flex gap-4 text-slate-400 text-base font-medium items-center">
                <Phone size={20} className="text-luynes-red shrink-0" />
                <span>+33 4 42 24 07 03</span>
              </li>
              <li className="flex gap-4 text-slate-400 text-base font-medium items-center">
                <Mail size={20} className="text-luynes-red shrink-0" />
                <span>contact@luynes-sports.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Luynes Sports. Réalisé par <a href="https://novaby.fr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-luynes-red transition-colors">l'agence Novaby</a>.
          </p>
          <div className="flex gap-10 text-sm font-medium text-slate-500">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
