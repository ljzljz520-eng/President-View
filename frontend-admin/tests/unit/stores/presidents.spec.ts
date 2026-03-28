import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { President, FilterOptions } from '@/types'
import { mockPresidents } from '../../__mocks__/presidents'

// Create a test store with mock data
const useTestPresidentsStore = defineStore('testPresidents', () => {
  const presidents = ref<President[]>(mockPresidents)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const filters = ref<FilterOptions>({
    search: '',
    party: '',
    century: '',
    sortBy: 'termNumber',
    sortOrder: 'asc'
  })

  const filteredPresidents = computed(() => {
    let result = [...presidents.value]

    if (filters.value.search) {
      const searchLower = filters.value.search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.nameZh.includes(filters.value.search)
      )
    }

    if (filters.value.party) {
      result = result.filter(p => p.party === filters.value.party)
    }

    if (filters.value.century) {
      const century = parseInt(filters.value.century)
      result = result.filter(p => {
        const year = new Date(p.termStart).getFullYear()
        const presidentCentury = Math.ceil(year / 100)
        return presidentCentury === century
      })
    }

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
    return presidents.value.find(p => p.id === id)
  }

  const setFilters = (newFilters: Partial<FilterOptions>) => {
    filters.value = { ...filters.value, ...newFilters }
  }

  const resetFilters = () => {
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

describe('Presidents Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('初始状态', () => {
    it('应该有总统数据', () => {
      const store = useTestPresidentsStore()
      expect(store.presidents.length).toBeGreaterThan(0)
    })

    it('初始筛选条件应该为空', () => {
      const store = useTestPresidentsStore()
      expect(store.filters.search).toBe('')
      expect(store.filters.party).toBe('')
      expect(store.filters.century).toBe('')
    })

    it('初始排序应该按任期序号升序', () => {
      const store = useTestPresidentsStore()
      expect(store.filters.sortBy).toBe('termNumber')
      expect(store.filters.sortOrder).toBe('asc')
    })
  })

  describe('getPresidentById', () => {
    it('应该返回正确的总统', () => {
      const store = useTestPresidentsStore()
      const president = store.getPresidentById(1)
      expect(president).toBeDefined()
      expect(president?.name).toBe('George Washington')
      expect(president?.nameZh).toBe('乔治·华盛顿')
    })

    it('不存在的ID应该返回undefined', () => {
      const store = useTestPresidentsStore()
      const president = store.getPresidentById(999)
      expect(president).toBeUndefined()
    })

    it('应该返回林肯的正确信息', () => {
      const store = useTestPresidentsStore()
      const lincoln = store.getPresidentById(16)
      expect(lincoln?.name).toBe('Abraham Lincoln')
      expect(lincoln?.party).toBe('Republican')
      expect(lincoln?.termNumber).toBe(16)
    })
  })

  describe('筛选功能', () => {
    it('按名字搜索应该正确过滤', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ search: 'Washington' })
      expect(store.filteredPresidents.length).toBe(1)
      expect(store.filteredPresidents[0].name).toBe('George Washington')
    })

    it('按中文名搜索应该正确过滤', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ search: '华盛顿' })
      expect(store.filteredPresidents.length).toBe(1)
      expect(store.filteredPresidents[0].nameZh).toBe('乔治·华盛顿')
    })

    it('按党派筛选应该正确过滤', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ party: 'Democratic' })
      const democraticPresidents = store.filteredPresidents
      expect(democraticPresidents.every(p => p.party === 'Democratic')).toBe(true)
    })
  })

  describe('排序功能', () => {
    it('按任期序号升序排序', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ sortBy: 'termNumber', sortOrder: 'asc' })
      const sorted = store.filteredPresidents
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].termNumber).toBeGreaterThanOrEqual(sorted[i - 1].termNumber)
      }
    })

    it('按任期序号降序排序', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ sortBy: 'termNumber', sortOrder: 'desc' })
      const sorted = store.filteredPresidents
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].termNumber).toBeLessThanOrEqual(sorted[i - 1].termNumber)
      }
    })

    it('按姓名排序', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ sortBy: 'name', sortOrder: 'asc' })
      const sorted = store.filteredPresidents
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].name.localeCompare(sorted[i - 1].name)).toBeGreaterThanOrEqual(0)
      }
    })
  })

  describe('重置筛选', () => {
    it('重置后应该恢复默认状态', () => {
      const store = useTestPresidentsStore()
      store.setFilters({ search: 'test', party: 'Democratic', century: '20' })
      store.resetFilters()
      expect(store.filters.search).toBe('')
      expect(store.filters.party).toBe('')
      expect(store.filters.century).toBe('')
      expect(store.filters.sortBy).toBe('termNumber')
      expect(store.filters.sortOrder).toBe('asc')
    })
  })
})
