import React from 'react';
import { useTranslation } from 'react-i18next';

export function ScrollingBanner() {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-900 py-3 overflow-hidden">
      <div className="animate-scrolling-text whitespace-nowrap">
        <span className="inline-block mx-4 text-white font-medium">
          {t('banner.noPayment')} • {t('banner.freeConsultation')} • {t('banner.secureRecovery')} • {t('banner.certified')} •&nbsp;
        </span>
        <span className="inline-block mx-4 text-white font-medium">
          {t('banner.noPayment')} • {t('banner.freeConsultation')} • {t('banner.secureRecovery')} • {t('banner.certified')} •&nbsp;
        </span>
      </div>
    </div>
  );
}