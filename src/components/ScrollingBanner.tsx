// src/components/ScrollingBanner.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export function ScrollingBanner() {
  const { t } = useTranslation();
  
  const content = `${t('banner.noPayment')} • ${t('banner.freeConsultation')} • ${t('banner.secureRecovery')} • ${t('banner.certified')} •`;

  return (
    <div className="bg-blue-900 py-3 overflow-hidden">
      <div className="relative flex">
        <div className="animate-scroll whitespace-nowrap flex">
          <span className="mx-4 text-white font-medium inline-block">{content}</span>
          <span className="mx-4 text-white font-medium inline-block">{content}</span>
          <span className="mx-4 text-white font-medium inline-block">{content}</span>
          <span className="mx-4 text-white font-medium inline-block">{content}</span>
        </div>
      </div>
    </div>
  );
}
