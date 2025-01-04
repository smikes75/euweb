import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormInput } from './ui/FormInput';
import { FormTextarea } from './ui/FormTextarea';
import { FormButton } from './ui/FormButton';

export function Contact() {
  const { t } = useTranslation();

  return (
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
  );
}