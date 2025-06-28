import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],

  server: {
    proxy: {
      "/api": {
        target: "https://vidora-t0tt.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    }
  },
})
