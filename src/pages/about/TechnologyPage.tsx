import React from 'react';
import { Cpu, Shield, Wrench, Search, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/PageHeader';

export function TechnologyPage() {
  const { t } = useTranslation();

  const technologies = [
    {
      icon: <Cpu className="h-12 w-12 text-accent" />,
      title: t('techPage.cleanRoom.title'),
      description: t('techPage.cleanRoom.description')
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent" />,
      title: t('techPage.tools.title'),
      description: t('techPage.tools.description')
    },
    {
      icon: <Search className="h-12 w-12 text-accent" />,
      title: t('techPage.diagnostics.title'),
      description: t('techPage.diagnostics.description')
    }
  ];

  const equipment = [
    {
      title: 'PC-3000 UDMA',
      description: t('techPage.equipment.pc3000udma.description'),
      features: [
        t('techPage.equipment.pc3000udma.features.manufacturers'),
        t('techPage.equipment.pc3000udma.features.firmware'),
        t('techPage.equipment.pc3000udma.features.recovery')
      ]
    },
    {
      title: 'PC-3000 Flash',
      description: t('techPage.equipment.pc3000flash.description'),
      features: [
        t('techPage.equipment.pc3000flash.features.monolithic'),
        t('techPage.equipment.pc3000flash.features.usb'),
        t('techPage.equipment.pc3000flash.features.ssd')
      ]
    },
    {
      title: 'PC-3000 SSD',
      description: t('techPage.equipment.pc3000ssd.description'),
      features: [
        t('techPage.equipment.pc3000ssd.features.nvme'),
        t('techPage.equipment.pc3000ssd.features.sata'),
        t('techPage.equipment.pc3000ssd.features.controller')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('techPage.title')}
        subtitle={t('techPage.subtitle')}
        backgroundImage="technology-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4 text-primary">{tech.title}</h3>
              <p className="text-gray-600 text-center">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">{t('techPage.equipment.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">{t('techPage.security.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{t('techPage.security.protocols.title')}</h3>
                <p className="text-gray-600">{t('techPage.security.protocols.description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Database className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{t('techPage.security.specialists.title')}</h3>
                <p className="text-gray-600">{t('techPage.security.specialists.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}