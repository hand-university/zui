<script setup lang="ts">
import type { ButtonType } from 'ant-design-vue/es/button'
import { Button } from 'ant-design-vue'
import { useStyle } from '../../composables/use-style'
import style from './styles/index.cssr'

defineProps<{
  type?: ButtonType
  color?: string
}>()

useStyle('button', style)
</script>

<template>
  <div>
    <div
      class="zui-button"
      :class="[
        type === 'primary' && 'zui-button--primary',
      ]"
    >
      测试按钮
    </div>
    <Button :type="type" :color="color">
      <slot />
    </Button>
  </div>
</template>
