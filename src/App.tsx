import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { TechnologyPage } from './pages/about/TechnologyPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { HDDRecoveryPage } from './pages/services/HDDRecoveryPage';
import { SSDRecoveryPage } from './pages/services/SSDRecoveryPage';
import { RAIDSystemsPage } from './pages/services/RAIDSystemsPage';
import { BusinessSolutionsPage } from './pages/services/BusinessSolutionsPage';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/hdd-recovery" element={<HDDRecoveryPage />} />
            <Route path="/services/ssd-recovery" element={<SSDRecoveryPage />} />
            <Route path="/services/raid-systems" element={<RAIDSystemsPage />} />
            <Route path="/services/business-solutions" element={<BusinessSolutionsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/about/technology" element={<TechnologyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;