import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import compression from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: {
        format: 'webp',
        quality: '80'
      }
    }),
    ViteImageOptimizer({
      webp: {
        quality: 80
      },
      jpg: {
        quality: 80
      },
      png: {
        quality: 80
      }
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 10240,
      deleteOriginalAssets: false
    })
  ],
  base: '/portfolio-web/',
  assetsInclude: ['**/*.md'],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'markdown-vendor': ['react-markdown', 'remark-gfm', 'rehype-slug'],
          'animation-vendor': ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
})
