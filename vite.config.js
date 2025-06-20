import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  ssr: {
    external: ['react', 'react-dom']
  }
});
