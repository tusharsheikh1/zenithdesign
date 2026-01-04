// Remove: import React from 'react'; 
import AppLayout from './components/layout/AppLayout';

// Sections
import Hero from './components/sections/Hero';
import ModernTitle from './components/sections/ModernTitle'; // Imported ModernTitle
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Stats from './components/sections/Stats';
import Team from './components/sections/Team';
import Brands from './components/sections/Brands';
import BottomCTA from './components/sections/BottomCTA';

function App() {
  return (
    <AppLayout>
      <div className="font-['Hind_Siliguri',sans-serif] antialiased">
        <Hero />
        
        {/* Intro Text Section */}
        <ModernTitle />

        <Services />
        <Pricing />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Stats />
        <Team />
        <Brands />
        <BottomCTA />
      </div>
    </AppLayout>
  );
}

export default App;