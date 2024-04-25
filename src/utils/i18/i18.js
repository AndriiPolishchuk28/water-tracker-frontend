import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LANGUAGE_STORAGE_KEY } from '../../constants';

const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
    lng: savedLanguage,
    resources: {
      en: {
        translation: require('./dictionaries/en/translation.json'),
      },
      ua: {
        translation: require('./dictionaries/ua/translation.json'),
      },
    },
    fallbackLng: 'en',
    debug: false,
    returnObjects: true,
    whitelist: ['ua', 'en'],
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
      transSupportBasicHtmlNodes: true,
    },
  });

export default i18n;
