
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { FAQPage } from './pages/FAQPage';
import { HDDRecoveryPage } from './pages/services/HDDRecoveryPage';
import { SSDRecoveryPage } from './pages/services/SSDRecoveryPage';
import { RAIDSystemsPage } from './pages/services/RAIDSystemsPage';
import { BusinessSolutionsPage } from './pages/services/BusinessSolutionsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiesPage } from './pages/CookiesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SchemaOrg } from './components/SchemaOrg';
function App() {
  
  return (
    <HelmetProvider>
      <SchemaOrg />
      <Router>
        <ScrollToTop />
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
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;