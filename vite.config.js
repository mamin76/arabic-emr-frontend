import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// إعداد Vite لدعم اللغة العربية
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
