import React from 'react';
import { HardDrive, Smartphone, Database, Handshake, Shield, Workflow, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <HardDrive className="h-16 w-16 text-accent" />,
      title: t('services.hdd.title'),
      description: t('services.hdd.desc'),
      link: '/services/hdd-recovery',
      features: [
        t('services.hdd.features.mechanical'),
        t('services.hdd.features.electronic'),
        t('services.hdd.features.logical')
      ]
    },
    {
      icon: <Smartphone className="h-16 w-16 text-accent" />,
      title: t('services.ssd.title'),
      description: t('services.ssd.desc'),
      link: '/services/ssd-recovery',
      features: [
        t('services.ssd.features.controller'),
        t('services.ssd.features.firmware'),
        t('services.ssd.features.flash')
      ]
    },
    {
      icon: <Database className="h-16 w-16 text-accent" />,
      title: t('services.raid.title'),
      description: t('services.raid.desc'),
      link: '/services/raid-systems',
      features: [
        t('services.raid.features.hardware'),
        t('services.raid.features.software'),
        t('services.raid.features.virtual')
      ]
    },
    {
      icon: <Handshake className="h-16 w-16 text-accent" />,
      title: t('services.business.title'),
      description: t('services.business.desc'),
      link: '/services/business-solutions',
      features: [
        t('services.business.features.support'),
        t('services.business.features.security'),
        t('services.business.features.priority')
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}