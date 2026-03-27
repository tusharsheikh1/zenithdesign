import { Users, Clock, Wallet, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Team",
      desc: "We have a skilled team of experienced developers and marketers.",
      color: "bg-blue-500",
      lightColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      desc: "We are committed to completing projects meeting deadlines.",
      color: "bg-orange-500",
      lightColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Affordable Price",
      desc: "Top quality service, but within your budget. No hidden charges.",
      color: "bg-green-500",
      lightColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-950">
      
      {/* 1. Background Pattern (Consistent with other sections) */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 2. Left Side: Image with Floating Badge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 max-w-[240px]"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Decorative Dot Grid behind image */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-dot-pattern opacity-20 -z-10"></div>
          </div>

          {/* 3. Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Why Are We The Best?
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Choose Us?</span>
            </h2>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-5 group">
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${feature.lightColor} ${feature.textColor} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action Line */}
            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="text-green-500" size={20} />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Join our 200+ happy clients today
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;