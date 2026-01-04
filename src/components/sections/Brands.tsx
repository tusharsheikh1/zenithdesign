
import { Hexagon, Layers, Command, Ghost, Activity, Aperture, Mountain } from 'lucide-react';

// "Unknown" / Abstract Brand Definitions
const brands = [
  {
    name: "NexaFlow",
    icon: <Hexagon size={28} strokeWidth={2.5} />,
  },
  {
    name: "Vertex",
    icon: <Mountain size={28} strokeWidth={2.5} />,
  },
  {
    name: "Lumina",
    icon: <Aperture size={28} strokeWidth={2.5} />,
  },
  {
    name: "Quantum",
    icon: <Layers size={28} strokeWidth={2.5} />,
  },
  {
    name: "EchoSys",
    icon: <Activity size={28} strokeWidth={2.5} />,
  },
  {
    name: "Cmd+Alt",
    icon: <Command size={28} strokeWidth={2.5} />,
  },
  {
    name: "Spectra",
    icon: <Ghost size={28} strokeWidth={2.5} />,
  },
];

const Brands = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
      
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
          যাদের বিশ্বাস অর্জন করেছি
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* Gradient Masks (Fade Effect on Edges) */}
        <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-white dark:from-slate-950 to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-white dark:from-slate-950 to-transparent"></div>

        {/* Scrolling Animation Wrapper */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 px-12">
          {/* We repeat the array 3 times to ensure smooth infinite scrolling */}
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group/brand"
            >
              {/* Logo Icon */}
              <div className="text-indigo-600 dark:text-indigo-400">
                {brand.icon}
              </div>
              
              {/* Logo Text */}
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300 font-sans tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second Layer for smoother loop (Optional but recommended for CSS marquees) */}
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap gap-16 md:gap-24 px-12">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group/brand"
            >
              <div className="text-indigo-600 dark:text-indigo-400">
                {brand.icon}
              </div>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300 font-sans tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;