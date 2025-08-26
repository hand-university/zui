import type { Theme as ThemeConfig } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import DefaultTheme from 'vitepress/theme'
import RainbowAnimationSwitcher from './components/RainbowAnimationSwitcher.vue'
import Layout from './Layout.vue'

import '@shikijs/vitepress-twoslash/style.css'

import './styles/vars.css'
import './styles/rainbow.css'
import './styles/overrides.css'
import 'virtual:group-icons.css'
import 'uno.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('RainbowAnimationSwitcher', RainbowAnimationSwitcher)
    app.use(TwoslashFloatingVue)
  },
}

export default Theme
