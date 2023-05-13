import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/component-playground/',
  plugins: [react(), svgr({ svgrOptions: { plugins: ['@svgr/plugin-svgo'] } })],
	// plugins: [react(), svgr()],
	build: {
    cssMinify: true,
    cssTarget: 'es2015',
  },
	css: {
  modules: {
    localsConvention: 'camelCase',
  },
},
});
