import App from './App'
import router from './router'
import { setupI18n } from './locales'
import propsConfig from './packages/thorui/tui-config/index.js'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

uni.$tui = propsConfig
export function createApp() {
  const app = createSSRApp(App)
  setupI18n(app)
  return {
    app,
    router
  }
}
// #endif
