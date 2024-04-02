// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcomeTo: 'Welcome to',
        tbilisiAi: 'The Tbilisi Ai Era',
      },
    },
    ge: {
      translation: {
        welcomeTo: 'ოლა ამიგოო',
        tbilisiAi: 'თბილისის ეიაი ერაში',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
