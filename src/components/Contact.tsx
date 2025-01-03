import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from './ui/FormInput';
import { FormTextarea } from './ui/FormTextarea';
import { FormButton } from './ui/FormButton';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
          
          <form className="max-w-xl mx-auto space-y-4">
            <FormInput
              type="text"
              label={t('contact.form.name')}
              required
            />
            <FormInput
              type="email"
              label={t('contact.form.email')}
              required
            />
            <FormTextarea
              rows={4}
              label={t('contact.form.message')}
              required
            />
            <FormButton type="submit">
              {t('contact.form.send')}
            </FormButton>
          </form>
        </div>
      </div>
    </section>
  );
}
