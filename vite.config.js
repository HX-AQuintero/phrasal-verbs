import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // The service worker updates itself and takes over on the next visit,
      // so users never get stuck on an old version.
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Phrasal Verbs',
        short_name: 'Phrasal Verbs',
        description:
          'Learn English phrasal verbs: browse, search, listen and practice with flashcards and quizzes.',
        lang: 'en',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#f3f5f7',
        theme_color: '#f3f5f7',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Everything the app needs is bundled, so precache it all.
        globPatterns: ['**/*.{js,css,html,svg,png}'],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
