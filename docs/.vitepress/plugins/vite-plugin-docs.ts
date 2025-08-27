import type { Plugin, ResolvedConfig } from 'vite'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import fg from 'fast-glob'

function generateDemos(demosDir: string) {
  const currentMdPath = `${demosDir}/index.md`

  if (!existsSync(currentMdPath)) {
    return
  }

  const currentMdContent = readFileSync(currentMdPath, 'utf-8')
  const allDemos = fg.sync(`${demosDir}/*.vue`, { objectMode: true })

  const allDemosContent = allDemos.map((demo) => {
    const demoPath = `${demosDir.split('/').slice(-2).join('/')}/${demo.name}`
    const demoContent = `<demo vue="${demoPath}" />`
    return demoContent
  }).join('\n')

  const newMdContent = currentMdContent.replace(/<!-- DEMO -->[\s\S]*<!-- DEMO -->/, `<!-- DEMO -->\n\n${allDemosContent}\n\n<!-- DEMO -->`)
  writeFileSync(currentMdPath, newMdContent)
}

export function DocsPlugin(): Plugin {
  let userConfig: ResolvedConfig | undefined

  return {
    name: 'vite-plugin-docs',
    configResolved(config) {
      userConfig = config
    },
    configureServer({ watcher }) {
      watcher.on('all', (event, path) => {
        if (event !== 'add' && event !== 'unlink')
          return

        if (!path.match(/demos\/.*\.vue$/)) {
          return
        }

        const demosDir = path.split('/').slice(0, -1).join('/')

        generateDemos(demosDir)
      })
    },
    async buildStart() {
      const allDemosDir = fg.sync(`${userConfig?.root}/src/**/demos`, { onlyDirectories: true })
      allDemosDir.forEach((demoDir) => {
        if (existsSync(`${demoDir}/index.md`))
          generateDemos(demoDir)
      })
    },
  }
}
