import App from './App.vue'

// global css
import '@/styles/index.scss'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupIcons } from '@/components/RenderIcon'

function bootstrap() {
  const app = createApp(App)

  setupIcons(app)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // mount
  app.mount('#app')
}

bootstrap()
