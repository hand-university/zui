<script setup lang="ts">
import type { ButtonType } from 'ant-design-vue/es/button'
import { Button } from 'ant-design-vue'
import { styles } from './styles/jss'

defineProps<{
  type?: ButtonType
  color?: string
}>()
</script>

<template>
  <div>
    <div
      class="zui-button"
      :class="styles.jssButton"
    >
      测试按钮
    </div>
    <Button :type="type" :color="color">
      <slot />
    </Button>
  </div>
</template>
