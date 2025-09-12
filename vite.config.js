import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/interactive/',    // très important (nom de ton repo GitHub)
  build: {
    outDir: 'docs'          // 🔑 génère les fichiers buildés dans /docs
  }
})