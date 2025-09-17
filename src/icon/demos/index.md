# 图标 Icon

图标集由Figma导出，使用Iconify JSON格式。

## 所有图标

<!-- DEMO -->

<demo vue="icon/demos/basic.vue" />

<!-- DEMO -->

## 使用方式

### 通过ZUI组件使用

```vue {2,6}
<script setup lang="ts">
import { ZIcon } from 'zui'
</script>

<template>
  <ZIcon icon="zui:homepage-outline" />
</template>
```

### 通过UnoCSS中使用

安装 `@zui/icons` 包，然后在 `uno.config.ts` 中配置 `presetIcons` 插件，并配置 `collections` 属性。更多配置可以参考 [UnoCSS 文档](https://unocss.dev/presets/icons#collections)。

```ts {2,6-10}
import { icons } from '@zui/icons'
import { presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        zui: icons,
      },
    }),
  ],
})
```

```vue
<div class="i-zui:homepage-outline" />
```

### 通过Iconify Vue使用

安装 `@iconify/vue` 和 `@zui/icons`，然后使用 `addCollection` 方法添加图标集，更多配置可以参考 [Iconify Vue](https://iconify.design/docs/icon-components/vue/)。

```vue
<script setup lang="ts">
import { addCollection, Icon } from '@iconify/vue'
import { icons } from '@zui/icons'

addCollection(icons)
</script>

<template>
  <Icon icon="zui:homepage-outline" />
</template>
```

## API

<!-- API -->

### Icon Props

所有属性参考 [Iconify Vue](https://iconify.design/docs/icon-components/vue/)

| 名称  | 类型     | 默认值      | 说明                                                                        | 版本 |
| ----- | -------- | ----------- | --------------------------------------------------------------------------- | ---- |
| size  | `number` | `24`        | 图标的大小                                                                  | -    |
| color | `string` | `undefined` | 图标的颜色（支持形如 `#FFF`， `#FFFFFF`， `yellow`，`rgb(0, 0, 0)` 的颜色） | -    |
