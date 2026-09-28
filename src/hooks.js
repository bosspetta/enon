import { useCallback } from 'react'
import { useLocation, useMatches } from 'react-router'

import { languageFromPathname, pagePath, pageKeyFromRouteId } from './site.js'

export function useLanguage() {
    return languageFromPathname(useLocation().pathname)
}

// Devuelve una función para obtener la URL de una página en el idioma actual
export function usePagePath() {
    const lang = useLanguage()
    return useCallback(key => pagePath(key, lang), [lang])
}

// Clave de la página actual ("yoga", "masaje"...) o null en la 404
export function useCurrentPageKey() {
    const matches = useMatches()
    return pageKeyFromRouteId(matches[matches.length - 1].id)
}
