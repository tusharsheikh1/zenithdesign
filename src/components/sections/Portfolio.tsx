import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FolderOpen, Sparkles } from 'lucide-react';
import { portfolioItems } from '../../data/portfolio';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredPortfolio = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const filters = [
    { label: 'সব প্রজেক্ট', val: '*' },
    { label: 'ওয়েব ডিজাইন', val: 'web-dijan' },
    { label: 'সফটওয়্যার', val: 'sftwzar-development' },
    { label: 'এসইও', val: 'esioo' }
  ];

  return (
    <section id="পোর্টফলিও" className="relative py-20 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Background (Optimized for Mobile Performance) */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 2. Compact Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <Sparkles size={14} className="text-indigo-500" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
              আমাদের পোর্টফোলিও
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">সেরা কাজসমূহ</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl">
            ক্রিয়েটিভিটি এবং টেকনোলজির সংমিশ্রণে তৈরি আমাদের কিছু সিগনেচার প্রজেক্ট।
          </p>
        </div>
        
        {/* 3. Mobile-First Swipeable Filters */}
        <div className="w-full overflow-x-auto pb-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 scrollbar-hide">
          <div className="flex md:justify-center min-w-max md:min-w-0 gap-2 p-1.5 bg-white dark:bg-slate-900/60 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl mx-auto">
            {filters.map((btn) => (
              <button 
                key={btn.val}
                onClick={() => setActiveFilter(btn.val)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap ${
                  activeFilter === btn.val 
                    ? 'text-white' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {activeFilter === btn.val && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-900 dark:bg-indigo-600 rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Responsive Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredPortfolio.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[320px] md:h-[380px] rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 bg-slate-200 dark:bg-slate-800"
              >
                {/* Image Layer with Zoom Effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={item.title} 
                    loading="lazy"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Glass Info Bar */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 p-4 rounded-3xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-between shadow-lg">
                  
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
                      Project
                    </span>
                    <h5 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {item.title}
                    </h5>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-indigo-100 dark:border-indigo-500/30"
                  >
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-60">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <FolderOpen size={32} className="text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;