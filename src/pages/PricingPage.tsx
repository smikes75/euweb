
import { HardDrive, Smartphone, Database, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';

export function PricingPage() {
  const { t } = useTranslation();

  const pricingTiers = [
    {
      icon: <HardDrive className="h-8 w-8 text-accent" />,
      title: t('pricing.hdd.title'),
      description: t('pricing.hdd.description'),
      price: t('pricing.hdd.price'),
      noSuccess: t('pricing.hdd.noSuccess'),
      features: [
        t('pricing.hdd.features.diagnosis'),
        t('pricing.hdd.features.recovery'),
        t('pricing.hdd.features.warranty'),
        t('pricing.hdd.features.support')
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: t('pricing.ssd.title'),
      description: t('pricing.ssd.description'),
      price: t('pricing.ssd.price'),
      noSuccess: t('pricing.ssd.noSuccess'),
      features: [
        t('pricing.ssd.features.diagnosis'),
        t('pricing.ssd.features.recovery'),
        t('pricing.ssd.features.warranty'),
        t('pricing.ssd.features.support')
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: t('pricing.raid.title'),
      description: t('pricing.raid.description'),
      price: t('pricing.raid.price'),
      noSuccess: t('pricing.raid.noSuccess'),
      features: [
        t('pricing.raid.features.diagnosis'),
        t('pricing.raid.features.recovery'),
        t('pricing.raid.features.warranty'),
        t('pricing.raid.features.support')
      ]
    },
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      title: t('pricing.business.title'),
      description: t('pricing.business.description'),
      price: t('pricing.business.price'),
      noSuccess: t('pricing.business.noSuccess'),
      features: [
        t('pricing.business.features.priority'),
        t('pricing.business.features.sla'),
        t('pricing.business.features.support'),
        t('pricing.business.features.onsite')
      ]
    }
  ];

  return (
    <>
    <SEO 
      title={t('seo.pricing.title')}
      description={t('seo.pricing.description')}
      keywords={t('seo.pricing.keywords')}
      canonical="https://datahelp.eu/pricing"
    />
    {
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
        backgroundImage="pricing-bg.webp"
      />

      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('pricing.description')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
<div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
  <div className="flex-grow">
    <div className="flex justify-center mb-6">{tier.icon}</div>
    <h3 className="text-xl font-bold text-center mb-4 text-primary">{tier.title}</h3>
    <p className="text-gray-600 text-center mb-6">{tier.description}</p>
    <div className="text-center mb-4">
      <p className="text-2xl font-bold text-primary whitespace-pre-line">{tier.price}</p>
      <p className="text-sm text-gray-500 mt-1">{tier.noSuccess}</p>
    </div>
    <ul className="space-y-4">
      {tier.features.map((feature, idx) => (
        <li key={idx} className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
  <div className="mt-8">
    <a
      href="/contact"
      className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition"
    >
      {t('pricing.getQuote')}
    </a>
  </div>
</div>
          ))}
        </div>

        <FAQ />
      </div>
    </div>
    };
    </>
  );
}