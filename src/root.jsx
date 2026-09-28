import { useEffect, useLayoutEffect } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useMatches } from 'react-router'
import PropTypes from 'prop-types'

import i18next from './i18n'

// Clases de <body> que usa el CSS para el fondo de cada página
const PAGE_CLASSES = [
    'home-page',
    'enon-page',
    'yoga-page',
    'yoga-restaurativo-page',
    'mindfulness-page',
    'chiromassage-page',
    'external-page',
    'contact-page',
    'schedules-page',
    'rules-page',
    'bono-regalo',
    'no-found-page',
]

// Las antiguas URLs con almohadilla (/#/yoga) redirigen a la URL limpia (/yoga/)
const hashRedirectScript = `(function(){var h=location.hash;if(h.indexOf('#/')!==0)return;var p=h.slice(1).split('?');if(p[0].slice(-1)!=='/')p[0]+='/';location.replace(p.join('?'))})()`

function usePageClasses() {
    const matches = useMatches()
    const match = matches.findLast(m => m.handle?.bodyClass)
    return match ? match.handle.bodyClass.split(' ') : []
}

// Aplica la clase de la página y el modo oscuro antes de pintar, evitando parpadeos
function bodyScript(classes) {
    return `(function(){var b=document.body;b.classList.add(${classes.map(c => JSON.stringify(c)).join(',')});try{if(localStorage.getItem('darkMode')==='enabled')b.classList.add('dark-mode')}catch(e){}})()`
}

const useIsomorphicLayoutEffect = typeof document === 'undefined' ? useEffect : useLayoutEffect

export function Layout({ children }) {
    const pageClasses = usePageClasses()

    useIsomorphicLayoutEffect(() => {
        document.body.classList.remove(...PAGE_CLASSES)
        document.body.classList.add(...pageClasses)
    }, [pageClasses.join(' ')])

    return (
        <html lang="es-ES">
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/enon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="title" content="Masaje - Yoga - Sevilla | enON" />
                <meta name="description" content="enON es un estudio de Masaje y Yoga situado en el centro de Sevilla. Espacializado en masaje de relajación, quiromasaje, Hatha Yoga o Yoga Restaurativo." />
                <meta name="description" content="enON is a massage and yoga studio located in the centre of Seville. Specialised in relaxation massage, chiromassage, Hatha Yoga or Restorative Yoga." lang="en-US" />
                <meta name="keywords" content="masaje, masaje relajante, relax, masaje relax, quiromasaje, chiromassage, relajante, relajación, massage, relax, relaxing massage, relaxation, sevilla, yoga, hatha yoga" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="Spanish" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://enon.yoga/" />
                <meta property="og:title" content="Masaje - Yoga - Sevilla | enON" />
                <meta property="og:description" content="enON es un estudio de Masaje y Yoga situado en el centro de Sevilla. Espacializado en masaje de relajación, quiromasaje, Hatha Yoga o Yoga Restaurativo." />
                <meta property="og:description" content="enON is a massage and yoga studio located in the centre of Seville. Specialised in relaxation massage, chiromassage, Hatha Yoga or Restorative Yoga." lang="en-US" />
                <meta property="og:image" content="https://enon.yoga/yoga-enon.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://enon.yoga/" />
                <meta property="twitter:title" content="Masaje - Yoga - Sevilla | enON" />
                <meta property="twitter:description" content="enON es un estudio de Masaje y Yoga situado en el centro de Sevilla. Espacializado en masaje de relajación, quiromasaje, Hatha Yoga o Yoga Restaurativo." />
                <meta property="twitter:description" content="enON is a massage and yoga studio located in the centre of Seville. Specialised in relaxation massage, chiromassage, Hatha Yoga or Restorative Yoga." lang="en-US" />
                <meta property="twitter:image" content="https://enon.yoga/yoga-enon.png" />

                <script dangerouslySetInnerHTML={{ __html: hashRedirectScript }} />
                <link rel="stylesheet" href="/css/main.css" />
                <title>Masaje - Yoga - Sevilla | enON</title>
                <Meta />
                <Links />
            </head>
            <body>
                <script dangerouslySetInnerHTML={{ __html: bodyScript(pageClasses) }} />
                <div id="root">{children}</div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default function App() {
    // Aplica el idioma guardado por el usuario una vez hidratada la página
    useEffect(() => {
        let savedLanguage = null
        try {
            savedLanguage = localStorage.getItem('language')
        } catch (e) {
            // localStorage no disponible
        }
        if (savedLanguage && savedLanguage !== i18next.language) {
            document.documentElement.setAttribute('lang', savedLanguage)
            i18next.changeLanguage(savedLanguage)
        }
    }, [])

    return <Outlet />
}
