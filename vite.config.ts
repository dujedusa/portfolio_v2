import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@components/button": path.resolve(__dirname, './src/shared/components/button'),
      "@components/dialog": path.resolve(__dirname, './src/shared/components/dialog'),
      "@components/divider": path.resolve(__dirname, './src/shared/components/divider'),
      "@components/footer": path.resolve(__dirname, './src/shared/components/footer'),
      "@components/header": path.resolve(__dirname, './src/shared/components/header'),
      "@components/icon": path.resolve(__dirname, './src/shared/components/icon'),
      "@components/input": path.resolve(__dirname, './src/shared/components/input'),
      "@components/overlay": path.resolve(__dirname, './src/shared/components/overlay'),
      "@components/spinner": path.resolve(__dirname, './src/shared/components/spinner'),
      "@components/timeline": path.resolve(__dirname, './src/shared/components/timeline'),
      "@components/timeline-item": path.resolve(__dirname, './src/shared/components/timeline/timeline-item'),
      "@components/toast": path.resolve(__dirname, './src/shared/components/toast'),
      "@components/toast-container": path.resolve(__dirname, './src/shared/components/toast/toast-container'),
      "@shared/constants": path.resolve(__dirname, "./src/shared/constants"),
      "@shared/models": path.resolve(__dirname, "./src/shared/models"),
      "@shared/services": path.resolve(__dirname, "./src/shared/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@views/about": path.resolve(__dirname, './src/views/about'),
      "@views/attribution": path.resolve(__dirname, './src/views/attribution'),
      "@views/contact": path.resolve(__dirname, './src/views/contact'),
      "@views/error-page": path.resolve(__dirname, './src/views/error-page'),
      "@views/experience": path.resolve(__dirname, './src/views/experience'),
      "@views/home": path.resolve(__dirname, './src/views/home'),
      "@views/intro": path.resolve(__dirname, './src/views/intro'),
      "@views/technologies": path.resolve(__dirname, './src/views/technologies'),
      "@views/testimonials": path.resolve(__dirname, './src/views/testimonials'),
    },
  },
});
