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
    create: (style: Parameters<typeof jss.createStyleSheet>['0'], options?: Parameters<typeof jss.createStyleSheet>['1']) => {
      const res = jss.createStyleSheet(style, options)

      res.attach()

      return res
    },
  }
}
