import { TestimonialCard } from '../ui/TestimonialCard';
import { MessageSquareHeart } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { 
      name: "Fatema Akter", 
      role: "Founder, Fashion BD", 
      text: "We are extremely impressed with our new website's design and performance. The Zenith Design team is truly professional.", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
      name: "Khaled Mahmud", 
      role: "Manager, Tech Solution", 
      text: "Very friendly behavior and the work quality is outstanding. They delivered my project ahead of time.", 
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
      name: "Zia Hasan", 
      role: "CEO, Startup Dhaka", 
      text: "Working with Creative Design was a great experience. Their customer support and response time are the best.", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* 1. Background Pattern (Consistent) */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Soft Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/50 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquareHeart size={14} />
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What Do Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Clients Say?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            We don't just work, we build relationships. See what our honorable clients have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <TestimonialCard key={idx} {...rev} delay={idx * 0.2} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;