import type { ComponentResolver } from 'unplugin-vue-components/types'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueJsx from 'unplugin-vue-jsx/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'

const zuiPath = path.resolve(__dirname, '../src')

function ZuiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(Z[A-Z]|z-[a-z])/))
        return { name, from: zuiPath }
    },
  }
}

export default defineConfig({
  resolve: {
    alias: {
      zui: zuiPath,
    },
  },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue', '.md'],
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    VueJsx({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
        ZuiResolver(),
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],

  optimizeDeps: {
    include: [
      'ant-design-vue',
      'jss',
      'jss-plugin-camel-case',
      'jss-plugin-compose',
      'jss-plugin-default-unit',
      'jss-plugin-expand',
      'jss-plugin-extend',
      'jss-plugin-global',
      'jss-plugin-nested',
      'jss-plugin-props-sort',
      'jss-plugin-rule-value-function',
      'jss-preset-default',
    ],
  },
})
