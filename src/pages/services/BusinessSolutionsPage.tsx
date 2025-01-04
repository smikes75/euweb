import React from 'react';
import { Building2, Clock, Shield, Headphones, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Contact } from '../../components/Contact';

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

  const salesTeam = [
    {
      name: "Jan Novák",
      position: "Senior Account Manager",
      email: "jmeno1@datahelp.eu"
    },
    {
      name: "Petr Svoboda",
      position: "Business Development Manager",
      email: "jmeno2@datahelp.eu"
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

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-primary mb-8">{t('services.business.contact.salesTeam')}</h2>
              <div className="space-y-6">
                {salesTeam.map((member, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-lg text-primary">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.position}</p>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-accent hover:text-accent-dark transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">{t('services.business.contact.leaveMessage')}</h3>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}