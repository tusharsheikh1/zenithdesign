import React from 'react';
import { Twitter, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Mountain, Bird, Heart } from 'lucide-react';

const footerData = {
  'কুইক লিঙ্ক': ['হোম', 'আমাদের সম্পর্কে', 'সার্ভিস', 'পোর্টফলিও', 'টিম', 'যোগাযোগ'],
  'সার্ভিসসমূহ': ['ওয়েব ডিজাইন', 'সফটওয়্যার ডেভেলপমেন্ট', 'এসইও অপ্টিমাইজেশন', 'গ্রাফিক ডিজাইন', 'ডিজিটাল মার্কেটিং'],
  'সাপোর্ট': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security Center'],
};

const Footer: React.FC = () => {
  return (
    <footer 
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }} 
      className="relative bg-white dark:bg-slate-950 pt-24 pb-12 overflow-hidden border-t border-slate-100 dark:border-slate-800"
    >
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700;800&display=swap');
        `}
      </style>
      
      {/* 1. Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* --- Brand Column (Span 4) --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo Component */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="relative h-12 w-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-all duration-500">
                <Mountain className="text-white absolute bottom-[-3px] h-6 w-6 drop-shadow-md z-10" strokeWidth={2} />
                <Bird className="text-white absolute top-2.5 right-2.5 h-3 w-3 drop-shadow-sm z-20" strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight">
                  জেনিথ ডিজাইন
                </h2>
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-[0.2em]">
                  গ্রোথ পার্টনার
                </span>
              </div>
            </a>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base max-w-xs font-medium">
              আমরা ছোট এবং মাঝারি ব্যবসার জন্য আধুনিক ডিজিটাল সমাধান প্রদান করি। আপনার ব্যবসার প্রসারে আমরা সর্বদা পাশে আছি।
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-indigo-500/30 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* --- Links Columns (Span 8) --- */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Dynamic Links Generation */}
            {Object.entries(footerData).map(([title, links]) => (
              <div key={title} className="space-y-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest border-l-4 border-indigo-500 pl-3">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="group flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mr-2 group-hover:bg-indigo-500 transition-colors"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info Column */}
            <div className="space-y-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest border-l-4 border-indigo-500 pl-3">
                  যোগাযোগ
                </h4>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start text-sm text-slate-500 dark:text-slate-400 group">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      <MapPin size={16} className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="mt-1 font-medium">হাউজঃ মুন্সি বাড়ী, নয়ারহাট স্কুল সংলগ্ন, লালমনিরহাট</span>
                  </li>
                  <li className="flex gap-4 items-center text-sm text-slate-500 dark:text-slate-400 group">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                       <Phone size={16} className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">০১৮৪৯৮৩২১৭৮</span>
                  </li>
                  <li className="flex gap-4 items-center text-sm text-slate-500 dark:text-slate-400 group">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      <Mail size={16} className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium">info@zenithdesign.com</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1 font-medium">
            © ২০২৬ সকল স্বত্ব সংরক্ষিত <span className="font-bold text-indigo-600 dark:text-indigo-400">জেনিথ ডিজাইন</span>
          </p>
          
          <p className="text-xs text-slate-400 flex items-center gap-1 font-medium">
            Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;