import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/santiago-invierte-web/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
