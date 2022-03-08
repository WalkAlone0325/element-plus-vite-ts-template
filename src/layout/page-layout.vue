<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import AppMain from './components/AppMain.vue'

// const settingStore = useSetting()
// const { isCollapse } = storeToRefs(settingStore)

const isCollapse = ref(true)
const isHeaderFixed = ref(false)
</script>

<template>
  <el-container class="layout-container">
    <SideBar :is-collapse="isCollapse" />

    <el-container direction="vertical">
      <el-scrollbar v-if="isHeaderFixed" style="width: 100%">
        <HeaderBar />
        <AppMain />
      </el-scrollbar>

      <template v-else>
        <HeaderBar />
        <AppMain />
      </template>
    </el-container>
  </el-container>
</template>
