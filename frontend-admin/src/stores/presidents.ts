import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { President, FilterOptions } from '@/types'
import { presidents as presidentsData } from '@/data'
import { createModuleLogger } from '@/utils/logger'

const log = createModuleLogger('PresidentsStore')

export const usePresidentsStore = defineStore('presidents', () => {
  const presidents = ref<President[]>(presidentsData)
  const loading = ref(false)
  const error = ref<string | null>(null)

  log.info('Store初始化', { count: presidents.value.length })

  const filters = ref<FilterOptions>({
    search: '',
    party: '',
    century: '',
    sortBy: 'termNumber',
    sortOrder: 'asc'
  })

  const filteredPresidents = computed(() => {
    let result = [...presidents.value]

    // Search filter
    if (filters.value.search) {
      const searchLower = filters.value.search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.nameZh.includes(filters.value.search)
      )
    }

    // Party filter
    if (filters.value.party) {
      result = result.filter(p => p.party === filters.value.party)
    }

    // Century filter
    if (filters.value.century) {
      const century = parseInt(filters.value.century)
      result = result.filter(p => {
        const year = new Date(p.termStart).getFullYear()
        const presidentCentury = Math.ceil(year / 100)
        return presidentCentury === century
      })
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0
      switch (filters.value.sortBy) {
        case 'termNumber':
          comparison = a.termNumber - b.termNumber
          break
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'birthDate':
          comparison = new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime()
          break
      }
      return filters.value.sortOrder === 'asc' ? comparison : -comparison
    })

    return result
  })

  const getPresidentById = (id: number): President | undefined => {
    const president = presidents.value.find(p => p.id === id)
    if (!president) {
      log.warn('未找到总统', { id })
    }
    return president
  }

  const setFilters = (newFilters: Partial<FilterOptions>) => {
    log.debug('设置筛选条件', newFilters)
    filters.value = { ...filters.value, ...newFilters }
  }

  const resetFilters = () => {
    log.debug('重置筛选条件')
    filters.value = {
      search: '',
      party: '',
      century: '',
      sortBy: 'termNumber',
      sortOrder: 'asc'
    }
  }

  return {
    presidents,
    loading,
    error,
    filters,
    filteredPresidents,
    getPresidentById,
    setFilters,
    resetFilters
  }
})
