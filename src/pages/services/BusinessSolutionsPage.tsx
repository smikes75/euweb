import React from 'react';
import { Building2, Clock, Shield, Headphones, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BusinessSolutionsPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: t('services.business.features.support'),
      description: t('services.business.features.supportDesc')
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t('services.business.features.security'),
      description: t('services.business.features.securityDesc')
    },
    {
      icon: <Headphones className="h-8 w-8 text-accent" />,
      title: t('services.business.features.priority'),
      description: t('services.business.features.priorityDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/images/backgrounds/business-solutions.jpg")',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(27, 56, 122, 1) 50%, rgba(27, 56, 122, 0) 100%)'
            }}
          ></div>
        </div>

        <div className="relative z-10 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4 mb-6">
              <Handshake className="h-12 w-12" />
              <h1 className="text-4xl font-bold">{t('services.business.title')}</h1>
            </div>
            <p className="text-xl">{t('services.business.desc')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">{t('services.business.sla.title')}</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-primary">{t('services.business.sla.response.title')}</h3>
                  <p className="text-gray-600">{t('services.business.sla.response.description')}</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-primary">{t('services.business.sla.onsite.title')}</h3>
                  <p className="text-gray-600">{t('services.business.sla.onsite.description')}</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-primary">{t('services.business.sla.reporting.title')}</h3>
                  <p className="text-gray-600">{t('services.business.sla.reporting.description')}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">{t('services.business.industries.title')}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-primary">{t('services.business.industries.finance')}</h3>
                <p className="text-gray-600">{t('services.business.industries.financeDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">{t('services.business.industries.healthcare')}</h3>
                <p className="text-gray-600">{t('services.business.industries.healthcareDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">{t('services.business.industries.manufacturing')}</h3>
                <p className="text-gray-600">{t('services.business.industries.manufacturingDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">{t('services.business.industries.it')}</h3>
                <p className="text-gray-600">{t('services.business.industries.itDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}