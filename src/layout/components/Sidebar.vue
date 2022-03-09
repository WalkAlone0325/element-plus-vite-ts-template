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
    <Logo :is-collapse="isCollapse" />
    <el-scrollbar>
      <Menu
        :is-collapse="isCollapse"
        :style="{ width: isCollapse ? '64px' : '200px' }"
      />
    </el-scrollbar>
  </el-aside>
</template>
