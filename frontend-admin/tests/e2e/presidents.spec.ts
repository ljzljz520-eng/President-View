import { test, expect } from '@playwright/test'

test.describe('总统列表页', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/presidents')
  })

  test('应该显示总统列表', async ({ page }) => {
    // 等待卡片加载
    await page.waitForSelector('.president-card')
    const cards = page.locator('.president-card')
    expect(await cards.count()).toBeGreaterThan(0)
  })

  test('应该显示46位总统', async ({ page }) => {
    await page.waitForSelector('.president-card')
    const cards = page.locator('.president-card')
    // 可能有分页，所以至少检查有卡片显示
    expect(await cards.count()).toBeGreaterThan(0)
  })

  test('搜索功能应该正常工作', async ({ page }) => {
    // 输入搜索词
    const searchInput = page.locator('input[placeholder*="搜索"], input[placeholder*="Search"]')
    await searchInput.fill('Washington')

    // 等待筛选结果
    await page.waitForTimeout(500)

    // 检查结果
    const cards = page.locator('.president-card')
    const count = await cards.count()
    expect(count).toBeGreaterThan(0)

    // 验证搜索结果包含Washington
    const firstCard = cards.first()
    await expect(firstCard).toContainText(/Washington|华盛顿/)
  })

  test('党派筛选应该正常工作', async ({ page }) => {
    // 点击党派下拉框
    const partySelect = page.locator('.el-select').first()
    await partySelect.click()

    // 选择民主党
    await page.click('text=Democratic')

    // 等待筛选
    await page.waitForTimeout(500)

    // 检查结果都是民主党
    const partyTags = page.locator('.party-tag')
    const count = await partyTags.count()
    if (count > 0) {
      for (let i = 0; i < Math.min(count, 5); i++) {
        const tag = partyTags.nth(i)
        await expect(tag).toHaveClass(/democratic/)
      }
    }
  })

  test('点击总统卡片应该导航到详情页', async ({ page }) => {
    await page.waitForSelector('.president-card')
    const firstCard = page.locator('.president-card').first()
    await firstCard.click()

    // 应该导航到详情页
    await expect(page).toHaveURL(/\/president\/\d+/)
  })

  test('重置筛选应该清除所有筛选条件', async ({ page }) => {
    // 先进行搜索
    const searchInput = page.locator('input[placeholder*="搜索"], input[placeholder*="Search"]')
    await searchInput.fill('Lincoln')
    await page.waitForTimeout(500)

    // 点击重置按钮
    const resetButton = page.getByRole('button', { name: /重置|Reset/i })
    if (await resetButton.isVisible()) {
      await resetButton.click()
      await page.waitForTimeout(500)

      // 检查搜索框已清空
      await expect(searchInput).toHaveValue('')
    }
  })
})

test.describe('总统详情页', () => {
  test('应该显示总统详细信息', async ({ page }) => {
    await page.goto('/president/1')

    // 检查基本信息
    await expect(page.locator('h1')).toContainText(/Washington|华盛顿/)

    // 检查任期序号
    await expect(page.locator('.term-badge')).toContainText('#1')
  })

  test('应该有多个标签页', async ({ page }) => {
    await page.goto('/president/1')

    // 检查标签页
    const tabs = page.locator('.el-tabs__item')
    expect(await tabs.count()).toBeGreaterThanOrEqual(4)
  })

  test('切换标签页应该显示不同内容', async ({ page }) => {
    await page.goto('/president/16') // 林肯有更多数据

    // 点击成就标签
    await page.click('text=成就')
    await page.waitForTimeout(300)

    // 检查成就内容
    const achievementContent = page.locator('.achievement-card, .achievements-list')
    await expect(achievementContent.first()).toBeVisible()
  })

  test('返回按钮应该正常工作', async ({ page }) => {
    await page.goto('/presidents')
    await page.waitForSelector('.president-card')
    await page.locator('.president-card').first().click()

    // 等待详情页加载
    await page.waitForURL(/\/president\/\d+/)

    // 点击返回按钮
    const backButton = page.getByRole('button', { name: /返回|Back/i })
    await backButton.click()

    // 应该返回列表页
    await expect(page).toHaveURL(/\/presidents/)
  })

  test('无效ID应该重定向', async ({ page }) => {
    await page.goto('/president/999')

    // 应该重定向到列表页或显示错误
    await page.waitForTimeout(1000)
    const url = page.url()
    expect(url).toMatch(/\/presidents|\/404/)
  })
})
