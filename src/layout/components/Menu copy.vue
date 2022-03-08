<script setup lang="tsx">
import usePermission from '@/hooks/permission'
import { routes } from '@/router/routes'
import { useAppStore } from '@/store'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

defineProps<{
  isCollapse: boolean
}>()

const appStore = useAppStore()
const permission = usePermission()
const route = useRoute()
const router = useRouter()

// root
const appRoute = computed(() => {
  return router
    .getRoutes()
    .find((el) => el.name === 'root') as RouteRecordNormalized
})
// menuTree
const menuTree = computed(() => {
  const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children))
  function travel(_routes: RouteRecordRaw[], layer: number) {
    if (!routes) return null
    const collector: any = _routes.map((element) => {
      // no access
      if (!permission.accessRouter(element)) return null

      // leaf node
      if (!element.children) return element

      // associated child node
      const subItem = travel(element.children, layer)
      if (subItem.length) {
        element.children = subItem
        return element
      }
      // the else logic
      if (layer > 1) {
        element.children = subItem
        return element
      }
      return null
    })
    return collector.filter(Boolean)
  }
  return travel(copyRouter, 0)
})

const renderSubMenu = () => {
  function travel(_route: RouteRecordRaw[], nodes = []) {
    if (_route) {
      _route.forEach((element) => {
        if (!permission.accessRouter(element)) return
        const r = (
          <el-sub-menu>
            {element.children?.map((elem) => {
              return (
                <el-menu-item>
                  {elem.meta?.title}
                  {travel(elem.children ?? [])}
                </el-menu-item>
              )
            })}
          </el-sub-menu>
        )
        nodes.push(r as never)
      })
    }
    return nodes
  }
  return travel(menuTree.value)
}
console.log(renderSubMenu())
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
    <!-- {{ renderSubMenu() }} -->
  </el-menu>
</template>
