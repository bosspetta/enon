import { LANGUAGES, PAGES, pagePath } from './src/site.js'

/** @type {import('@react-router/dev/config').Config} */
export default {
    appDirectory: 'src',
    // Sin servidor: cada ruta se genera como HTML estático en el build
    ssr: false,
    prerender: [
        ...LANGUAGES.flatMap(lang => PAGES.map(page => pagePath(page.key, lang))),
        // Se convierte en 404.html en scripts/postbuild.js
        '/404/',
    ]
        // React Router espera las rutas sin barra final (se generan igualmente como carpeta/index.html)
        .map(path => path === '/' ? path : path.replace(/\/$/, '')),
    routeDiscovery: { mode: 'initial' },
    // Comportamiento de React Router v8 activado para facilitar la actualización
    future: {
        v8_middleware: true,
        v8_splitRouteModules: true,
        v8_viteEnvironmentApi: true,
        v8_passThroughRequests: true,
        v8_trailingSlashAwareDataRequests: true,
    },
}
