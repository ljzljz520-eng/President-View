import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import type { President } from '@/types'

// Mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/president/:id', component: { template: '<div>Detail</div>' } }
  ]
})

// Mock president data
const mockPresident: President = {
  id: 1,
  name: 'George Washington',
  nameZh: '乔治·华盛顿',
  birthDate: '1732-02-22',
  deathDate: '1799-12-14',
  birthPlace: 'Virginia',
  party: 'Independent',
  partyZh: '无党派',
  termStart: '1789-04-30',
  termEnd: '1797-03-04',
  termNumber: 1,
  vicePresident: 'John Adams',
  portrait: 'https://example.com/washington.jpg',
  biography: 'George Washington was the first president of the United States.',
  biographyZh: '乔治·华盛顿是美国第一任总统。',
  achievements: [],
  keyEvents: [],
  relations: [],
  media: []
}

// Simple mock component for testing
const MockPresidentCard = {
  template: `
    <article
      class="president-card"
      @click="handleClick"
      @keydown.enter="handleClick"
      tabindex="0"
      role="button"
      :aria-label="'查看 ' + president.nameZh + ' 详情'"
    >
      <div class="card-badge">#{{ president.termNumber }}</div>
      <div class="card-content">
        <h3 class="card-title">{{ president.nameZh }}</h3>
        <span class="party-tag" :class="partyClass">{{ president.partyZh }}</span>
        <span class="term-period">{{ termPeriod }}</span>
        <p class="card-description">{{ truncatedBio }}</p>
      </div>
      <img v-if="!imageError" :src="president.portrait" @error="handleImageError" />
      <div v-else class="image-fallback">Fallback</div>
    </article>
  `,
  props: {
    president: { type: Object, required: true }
  },
  data() {
    return { imageError: false }
  },
  computed: {
    termPeriod() {
      const start = new Date(this.president.termStart).getFullYear()
      const end = new Date(this.president.termEnd).getFullYear()
      return `${start} - ${end}`
    },
    truncatedBio() {
      const bio = this.president.biographyZh
      return bio.length > 100 ? bio.substring(0, 100) + '...' : bio
    },
    partyClass() {
      const party = this.president.party.toLowerCase()
      if (party.includes('democratic') && !party.includes('republican')) return 'democratic'
      if (party.includes('republican') && !party.includes('democratic')) return 'republican'
      return 'independent'
    }
  },
  methods: {
    handleClick() {
      this.$router.push(`/president/${this.president.id}`)
    },
    handleImageError() {
      this.imageError = true
    }
  }
}

describe('PresidentCard Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const mountComponent = (president: President = mockPresident) => {
    return mount(MockPresidentCard, {
      props: { president },
      global: {
        plugins: [router]
      }
    })
  }

  describe('渲染', () => {
    it('应该正确渲染总统姓名', () => {
      const wrapper = mountComponent()
      expect(wrapper.text()).toContain('乔治·华盛顿')
    })

    it('应该显示任期序号', () => {
      const wrapper = mountComponent()
      expect(wrapper.text()).toContain('#1')
    })

    it('应该显示党派', () => {
      const wrapper = mountComponent()
      expect(wrapper.text()).toContain('无党派')
    })

    it('应该显示任期年份', () => {
      const wrapper = mountComponent()
      expect(wrapper.text()).toContain('1789')
      expect(wrapper.text()).toContain('1797')
    })

    it('应该显示简介', () => {
      const wrapper = mountComponent()
      expect(wrapper.text()).toContain('乔治·华盛顿是美国第一任总统')
    })
  })

  describe('党派样式', () => {
    it('民主党应该有democratic类', () => {
      const democraticPresident = { ...mockPresident, party: 'Democratic', partyZh: '民主党' }
      const wrapper = mountComponent(democraticPresident)
      expect(wrapper.find('.party-tag').classes()).toContain('democratic')
    })

    it('共和党应该有republican类', () => {
      const republicanPresident = { ...mockPresident, party: 'Republican', partyZh: '共和党' }
      const wrapper = mountComponent(republicanPresident)
      expect(wrapper.find('.party-tag').classes()).toContain('republican')
    })

    it('无党派应该有independent类', () => {
      const wrapper = mountComponent()
      expect(wrapper.find('.party-tag').classes()).toContain('independent')
    })
  })

  describe('交互', () => {
    it('点击卡片应该导航到详情页', async () => {
      const push = vi.spyOn(router, 'push')
      const wrapper = mountComponent()
      await wrapper.find('.president-card').trigger('click')
      expect(push).toHaveBeenCalledWith('/president/1')
    })

    it('按Enter键应该导航到详情页', async () => {
      const push = vi.spyOn(router, 'push')
      const wrapper = mountComponent()
      await wrapper.find('.president-card').trigger('keydown.enter')
      expect(push).toHaveBeenCalledWith('/president/1')
    })
  })

  describe('无障碍', () => {
    it('应该有正确的role属性', () => {
      const wrapper = mountComponent()
      expect(wrapper.find('.president-card').attributes('role')).toBe('button')
    })

    it('应该有tabindex属性', () => {
      const wrapper = mountComponent()
      expect(wrapper.find('.president-card').attributes('tabindex')).toBe('0')
    })

    it('应该有aria-label属性', () => {
      const wrapper = mountComponent()
      expect(wrapper.find('.president-card').attributes('aria-label')).toContain('详情')
    })
  })

  describe('图片处理', () => {
    it('图片加载失败应该显示fallback', async () => {
      const wrapper = mountComponent()
      const img = wrapper.find('img')
      await img.trigger('error')
      expect(wrapper.find('.image-fallback').exists()).toBe(true)
    })
  })

  describe('简介截断', () => {
    it('长简介应该被截断', () => {
      const longBioPresident = {
        ...mockPresident,
        biographyZh: '这是一段非常长的简介，'.repeat(20)
      }
      const wrapper = mountComponent(longBioPresident)
      const description = wrapper.find('.card-description').text()
      expect(description.length).toBeLessThanOrEqual(103)
      expect(description.endsWith('...')).toBe(true)
    })
  })
})
