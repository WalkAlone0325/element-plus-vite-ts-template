<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { MenuUnfoldOutlined } from '@vicons/antd'
import avatarImg from '@/assets/images/logo.png'
import RenderIcon from '@/components/RenderIcon/index.vue'

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
      // settingStore.toggleDrawer()
      break

    default:
      break
  }
}
</script>

<template>
  <el-header height="50px">
    <div></div>

    <div class="right-toolbar">
      <div>
        <RenderIcon>
          <MenuUnfoldOutlined />
        </RenderIcon>
      </div>

      <el-dropdown @command="handleClickItem">
        <span class="avatar-link">
          <el-avatar :size="36" :src="avatarImg"></el-avatar>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
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
}
</style>
