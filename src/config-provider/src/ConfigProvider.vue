<script setup lang="ts">
import type { ConfigProviderSlots } from './interface'
import { ConfigProvider } from 'ant-design-vue'
import { provide } from 'vue'
import { configProviderInjectionKey } from './context'
import { configProviderProps } from './interface'

defineOptions({
  name: 'ZConfigProvider',
})
const props = defineProps(configProviderProps)
defineSlots<ConfigProviderSlots>()

provide(configProviderInjectionKey, props)
</script>

<template>
  <ConfigProvider v-bind="antdConfig">
    <slot />
  </ConfigProvider>
</template>
