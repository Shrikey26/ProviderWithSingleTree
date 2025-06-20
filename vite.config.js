// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: [react()],
  build: ssrBuild
    ? {
        ssr: true,
        outDir: 'dist-ssr',
        rollupOptions: {
          input: 'src/entry-server.jsx'
        }
      }
    : {
        outDir: 'dist',
        rollupOptions: {
          input: 'index.html'
        }
      }
}));
