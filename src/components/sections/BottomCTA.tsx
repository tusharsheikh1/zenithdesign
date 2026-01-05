import { Phone, MessageCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';

const BottomCTA = () => {
  return (
    <section id="contact" className="py-12 md:py-24 px-4 lg:px-8 bg-slate-50 dark:bg-slate-950 overflow-hidden scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Floating Card */}
        <div className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900 isolate shadow-2xl shadow-indigo-500/20 ring-1 ring-white/10 transform transition-transform hover:scale-[1.01] duration-500">
          
          {/* Background Mesh */}
          <div className="absolute inset-0 w-full h-full bg-slate-900">
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/50 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/50 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse delay-1000"></div>
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 px-6 py-16 md:px-12 md:py-24 text-center flex flex-col items-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-emerald-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-lg">
              <Sparkles size={12} className="text-emerald-400 fill-emerald-400" />
              রেডি টু স্টার্ট?
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1]">
              শুরু হোক আপনার <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 drop-shadow-sm">
                 অনলাইন বিজনেস
              </span>
            </h2>
            
            <p className="text-slate-300 text-base md:text-xl max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-2">
              আপনার ব্যবসার ডিজিটাল ট্রান্সফর্মেশনের জন্য আমরা আছি আপনার পাশে। 
              আজই ফ্রি কনসালটেন্সি নিন।
            </p>

            {/* Buttons */}
            <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              
              {/* Call Button (Updated) */}
              <a 
                href="tel:+8801339468355"
                className="group relative w-full sm:w-auto px-8 py-4 md:py-5 bg-white text-slate-950 rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
              >
                <span className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity blur-md"></span>
                <Phone size={20} className="text-indigo-600 fill-indigo-600/20" />
                <span>01339468355</span>
                <ArrowRight size={20} className="hidden md:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>

              {/* Message Button (Updated to WhatsApp) */}
              <a 
                href="https://wa.me/8801339468355"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 md:py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle size={20} className="text-white group-hover:text-purple-300 transition-colors" />
                <span>মেসেজ পাঠান</span>
              </a>
              
            </div>

            {/* Trust Footer */}
            <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
               <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                  <span>২৪/৭ সাপোর্ট</span>
               </div>
               <div className="hidden md:block w-1 h-1 bg-slate-500 rounded-full"></div>
               <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
                  <Zap size={14} className="text-blue-400 fill-blue-400" />
                  <span>ফ্রি কনসালটেন্সি</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BottomCTA;