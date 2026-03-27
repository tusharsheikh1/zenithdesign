import { Globe, Laptop, Palette, Video, Megaphone, ChartLine } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const Services = () => {
  return (
    <section id="service" className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Consistent Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 2. Modern Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How Do We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Help?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             We have specialized digital solutions for every stage of your business.
          </p>
        </div>

        {/* 3. Grid Layout (3 Columns x 2 Rows = 6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <ServiceCard 
            icon={<Globe />} 
            title="Web Design" 
            desc="Modern, fast, and responsive website design for your business." 
            color="blue" 
          />
          
          <ServiceCard 
            icon={<Laptop />} 
            title="Software Development" 
            desc="Inventory, POS, or any custom software solution." 
            color="indigo" 
          />

          <ServiceCard 
            icon={<Megaphone />} 
            title="Digital Marketing" 
            desc="Increase sales through social media boosting and Google Ads." 
            color="teal" 
          />

          <ServiceCard 
            icon={<ChartLine />} 
            title="SEO Services" 
            desc="Rank your website on the first page of Google search." 
            color="green" 
          />
          
          <ServiceCard 
            icon={<Palette />} 
            title="Graphics Design" 
            desc="Logo, banner, poster, and social media post design." 
            color="pink" 
          />
          
          <ServiceCard 
            icon={<Video />} 
            title="Video Editing" 
            desc="Reels, YouTube videos, and promotional video editing services." 
            color="orange" 
          />

        </div>

        {/* 4. Common Note on Pricing */}
        <div className="mt-12 text-center">
          <p className="inline-block px-6 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium shadow-sm">
            💰 Budget for each service: <span className="text-slate-900 dark:text-white font-bold">Negotiable</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;