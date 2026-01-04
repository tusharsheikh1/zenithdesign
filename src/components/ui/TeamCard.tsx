import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Plus } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  img: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, role, img }) => {
  return (
    <div className="group relative h-[450px] w-full rounded-[2rem] overflow-hidden isolate shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 bg-white dark:bg-slate-800">
      
      {/* 1. Image Layer (Always Colorful) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
          alt={name} 
        />
        {/* Cinematic Gradient Overlay (Darkens bottom for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        
        {/* Name & Role */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h5 className="text-2xl font-bold text-white mb-1 tracking-tight drop-shadow-md">{name}</h5>
          <p className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-4 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm">
            {role}
          </p>
        </div>

        {/* 3. Interactive Social Bar */}
        <div className="relative h-12 overflow-hidden">
          
          {/* Default State: "Connect" Text/Button */}
          <div className="absolute inset-0 flex items-center gap-2 text-slate-300 group-hover:-translate-y-full transition-transform duration-500">
            <div className="w-8 h-8 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Plus size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-white/90">যোগাযোগ করুন</span>
          </div>

          {/* Hover State: Social Icons (Slides Up) */}
          <div className="absolute inset-0 flex items-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            {[Facebook, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-indigo-500 hover:border-indigo-500 transition-all transform hover:scale-110 duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none group-hover:border-white/30 transition-colors"></div>

    </div>
  );
};