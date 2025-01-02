import React, { useState } from 'react';
import { Package, Search, ThumbsUp, HardDrive, CheckCircle, Send, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProcessInfographic() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <Package className="h-8 w-8 text-accent" />,
      title: t('process.reception.title'),
      description: t('process.reception.desc')
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: t('process.diagnosis.title'),
      description: t('process.diagnosis.desc')
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-accent" />,
      title: t('process.approval.title'),
      description: t('process.approval.desc')
    },
    {
      icon: <HardDrive className="h-8 w-8 text-accent" />,
      title: t('process.recovery.title'),
      description: t('process.recovery.desc')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: t('process.verification.title'),
      description: t('process.verification.desc')
    },
    {
      icon: <Send className="h-8 w-8 text-accent" />,
      title: t('process.delivery.title'),
      description: t('process.delivery.desc')
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">{t('process.title')}</h2>
          <div className="flex items-center justify-center space-x-2 text-accent">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-sm">{t('process.guarantee')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">{step.icon}</div>
                <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
              </div>
              <div className={`transition-all duration-300 ${
                activeStep === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
              } overflow-hidden mt-2`}>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}