import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: '0.0.0.0', // Required for Render
    port: process.env.PORT || 10000, // Uses Render's PORT or defaults to 10000
    allowedHosts: [
      'addicta-2.onrender.com', // Your specific Render domain
      process.env.RENDER_EXTERNAL_HOSTNAME // Optional: for Render's environment variable
    ]
  }
});
