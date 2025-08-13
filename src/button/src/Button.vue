<script setup lang="ts">
import type { ButtonType } from 'ant-design-vue/es/button'
import { Button } from 'ant-design-vue'

defineProps<{
  type?: ButtonType
  color?: string
}>()
</script>

<template>
  <div>
    <Button :type="type" :color="color">
      <slot />
    </Button>
  </div>
</template>
