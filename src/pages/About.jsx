import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-40 pb-32 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-5xl font-black text-white mb-6">About <span className="text-gradient">ResearchConnect</span></h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Our mission is to simplify academic collaboration in India.
          </p>
        </div>

        <div className="glass-card p-10 space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">The Problem</h2>
          <p>
            Finding the right research mentor can be a daunting task for students in India. Information is scattered across hundreds of department websites, often outdated or difficult to search. 
          </p>
          
          <h2 className="text-2xl font-bold text-white">The Solution</h2>
          <p>
            ResearchConnect aggregates verified data from top engineering institutes (IITs, NITs, BITS) into a single, high-performance platform. We use modern scraping technology and AI-driven enrichment to ensure you find the most relevant mentors for your research interests.
          </p>

          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p>
            We believe that every talented student should have a direct path to world-class research. By breaking down information barriers, we hope to accelerate innovation and academic excellence in the Indian engineering ecosystem.
          </p>
        </div>

        <div className="text-center py-12">
          <h3 className="text-sm font-black text-slate-600 uppercase tracking-widest mb-4">Built for the research community</h3>
          <div className="flex justify-center gap-12 grayscale opacity-40">
            <span className="font-bold text-lg">React</span>
            <span className="font-bold text-lg">Supabase</span>
            <span className="font-bold text-lg">Tailwind</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
