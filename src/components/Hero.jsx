import { motion } from 'framer-motion';
import { Search, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ professorCount }) => {
  const avatarData = [
    { initials: 'SK', color: '#a855f7', ring: 3, angle: 30 },
    { initials: 'RP', color: '#6366f1', ring: 3, angle: 100 },
    { initials: 'AM', color: '#3b82f6', ring: 3, angle: 170 },
    { initials: 'PK', color: '#f59e0b', ring: 3, angle: 240 },
    { initials: 'NJ', color: '#ec4899', ring: 3, angle: 310 },
    { initials: 'DG', color: '#10b981', ring: 2, angle: 60 },
    { initials: 'VS', color: '#8b5cf6', ring: 2, angle: 180 },
    { initials: 'TM', color: '#f43f5e', ring: 2, angle: 300 },
  ];

  const ringRadii = { 1: 90, 2: 150, 3: 210 };
  const sizes = { 1: 36, 2: 42, 3: 46 };
  const centerX = 210, centerY = 210;

  return (
    <header className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Find Your Research Mentor —
            <span className="text-gradient block">Now Just One Search Away.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            Connect with 2,000+ professors across India's top engineering institutes based on your research interests.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/explore"
              className="btn-primary flex items-center gap-2"
            >
              Start Exploring <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center h-[500px]">
          {/* Orbital Visualization */}
          <div className="relative w-[420px] h-[420px]">
            {/* Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-[60px] border border-white/5 rounded-full" />
            <div className="absolute inset-[120px] border border-white/5 rounded-full" />
            
            {/* Center Stat */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <span className="text-4xl font-black text-white">{professorCount || '2000'}+</span>
              <span className="text-sm uppercase tracking-widest text-slate-500 font-bold">Researchers</span>
            </div>

            {/* Avatars */}
            {avatarData.map((av, i) => {
              const r = ringRadii[av.ring];
              const rad = (av.angle * Math.PI) / 180;
              const x = centerX + r * Math.cos(rad) - sizes[av.ring] / 2;
              const y = centerY + r * Math.sin(rad) - sizes[av.ring] / 2;
              
              return (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: sizes[av.ring],
                    height: sizes[av.ring],
                    backgroundColor: av.color,
                  }}
                  className="rounded-full border-2 border-[#0b0b1a] flex items-center justify-center text-xs font-bold text-white shadow-lg cursor-pointer group"
                >
                  {av.initials}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    Prof. {av.initials}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Institute Strip */}
      <div className="mt-20 border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden">
        <div className="flex gap-12 items-center justify-center animate-scroll whitespace-nowrap">
          {['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Guwahati', 'IIT Kanpur', 'BITS Pilani'].map((inst, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-sm grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <Building2 size={18} /> {inst}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;

