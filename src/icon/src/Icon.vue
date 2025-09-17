<script setup lang="ts">
import type { IconProps } from './interface'
import { addCollection, Icon } from '@iconify/vue'
import { icons } from '@zui/icons'

defineOptions({
  name: 'ZIcon',
})

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
})
addCollection(icons)
</script>

<template>
  <Icon v-bind="props" :width="size" :height="size" :style="{ outline: 'none' }" />
</template>
