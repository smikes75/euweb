import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { de } from './locales/de';
import { cs } from './locales/cs';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: cs },
      de: { translation: de },
      en: { translation: en }
    },
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;