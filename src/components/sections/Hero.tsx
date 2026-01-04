import { motion, type Variants } from 'framer-motion';

// --- Types & Variants ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// --- Components ---

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Grid Pattern: Dark Gray in Light Mode, Faint White in Dark Mode */}
    <div className="absolute inset-0 
      bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
      dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
      bg-[size:24px_24px] dark:bg-[size:40px_40px]">
    </div>

    {/* Radial Fade Masks */}
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#020617] dark:via-transparent dark:to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#020617] dark:via-transparent dark:to-[#020617]"></div>
    
    {/* Ambient Glows: Adjusted blending for modes */}
    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
  </div>
);

const FloatingBadge = ({ text, delay, className }: { text: string; delay: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute z-20 px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-xl backdrop-blur-md border border-white/20 dark:border-white/10 ${className}`}
  >
    {text}
  </motion.div>
);

const CodeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto z-10"
    >
      {/* Floating Badges: Adaptive Colors */}
      <FloatingBadge 
        text="🚀 SEO Ready" 
        delay={2.5} 
        className="top-[-20px] right-[-10px] rotate-6 
          bg-green-100 text-green-700 border-green-200 
          dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20" 
      />
      <FloatingBadge 
        text="⚡ Fast" 
        delay={2.8} 
        className="bottom-[20%] left-[-20px] -rotate-6 
          bg-yellow-100 text-yellow-700 border-yellow-200 
          dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20" 
      />

      {/* Main Window */}
      <div className="relative bg-[#1e293b] dark:bg-[#0f172a]/90 backdrop-blur-xl border border-slate-300 dark:border-slate-700/50 rounded-2xl shadow-2xl dark:shadow-indigo-500/10 overflow-hidden ring-1 ring-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Business_Logic.tsx</div>
          <div className="w-10" /> 
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-7 text-slate-300">
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">1</span>
            <span className="text-purple-400">import</span> <span className="text-white">Success</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'./OurServices'</span>;
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">2</span>
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">3</span>
            <span className="text-pink-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-200">GrowMyBusiness</span>() {'{'}
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">4</span>
            <span className="pl-4 text-purple-400">return</span> (
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">5</span>
            <motion.div 
              className="pl-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {'<'}
              <span className="text-emerald-400">Strategy</span>
              {' '}
              <span className="text-sky-300">ROI</span>
              {'='}
              <span className="text-orange-400">"200%"</span>
              {' />'}
            </motion.div>
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">6</span>
            <motion.div 
              className="pl-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
               {'<'}
              <span className="text-emerald-400">Design</span>
              {' '}
              <span className="text-sky-300">quality</span>
              {'='}
              <span className="text-orange-400">"Premium"</span>
              {' />'}
            </motion.div>
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">7</span>
            <span className="pl-4">);</span>
          </div>
          <div className="flex">
            <span className="w-6 text-slate-600 select-none">8</span>
            {'}'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Hero Component ---

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      
      <BackgroundGrid />

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for New Projects
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.1] transition-colors">
            আপনার ব্যবসার <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 animate-gradient-x">
              ডিজিটাল গ্রোথ
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium transition-colors">
            আমরা শুধুমাত্র সার্ভিস দেই না, আমরা আপনার ব্যবসার পার্টনার হিসেবে কাজ করি। ই-কমার্স থেকে কর্পোরেট সল্যুশন—সবকিছু এক ছাদের নিচে।
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            {/* Primary Button */}
            <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-50 group shadow-lg shadow-indigo-500/30">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-indigo-600 px-8 py-1 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-indigo-700">
                প্যাকেজ দেখুন
              </span>
            </button>

            {/* Secondary Button */}
            <button className="h-14 px-8 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <span>ফ্রি কনসালটেন্সি</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-500 font-medium transition-colors">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-[#020617] flex items-center justify-center text-[10px] transition-colors">👤</div>
               ))}
            </div>
            <p>Trusted by 50+ Businesses</p>
          </motion.div>
        </motion.div>

        {/* Right: Code Animation */}
        <div className="relative perspective-[2000px]">
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full z-0 pointer-events-none" />
          <CodeWindow />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;