/** @type {import('@react-router/dev/config').Config} */
export default {
    appDirectory: 'src',
    // Sin servidor: cada ruta se genera como HTML estático en el build
    ssr: false,
    prerender: [
        '/',
        '/que-es-enon',
        '/yoga',
        '/yoga/restaurativo',
        '/mindfulness',
        '/masaje',
        '/mas-actividades',
        '/horarios',
        '/contacto',
        '/normas',
        '/bono-regalo',
        // Se convierte en 404.html en scripts/postbuild.js
        '/404',
    ],
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
