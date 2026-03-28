import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { logger, createModuleLogger, LogLevel } from '@/utils/logger'

describe('Logger', () => {
  beforeEach(() => {
    // Clear logs before each test
    logger.clearLogs()
    // Mock console methods
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    vi.spyOn(console, 'info').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('基本日志功能', () => {
    it('应该记录debug日志', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.debug('TestModule', 'Debug message')
      const logs = logger.getLogs()
      expect(logs.length).toBe(1)
      expect(logs[0].level).toBe('DEBUG')
      expect(logs[0].module).toBe('TestModule')
      expect(logs[0].message).toBe('Debug message')
    })

    it('应该记录info日志', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.info('TestModule', 'Info message')
      const logs = logger.getLogs()
      expect(logs.length).toBe(1)
      expect(logs[0].level).toBe('INFO')
    })

    it('应该记录warn日志', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.warn('TestModule', 'Warning message')
      const logs = logger.getLogs()
      expect(logs.length).toBe(1)
      expect(logs[0].level).toBe('WARN')
    })

    it('应该记录error日志', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.error('TestModule', 'Error message')
      const logs = logger.getLogs()
      expect(logs.length).toBe(1)
      expect(logs[0].level).toBe('ERROR')
    })
  })

  describe('日志级别过滤', () => {
    it('WARN级别应该过滤DEBUG和INFO', () => {
      logger.setConfig({ level: LogLevel.WARN })
      logger.debug('Test', 'Debug')
      logger.info('Test', 'Info')
      logger.warn('Test', 'Warn')
      logger.error('Test', 'Error')
      const logs = logger.getLogs()
      expect(logs.length).toBe(2)
      expect(logs[0].level).toBe('WARN')
      expect(logs[1].level).toBe('ERROR')
    })

    it('ERROR级别应该只记录ERROR', () => {
      logger.setConfig({ level: LogLevel.ERROR })
      logger.debug('Test', 'Debug')
      logger.info('Test', 'Info')
      logger.warn('Test', 'Warn')
      logger.error('Test', 'Error')
      const logs = logger.getLogs()
      expect(logs.length).toBe(1)
      expect(logs[0].level).toBe('ERROR')
    })
  })

  describe('模块日志器', () => {
    it('createModuleLogger应该创建带模块名的日志器', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      const moduleLog = createModuleLogger('MyModule')
      moduleLog.info('Test message')
      const logs = logger.getLogs()
      expect(logs.length).toBe(1)
      expect(logs[0].module).toBe('MyModule')
    })
  })

  describe('日志管理', () => {
    it('clearLogs应该清除所有日志', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.info('Test', 'Message 1')
      logger.info('Test', 'Message 2')
      expect(logger.getLogs().length).toBe(2)
      logger.clearLogs()
      expect(logger.getLogs().length).toBe(0)
    })

    it('exportLogs应该返回JSON字符串', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.info('Test', 'Message')
      const exported = logger.exportLogs()
      expect(typeof exported).toBe('string')
      const parsed = JSON.parse(exported)
      expect(Array.isArray(parsed)).toBe(true)
    })
  })

  describe('日志数据', () => {
    it('应该记录附加数据', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      const data = { userId: 123, action: 'click' }
      logger.info('Test', 'With data', data)
      const logs = logger.getLogs()
      expect(logs[0].data).toEqual(data)
    })

    it('应该记录时间戳', () => {
      logger.setConfig({ level: LogLevel.DEBUG })
      logger.info('Test', 'Message')
      const logs = logger.getLogs()
      expect(logs[0].timestamp).toBeDefined()
      expect(new Date(logs[0].timestamp).getTime()).toBeLessThanOrEqual(Date.now())
    })
  })
})
