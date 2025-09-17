<script setup lang="ts">
import { ZConfigProvider } from '..'
</script>

<template>
  <div>
    <ZConfigProvider
      :antd-config="{
        theme: {
          token: {
            borderRadius: 4,
            colorBorder: '#E5E6EB',
            colorTextPlaceholder: '#86909C',
            colorPrimary: '#165DFF',
            colorTextBase: '#1D2129',
          },
        },
      }"
      debug
    >
      <ZButton>按钮</ZButton>
    </ZConfigProvider>
  </div>
</template>
