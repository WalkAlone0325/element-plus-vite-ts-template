<script setup lang="ts">
import { MenuFoldOutlined } from '@vicons/antd'
import { Icon } from '@vicons/utils'

withDefaults(
  defineProps<{
    tag?: string | undefined
    color?: string | undefined
    size?: string | number | undefined
  }>(),
  {
    size: 36,
    color: '#000',
    tag: 'span'
  }
)
</script>

<template>
  <Icon :size="size" :color="color" :tag="tag">
    <MenuFoldOutlined />
    <slot></slot>
  </Icon>
</template>
