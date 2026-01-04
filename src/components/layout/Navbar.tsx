import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mountain, Bird } from 'lucide-react'; // Removed Sun, Moon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#' },
    { name: 'আমাদের সম্পর্কে', href: '#about' },
    { name: 'সার্ভিস', href: '#service' },
    { name: 'পোর্টফলিও', href: '#portfolio' },
    { name: 'প্যাকেজ', href: '#package' },
    { name: 'টিম', href: '#team' },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700;800&display=swap');
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          .animate-shimmer {
            animation: shimmer 2.5s infinite linear;
          }

          @keyframes float-bird {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(5deg); }
          }
          .group:hover .bird-icon {
            animation: float-bird 2s ease-in-out infinite;
          }

          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-enter {
            animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <nav 
        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 animate-enter ${
        isScrolled 
          ? 'py-3 bg-white/85 dark:bg-[#0f172a]/85 backdrop-blur-xl border-b border-indigo-100/50 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
          
          {/* --- LOGO SECTION --- */}
          <a href="#" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative h-[54px] w-[54px] flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-2xl shadow-lg shadow-indigo-500/25 border border-white/20 group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all duration-500 ease-out overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              <Mountain className="text-white absolute bottom-[-4px] h-8 w-8 drop-shadow-md z-10 transition-transform duration-500 group-hover:translate-y-1" strokeWidth={2} />
              <Bird className="bird-icon text-white absolute top-3 right-3 h-4 w-4 drop-shadow-sm z-20" strokeWidth={2.5} />
            </div>
            
            <div className="flex flex-col justify-center py-1">
              <h1 className="text-[26px] font-extrabold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 group-hover:to-indigo-600 transition-all duration-500 pb-0.5">
                জেনিথ ডিজাইন
              </h1>
              <span className="text-[13px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.15em] leading-none uppercase opacity-90 group-hover:opacity-100 group-hover:tracking-[0.2em] transition-all duration-500">
                আপনার বিশ্বস্ত পার্টনার
              </span>
            </div>
          </a>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center p-1.5 bg-white/60 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-white/90 dark:hover:bg-slate-900/80">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative px-5 py-2 text-[16px] font-semibold text-slate-600 dark:text-slate-300 transition-all rounded-full hover:text-indigo-600 dark:hover:text-white group/link overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="hidden md:flex items-center gap-4">
            {/* Removed Dark Mode Toggle Button Here */}

            <button className="group relative inline-flex items-center justify-center px-8 py-3 text-[15px] font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 rounded-full hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] hover:translate-y-[-2px] active:translate-y-[0px] overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full animate-shimmer" />
              <span className="relative z-10 flex items-center">
                যোগাযোগ করুন
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Removed Dark Mode Toggle Button Here */}
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 text-slate-900 dark:text-white bg-white dark:bg-white/10 border border-slate-200 dark:border-white/5 rounded-full shadow-sm active:scale-90 transition-all hover:text-indigo-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-100 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
          <div className="px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`text-lg font-semibold text-slate-800 dark:text-slate-200 py-3 px-4 rounded-xl hover:bg-indigo-50 dark:hover:bg-white/5 hover:text-indigo-600 transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;