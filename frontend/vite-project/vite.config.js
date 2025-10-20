// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        // ❌ DO NOT rewrite the path – backend expects /api/v1/...
        // rewrite: path => path.replace(/^\/api/, ''), // <-- REMOVE this line
      },
      // Proxy auth endpoints so frontend can call /auth/* without CORS
      '/auth': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
    // use 5175 by default to avoid conflicts with another process on 5174
    port: 5175,
    strictPort: true,
    open: true,
  },
});
