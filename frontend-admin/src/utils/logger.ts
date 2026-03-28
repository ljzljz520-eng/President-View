/**
 * 前端日志记录工具
 * 支持多级别日志、格式化输出、日志存储和上报
 */

import { LOG_LEVEL, LOG_ENABLED } from '@/config/env'

// 日志级别
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4
}

// 日志条目接口
export interface LogEntry {
  timestamp: string
  level: string
  module: string
  message: string
  data?: unknown
  stack?: string
}

// 日志配置
interface LoggerConfig {
  level: LogLevel
  enableConsole: boolean
  enableStorage: boolean
  maxStorageEntries: number
  enableRemote: boolean
  remoteUrl?: string
}

// 从环境变量解析日志级别
const parseLogLevel = (level: string): LogLevel => {
  const levelMap: Record<string, LogLevel> = {
    DEBUG: LogLevel.DEBUG,
    INFO: LogLevel.INFO,
    WARN: LogLevel.WARN,
    ERROR: LogLevel.ERROR,
    NONE: LogLevel.NONE
  }
  return levelMap[level.toUpperCase()] ?? LogLevel.INFO
}

// 默认配置 - 从环境变量读取
const defaultConfig: LoggerConfig = {
  level: parseLogLevel(LOG_LEVEL),
  enableConsole: LOG_ENABLED,
  enableStorage: LOG_ENABLED,
  maxStorageEntries: 100,
  enableRemote: false
}

// 日志存储键名
const STORAGE_KEY = 'app_logs'

// 日志级别名称映射
const levelNames: Record<LogLevel, string> = {
  [LogLevel.DEBUG]: 'DEBUG',
  [LogLevel.INFO]: 'INFO',
  [LogLevel.WARN]: 'WARN',
  [LogLevel.ERROR]: 'ERROR',
  [LogLevel.NONE]: 'NONE'
}

// 日志级别颜色映射
const levelColors: Record<LogLevel, string> = {
  [LogLevel.DEBUG]: '#9E9E9E',
  [LogLevel.INFO]: '#2196F3',
  [LogLevel.WARN]: '#FF9800',
  [LogLevel.ERROR]: '#F44336',
  [LogLevel.NONE]: '#000000'
}

class Logger {
  private config: LoggerConfig
  private logs: LogEntry[] = []

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = { ...defaultConfig, ...config }
    this.loadFromStorage()
  }

  // 配置更新
  setConfig(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config }
  }

  // 格式化时间戳
  private formatTimestamp(): string {
    return new Date().toISOString()
  }

  // 创建日志条目
  private createEntry(level: LogLevel, module: string, message: string, data?: unknown): LogEntry {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      level: levelNames[level],
      module,
      message
    }

    if (data !== undefined) {
      entry.data = data
      if (data instanceof Error) {
        entry.stack = data.stack
      }
    }

    return entry
  }

  // 输出到控制台
  private logToConsole(level: LogLevel, entry: LogEntry): void {
    if (!this.config.enableConsole) return

    const color = levelColors[level]
    const prefix = `%c[${entry.level}] [${entry.module}]`
    const style = `color: ${color}; font-weight: bold;`

    switch (level) {
      case LogLevel.DEBUG:
        console.debug(prefix, style, entry.message, entry.data ?? '')
        break
      case LogLevel.INFO:
        console.info(prefix, style, entry.message, entry.data ?? '')
        break
      case LogLevel.WARN:
        console.warn(prefix, style, entry.message, entry.data ?? '')
        break
      case LogLevel.ERROR:
        console.error(prefix, style, entry.message, entry.data ?? '')
        if (entry.stack) console.error(entry.stack)
        break
    }
  }

  // 存储到 localStorage
  private saveToStorage(entry: LogEntry): void {
    if (!this.config.enableStorage) return

    try {
      this.logs.push(entry)

      // 限制存储数量
      if (this.logs.length > this.config.maxStorageEntries) {
        this.logs = this.logs.slice(-this.config.maxStorageEntries)
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.logs))
    } catch (e) {
      console.warn('Failed to save log to storage:', e)
    }
  }

  // 从 localStorage 加载
  private loadFromStorage(): void {
    if (!this.config.enableStorage) return

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        this.logs = JSON.parse(stored)
      }
    } catch (e) {
      console.warn('Failed to load logs from storage:', e)
      this.logs = []
    }
  }

  // 上报到远程服务器
  private async sendToRemote(entry: LogEntry): Promise<void> {
    if (!this.config.enableRemote || !this.config.remoteUrl) return

    try {
      await fetch(this.config.remoteUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
      })
    } catch (e) {
      console.warn('Failed to send log to remote:', e)
    }
  }

  // 核心日志方法
  private log(level: LogLevel, module: string, message: string, data?: unknown): void {
    if (level < this.config.level) return

    const entry = this.createEntry(level, module, message, data)

    this.logToConsole(level, entry)
    this.saveToStorage(entry)

    if (level >= LogLevel.ERROR) {
      this.sendToRemote(entry)
    }
  }

  // 公共日志方法
  debug(module: string, message: string, data?: unknown): void {
    this.log(LogLevel.DEBUG, module, message, data)
  }

  info(module: string, message: string, data?: unknown): void {
    this.log(LogLevel.INFO, module, message, data)
  }

  warn(module: string, message: string, data?: unknown): void {
    this.log(LogLevel.WARN, module, message, data)
  }

  error(module: string, message: string, data?: unknown): void {
    this.log(LogLevel.ERROR, module, message, data)
  }

  // 获取所有日志
  getLogs(): LogEntry[] {
    return [...this.logs]
  }

  // 获取指定级别的日志
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === levelNames[level])
  }

  // 清除日志
  clearLogs(): void {
    this.logs = []
    localStorage.removeItem(STORAGE_KEY)
  }

  // 导出日志为 JSON
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }

  // 下载日志文件
  downloadLogs(): void {
    const blob = new Blob([this.exportLogs()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `app-logs-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }
}

// 创建单例实例
export const logger = new Logger()

// 创建模块专用日志器
export const createModuleLogger = (module: string) => ({
  debug: (message: string, data?: unknown) => logger.debug(module, message, data),
  info: (message: string, data?: unknown) => logger.info(module, message, data),
  warn: (message: string, data?: unknown) => logger.warn(module, message, data),
  error: (message: string, data?: unknown) => logger.error(module, message, data)
})

export default logger
