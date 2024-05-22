import { createI18n } from 'vue-i18n'

// import messages from './locale'
import zhCN from './langs/zh-CN.json'
import enUS from './langs/en-US.json'

const messages = {
  'zh-Hans': zhCN,
  en: enUS
}

const i18n = createI18n({
  locale: 'zh-Hans',
  fallbackLocale: 'zh-Hans',
  messages
  // If you want to use the Composition API mode, you need to set it to false.
  // legacy: false
})

export function setupI18n(app) {
  app.use(i18n)
}
