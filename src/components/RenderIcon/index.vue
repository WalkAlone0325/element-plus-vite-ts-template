<script setup lang="ts">
import { Icon } from '@vicons/utils'

withDefaults(
  defineProps<{
    tag?: string | undefined
    color?: string | undefined
    size?: string | number | undefined
  }>(),
  {
    size: 20,
    color: '#000000',
    tag: 'span'
  }
)
</script>

<template>
  <div>
    <Icon :size="size" :color="color" :tag="tag">
      <slot></slot>
    </Icon>
  </div>
</template>
