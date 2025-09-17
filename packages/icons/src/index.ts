import { exportJSONPackage, importFromFigma, isEmptyColor, parseColors } from '@iconify/tools'
import c from 'ansis'

(async () => {
  const prefix = 'zui'
  const file = 'QW0alBFbCEy5mzcffebgWP'
  const token = ''

  const cacheDir = `cache/${prefix}`
  const result = await importFromFigma({
    prefix,
    file,
    token,
    cacheDir,

    // Depth of layers tree where icons are located.
    // 2 = page -> icon
    // 3 = page -> frame/group -> icon
    depth: 4,

    // 按pages查找 禁用此方法
    // Function to filter parent layers. Used to avoid scanning pages and nodes
    // that do not contain icons for export.
    filterParentNode: (nodes) => {
      switch (nodes.length) {
        case 1: {
          // Page: 'icon 图标🚧'
          const node = nodes[0]
          return node.name === 'icon 图标'
        }

        // 2: Frame 所有frame 3: COMPONENT_SET 全匹配
        case 2:
        case 3: {
          return true
        }
      }
      return false
    },

    // Check if node is an icon. Returns icon name on success, null on failure.
    iconNameForNode: (node) => {
      if (node.parents.length < 2)
        return null

      // 组件
      if (node.type !== 'COMPONENT' && node.type !== 'INSTANCE') {
        return null
      }

      // 24 * 24
      if (node.width !== 24 || node.height !== 24)
        return null

      if (node.name === 'type=outline' || node.name === 'type=filled') {
        const parent = node.parents.find(parent => parent.type === 'COMPONENT_SET')
        return `${parent?.name}-${node.name.replace('type=', '')}`
      }

      // Return node name as keyword for icon
      return node.name
    },
  })

  // // 'not_modified' can be returned only if 'ifModifiedSince' option was set, so uncomment ifModifiedSince option
  // // and this code, otherwise TypeScript will complain that result cannot be 'not_modified'
  // if (result === 'not_modified') {
  // // This result is possible if ifModifiedSince option is set
  //   console.error('Figma 文档未更新')
  //   return
  // }

  const iconSet = result.iconSet

  iconSet.info = {
    name: 'ZUI Icons',
    author: {
      name: '掌上大学',
    },
    total: iconSet.count(),
    license: {
      title: 'MIT',
      url: '',
    },
    version: '1.0.0',
  }

  iconSet.suffixes = {
    filled: 'Filled',
    outline: 'Outline',
  }

  // 检查图标颜色
  iconSet.forEachSync((name) => {
    const svg = iconSet.toSVG(name)
    if (!svg) {
      return
    }

    parseColors(svg, {
      // Change default color to 'currentColor'
      defaultColor: 'currentColor',
      // Callback to parse each color
      callback: (attr, colorStr, color) => {
        if (!color) {
          // color === null, so color cannot be parsed
          // Return colorStr to keep old value
          return colorStr
        }

        if (isEmptyColor(color)) {
          // Color is empty: 'none' or 'transparent'
          // Return color object to keep old value
          return color
        }
        else {
          return 'currentColor'
        }
      },
    })

    // Update icon in icon set
    iconSet.fromSVG(name, svg)
  })

  console.log(c.green`Done, Found ${c.bold(iconSet.count())} icons`)
  exportJSONPackage(iconSet, {
    target: 'dist',
  })
})()
