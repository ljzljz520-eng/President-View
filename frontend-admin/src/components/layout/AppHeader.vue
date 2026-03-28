<template>
  <header class="app-header">
    <div class="header-container">
      <router-link to="/" class="logo" aria-label="返回首页">
        <div class="logo-icon">US</div>
        <span class="logo-text">Presidents</span>
      </router-link>

      <nav class="nav-desktop" v-if="!appStore.isMobile" aria-label="主导航">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
        >
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ t(`nav.${item.name}`) }}</span>
        </router-link>
      </nav>

      <div class="header-actions">
        <el-dropdown @command="handleLocaleChange" trigger="click">
          <el-button class="lang-btn" circle aria-label="切换语言">
            <span class="lang-icon">{{ appStore.locale === 'zh' ? '中' : 'EN' }}</span>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="en" :class="{ active: appStore.locale === 'en' }">
                English
              </el-dropdown-item>
              <el-dropdown-item command="zh" :class="{ active: appStore.locale === 'zh' }">
                中文
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-button
          v-if="appStore.isMobile"
          circle
          @click="toggleMobileMenu"
          aria-label="打开菜单"
          class="mobile-menu-btn"
        >
          <el-icon><Menu /></el-icon>
        </el-button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <el-drawer
      v-model="mobileMenuVisible"
      direction="rtl"
      size="280px"
      :show-close="false"
    >
      <template #header>
        <div class="mobile-menu-header">
          <span>{{ t('nav.menu') }}</span>
          <el-button :icon="Close" circle size="small" @click="mobileMenuVisible = false" aria-label="关闭菜单" />
        </div>
      </template>
      <nav class="nav-mobile" aria-label="移动端导航">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link-mobile"
          @click="mobileMenuVisible = false"
        >
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ t(`nav.${item.name}`) }}</span>
        </router-link>
      </nav>
    </el-drawer>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores'
import { House, User, Clock, Share, Menu, Close } from '@element-plus/icons-vue'
import type { Locale } from '@/types'

const { t, locale } = useI18n()
const appStore = useAppStore()

const mobileMenuVisible = ref(false)

const navItems = [
  { path: '/', name: 'home', icon: House },
  { path: '/presidents', name: 'presidents', icon: User },
  { path: '/timeline', name: 'timeline', icon: Clock },
  { path: '/mindmap', name: 'mindmap', icon: Share }
]

const handleLocaleChange = (newLocale: Locale) => {
  locale.value = newLocale
  appStore.setLocale(newLocale)
}

const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value
}
</script>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: $z-sticky;
  background: $bg-header;
  box-shadow: $shadow-md;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: $spacing-md $spacing-lg;
  gap: $spacing-md;
}

.logo {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  text-decoration: none;
  transition: opacity $transition-fast;

  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    background: $text-inverse;
    color: $primary-color;
    border-radius: $radius-md;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
  }

  .logo-text {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $text-inverse;

    @media (max-width: $breakpoint-sm) {
      display: none;
    }
  }
}

.nav-desktop {
  display: flex;
  gap: $spacing-xs;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-sm $spacing-md;
  border-radius: $radius-md;
  color: rgba(255, 255, 255, 0.8);
  font-weight: $font-weight-medium;
  font-size: $font-size-sm;
  text-decoration: none;
  transition: all $transition-fast;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: $text-inverse;
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &.router-link-active {
    background: rgba(255, 255, 255, 0.15);
    color: $text-inverse;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $text-inverse;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .lang-icon {
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
  }
}

.mobile-menu-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $text-inverse;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: $font-weight-semibold;
  color: $text-primary;
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
}

.nav-link-mobile {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-md;
  border-radius: $radius-md;
  color: $text-secondary;
  font-weight: $font-weight-medium;
  text-decoration: none;
  transition: all $transition-fast;

  &:hover {
    background: $bg-hover;
    color: $primary-color;
    text-decoration: none;
  }

  &.router-link-active {
    background: rgba($primary-color, 0.1);
    color: $primary-color;
  }
}

:deep(.el-dropdown-menu__item.active) {
  color: $primary-color;
  font-weight: $font-weight-semibold;
}
</style>
