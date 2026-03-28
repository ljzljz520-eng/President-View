import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { setupErrorHandler } from './utils/errorHandler'
import { logger } from './utils/logger'
import { config, isDev } from './config/env'

import '@/assets/styles/global.scss'

// 设置页面标题
document.title = config.app.title

logger.info('App', `应用启动中... v${config.app.version}`)
if (isDev) {
  logger.debug('App', '环境配置', config)
}

const app = createApp(App)

// Register Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)

// 设置全局错误处理
setupErrorHandler(app, router)

app.mount('#app')

logger.info('App', '应用启动完成')
