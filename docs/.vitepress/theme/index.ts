import type { Theme as ThemeConfig } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import DefaultTheme from 'vitepress/theme'

import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:group-icons.css'
import 'uno.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
  },
}

export default Theme
