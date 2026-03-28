/**
 * 环境变量配置
 * 使用 Vite 的 import.meta.env 获取环境变量
 */

// 应用配置
export const APP_TITLE = import.meta.env.VITE_APP_TITLE || '美国总统信息网站'
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0'
export const APP_ENV = import.meta.env.VITE_APP_ENV || 'development'

// API 配置
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
export const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 10000

// 日志配置
export const LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL || 'INFO'
export const LOG_ENABLED = import.meta.env.VITE_LOG_ENABLED === 'true'

// 功能开关
export const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
export const ENABLE_DEBUG = import.meta.env.VITE_ENABLE_DEBUG === 'true'

// 环境判断
export const isDev = import.meta.env.DEV
export const isProd = import.meta.env.PROD
export const isTest = import.meta.env.MODE === 'test'

// 导出所有配置
export const config = {
  app: {
    title: APP_TITLE,
    version: APP_VERSION,
    env: APP_ENV
  },
  api: {
    baseUrl: API_BASE_URL,
    timeout: API_TIMEOUT
  },
  log: {
    level: LOG_LEVEL,
    enabled: LOG_ENABLED
  },
  features: {
    analytics: ENABLE_ANALYTICS,
    debug: ENABLE_DEBUG
  }
} as const

export default config
