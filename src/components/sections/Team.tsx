import { TeamCard } from '../ui/TeamCard';
import { Users, } from 'lucide-react';

const Team = () => {
  const members = [
    { 
      name: "Md. Nazrul Islam", 
      role: "CEO & Founder", 
      img: "https://www.creativedesign.com.bd/assets/images/team/1766477297Md-Nazrul.jpg" 
    },
    { 
      name: "Md. Nayeem Hossain", 
      role: "Managing Director", 
      img: "https://www.creativedesign.com.bd/assets/images/team/1766477332Md-Nayeem.jpg" 
    },
    { 
      name: "Md. Junayed Ali", 
      role: "Lead Web Designer", 
      img: "https://www.creativedesign.com.bd/assets/images/team/1766477366juna.jpg" 
    },
    { 
      name: "Md. Foyzer Ali", 
      role: "Creative Head", 
      img: "https://www.creativedesign.com.bd/assets/images/team/1766477404foyzer.jpg" 
    }
  ];

  return (
    <section id="team" className="relative py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* 1. Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* 2. Abstract Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <Users size={14} className="text-indigo-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
              Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Masterminds</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
            Those who are turning your dreams into reality with a blend of creativity and technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {members.map((m, idx) => (
            <TeamCard key={idx} {...m} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;