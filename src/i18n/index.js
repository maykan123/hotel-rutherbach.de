import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import de from './de.json'
import en from './en.json'

export const LANGUAGE_STORAGE_KEY = 'hotel-rutherbach-lang'

// lang-Attribut initial und bei Sprachwechsel setzen
const setHtmlLang = (lng) => {
  document.documentElement.lang = lng
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: 'de',
    supportedLngs: ['de', 'en'],
    nonExplicitSupportedLngs: false,
    detection: {
      // Nur localStorage – kein navigator-Detect, damit die Erstsprache garantiert Deutsch ist
      order: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React escaped bereits
    },
  })

setHtmlLang(i18n.language)
i18n.on('languageChanged', setHtmlLang)

export default i18n
