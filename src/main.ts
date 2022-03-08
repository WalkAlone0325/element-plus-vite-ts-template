import App from './App.vue'

// global css
import '@/styles/index.scss'

import { router, setupRouter, setupRouterGuard } from '@/router'
import { setupStore } from '@/store'
import { setupIcons } from '@/components/RenderIcon'

function bootstrap() {
  const app = createApp(App)

  // icons
  setupIcons(app)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // router guard
  setupRouterGuard(router)

  // mount
  app.mount('#app')
}

bootstrap()
