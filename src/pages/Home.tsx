import Hero from '../components/sections/Hero';
import ModernTitle from '../components/sections/ModernTitle';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Stats from '../components/sections/Stats';
import Team from '../components/sections/Team';
import Brands from '../components/sections/Brands';
import BottomCTA from '../components/sections/BottomCTA';

const Home = () => {
  return (
    <div className="font-['Hind_Siliguri',sans-serif] antialiased">
      <Hero />
      <ModernTitle />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <Team />
      <Brands />
      <BottomCTA />
    </div>
  );
};

export default Home;