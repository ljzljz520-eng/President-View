import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { presidentApi } from '../api/presidentApi'
import type { President } from '../types/president'

export const usePresidentStore = defineStore('president', () => {
  const presidents = ref<President[]>([])
  const currentPresident = ref<President | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const allPresidents = computed(() => presidents.value)
  const presidentCount = computed(() => presidents.value.length)

  const partyStats = computed(() => {
    const stats: { [key: string]: number } = {}
    presidents.value.forEach(p => {
      stats[p.party] = (stats[p.party] || 0) + 1
    })
    return stats
  })

  async function fetchAllPresidents() {
    loading.value = true
    error.value = null
    try {
      presidents.value = await presidentApi.getAllPresidents()
    } catch (err) {
      error.value = 'Failed to fetch presidents'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function fetchPresidentById(id: number) {
    loading.value = true
    error.value = null
    try {
      currentPresident.value = await presidentApi.getPresidentById(id)
    } catch (err) {
      error.value = 'Failed to fetch president'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function searchPresidents(keyword: string) {
    loading.value = true
    error.value = null
    try {
      presidents.value = await presidentApi.searchPresidents(keyword)
    } catch (err) {
      error.value = 'Failed to search presidents'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  function clearCurrentPresident() {
    currentPresident.value = null
  }

  return {
    presidents,
    currentPresident,
    loading,
    error,
    allPresidents,
    presidentCount,
    partyStats,
    fetchAllPresidents,
    fetchPresidentById,
    searchPresidents,
    clearCurrentPresident
  }
})
