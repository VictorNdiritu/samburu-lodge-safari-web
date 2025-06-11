
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import esTranslations from './locales/es.json';
import itTranslations from './locales/it.json';
import ptTranslations from './locales/pt.json';
import zhTranslations from './locales/zh.json';
import ruTranslations from './locales/ru.json';
import hiTranslations from './locales/hi.json';

const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  es: { translation: esTranslations },
  it: { translation: itTranslations },
  pt: { translation: ptTranslations },
  zh: { translation: zhTranslations },
  ru: { translation: ruTranslations },
  hi: { translation: hiTranslations },
};

const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0];
const supportedLanguages = Object.keys(resources);
const defaultLanguage = savedLanguage || 
  (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
