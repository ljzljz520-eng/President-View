import { config } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { beforeEach, vi } from 'vitest'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

// Create i18n instance for tests
const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    zh: {
      common: {
        search: '搜索',
        loading: '加载中...',
        noData: '暂无数据',
        back: '返回'
      },
      nav: {
        home: '首页',
        presidents: '总统列表'
      }
    },
    en: {
      common: {
        search: 'Search',
        loading: 'Loading...',
        noData: 'No data',
        back: 'Back'
      },
      nav: {
        home: 'Home',
        presidents: 'Presidents'
      }
    }
  }
})

// Global plugins configuration
config.global.plugins = [ElementPlus, i18n]

// Register Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  config.global.components[key] = component
}

// Setup Pinia before each test
beforeEach(() => {
  setActivePinia(createPinia())
})
