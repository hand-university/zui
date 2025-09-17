# 图标 Icon

图标集

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

单独安装 `@zui/icons` 包，然后在 `uno.config.ts` 中配置 `presetIcons` 插件，并配置 `collections` 属性。

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

## 图标集

<!-- DEMO -->

<demo vue="icon/demos/basic.vue" />

<!-- DEMO -->

## API

<!-- API -->

### Icon Props

参考 [Iconify Vue](https://iconify.design/docs/icon-components/vue/)
