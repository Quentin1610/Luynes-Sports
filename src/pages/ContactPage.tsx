import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react';
import { Footer } from '../components/sections/Footer';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Adresse",
    value: "Stade Laurent Ruzzettu, Luynes, 13080 Aix-en-Provence",
    href: "https://goo.gl/maps/xyz"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Téléphone",
    value: "04 42 24 07 03",
    href: "tel:+33442240703"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "contact@luynes-sports.fr",
    href: "mailto:contact@luynes-sports.fr"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Secrétariat",
    value: "Lun-Ven: 14h00 - 18h00",
    href: "#"
  }
];

export const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luynes-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Gardons le contact</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white tracking-tighter mb-6">
              Nous <span className="text-luynes-red">Contacter</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="section-title !text-4xl mb-8">Informations <span className="text-luynes-red">Utiles</span></h2>
                <div className="space-y-8">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      className="flex gap-6 group"
                    >
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-luynes-red border border-slate-100 group-hover:bg-luynes-red group-hover:text-white transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold tracking-tight mb-1">{info.label}</p>
                        <p className="text-slate-900 font-semibold group-hover:text-luynes-red transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-slate-100">
                <p className="text-sm font-bold tracking-tight text-slate-900 mb-6">Suivez-nous</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/groups/103293713083676/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-luynes-red hover:text-white transition-all" title="Rejoignez notre groupe Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/luynessports_aixenprovence" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-luynes-red hover:text-white transition-all" title="Suivez-nous sur Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="glass-card !p-12">
                <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight mb-8">
                  Envoyez-nous un <span className="text-luynes-red">message</span>
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-tight text-slate-500 ml-4">Nom complet</label>
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        className="w-full bg-slate-50 border border-slate-100 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-luynes-red/20 focus:border-luynes-red transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-tight text-slate-500 ml-4">Adresse email</label>
                      <input
                        type="email"
                        placeholder="jean@email.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-luynes-red/20 focus:border-luynes-red transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-tight text-slate-500 ml-4">Sujet</label>
                    <input
                      type="text"
                      placeholder="Inscriptions, Partenariats, etc."
                      className="w-full bg-slate-50 border border-slate-100 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-luynes-red/20 focus:border-luynes-red transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-tight text-slate-500 ml-4">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Votre message ici..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-6 py-6 focus:outline-none focus:ring-2 focus:ring-luynes-red/20 focus:border-luynes-red transition-all"
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full md:w-auto px-12 py-5 flex items-center justify-center gap-4">
                    Envoyer <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-100 relative transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.879103233346!2d5.352466076678644!3d43.46313887111226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9920bed394741%3A0xc3191f6cd7e7c9f!2sStade%20Laurent%20Ruzzettu!5e0!3m2!1sfr!2sfr!4v1713198000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};
