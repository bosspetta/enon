// Mueve el resultado del build de React Router (build/client) a dist/,
// la carpeta que se copia a docs/ y se sube al servidor.
import { existsSync, renameSync, rmSync, writeFileSync } from 'node:fs'

import { DEFAULT_LANGUAGE, LANGUAGES, PAGES, SITE_URL, pagePath } from '../src/site.js'

rmSync('dist', { recursive: true, force: true })
renameSync('build/client', 'dist')
rmSync('build', { recursive: true, force: true })

// La ruta /404/ pre-renderizada se sirve como página de error (Apache y Netlify)
renameSync('dist/404/index.html', 'dist/404.html')
rmSync('dist/404', { recursive: true, force: true })

// Todas las rutas están pre-renderizadas, el fallback SPA no se usa
if (existsSync('dist/__spa-fallback.html')) {
    rmSync('dist/__spa-fallback.html')
}

// Sitemap con todas las páginas en cada idioma y sus alternativas hreflang
const today = new Date().toISOString().slice(0, 10)
const urls = PAGES.flatMap(page => LANGUAGES.map(lang => {
    const alternates = [
        ...LANGUAGES.map(l => ({ hreflang: l, href: SITE_URL + pagePath(page.key, l) })),
        { hreflang: 'x-default', href: SITE_URL + pagePath(page.key, DEFAULT_LANGUAGE) },
    ]
    return `    <url>
        <loc>${SITE_URL + pagePath(page.key, lang)}</loc>
        <lastmod>${today}</lastmod>
${alternates.map(a => `        <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n')}
    </url>`
}))
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`)

console.log('Build listo en dist/')
