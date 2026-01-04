

const ModernTitle = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-slate-950 isolate">
      
      {/* 1. Grid Pattern Background (The "Tech" Look) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* 2. Center Spotlight Glow */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* 3. Glassmorphism Badge */}
        <div className="inline-flex items-center gap-x-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-md dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-blue-300 mb-8 shadow-sm hover:scale-105 transition-transform duration-300">
           <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          ইনোভেটিভ সল্যুশন
        </div>

        {/* 4. Hero Typography with Gradient */}
        <h2 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl leading-[1.15]">
          বাংলাদেশে এইবার আমরাই নিয়ে এসেছি
          <br className="hidden md:block" />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              সম্পূর্ণ ডিজিটাল ইকোসিস্টেম
            </span>
            {/* Subtle glow behind the text */}
            <span className="absolute -inset-1 blur-xl bg-indigo-500/20 -z-10 rounded-full"></span>
          </span>
        </h2>

        {/* 5. Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-8 text-slate-600 dark:text-slate-300">
          <span className="font-bold text-slate-900 dark:text-white underline decoration-indigo-500 decoration-2 underline-offset-4">জেনিথ ডিজাইন</span> শুধুমাত্র একটি সার্ভিস প্রোভাইডার নয়, আমরা আপনার ব্যবসার গ্রোথ পার্টনার।
        </p>

      </div>
    </section>
  );
};

export default ModernTitle;