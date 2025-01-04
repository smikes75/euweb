import React from 'react';
import { useTranslation } from 'react-i18next';
import { Contact } from './Contact';

export function HomeContact() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            {t('contact.form.leaveMessage')}
          </h2>
          <Contact />
        </div>
      </div>
    </section>
  );
}