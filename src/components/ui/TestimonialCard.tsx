import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  img: string;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text, img, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative flex flex-col h-full bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
  >
    {/* Decorative Big Quote Icon */}
    <div className="absolute top-6 right-8 text-indigo-100 dark:text-indigo-900/30">
      <Quote size={80} strokeWidth={0} fill="currentColor" />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-6 text-yellow-400 relative z-10">
      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
    </div>

    {/* Quote Text */}
    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic mb-8 relative z-10 flex-grow">
      "{text}"
    </p>

    {/* User Profile */}
    <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-slate-100 dark:border-slate-800">
      <div className="relative">
        <img 
          src={img} 
          className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300" 
          alt={name} 
        />
        {/* Status Dot */}
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
      </div>
      
      <div>
        <h5 className="font-bold text-slate-900 dark:text-white text-base">
          {name}
        </h5>
        <span className="text-sm text-indigo-500 font-medium">
          {role}
        </span>
      </div>
    </div>
  </motion.div>
);