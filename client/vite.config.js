import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Dev proxy: forward API calls to backend server to avoid CORS and 404 from vite
  server: {
    proxy: {
      '/api': {
        // server PORT is configured in server/.env as 3000
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})