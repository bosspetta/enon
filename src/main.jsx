import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

import App from './App'

let currentLanguage = ''
if (localStorage.getItem('language')) {
    currentLanguage = localStorage.getItem('language')
} else {
    currentLanguage = 'es'
}
// console.log(currentLanguage)

i18next.init({
    interpolation: { escapeValue: false },
    lng: currentLanguage,
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})

console.log(i18next.language)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
)
