import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  // Carpeta de salida de React Router; la necesita el optimizador para las imágenes de public/
  // (scripts/postbuild.js la mueve después a dist/)
  build: { outDir: 'build/client' },
  plugins: [
    reactRouter(),
    // Comprime las imágenes en el build (también las de public/); los originales no se modifican.
    // Solo en el build del cliente: el de pre-renderizado volvería a comprimir los mismos archivos.
    {
      ...ViteImageOptimizer({
        // Las WebP ya se generan optimizadas; recomprimirlas solo perdería calidad
        test: /\.(jpe?g|png|svg)$/i,
        jpg: { quality: 78, mozjpeg: true },
        jpeg: { quality: 78, mozjpeg: true },
        png: { quality: 80 },
      }),
      applyToEnvironment: environment => environment.name === 'client',
    },
  ],
})
