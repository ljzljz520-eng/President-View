import { ElMessage, ElNotification } from 'element-plus'
import type { App } from 'vue'
import type { Router } from 'vue-router'
import { createModuleLogger } from './logger'

const log = createModuleLogger('ErrorHandler')

// 错误类型定义
export interface AppError {
  code?: string | number
  message: string
  type?: 'error' | 'warning' | 'info'
  details?: unknown
}

// 错误消息映射
const errorMessages: Record<string, string> = {
  NETWORK_ERROR: '网络连接失败，请检查网络设置',
  TIMEOUT_ERROR: '请求超时，请稍后重试',
  NOT_FOUND: '请求的资源不存在',
  SERVER_ERROR: '服务器错误，请稍后重试',
  UNKNOWN_ERROR: '发生未知错误',
  ROUTE_ERROR: '页面加载失败',
  COMPONENT_ERROR: '组件渲染错误'
}

// 获取错误消息
export const getErrorMessage = (code: string): string => {
  return errorMessages[code] || errorMessages.UNKNOWN_ERROR
}

// 显示错误提示
export const showError = (error: AppError): void => {
  const message = error.message || getErrorMessage(error.code as string)

  if (error.type === 'warning') {
    ElMessage.warning(message)
  } else if (error.type === 'info') {
    ElMessage.info(message)
  } else {
    ElMessage.error(message)
  }
}

// 显示错误通知（用于严重错误）
export const showErrorNotification = (error: AppError): void => {
  ElNotification({
    title: '错误',
    message: error.message || getErrorMessage(error.code as string),
    type: 'error',
    duration: 5000
  })
}

// 全局错误处理器
export const globalErrorHandler = (err: unknown, _instance: unknown, info: string): void => {
  const error = err as Error

  log.error('Vue组件错误', { error: error?.message, info, stack: error?.stack })

  // 避免重复显示错误
  if (error?.message?.includes('Failed to fetch dynamically imported module')) {
    showError({
      code: 'ROUTE_ERROR',
      message: '页面加载失败，请刷新重试'
    })
    return
  }

  showError({
    code: 'COMPONENT_ERROR',
    message: '页面组件出现错误，请刷新重试'
  })
}

// 未捕获的Promise错误处理
export const unhandledRejectionHandler = (event: PromiseRejectionEvent): void => {
  log.error('未捕获的Promise错误', { reason: event.reason })
  event.preventDefault()

  showError({
    code: 'UNKNOWN_ERROR',
    message: '操作失败，请稍后重试'
  })
}

// 路由错误处理
export const setupRouterErrorHandler = (router: Router): void => {
  router.onError((error) => {
    log.error('路由加载错误', { error: error.message, stack: error.stack })

    showError({
      code: 'ROUTE_ERROR',
      message: '页面加载失败，请刷新重试'
    })
  })

  // 路由守卫 - 处理导航错误
  router.beforeEach((to, _from, next) => {
    log.debug('路由导航', { from: _from.path, to: to.path })

    // 验证路由参数
    if (to.name === 'PresidentDetail') {
      const id = Number(to.params.id)
      if (isNaN(id) || id < 1) {
        log.warn('无效的总统ID', { id: to.params.id })
        ElMessage.warning('无效的总统ID')
        next({ name: 'Presidents' })
        return
      }
    }
    next()
  })
}

// 安装全局错误处理
export const setupErrorHandler = (app: App, router: Router): void => {
  log.info('初始化全局错误处理')

  // Vue全局错误处理
  app.config.errorHandler = globalErrorHandler

  // 全局警告处理（开发环境）
  if (import.meta.env.DEV) {
    app.config.warnHandler = (msg, _instance, trace) => {
      log.warn('Vue警告', { msg, trace })
    }
  }

  // 未捕获的Promise错误
  window.addEventListener('unhandledrejection', unhandledRejectionHandler)

  // 全局JS错误
  window.addEventListener('error', (event) => {
    log.error('全局JS错误', { error: event.error?.message, stack: event.error?.stack })
  })

  // 路由错误处理
  setupRouterErrorHandler(router)

  log.info('全局错误处理初始化完成')
}
