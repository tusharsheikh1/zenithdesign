import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, color = "blue" }) => {
  return (
    <motion.div 
      {...fadeInUp} 
      className="group relative z-0 h-full"
    >
      {/* 1. Gradient Hover Border Effect */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-[1px] -z-10" />
      
      <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden flex flex-col items-center text-center transition-transform duration-300">
        
        {/* 2. Background Decor */}
        <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-${color}-500/10 blur-2xl group-hover:bg-${color}-500/20 transition-all duration-500`} />

        {/* 3. Icon with Dynamic Glow */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-${color}-600 dark:text-${color}-400 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-${color}-500/20`}>
            <div className="w-8 h-8 flex items-center justify-center">
              {/* FIXED LINE: Cast to ReactElement<any> to allow size/strokeWidth props */}
              {React.isValidElement(icon) ? 
                React.cloneElement(icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 }) 
                : icon}
            </div>
          </div>
        </div>

        {/* 4. Content */}
        <h5 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h5>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {desc}
        </p>

        {/* 5. Hover Action (Arrow) */}
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          বিস্তারিত দেখুন <ArrowRight size={16} />
        </div>
      </div>
    </motion.div>
  );
};