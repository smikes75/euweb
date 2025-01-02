import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FAQ } from '../components/FAQ';
import { useTranslation } from 'react-i18next';

export function FAQPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        backgroundImage="faq-bg.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <FAQ />
        </div>
      </div>
    </div>
  );
}