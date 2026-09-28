import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

// Siempre arranca en español para que el HTML pre-renderizado coincida al hidratar.
// El idioma guardado se aplica después, en src/root.jsx.
i18next.use(initReactI18next).init({
    initAsync: false,
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})

export default i18next
