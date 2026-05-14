import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import ProfessorCard from '../components/ProfessorCard';
import { Search, Filter, X, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Explore = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstTypes, setSelectedInstTypes] = useState(['IIT', 'NIT', 'BITS']);
  const [selectedInstitute, setSelectedInstitute] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const institutes = [...new Set(professors.map(p => p.institute))].filter(Boolean).sort();

  useEffect(() => {
    fetchProfessors();
  }, []);

  async function fetchProfessors() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('professors').select('*');
      if (error) throw error;
      setProfessors(data || []);
    } catch (error) {
      console.error('Supabase Error:', error.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredProfessors = professors.filter(prof => {
    const searchStr = `${prof.name} ${prof.department} ${Array.isArray(prof.research_tags) ? prof.research_tags.join(' ') : prof.research_tags}`.toLowerCase();
    const matchesSearch = searchStr.includes(searchTerm.toLowerCase());
    const profType = prof.institute_type || (prof.institute && prof.institute.split(' ')[0]) || '';
    const matchesType = selectedInstTypes.includes(profType);
    const matchesInstitute = !selectedInstitute || prof.institute === selectedInstitute;
    return matchesSearch && matchesType && matchesInstitute;
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-28 space-y-6">
            <div className="glass-card p-8 border-white/5">
              <h3 className="font-bold text-white flex items-center gap-2 mb-8 text-lg">
                <Filter size={18} className="text-purple-400" /> Filters
              </h3>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-6">Institution Type</h4>
                  <div className="space-y-4">
                    {['IIT', 'NIT', 'BITS'].map(type => (
                      <label key={type} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm text-slate-400 group-hover:text-white transition-colors">{type}s</span>
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            checked={selectedInstTypes.includes(type)}
                            onChange={() => setSelectedInstTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])}
                            className="w-5 h-5 rounded-lg border-white/10 bg-white/5 text-purple-600 focus:ring-offset-0 focus:ring-purple-600 transition-all cursor-pointer"
                          />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-6">Select Institute</h4>
                  <div className="relative">
                    <select 
                      value={selectedInstitute}
                      onChange={(e) => setSelectedInstitute(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-purple-500/50 appearance-none transition-all cursor-pointer"
                    >
                      <option value="">All Institutes</option>
                      {institutes.map(inst => <option key={inst} value={inst}>{inst}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      ↓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-purple-500/10 bg-purple-500/[0.02]">
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Sparkles size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Quick Tip</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Use specific keywords like "NLP" or "Cryptography" to find specialized mentors faster.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-12 relative group max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, research interest, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] pl-16 pr-8 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all shadow-2xl"
            />
          </div>

          <div className="flex items-center justify-between mb-8 px-2">
            <p className="text-sm text-slate-500 font-medium">
              Showing <span className="text-white font-bold">{filteredProfessors.length}</span> results
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-widest text-slate-600 font-black">Sort By</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm text-slate-400 focus:outline-none cursor-pointer hover:text-white transition-colors"
              >
                <option value="name">Name (A-Z)</option>
                <option value="recent">Recently Added</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-4">
              <div className="relative">
                <Loader2 size={48} className="text-purple-500 animate-spin" />
                <div className="absolute inset-0 blur-2xl bg-purple-500/20 animate-pulse" />
              </div>
              <p className="text-slate-500 font-medium animate-pulse">Scanning the academic universe...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProfessors.map(prof => (
                  <ProfessorCard key={prof.id} professor={prof} />
                ))}
              </AnimatePresence>
            </div>
          )}

          {!loading && filteredProfessors.length === 0 && (
            <div className="text-center py-40 glass-card">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <X size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
              <p className="text-slate-500">Try adjusting your filters or search keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
