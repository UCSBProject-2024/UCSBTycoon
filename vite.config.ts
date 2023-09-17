import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-cookie-clicker-game/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
});
