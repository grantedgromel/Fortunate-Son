import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The always-loaded core (react-simple-maps + d3-geo + topojson + the
    // 74-entry conflict dataset) sits just over Vite's default 500 KB warn.
    // Splitting the map further would only delay first paint.
    chunkSizeWarningLimit: 700,
  },
})
