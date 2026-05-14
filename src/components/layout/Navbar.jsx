import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b1a]/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-black text-white">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">R</div>
          ResearchConnect
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
          <Link to="/" className={`${isActive('/') ? 'text-white' : 'hover:text-white'} transition-colors`}>Home</Link>
          <Link to="/explore" className={`${isActive('/explore') ? 'text-white' : 'hover:text-white'} transition-colors`}>Explore</Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'text-white' : 'hover:text-white'} transition-colors`}>Pricing</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-white' : 'hover:text-white'} transition-colors`}>About</Link>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-slate-400 hover:text-white text-sm font-bold transition-all">
            Sign In
          </button>
          <button className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-purple-500/20">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
