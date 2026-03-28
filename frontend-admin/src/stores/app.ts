import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Locale } from '@/types'

export const useAppStore = defineStore('app', () => {
  const locale = ref<Locale>((localStorage.getItem('locale') as Locale) || 'zh')
  const isMobile = ref(window.innerWidth < 768)
  const isTablet = ref(window.innerWidth >= 768 && window.innerWidth < 1024)
  const sidebarCollapsed = ref(false)

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  const updateDeviceType = () => {
    isMobile.value = window.innerWidth < 768
    isTablet.value = window.innerWidth >= 768 && window.innerWidth < 1024
  }

  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  // Listen for window resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateDeviceType)
  }

  return {
    locale,
    isMobile,
    isTablet,
    sidebarCollapsed,
    setLocale,
    updateDeviceType,
    toggleSidebar
  }
})
