import React, { useState } from 'react';
import { Package, Search, ThumbsUp, HardDrive, CheckCircle, Send, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProcessInfographic() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <Package className="h-12 w-12 text-accent" />,
      title: t('process.reception.title', 'Příjem média'),
      description: t('process.reception.desc', 'Bezpečné převzetí vašeho zařízení v našem specializovaném centru')
    },
    {
      icon: <Search className="h-12 w-12 text-accent" />,
      title: t('process.diagnosis.title', 'Diagnostika'),
      description: t('process.diagnosis.desc', 'Komplexní analýza poškození a možností obnovy dat')
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-accent" />,
      title: t('process.approval.title', 'Schválení postupu'),
      description: t('process.approval.desc', 'Předložení detailní zprávy a cenové kalkulace ke schválení')
    },
    {
      icon: <HardDrive className="h-12 w-12 text-accent" />,
      title: t('process.recovery.title', 'Záchrana dat'),
      description: t('process.recovery.desc', 'Profesionální obnova dat pomocí specializovaných nástrojů')
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-accent" />,
      title: t('process.verification.title', 'Kontrola'),
      description: t('process.verification.desc', 'Ověření integrity a kompletnosti zachráněných dat')
    },
    {
      icon: <Send className="h-12 w-12 text-accent" />,
      title: t('process.delivery.title', 'Předání dat'),
      description: t('process.delivery.desc', 'Bezpečné předání dat na šifrovaném médiu')
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('process.title', 'Proces záchrany dat')}</h2>
          <div className="flex items-center justify-center space-x-2 text-accent">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-sm">{t('process.guarantee', 'Pokud data nelze zachránit neplatíte nic')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">{step.icon}</div>
                <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
              </div>
              <div className={`transition-all duration-300 ${
                activeStep === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
              } overflow-hidden`}>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}