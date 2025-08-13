import { defineConfig } from 'tsdown'
import VueJsx from 'unplugin-vue-jsx/rolldown'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  entry: ['./src/index.ts'],
  plugins: [
    Vue({ isProduction: true }),
    VueJsx(),
  ],
  unbundle: true,
  exports: true,
  // minify: true,
  platform: 'neutral',
  dts: {
    vue: true,
  },
})
