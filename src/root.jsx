import { useEffect, useLayoutEffect } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useMatches } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import PropTypes from 'prop-types'

import { getI18n } from './i18n'
import StructuredData from './components/StructuredData'
import { useCurrentPageKey, useLanguage } from './hooks'
import { DEFAULT_LANGUAGE, LANGUAGES, SITE_URL, pagePath } from './site'

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

const OG_LOCALES = {
    es: 'es_ES',
    en: 'en_GB',
}

// canonical + hreflang de la página actual en todos los idiomas
function AlternateLinks({ pageKey, lang }) {
    if (!pageKey) {
        return <meta name="robots" content="noindex" />
    }
    return (
        <>
            <link rel="canonical" href={SITE_URL + pagePath(pageKey, lang)} />
            {LANGUAGES.map(l => (
                <link key={l} rel="alternate" hrefLang={l} href={SITE_URL + pagePath(pageKey, l)} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={SITE_URL + pagePath(pageKey, DEFAULT_LANGUAGE)} />
        </>
    )
}

AlternateLinks.propTypes = {
    pageKey: PropTypes.string,
    lang: PropTypes.string.isRequired
}

export function Layout({ children }) {
    const pageClasses = usePageClasses()
    const lang = useLanguage()
    const pageKey = useCurrentPageKey()
    const url = SITE_URL + (pageKey ? pagePath(pageKey, lang) : '/')
    // Título y descripción de cada página: clave "seo" de las traducciones
    const t = getI18n(lang).getFixedT(lang, 'global')
    const title = t(`seo.${pageKey ?? '404'}.title`)
    const description = pageKey ? t(`seo.${pageKey}.description`) : null

    useIsomorphicLayoutEffect(() => {
        document.body.classList.remove(...PAGE_CLASSES)
        document.body.classList.add(...pageClasses)
    }, [pageClasses.join(' ')])

    return (
        <html lang={lang}>
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/enon.svg" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#667764" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>{title}</title>
                {description && <meta name="description" content={description} />}
                <AlternateLinks pageKey={pageKey} lang={lang} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                {description && <meta property="og:description" content={description} />}
                <meta property="og:image" content="https://enon.yoga/yoga-enon.png" />
                <meta property="og:locale" content={OG_LOCALES[lang]} />
                {LANGUAGES.filter(l => l !== lang).map(l => (
                    <meta key={l} property="og:locale:alternate" content={OG_LOCALES[l]} />
                ))}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                {description && <meta name="twitter:description" content={description} />}
                <meta name="twitter:image" content="https://enon.yoga/yoga-enon.png" />

                <StructuredData t={t} lang={lang} pageKey={pageKey} />

                <script dangerouslySetInnerHTML={{ __html: hashRedirectScript }} />
                {/* Fuente: se pide en paralelo con el CSS en lugar de desde un @import dentro de él */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" />
                <link rel="stylesheet" href="/css/main.css" />
                <Meta />
                <Links />
            </head>
            <body>
                <script dangerouslySetInnerHTML={{ __html: bodyScript(pageClasses) }} />
                <I18nextProvider i18n={getI18n(lang)}>
                    <div id="root">{children}</div>
                </I18nextProvider>
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
    return <Outlet />
}
