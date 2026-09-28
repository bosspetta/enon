// Configuración central de páginas e idiomas.
// La usan las rutas, el pre-renderizado, el sitemap, los enlaces y las etiquetas hreflang.

export const SITE_URL = 'https://enon.yoga'

export const LANGUAGES = ['es', 'en']
export const DEFAULT_LANGUAGE = 'es'

// label: clave de traducción del nombre de la página (menú y migas de pan)
// parent: página superior en las migas de pan (por defecto, la portada)
// paths: ruta de cada página por idioma (sin barra inicial ni final; '' es la portada)
export const PAGES = [
    { key: 'home', label: 'main-menu.inicio', file: 'pages/Home.jsx', paths: { es: '', en: '' } },
    { key: 'enon', label: 'main-menu.que-es', file: 'pages/QueEsEnon.jsx', paths: { es: 'que-es-enon', en: 'about-enon' } },
    { key: 'yoga', label: 'main-menu.yoga', file: 'pages/Yoga.jsx', paths: { es: 'yoga', en: 'yoga' } },
    { key: 'yoga-restaurativo', label: 'main-menu.restaurativo', parent: 'yoga', file: 'pages/YogaRestaurativo.jsx', paths: { es: 'yoga/restaurativo', en: 'yoga/restorative' } },
    { key: 'mindfulness', label: 'main-menu.mindfulness', file: 'pages/Mindfulness.jsx', paths: { es: 'mindfulness', en: 'mindfulness' } },
    { key: 'masaje', label: 'main-menu.quiromasaje', file: 'pages/Quiromasaje.jsx', paths: { es: 'masaje', en: 'massage' } },
    { key: 'actividades', label: 'main-menu.actividades', file: 'pages/External.jsx', paths: { es: 'mas-actividades', en: 'activities' } },
    { key: 'horarios', label: 'main-menu.horarios', file: 'pages/SchedulesPrices.jsx', paths: { es: 'horarios', en: 'schedule-prices' } },
    { key: 'contacto', label: 'main-menu.contacto', file: 'pages/Contacto.jsx', paths: { es: 'contacto', en: 'contact' } },
    { key: 'normas', label: 'main-menu.politicas', file: 'pages/Normas.jsx', paths: { es: 'normas', en: 'rules' } },
    { key: 'bono-regalo', label: 'main-menu.bono-regalo', file: 'pages/BonoRegalo.jsx', paths: { es: 'bono-regalo', en: 'gift-card' } },
]

// URL pública de una página: /yoga/, /en/yoga/, /, /en/
export function pagePath(key, lang) {
    const page = PAGES.find(p => p.key === key)
    const prefix = lang === DEFAULT_LANGUAGE ? '' : `/${lang}`
    const path = page.paths[lang]
    return path ? `${prefix}/${path}/` : `${prefix}/`
}

export function languageFromPathname(pathname) {
    const first = pathname.split('/')[1]
    return LANGUAGES.includes(first) && first !== DEFAULT_LANGUAGE ? first : DEFAULT_LANGUAGE
}

// Los ids de ruta tienen la forma "es:yoga" / "en:yoga"
export function routeId(lang, key) {
    return `${lang}:${key}`
}

export function pageKeyFromRouteId(id) {
    const [lang, key] = id.split(':')
    return LANGUAGES.includes(lang) && PAGES.some(p => p.key === key) ? key : null
}
