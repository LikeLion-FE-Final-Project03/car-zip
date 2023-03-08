import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import macro from 'vite-plugin-babel-macros';


/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [macro(),reactPlugin()],
});
