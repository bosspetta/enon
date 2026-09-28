import { createInstance } from 'i18next'

import { LANGUAGES } from './site.js'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

const resources = {
    es: {
        global: global_es
    },
    en: {
        global: global_en
    }
}

// Una instancia por idioma: el idioma lo decide la URL (/ o /en/)
const instances = Object.fromEntries(LANGUAGES.map(lang => {
    const instance = createInstance()
    instance.init({
        initAsync: false,
        interpolation: { escapeValue: false },
        lng: lang,
        resources
    })
    return [lang, instance]
}))

export function getI18n(lang) {
    return instances[lang]
}
