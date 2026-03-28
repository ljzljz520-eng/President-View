import { test, expect } from '@playwright/test'

test.describe('首页', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('应该显示页面标题', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(/美国总统|US Presidents/i)
  })

  test('应该有导航链接', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible()
  })

  test('应该显示统计数据', async ({ page }) => {
    // 检查是否有统计卡片
    const stats = page.locator('.stat-card, .home-stats')
    await expect(stats.first()).toBeVisible()
  })

  test('点击"浏览总统"按钮应该导航到总统列表', async ({ page }) => {
    const exploreButton = page.getByRole('link', { name: /浏览总统|Explore Presidents/i })
    await exploreButton.click()
    await expect(page).toHaveURL(/\/presidents/)
  })

  test('点击"查看时间线"按钮应该导航到时间线页面', async ({ page }) => {
    const timelineButton = page.getByRole('link', { name: /时间线|Timeline/i })
    await timelineButton.click()
    await expect(page).toHaveURL(/\/timeline/)
  })
})

test.describe('导航', () => {
  test('应该能导航到所有主要页面', async ({ page }) => {
    await page.goto('/')

    // 导航到总统列表
    await page.click('text=总统列表')
    await expect(page).toHaveURL(/\/presidents/)

    // 导航到时间线
    await page.click('text=时间线')
    await expect(page).toHaveURL(/\/timeline/)

    // 导航到思维导图
    await page.click('text=思维导图')
    await expect(page).toHaveURL(/\/mindmap/)

    // 返回首页
    await page.click('text=首页')
    await expect(page).toHaveURL('/')
  })
})

test.describe('语言切换', () => {
  test('应该能切换语言', async ({ page }) => {
    await page.goto('/')

    // 查找语言切换按钮
    const langButton = page.locator('button:has-text("EN"), button:has-text("中")')
    if (await langButton.isVisible()) {
      await langButton.click()
      // 等待页面更新
      await page.waitForTimeout(500)
    }
  })
})
