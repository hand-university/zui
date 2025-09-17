<script setup lang="ts">
import type { ButtonEvents, ButtonSlots } from './interface'
import { Button } from 'ant-design-vue'
import { useConfigProvider } from '../../config-provider'
import { buttonProps } from './interface'
import { styles } from './styles'

defineOptions({
  name: 'ZButton',
})
defineProps(buttonProps)
defineEmits<ButtonEvents>()
defineSlots<ButtonSlots>()

const configProvider = useConfigProvider()
</script>

<template>
  <div>
    这里是测试样式用的
    <div :class="styles.jssButton">
      测试按钮 是否为调试模式 {{ configProvider?.debug }}
    </div>
    <Button :type="type" :color="color">
      <slot />
    </Button>
  </div>
</template>
