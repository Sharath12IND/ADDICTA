import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 10000, // Explicitly parse as number
    strictPort: true, // Don't try other ports if specified port is unavailable
    allowedHosts: [
      'addicta-2.onrender.com',
      /.onrender\.com$/ // Allow all Render subdomains
    ]
  },
  server: {
    host: '0.0.0.0', // Also configure dev server for consistency
    port: 5173
  }
});
