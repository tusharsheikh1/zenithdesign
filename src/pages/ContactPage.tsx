import { useEffect } from 'react';
import BottomCTA from '../components/sections/BottomCTA';

const ContactPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="pt-20 min-h-[80vh] flex items-center bg-slate-50 dark:bg-slate-950">
      <BottomCTA />
    </div>
  );
};
export default ContactPage;