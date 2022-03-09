<script lang="tsx">
import usePermission from '@/hooks/permission'
import { routes } from '@/router/routes'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

export default defineComponent({
  props: {
    isCollapse: Boolean
  },
  setup(props) {
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

            const icon = element.meta?.icon && (
              <el-icon>{h(resolveComponent(element.meta?.icon))}</el-icon>
            )

            let r
            if (element.children?.length) {
              r = (
                <el-sub-menu
                  key={element.name}
                  index={element.path}
                  v-slots={{
                    title: () => (
                      <>
                        {icon}
                        <span>{element.meta?.title}</span>
                      </>
                    )
                  }}
                >
                  {travel(element.children)}
                </el-sub-menu>
              )
            } else {
              r = (
                <el-menu-item
                  key={element.name}
                  index={element.name}
                  route={element}
                >
                  {icon}
                  <span>{element.meta?.title}</span>
                </el-menu-item>
              )
            }
            nodes.push(r as never)
          })
        }
        return nodes
      }
      return travel(menuTree.value)
    }

    // active route
    const activeRoute = ref('')
    watch(
      route,
      (newVal) => {
        if (newVal.meta.requiresAuth) {
          const lastLen = newVal.matched.length - 1
          const key = newVal.matched[lastLen].name as string
          activeRoute.value = key
        }
      },
      { immediate: true }
    )

    return () => (
      <el-menu
        default-active={activeRoute.value}
        collapse={props.isCollapse}
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        mode="vertical"
        router
        unique-opened
      >
        {renderSubMenu()}
      </el-menu>
    )
  }
})
</script>
