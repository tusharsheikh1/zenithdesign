import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;