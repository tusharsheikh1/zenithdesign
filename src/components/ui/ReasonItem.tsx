import React from 'react';

interface ReasonItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const ReasonItem: React.FC<ReasonItemProps> = ({ icon, title, desc }) => (
  <div className="flex gap-6 items-start group">
    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg text-[#ff6b00] shrink-0 border border-black/5 dark:border-white/10 group-hover:bg-[#ff6b00] group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <h5 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{title}</h5>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);