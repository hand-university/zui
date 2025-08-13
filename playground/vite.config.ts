import VueJsx from 'unplugin-vue-jsx/vite'
import Vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
  ],
})
