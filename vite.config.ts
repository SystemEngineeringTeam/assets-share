import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { cloudflare } from '@cloudflare/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare(), tsconfigPaths()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src/'),
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/modules" as *;',
      },
    },
  },
});
