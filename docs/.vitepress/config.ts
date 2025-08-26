import type { ComponentResolver } from 'unplugin-vue-components/types'
import type { DefaultTheme } from 'vitepress'
import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { pascalCase } from 'es-toolkit'
import UnoCSS from 'unocss/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'
import { DocsPlugin } from './plugins/vite-plugin-docs'

const title = 'ZUI'
const description = 'A Vue 3 Component Library'

const docsRootDir = path.resolve(__dirname, '../../')
const sourceDir = path.resolve(docsRootDir, 'src')

function ZuiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(Z[A-Z]|z-[a-z])/))
        return { name, from: sourceDir }
    },
  }
}

const Docs: DefaultTheme.NavItemWithLink[] = [
  { text: 'Markdown 示例', link: '/docs/markdown-examples' },
  { text: 'API 示例', link: '/docs/api-examples' },
]

function getComponentsList(): DefaultTheme.NavItemWithLink[] {
  const files = readdirSync(sourceDir, { withFileTypes: true })
  const exclude = ['_utils', 'composables']

  const demos = files.map((file) => {
    if (file.isDirectory() && existsSync(`${sourceDir}/${file.name}/demos/index.md`) && !exclude.includes(file.name)) {
      const component = file.name

      return {
        text: `${pascalCase(component)}`,
        link: `/components/${component}`,
      }
    }
    else {
      return undefined
    }
  }).filter(item => !!item)

  return demos
}

const SidebarComponents: DefaultTheme.SidebarItem[] = getComponentsList()

const Nav: DefaultTheme.NavItem[] = [
  { text: '主页', link: '/' },
  {
    text: '组件',
    link: '/components/',
    activeMatch: '^/components/',
  },
  {
    text: '文档',
    items: [
      {
        text: '文档',
        items: Docs,
      },
    ],
    activeMatch: '^/docs/',
  },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Release Notes',
        link: 'https://github.com/hand-university/zui/releases',
      },
      {
        text: 'Contributing',
        link: 'https://github.com/hand-university/.github/blob/main/CONTRIBUTING.md',
      },
      {
        component: 'RainbowAnimationSwitcher',
        props: {
          text: 'Rainbow Animation',
        },
      },
    ],
  },
]

const SidebarDocs: DefaultTheme.SidebarItem[] = [
  {
    text: '文档',
    items: Docs,
  },
]

const SidebarComponentsGroup: DefaultTheme.SidebarItem[] = [
  {
    text: '组件总览',
    link: '/components/',
  },
  {
    text: '基础组件',
    items: SidebarComponents,
  },
  {
    text: '业务组件',
    items: [],
  },
]

export default defineConfig({
  lang: 'zh-Hans',
  title,
  description,
  srcDir: docsRootDir,
  srcExclude: ['playground', 'packages', '**/README.md'],
  rewrites: {
    'docs/index.md': 'index.md',
    'docs/components/index.md': 'components/index.md',
    'src/:component/demos/index.md': 'components/:component.md',
  },
  markdown: {
    codeTransformers: [
      transformerTwoslash(),
    ],
    languages: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    config: (md) => {
      md.use(groupIconMdPlugin)
      md.use(vitepressDemoPlugin, {
        demoDir: sourceDir,
      })
    },
  },
  vite: {
    plugins: [
      Components({
        dirs: [
          'docs/.vitepress/theme/components',
        ],
        dts: 'docs/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
          ZuiResolver(),
        ],
      }),
      UnoCSS(),
      groupIconVitePlugin(),
      DocsPlugin(),
    ],
  },
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: Nav,

    sidebar: {
      '/docs/': SidebarDocs,
      '/components/': SidebarComponentsGroup,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hand-university/zui' },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2015-PRESENT 掌上大学`,
    },

    editLink: {
      pattern: ({ filePath }) => {
        return `https://github.com/hand-university/zui/edit/main/${filePath}`
      },
      text: '在 GitHub 上编辑此页面',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    externalLinkIcon: true,

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '回到首页',
      linkText: '回到首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
})
