<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { icons } from '@zui/icons'
import { Empty, message } from 'ant-design-vue'
import { computed, ref } from 'vue'
import { ZIcon } from '..'

const typeOptions = [
  { label: 'Outline', value: 'outline' },
  { label: 'Filled', value: 'filled' },
]

const type = ref('outline')
const search = ref('')

const { copy } = useClipboard()

const iconsList = computed(() => {
  return Object.keys(icons.icons)
})

const iconListFiltered = computed(() => {
  return iconsList.value.filter((icon) => {
    if (search.value) {
      return icon.includes(search.value) && icon.endsWith(`-${type.value}`)
    }

    return icon.endsWith(`-${type.value}`)
  })
})

async function handleCopy(icon: string) {
  await copy(`<ZIcon icon="zui:${icon}" />`)
  message.success('复制成功')
}
</script>

<template>
  <div>
    <div flex="~ gap-3" class="mb-3">
      <a-segmented v-model:value="type" :options="typeOptions" />
      <a-input v-model:value="search" placeholder="在此搜索图标，点击图标可复制代码" />
    </div>
    <div
      v-if="iconListFiltered.length > 0" flex="~ wrap"
      class="select-none text-gray-500"
    >
      <div
        v-for="(icon, key) in iconListFiltered"
        :key="`${key}`"
        flex="~ col items-center justify-center"
        class="m-2 hover:text-#165DFF transition-colors duration-300 cursor-pointer outline-none"
        @click="handleCopy(icon)"
      >
        <a-tooltip :title="icon.replace('-outline', '')">
          <ZIcon :icon="`zui:${icon}`" />
        </a-tooltip>
      </div>
    </div>
    <div v-else pt-10>
      <a-empty description="暂无搜索结果" :image="Empty.PRESENTED_IMAGE_SIMPLE" />
    </div>
  </div>
</template>
