import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../src/locales/en/translation.json";
import lt from "../src/locales/lt/translation.json";
import ru from "../src/locales/ru/translation.json";
// Initialization i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      lt: { translation: lt },
      ru: { translation: ru }
    },
    lng: 'lt', // default language
    fallbackLng: 'lt',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
