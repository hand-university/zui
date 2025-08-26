import type { Plugin } from 'vite'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'

export function DocsPlugin(): Plugin {
  return {
    name: 'vite-plugin-docs',
    configureServer({ watcher }) {
      watcher.on('all', (event, path) => {
        if (event !== 'add' && event !== 'unlink')
          return

        if (!path.match(/demos\/.*\.vue$/)) {
          return
        }

        const demosDir = path.split('/').slice(0, -1).join('/')
        const currentMdPath = `${demosDir}/index.md`

        if (!existsSync(currentMdPath)) {
          return
        }

        const currentMdContent = readFileSync(currentMdPath, 'utf-8')

        const allDemos = readdirSync(demosDir, { withFileTypes: true })
        const demoFiles = allDemos.filter(demo => demo.isFile() && demo.name.endsWith('.vue'))

        const allDemosContent = demoFiles.map((demo) => {
          const demoPath = `${demosDir.split('/').slice(-2).join('/')}/${demo.name}`
          const demoContent = `<demo vue="${demoPath}" />`
          return demoContent
        }).join('\n')

        const newMdContent = currentMdContent.replace(/<!-- DEMO -->[\s\S]*<!-- DEMO -->/, `<!-- DEMO -->\n\n${allDemosContent}\n\n<!-- DEMO -->`)
        writeFileSync(currentMdPath, newMdContent)
      })
    },
  }
}
