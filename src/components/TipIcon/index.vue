<script setup lang="ts">
import type { Placement } from 'element-plus'

withDefaults(
  defineProps<{
    effect?: string
    placement?: Placement
    content: string
  }>(),
  {
    effect: 'light',
    placement: 'bottom'
  }
)
</script>

<template>
  <el-tooltip :effect="effect" :placement="placement" :content="content">
    <RenderIcon :size="26" class="tip-container">
      <slot></slot>
    </RenderIcon>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.tip-container {
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.025);
  }
}
</style>
