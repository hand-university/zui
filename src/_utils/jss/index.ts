import type { Styles, StyleSheet } from 'jss'
import { create } from 'jss'
import camelCase from 'jss-plugin-camel-case'
import preset from 'jss-preset-default'

const jss = create({
  plugins: [camelCase()],
  id: {
    minify: import.meta.env.MODE === 'production',
  },
}).setup(preset())

export function useJss() {
  return {
    create: <T extends string>(style: Styles<T>, options?: Parameters<typeof jss.createStyleSheet>['1']) => {
      const res = jss.createStyleSheet(style, options)

      res.attach()

      return res as StyleSheet<T>
    },
  }
}
