import type { Styles, StyleSheet } from 'jss'
import { create } from 'jss'
import pluginCamelCase from 'jss-plugin-camel-case'
import pluginDefaultUnit from 'jss-plugin-default-unit'
import pluginExpand from 'jss-plugin-expand'
import pluginExtend from 'jss-plugin-extend'
import pluginGlobal from 'jss-plugin-global'
import pluginNested from 'jss-plugin-nested'
import pluginPropsSort from 'jss-plugin-props-sort'
import pluginRuleValueFunction from 'jss-plugin-rule-value-function'
import preset from 'jss-preset-default'

const jss = create({
  // 插件顺序很重要，会影响最终的样式生成 不要轻易调整顺序
  plugins: [
    pluginNested(),
    pluginCamelCase(),
    pluginExpand(),
    pluginExtend(),
    pluginGlobal(),
    pluginPropsSort(),
    pluginRuleValueFunction(),
    pluginDefaultUnit(),
  ],
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
