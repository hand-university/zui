<script setup lang="ts">
import type { ButtonEvents, ButtonSlots } from './interface'
import { Button } from 'ant-design-vue'
import { buttonProps } from './interface'
import { styles } from './styles'

defineOptions({
  name: 'ZButton',
})
defineProps(buttonProps)
defineEmits<ButtonEvents>()
defineSlots<ButtonSlots>()
</script>

<template>
  <div>
    <div :class="styles.jssButton">
      测试按钮
    </div>
    <Button :type="type" :color="color">
      <slot />
    </Button>
  </div>
</template>
