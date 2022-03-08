import App from './App.vue'

// global css
import '@/styles/index.scss'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'

function bootstrap() {
  const app = createApp(App)

  // store
  setupStore(app)

  // router
  setupRouter(app)

  // mount
  app.mount('#app')
}

bootstrap()
