<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AppMain from './components/AppMain.vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const { isCollapse } = storeToRefs(appStore)

const isHeaderFixed = ref(false)
</script>

<template>
  <el-container class="layout-container">
    <SideBar :is-collapse="isCollapse" />

    <el-container direction="vertical">
      <el-scrollbar v-if="isHeaderFixed" style="width: 100%">
        <NavBar :is-collapse="isCollapse" />
        <AppMain />
      </el-scrollbar>

      <template v-else>
        <NavBar :is-collapse="isCollapse" />
        <AppMain />
      </template>
    </el-container>
  </el-container>
</template>
