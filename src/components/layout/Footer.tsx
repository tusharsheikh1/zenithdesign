import React from 'react';
import { Twitter, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Mountain, Bird, } from 'lucide-react';

const Footer: React.FC = () => {
  // Navigation Links Data
  const footerData = [
    {
      title: 'কুইক লিঙ্ক',
      links: [
        { text: 'হোম', href: '/' },
      { text: 'আমাদের সম্পর্কে', href: '/about' },
      { text: 'সার্ভিস', href: '/services' },
      { text: 'পোর্টফলিও', href: '/portfolio' },
      { text: 'যোগাযোগ', href: '/contact' }
      ]
    },
    {
      title: 'সার্ভিসসমূহ',
      links: [
        { text: 'ওয়েব ডিজাইন', href: '#service' },
        { text: 'সফটওয়্যার ডেভেলপমেন্ট', href: '#service' },
        { text: 'এসইও অপ্টিমাইজেশন', href: '#service' },
        { text: 'গ্রাফিক ডিজাইন', href: '#service' },
        { text: 'ডিজিটাল মার্কেটিং', href: '#service' }
      ]
    }
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 pt-24 pb-12 overflow-hidden border-t border-slate-100 dark:border-slate-800">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group w-fit">
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

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-indigo-500/30 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {footerData.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest border-l-4 border-indigo-500 pl-3">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <a href={link.href} className="group flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mr-2 group-hover:bg-indigo-500 transition-colors"></span>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info - Updated Phone Number */}
            <div className="space-y-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest border-l-4 border-indigo-500 pl-3">
                  যোগাযোগ
                </h4>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start text-sm text-slate-500 dark:text-slate-400 group">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      <MapPin size={16} className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="mt-1 font-medium">46, Banglabazar, Dhaka-1100</span>
                  </li>
                  <li className="flex gap-4 items-center text-sm text-slate-500 dark:text-slate-400 group">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                       <Phone size={16} className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <a href="tel:+8801339468355" className="font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      01339468355
                    </a>
                  </li>
                  <li className="flex gap-4 items-center text-sm text-slate-500 dark:text-slate-400 group">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      <Mail size={16} className="text-indigo-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium">contact@zenithdesign.xyz</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1 font-medium">
            © ২০২৬ সকল স্বত্ব সংরক্ষিত <span className="font-bold text-indigo-600 dark:text-indigo-400">জেনিথ ডিজাইন</span>
          </p>
          <p className="text-xs text-slate-400 flex items-center gap-1 font-medium">
            Design by Zenith Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;