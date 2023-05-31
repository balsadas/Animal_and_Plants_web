import i18n, { I18n } from "i18n";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';        

const resources = {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    // ja: {
    //   translations: require("./locales/ja/translations.json"),
    // },
    // ru: {
    //   translations: require("./locales/ru/translations.json"),
    // },
    tm: {
      translations: require("./locales/tm/translations.json"),
    },
  };

  let lan = JSON.parse(localStorage.getItem("data"));
if (lan) {
  lan = lan.lan;
} else {
  lan = "tm";
}

i18n .use(initReactI18next)
// .use(Backend)
.init({
    fallback:'en',
    resources ,
    lng: lan,
    
})
i18n.languages = ["en",  "tm"];
 export default i18n;