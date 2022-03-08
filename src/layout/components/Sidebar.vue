<script setup lang="ts">
import Menu from './Menu.vue'
import Logo from './Logo.vue'

defineProps({
  isCollapse: Boolean
})
</script>

<template>
  <el-aside
    :width="isCollapse ? '64px' : '200px'"
    style="background-color: #545c64"
  >
    <el-scrollbar>
      <Logo :is-collapse="isCollapse" />
      <Menu :is-collapse="isCollapse" />
    </el-scrollbar>
  </el-aside>
</template>
