import { useEffect } from 'react';
import ModernTitle from '../components/sections/ModernTitle';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Stats from '../components/sections/Stats';

const AboutPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="pt-20">
      <ModernTitle />
      <WhyChooseUs />
      <Stats />
    </div>
  );
};
export default AboutPage;