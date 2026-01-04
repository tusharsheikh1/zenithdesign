import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import { ArrowUp } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] dark:opacity-[0.05] contrast-150 brightness-100 mix-blend-multiply" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>
      
      <Navbar />
      
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 dark:bg-indigo-600/15 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-cyan-500/5 dark:bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <main>{children}</main>

      <Footer />
      
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 rounded-2xl z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-2xl hover:bg-indigo-600 hover:text-white transition-colors group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppLayout;