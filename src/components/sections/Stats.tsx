import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, CheckCircle, Clock, Award } from 'lucide-react';

// 1. Reusable Animated Counter Component
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  
  // "once: true" means it counts only the first time you scroll to it.
  // Remove "once: true" if you want it to count every time you scroll up/down.
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "circOut" });
      return controls.stop;
    }
  }, [count, isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  const stats = [
    { 
      id: 1, 
      value: 1000, 
      suffix: "+", 
      label: "হ্যাপি ক্লায়েন্ট", 
      icon: <Users className="w-6 h-6" />, 
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50"
    },
    { 
      id: 2, 
      value: 1300, 
      suffix: "+", 
      label: "প্রজেক্ট সম্পন্ন", 
      icon: <CheckCircle className="w-6 h-6" />, 
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "group-hover:border-green-500/50"
    },
    { 
      id: 3, 
      value: 24, 
      suffix: "/7", 
      label: "সাপোর্ট অ্যাক্টিভ", 
      icon: <Clock className="w-6 h-6" />, 
      color: "text-orange-500", 
      bg: "bg-orange-500/10",
      border: "group-hover:border-orange-500/50"
    },
    { 
      id: 4, 
      value: 6, 
      suffix: "+", 
      label: "বছরের অভিজ্ঞতা", 
      icon: <Award className="w-6 h-6" />, 
      color: "text-purple-500", 
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50"
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900 dark:bg-slate-950 overflow-hidden border-y border-white/5">
      
      {/* Background Glow & Grid */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Ensures the card fade-in also happens on scroll
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className={`relative group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${stat.border}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Counter Number */}
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight flex justify-center items-center gap-0.5">
                <Counter value={stat.value} />
                <span className={stat.color}>{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-sm md:text-base font-medium text-slate-400 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;