import React from 'react';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["5 Search results/day", "View basic profiles", "Institute filtering", "Standard support"],
      cta: "Current Plan",
      featured: false
    },
    {
      name: "Pro",
      price: "$9",
      features: ["Unlimited searches", "Direct email access", "Recent papers data", "Priority support", "Save favorites"],
      cta: "Upgrade to Pro",
      featured: true
    },
    {
      name: "Team",
      price: "$29",
      features: ["Everything in Pro", "Up to 5 members", "Custom exports", "API Access", "Dedicated account manager"],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-white mb-6">Simple, Transparent <span className="text-gradient">Pricing</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Choose the plan that's right for your research goals.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 flex flex-col relative ${plan.featured ? 'border-purple-500/40 ring-1 ring-purple-500/20' : ''}`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-white">{plan.price}</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-slate-400">
                  <Check size={16} className="text-purple-400" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.featured ? 'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-purple-500/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
