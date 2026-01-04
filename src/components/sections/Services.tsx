import { Globe, Laptop, Palette, Video, Megaphone, ChartLine } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const Services = () => {
  return (
    <section id="সার্ভিস" className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Consistent Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 2. Modern Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/50 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest">
            আমাদের সেবা
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            আমরা কিভাবে <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">সাহায্য করি?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             আপনার ব্যবসার প্রতিটি ধাপের জন্য আমাদের রয়েছে বিশেষায়িত ডিজিটাল সমাধান।
          </p>
        </div>

        {/* 3. Grid Layout (3 Columns x 2 Rows = 6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <ServiceCard 
            icon={<Globe />} 
            title="ওয়েব ডিজাইন" 
            desc="আপনার ব্যবসার জন্য আধুনিক, ফাস্ট এবং রেসপনসিভ ওয়েবসাইট ডিজাইন।" 
            color="blue" // Blue for Tech
          />
          
          <ServiceCard 
            icon={<Laptop />} 
            title="সফটওয়্যার ডেভেলপমেন্ট" 
            desc="ইনভেন্টরি, পওএস (POS) বা যেকোনো কাস্টম সফটওয়্যার সল্যুশন।" 
            color="indigo" // Indigo for Dev
          />

          <ServiceCard 
            icon={<Megaphone />} 
            title="ডিজিটাল মার্কেটিং" 
            desc="সোশ্যাল মিডিয়া বুস্টিং এবং গুগল অ্যাডস এর মাধ্যমে সেলস বৃদ্ধি করুন।" 
            color="teal" // Teal for Growth
          />

          <ServiceCard 
            icon={<ChartLine />} 
            title="SEO সার্ভিস" 
            desc="গুগল সার্চে আপনার ওয়েবসাইটকে প্রথম পেজে র‍্যাঙ্ক করান।" 
            color="green" // Green for Success/Chart
          />
          
          <ServiceCard 
            icon={<Palette />} 
            title="গ্রাফিক্স ডিজাইন" 
            desc="লোগো, ব্যানার, পোস্টার এবং সোশ্যাল মিডিয়া পোস্ট ডিজাইন।" 
            color="pink" // Pink for Creativity
          />
          
          <ServiceCard 
            icon={<Video />} 
            title="ভিডিও এডিটিং" 
            desc="রিলস, ইউটিউব ভিডিও এবং প্রমোশনাল ভিডিও এডিটিং সার্ভিস।" 
            color="orange" // Orange for Media
          />

        </div>

        {/* 4. Common Note on Pricing */}
        <div className="mt-12 text-center">
          <p className="inline-block px-6 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium shadow-sm">
            💰 প্রতিটি সার্ভিসের বাজেট: <span className="text-slate-900 dark:text-white font-bold">আলোচনা সাপেক্ষে</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;