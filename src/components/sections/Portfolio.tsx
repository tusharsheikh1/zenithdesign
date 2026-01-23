// src/components/sections/Portfolio.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FolderOpen, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../../data/portfolio';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  isFullPage?: boolean;
  limit?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio: React.FC<PortfolioProps> = ({ isFullPage = false, limit }) => {
  const [activeFilter, setActiveFilter] = useState('*');

  // ফিল্টার লজিক
  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // লিমিট অনুযায়ী ডাটা দেখানো (হোম পেজের জন্য)
  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const filters = [
    { label: 'সব প্রজেক্ট', val: '*' },
    { label: 'ওয়েব ডিজাইন', val: 'web-design' },
    { label: 'সফটওয়্যার', val: 'software' },
    { label: 'এসইও', val: 'seo' }
  ];

  return (
    <section 
      id="portfolio" 
      className={`relative overflow-hidden bg-slate-50 dark:bg-slate-950 scroll-mt-20 ${isFullPage ? 'py-12' : 'py-24 lg:py-32'}`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* হোম পেজে থাকলে হেডার দেখাবে, পোর্টফোলিও পেজে থাকলে হাইড থাকবে */}
        {!isFullPage && (
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-6"
            >
              <Sparkles size={14} className="text-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                সাকসেস স্টোরি
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">সেরা কাজসমূহ</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
              ক্রিয়েটিভিটি এবং টেকনোলজির সংমিশ্রণে তৈরি আমাদের কিছু সিগনেচার প্রজেক্ট।
            </p>
          </div>
        )}
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-xl">
            {filters.map((btn) => (
              <button 
                key={btn.val}
                onClick={() => setActiveFilter(btn.val)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeFilter === btn.val 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-indigo-600 dark:text-slate-400'
                }`}
              >
                {activeFilter === btn.val && (
                  <motion.div
                    layoutId="portfolioTab"
                    className="absolute inset-0 bg-indigo-600 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {displayItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 pr-4">
                      <h5 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{item.title}</h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{item.description}</p>
                    </div>
                    <a href={item.url} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* হোম পেজের জন্য "See More" বাটন */}
        {!isFullPage && limit && filteredItems.length > limit && (
          <div className="mt-16 text-center">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-md group"
            >
              সব প্রজেক্ট দেখুন
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* Empty State */}
        {displayItems.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-24">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
              <FolderOpen size={32} className="text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium italic">শীঘ্রই নতুন প্রজেক্ট আসছে...</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;