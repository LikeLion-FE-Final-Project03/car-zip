import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macro from 'vite-plugin-babel-macros';
import svgr from 'vite-plugin-svgr';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [macro(), reactPlugin(), svgr({ svgrOptions: {} })],
});
