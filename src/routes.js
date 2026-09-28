import { layout, index, route } from '@react-router/dev/routes'

import { LANGUAGES, DEFAULT_LANGUAGE, PAGES, routeId } from './site.js'

// Cada página existe una vez por idioma: /yoga/ y /en/yoga/
const pageRoutes = LANGUAGES.flatMap(lang => {
    const prefix = lang === DEFAULT_LANGUAGE ? '' : `${lang}/`
    return [
        ...PAGES.map(({ key, file, paths }) => {
            const id = routeId(lang, key)
            if (lang === DEFAULT_LANGUAGE && paths[lang] === '') {
                return index(file, { id })
            }
            return route(`${prefix}${paths[lang]}`, file, { id })
        }),
        route(`${prefix}*`, 'pages/NoMatch.jsx', { id: routeId(lang, '404') }),
    ]
})

export default [
    layout('layout.jsx', pageRoutes),
]
