import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  // server: {
  //   port: 3000,
  //   host: true,
  // },
  preview: {
    port: 5173,
    host: '0.0.0.0',
  },
  assetsInclude: ['**/*.xlsx'], // .xlsx 파일 포함
});
