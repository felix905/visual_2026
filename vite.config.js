import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: './index.html',
        colegios: './colegios.html',
        familias: './familias.html',
        empresas: './empresas.html',
        recursos: './recursos.html',
        nosotros: './nosotros.html',
        contacto: './contacto.html',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
