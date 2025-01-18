import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* DataHelp */}
          <div>
            <h3 className="text-xl font-semibold mb-6">DataHelp</h3>
            <div className="space-y-3">
              <Link to="/services" className="block hover:text-accent transition-colors">{t('nav.services')}</Link>
              <Link to="/about" className="block hover:text-accent transition-colors">{t('nav.about')}</Link>
              <Link to="/faq" className="block hover:text-accent transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('nav.services')}</h3>
            <div className="space-y-3">
              <Link to="/services/hdd-recovery" className="block hover:text-accent transition-colors">{t('services.hdd.title')}</Link>
              <Link to="/services/ssd-recovery" className="block hover:text-accent transition-colors">{t('services.ssd.title')}</Link>
              <Link to="/services/raid-systems" className="block hover:text-accent transition-colors">{t('services.raid.title')}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <p>Jirsíkova 541/1</p>
              <p>186 00 Praha 8 - Karlín</p>
              <a 
                href="mailto:info@datahelp.eu" 
                className="block hover:text-accent transition-colors"
              >
                info@datahelp.eu
              </a>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} DataHelp.eu
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
              <Link to="/privacy" className="hover:text-accent transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">{t('footer.terms')}</Link>
              <Link to="/cookies" className="hover:text-accent transition-colors">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}