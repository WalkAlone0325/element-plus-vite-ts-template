<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
const { openSetting } = storeToRefs(appStore)
</script>

<template>
  <el-drawer v-model="openSetting"></el-drawer>
</template>
