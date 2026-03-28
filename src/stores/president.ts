import { defineStore } from 'pinia'
import type { President } from '@/types'

export const usePresidentStore = defineStore('president', {
  state: () => ({
    presidents: [] as President[],
    loading: false
  }),
  
  getters: {
    getPresidentById: (state) => (id: number) => {
      return state.presidents.find(p => p.id === id)
    }
  },
  
  actions: {
    async fetchPresidents() {
      this.loading = true
      // 这里可以替换为真实API调用
      const response = await fetch('/api/presidents')
      const data = await response.json()
      this.presidents = data
      this.loading = false
    }
  }
})
