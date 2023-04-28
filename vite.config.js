import {resolve} from 'path'
import {defineConfig} from 'vite'
import {qrcode} from 'vite-plugin-qrcode'
import fs from 'fs'

// Get all HTML files in the /app folder
const htmlFiles = fs
  .readdirSync('app/')
  .filter((filename) => filename.endsWith('.html'))
  .map((filename) => `app/${filename}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [qrcode()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    publicDir: 'public',
    assetsInclude: ['CNAME'],
    minify: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        ...htmlFiles.reduce(
          (obj, file) => ({
            ...obj,
            [file.replace('app/', '').replace('.html', '')]: resolve(__dirname, file),
          }),
          {},
        ),
      },
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  base: '',
})
