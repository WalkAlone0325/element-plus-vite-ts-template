<script setup lang="tsx">
defineProps({
  isCollapse: Boolean
})
</script>

<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    mode="vertical"
    router
    unique-opened
  >
  </el-menu>
</template>
