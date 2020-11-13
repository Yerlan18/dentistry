const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
    otherLanguages: ['kz'],
    localeSubpaths,
    localePath: path.resolve('./public/static/locales')
})

/*import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translationEN.json';
import translationKZ from './locales/kz/translationKZ.json';

const resources = {
    en: {
        translation: translationEN
    },
    kz: {
        translation: translationKZ
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',

        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;*/
