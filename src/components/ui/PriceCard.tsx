import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

export const PriceCard: React.FC<PriceCardProps> = ({ title, price, features, popular, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 group ${
        popular 
          ? 'bg-slate-900 text-white shadow-2xl shadow-indigo-500/30 scale-105 z-10 border border-slate-700' 
          : 'bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl dark:hover:bg-slate-900'
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/40">
            <Zap size={12} fill="currentColor" />
            Most Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 text-center">
        <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${popular ? 'text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>
          {title}
        </h3>
        <div className="flex items-end justify-center gap-1">
          <span className="text-5xl font-extrabold tracking-tight">৳{price}</span>
        </div>
        <p className={`text-xs mt-2 ${popular ? 'text-slate-400' : 'text-slate-400'}`}>
          শুরু হয়ে প্রজেক্ট অনুযায়ী
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[15px]">
            <div className={`mt-0.5 min-w-[20px] h-[20px] rounded-full flex items-center justify-center ${
              popular ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
            }`}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={`${popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
        popular
          ? 'bg-white text-slate-900 hover:bg-indigo-50 shadow-lg shadow-white/10'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-indigo-600'
      }`}>
        প্যাকেজটি নিন
      </button>
    </motion.div>
  );
};