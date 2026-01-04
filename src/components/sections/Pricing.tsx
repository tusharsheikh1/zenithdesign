import { PriceCard } from '../ui/PriceCard';
import { ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      title: "বেসিক শুরু",
      price: "৩৫০০",
      features: ["১ পেজের ল্যান্ডিং পেজ", "মোবাইল ফ্রেন্ডলি ডিজাইন", "ফাস্ট লোডিং স্পিড", "বেসিক এসইও (SEO)", "সোশ্যাল মিডিয়া লিঙ্ক", "১ মাসের ফ্রি সাপোর্ট"]
    },
    {
      title: "স্ট্যান্ডার্ড বিজনেস",
      price: "৮০০০",
      popular: true,
      features: ["৫-১০ পেজের ডায়নামিক ওয়েবসাইট", "প্রিমিয়াম ইউজার ইন্টারফেস (UI)", "এডমিন প্যানেল (Control Panel)", "ফ্রি .com ডোমেইন (১ বছর)", "লাইভ চ্যাট অপশন", "৩ মাসের ফ্রি সাপোর্ট", "গুগল ম্যাপ ইন্টিগ্রেশন"]
    },
    {
      title: "আলটিমেট সল্যুশন",
      price: "১৮৫০০",
      features: ["সম্পূর্ণ ই-কমার্স ফাংশনালিটি", "ইনভেন্টরি ও অর্ডার ম্যানেজমেন্ট", "বিকাশ/নগদ পেমেন্ট গেটওয়ে", "অ্যাডভান্সড এসইও ও সিকিউরিটি", "ফেসবুক পিক্সেল ও অ্যানালিটিক্স", "৬ মাসের ফ্রি মেইনটেনেন্স", "আনলিমিটেড প্রোডাক্ট আপলোড"]
    }
  ];

  return (
    <section id="প্যাকেজ" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 2. Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
              বেস্ট প্রাইসিং প্ল্যান
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            স্বচ্ছ বাজেট, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              কোনো গোপন চার্জ নেই
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            আপনার ব্যবসার আকার যাই হোক না কেন, আমাদের কাছে আপনার জন্য সঠিক সল্যুশন রয়েছে।
          </p>
        </div>

        {/* 3. Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center mb-20">
          {packages.map((pkg, idx) => (
            <PriceCard key={idx} {...pkg} delay={idx * 0.1} />
          ))}
        </div>

        {/* 4. Modern "Custom" Banner */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-1">
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative rounded-[2.4rem] bg-slate-950 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
              
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full"></div>
              
              <div className="text-center md:text-left relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-3">
                  <Sparkles className="text-yellow-400" />
                  কাস্টম বা ভিন্ন কিছু প্রয়োজন?
                </h3>
                <p className="text-slate-400 text-lg">
                  আপনার স্পেসিফিক রিকোয়ারমেন্ট অনুযায়ী আমরা <span className="text-indigo-400 font-semibold">কাস্টম কোটেশন</span> প্রদান করি।
                </p>
              </div>

              <button className="relative z-10 whitespace-nowrap px-8 py-4 bg-white text-slate-900 hover:bg-indigo-50 rounded-2xl font-bold transition-all shadow-xl shadow-white/5 flex items-center gap-2 group/btn">
                সরাসরি কথা বলুন
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;