import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#0b0b1a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-xl font-black text-white mb-4">ResearchConnect</div>
        <p className="text-slate-500 text-sm mb-6">Empowering the next generation of researchers across India's top institutes.</p>
        <div className="flex justify-center gap-6 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <a href="#" className="hover:text-purple-400">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400">Terms of Service</a>
          <a href="#" className="hover:text-purple-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
