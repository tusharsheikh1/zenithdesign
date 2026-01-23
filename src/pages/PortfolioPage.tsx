// src/pages/PortfolioPage.tsx

import  { useEffect } from 'react';
import Portfolio from '../components/sections/Portfolio';
import BottomCTA from '../components/sections/BottomCTA';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-['Hind_Siliguri',sans-serif]">
      {/* Hero Section for Portfolio Page */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-600/20 blur-[120px] rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            আমাদের সফল <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">প্রজেক্টসমূহ</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            আমরা শুধুমাত্র কোড করি না, আমরা আপনার ব্যবসার জন্য একটি ডিজিটাল অভিজ্ঞতা তৈরি করি।
          </motion.p>
        </div>
      </section>
      
      {/* Portfolio Grid with isFullPage prop to remove overlapping headers */}
      <Portfolio isFullPage={true} />
      
      <div className="bg-white dark:bg-slate-950">
        <BottomCTA />
      </div>
    </div>
  );
};

export default PortfolioPage;