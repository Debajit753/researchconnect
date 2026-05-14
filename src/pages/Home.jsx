import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Search className="text-purple-400" />,
      title: "Advanced Search",
      desc: "Find researchers by specific interests, from Quantum Computing to Bio-engineering."
    },
    {
      icon: <Users className="text-blue-400" />,
      title: "Direct Connect",
      desc: "Get verified email addresses and official profiles in one click."
    },
    {
      icon: <Zap className="text-amber-400" />,
      title: "Real-time Data",
      desc: "Information synced directly from university databases and research portals."
    },
    {
      icon: <Shield className="text-emerald-400" />,
      title: "Verified Only",
      desc: "All professors are verified members of premier Indian engineering institutes."
    }
  ];

  return (
    <div>
      <Hero professorCount="2,000" />
      
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-white mb-4">Why use ResearchConnect?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We bridge the gap between aspiring students and world-class researchers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 hover:border-purple-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32 mb-20">
        <div className="glass-card p-12 lg:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ready to start your research journey?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join thousands of students who have found their dream research opportunities through our platform.</p>
            <Link to="/explore" className="btn-primary inline-block">
              Browse All Professors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
