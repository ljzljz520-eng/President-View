import { test, expect } from '@playwright/test'

test.describe('时间线页面', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/timeline')
  })

  test('应该显示时间线标题', async ({ page }) => {
    await expect(page.locator('h1, h2')).toContainText(/时间线|Timeline/i)
  })

  test('应该显示时间线事件', async ({ page }) => {
    // 等待时间线加载
    await page.waitForSelector('.timeline-item, .event-item')
    const items = page.locator('.timeline-item, .event-item')
    expect(await items.count()).toBeGreaterThan(0)
  })

  test('时间线事件应该有日期', async ({ page }) => {
    await page.waitForSelector('.timeline-item, .event-item')
    const dates = page.locator('.event-date, .timeline-date, time')
    expect(await dates.count()).toBeGreaterThan(0)
  })

  test('事件类型筛选应该正常工作', async ({ page }) => {
    // 查找筛选下拉框
    const filterSelect = page.locator('.el-select').first()
    if (await filterSelect.isVisible()) {
      await filterSelect.click()

      // 选择一个事件类型
      const option = page.locator('.el-select-dropdown__item').first()
      if (await option.isVisible()) {
        await option.click()
        await page.waitForTimeout(500)
      }
    }
  })
})

test.describe('思维导图页面', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/mindmap')
  })

  test('应该显示思维导图标题', async ({ page }) => {
    await expect(page.locator('h1, h2')).toContainText(/关系图|Mind Map|Relations/i)
  })

  test('应该显示图表容器', async ({ page }) => {
    // 等待图表加载
    await page.waitForTimeout(1000)
    const chart = page.locator('.relation-graph, canvas, .echarts')
    await expect(chart.first()).toBeVisible()
  })
})

test.describe('404页面', () => {
  test('访问不存在的页面应该显示404', async ({ page }) => {
    await page.goto('/nonexistent-page')

    // 应该显示404内容
    await expect(page.locator('body')).toContainText(/404|Not Found|未找到/i)
  })

  test('404页面应该有返回首页链接', async ({ page }) => {
    await page.goto('/nonexistent-page')

    const homeLink = page.getByRole('link', { name: /首页|Home/i })
    if (await homeLink.isVisible()) {
      await homeLink.click()
      await expect(page).toHaveURL('/')
    }
  })
})
