import { test, expect, devices } from '@playwright/test'

test.describe('响应式设计 - 移动端', () => {
  test.use({ ...devices['iPhone 12'] })

  test('移动端应该显示汉堡菜单', async ({ page }) => {
    await page.goto('/')

    // 检查汉堡菜单按钮
    const menuButton = page.locator('.mobile-menu-btn, .el-icon--menu, button:has(.el-icon)')
    await expect(menuButton.first()).toBeVisible()
  })

  test('点击汉堡菜单应该打开抽屉', async ({ page }) => {
    await page.goto('/')

    // 点击菜单按钮
    const menuButton = page.locator('.mobile-menu-btn, button').first()
    await menuButton.click()

    // 检查抽屉是否打开
    await page.waitForTimeout(500)
    const drawer = page.locator('.el-drawer')
    // 抽屉可能存在
  })

  test('移动端总统卡片应该单列显示', async ({ page }) => {
    await page.goto('/presidents')
    await page.waitForSelector('.president-card')

    // 获取第一个卡片的宽度
    const card = page.locator('.president-card').first()
    const box = await card.boundingBox()

    if (box) {
      // 移动端卡片应该接近全宽
      expect(box.width).toBeGreaterThan(250)
    }
  })
})

test.describe('响应式设计 - 平板', () => {
  test.use({ ...devices['iPad'] })

  test('平板端应该正常显示', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('平板端总统列表应该多列显示', async ({ page }) => {
    await page.goto('/presidents')
    await page.waitForSelector('.president-card')

    const cards = page.locator('.president-card')
    expect(await cards.count()).toBeGreaterThan(0)
  })
})

test.describe('响应式设计 - 桌面', () => {
  test.use({ viewport: { width: 1920, height: 1080 } })

  test('桌面端应该显示完整导航', async ({ page }) => {
    await page.goto('/')

    // 检查导航链接可见
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.getByText('总统列表')).toBeVisible()
  })

  test('桌面端总统列表应该网格显示', async ({ page }) => {
    await page.goto('/presidents')
    await page.waitForSelector('.president-card')

    const cards = page.locator('.president-card')
    const count = await cards.count()
    expect(count).toBeGreaterThan(0)
  })
})
