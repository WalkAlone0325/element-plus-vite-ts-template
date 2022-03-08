<script setup lang="ts">
import avatarImg from '@/assets/images/logo.png'
import RenderIcon from '@/components/RenderIcon/index.vue'
import { useAppStore } from '@/store'
import { useFullscreen } from '@vueuse/core'
import { ElMessage } from 'element-plus'

defineProps<{
  isCollapse: boolean
}>()

const appStore = useAppStore()

// 全屏
const { toggle, isFullscreen, isSupported } = useFullscreen()
const toggleFull = () => {
  if (!isSupported) {
    ElMessage.error('您的浏览器不支持全屏')
  }
  toggle()
}

// 下拉框
interface DropOption {
  id: number
  value: string
  icon?: string
  divided?: boolean
}
const dropOptions = ref<DropOption[]>([
  { id: 1, icon: '', value: '个人中心', divided: false },
  { id: 2, icon: '', value: '全局配置', divided: false },
  { id: 3, icon: '', value: '退出登录', divided: true }
])
const handleClickItem = (dropItem: DropOption) => {
  switch (dropItem.id) {
    case 2:
      appStore.updateSettings({ openSetting: true })
      break

    default:
      break
  }
}
</script>

<template>
  <el-header height="50px">
    <div>
      <RenderIcon
        v-if="isCollapse"
        class="menu-collapse"
        @click="appStore.updateSettings({ isCollapse: false })"
      >
        <MenuUnfoldOutlined />
      </RenderIcon>
      <RenderIcon
        v-else
        class="menu-collapse"
        @click="appStore.updateSettings({ isCollapse: true })"
      >
        <MenuFoldOutlined />
      </RenderIcon>
    </div>

    <div class="right-toolbar">
      <div class="tool-con">
        <tip-icon v-if="!isFullscreen" content="全屏">
          <FullscreenOutlined @click="toggleFull" />
        </tip-icon>
        <tip-icon v-else content="退出全屏">
          <FullscreenExitOutlined @click="toggleFull" />
        </tip-icon>
        <tip-icon content="文档">
          <ProfileOutlined />
        </tip-icon>
        <tip-icon content="GitHub">
          <GithubFilled />
        </tip-icon>
      </div>

      <el-dropdown @command="handleClickItem">
        <span class="avatar-link">
          <el-avatar :size="36" :src="avatarImg"></el-avatar>
          <RenderIcon :size="12" color="#000" style="margin-left: 3px">
            <DownOutlined />
          </RenderIcon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in dropOptions"
              :key="item.id"
              :icon="item.icon"
              :divided="item.divided"
              :command="item"
            >
              {{ item.value }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.menu-collapse {
  cursor: pointer;
  padding: 13px 15px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.025);
  }
}
.avatar-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.right-toolbar {
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  .tool-con {
    display: flex;
    margin-right: 20px;
  }
}
</style>
