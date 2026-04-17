import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react';
import { Footer } from '../components/sections/Footer';
import { revealUp, staggerContainer, fadeIn } from '../constants/animations';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Adresse",
    value: "Stade Laurent Ruzzettu, Luynes, 13080 Aix-en-Provence",
    href: "https://goo.gl/maps/embed?pb=!1m18!1m12!1m3!1d2891.879103233346!2d5.352466076678644!3d43.46313887111226"
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-luynes-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/Gemini_Generated_Image_pwjerwpwjerwpwje.png"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luynes-dark/20 via-transparent to-luynes-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-subtitle !text-white !opacity-80">Gardons le contact</span>
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter leading-none">
              Nous <span className="text-luynes-red">Contacter</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        {/* Background Decorative Text */}
        <div className="absolute top-40 left-0 pointer-events-none select-none opacity-[0.03]">
          <span className="text-[25vw] font-black uppercase -rotate-90 origin-bottom-left translate-y-full">
            REJOINDRE
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
            {/* Contact Info */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-16"
            >
              <motion.div variants={revealUp}>
                <h2 className="section-title !text-5xl mb-12 tracking-tighter">Informations <br /><span className="text-luynes-red">Utiles</span></h2>
                <div className="space-y-10">
                  {contactInfo.map((info, idx) => (
                    <motion.a
                      key={idx}
                      variants={fadeIn}
                      href={info.href}
                      className="flex gap-8 group"
                    >
                      <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-luynes-red border border-slate-100 group-hover:bg-luynes-red group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-luynes-red/20 group-hover:-translate-y-1">
                        {info.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[10px] text-luynes-red font-bold uppercase tracking-[0.3em] mb-2">{info.label}</p>
                        <p className="text-slate-900 text-xl font-bold group-hover:text-luynes-red transition-colors duration-300 tracking-tight">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={revealUp} className="pt-16 border-t border-slate-100">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Suivez l'actu</p>
                <div className="flex gap-6">
                  <a href="https://www.facebook.com/groups/103293713083676/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-luynes-red hover:text-white transition-all duration-500 border border-slate-100 shadow-sm" title="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/luynessports_aixenprovence" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 hover:bg-luynes-red hover:text-white transition-all duration-500 border border-slate-100 shadow-sm" title="Instagram">
                    <Instagram size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={revealUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="glass-card !p-12 md:!p-20 relative overflow-hidden group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-luynes-red/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-luynes-red/10 transition-colors duration-700"></div>

                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-12 relative z-10">
                  Envoyez un <span className="text-luynes-red">message</span>
                </h2>

                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-4">Nom complet</label>
                      <input
                        type="text"
                        placeholder="Jean Dupont"
                        className="w-full bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-luynes-red/10 focus:border-luynes-red transition-all duration-300 font-medium text-slate-900"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Adresse email</label>
                      <input
                        type="email"
                        placeholder="jean@email.com"
                        className="w-full bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-luynes-red/10 focus:border-luynes-red transition-all duration-300 font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Sujet</label>
                    <input
                      type="text"
                      placeholder="Inscriptions, Partenariats, etc."
                      className="w-full bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-luynes-red/10 focus:border-luynes-red transition-all duration-300 font-medium text-slate-900"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Votre message ici..."
                      className="w-full bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-xl px-8 py-8 focus:outline-none focus:ring-4 focus:ring-luynes-red/10 focus:border-luynes-red transition-all duration-300 font-medium text-slate-900 resize-none"
                    ></textarea>
                  </div>

                  <button className="btn-primary min-w-[200px] flex items-center justify-center gap-4 group">
                    <span className="relative z-10 flex items-center gap-4">
                      Envoyer le message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
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
