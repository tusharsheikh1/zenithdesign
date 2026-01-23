import { useEffect } from 'react';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';

const TeamPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="pt-20">
      <Team />
      <Testimonials />
    </div>
  );
};
export default TeamPage;