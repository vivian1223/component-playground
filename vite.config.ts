import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import postcssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/component-playground/',
  plugins: [react(), svgr()],
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
