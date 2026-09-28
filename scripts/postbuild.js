// Mueve el resultado del build de React Router (build/client) a dist/,
// la carpeta que se copia a docs/ y se sube al servidor.
import { existsSync, renameSync, rmSync } from 'node:fs'

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

console.log('Build listo en dist/')
