import { defineConfig } from 'vite';
import yaml from '@cicara/vite-plugin-yaml';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    yaml(),
    react(),
  ],
});
