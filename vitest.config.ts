import VueJsx from 'unplugin-vue-jsx/vite'
import Vue from 'unplugin-vue/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx,vue}'],
      exclude: ['**/demos/**'],
    },
  },
})
