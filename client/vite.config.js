import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      }
    }
  },
  server: {
    port: 3001
  }
});