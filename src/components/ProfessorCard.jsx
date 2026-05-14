import React from 'react';
import { Mail, ExternalLink, GraduationCap, Building2, CheckCircle2, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfessorCard = ({ professor }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const initials = getInitials(professor.name);
  
  // Clean up tags (remove curly braces if they exist)
  const tagsArray = (Array.isArray(professor.research_tags) 
    ? professor.research_tags 
    : []).map(tag => tag.replace(/[{}]/g, '').trim()).filter(Boolean);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden group border-white/5 hover:border-purple-500/30 transition-all duration-500"
    >
      <div className="p-8">
        <div className="flex items-start gap-5 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl font-black text-white shadow-xl shadow-purple-500/20 shrink-0 group-hover:scale-110 transition-transform duration-500">
            {initials}
          </div>
          <div className="min-w-0 pt-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-white truncate leading-tight group-hover:text-purple-300 transition-colors">
                {professor.name}
              </h3>
              {professor.last_verified_date && (
                <CheckCircle2 size={16} className="text-emerald-400 fill-emerald-400/10 shrink-0" />
              )}
            </div>
            <div className="flex flex-wrap gap-y-1 gap-x-3">
              <p className="text-sm text-slate-400 flex items-center gap-1.5 font-medium">
                <GraduationCap size={14} className="text-purple-400" />
                {professor.designation || 'Professor'}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-slate-400 flex items-center gap-1.5 font-medium">
                  <Building2 size={14} className="text-blue-400" />
                  {professor.institute}
                </p>
                <span className="bg-white/5 text-[10px] px-2 py-0.5 rounded font-black text-slate-500 border border-white/5 uppercase tracking-tighter">
                  {professor.institute_type}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 pl-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-4 bg-purple-500/50" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Department</p>
          </div>
          <p className="text-sm text-slate-300 font-semibold pl-6 border-l border-white/5">
            {professor.department}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-4 bg-blue-500/50" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Research Focus</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tagsArray.length > 0 ? (
              tagsArray.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-600 italic">Research interests pending...</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a 
            href={`mailto:${professor.email}`}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-all shadow-lg shadow-purple-900/20 active:scale-95"
          >
            <Mail size={16} /> Reach Out
          </a>
          <a 
            href={professor.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold transition-all active:scale-95"
          >
            <ExternalLink size={16} /> Profile
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessorCard;
