import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function ElfsightReviews() {
  const { t } = useTranslation();

  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('reviews.title')}</h2>
        <div className="elfsight-app-d4a576be-88da-4007-8183-5e430e73c73c" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}