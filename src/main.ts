import { VuesticPlugin, useGlobalConfig } from 'vuestic-ui';
import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'


const i18nConfig = {
  locale: 'tw',
  fallbackLocale: 'en',
  messages: {
    // 目前僅支持 英文 及 中文
    en: require('@/i18n/en.json'),
    tw: require('@/i18n/tw.json')
  }
}

const app = createApp(App)
app.use(store)
app.use(router)
if (process.env.VUE_APP_GTM_ENABLED === 'true') {
  const gtmConfig = {
    id: process.env.VUE_APP_GTM_KEY,
    debug: false,
    vueRouter: router,
  }
  app.use(createGtm(gtmConfig))
}
app.use(createI18n(i18nConfig))
app.use(VuesticPlugin, vuesticGlobalConfig)
app.mount('#app')

