import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  GithubFilled,
  FullscreenExitOutlined,
  FullscreenOutlined,
  ProfileOutlined
} from '@vicons/antd'
import type { App } from 'vue'

const IconsComponent = [
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  GithubFilled,
  FullscreenExitOutlined,
  FullscreenOutlined,
  ProfileOutlined
]

export function setupIcons(app: App<Element>) {
  IconsComponent.forEach((Icon) => {
    app.component(Icon.name, Icon)
  })
}
