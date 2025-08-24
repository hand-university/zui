import type { Plugin } from 'vite'
import { readFileSync, writeFileSync } from 'node:fs'
import { parse } from '@vue/compiler-sfc'

export function DocsPlugin(): Plugin {
  return {
    name: 'vite-plugin-docs',
    configureServer({ watcher }) {
      watcher.on('all', (event, path) => {
        if (path.includes('demos') && path.endsWith('.vue')) {
          const content = readFileSync(path, 'utf-8')
          const parsedSFC = parse(content, { pad: 'space' }).descriptor
          const docsBlock = parsedSFC?.customBlocks.find(b => b.type === 'docs')

          if (docsBlock) {
            const currentMdPath = `${path.split('/').slice(0, -1).join('/')}/index.md`
            const currentMdContent = readFileSync(currentMdPath, 'utf-8')
            const newMdContent = currentMdContent.replace('<!-- DEMO -->', docsBlock.content)
            writeFileSync(currentMdPath, newMdContent)
          }
        }
      })
    },
  }
}
