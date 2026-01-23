import React, { useEffect } from 'react';
import Services from '../components/sections/Services';
import Brands from '../components/sections/Brands';

const ServicesPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">আমাদের <span className="text-orange-500">সেবাসমূহ</span></h1>
      </div>
      <Services />
      <Brands />
    </div>
  );
};
export default ServicesPage;