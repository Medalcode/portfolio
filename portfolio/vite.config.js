// filepath: /C:/Users/forge/Documents/GitHub/portfolio/portfolio/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Asegúrate de que esta ruta coincida con el nombre de tu repositorio
  plugins: [react()],
});