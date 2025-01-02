import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>+420 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>info@datahelp.eu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Prague, Czech Republic</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
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
      </div>
    </section>
  );
}