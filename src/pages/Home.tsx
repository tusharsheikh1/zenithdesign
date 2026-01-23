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
// You might want to import a "PortfolioTeaser" or keep the Portfolio section here 
// but link it to the full page.
import Portfolio from '../components/sections/Portfolio';

const Home = () => {
  return (
    <div className="font-['Hind_Siliguri',sans-serif] antialiased">
      <Hero />
      <ModernTitle />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Portfolio /> {/* Keeping it here as a section, or replace with a teaser */}
      <Testimonials />
      <Stats />
      <Team />
      <Brands />
      <BottomCTA />
    </div>
  );
};

export default Home;