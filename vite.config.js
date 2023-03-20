import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macro from 'vite-plugin-babel-macros';
import svgr from 'vite-plugin-svgr';
import htmlEnv from 'vite-plugin-html-env';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    macro(),
    reactPlugin(),
    svgr({
      svgrOptions: {},
    }),
    htmlEnv({
      prefix: '%',
      suffix: '%',
    }),
  ],
});
