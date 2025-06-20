import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: 'dist-ssr',
    rollupOptions: {
      input: './src/entry-server.jsx' // ✅ this is the correct entry for SSR
    }
  },
  ssr: {
    external: ['react', 'react-dom']
  }
});
