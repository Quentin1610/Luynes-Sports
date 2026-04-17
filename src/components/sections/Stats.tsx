import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, History, Trophy, ShieldCheck } from 'lucide-react';
import { revealUp, staggerContainer } from '../../constants/animations';

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const Stat = ({ label, value, suffix = "", icon }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = 10;
      
      const timer = setInterval(() => {
        start += (end / (duration / stepTime));
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      variants={revealUp}
      className="group"
    >
      <div className="relative p-10 py-12 bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:border-luynes-red/30 hover:-translate-y-2">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-luynes-red/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-luynes-red/80 mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-luynes-red group-hover:text-white transition-all duration-500">
            {icon}
          </div>
          
          <div className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-4 tracking-tighter transition-all duration-500 group-hover:text-luynes-red group-hover:glow-red">
            {displayValue}{suffix}
          </div>
          
          <p className="text-slate-500 font-bold uppercase tracking-[0.25em] text-[10px] group-hover:text-luynes-red transition-colors duration-500">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          <Stat 
            label="Licenciés" 
            value={730} 
            suffix="+" 
            icon={<Users size={28} />}
          />
          <Stat 
            label="Années d'histoire" 
            value={78} 
            icon={<History size={28} />}
          />
          <Stat 
            label="Équipes" 
            value={34} 
            icon={<Trophy size={28} />}
          />
          <Stat 
            label="Éducateurs" 
            value={50} 
            suffix="+" 
            icon={<ShieldCheck size={28} />}
          />
        </motion.div>
      </div>
    </section>
  );
};
