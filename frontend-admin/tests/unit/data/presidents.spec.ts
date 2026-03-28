import { describe, it, expect } from 'vitest'
import { mockPresidents, mockParties, mockCenturies } from '../../__mocks__/presidents'

describe('Presidents Data Structure', () => {
  describe('数据结构验证', () => {
    it('每位总统应该有必要的字段', () => {
      mockPresidents.forEach(president => {
        expect(president.id).toBeDefined()
        expect(president.name).toBeDefined()
        expect(president.nameZh).toBeDefined()
        expect(president.birthDate).toBeDefined()
        expect(president.birthPlace).toBeDefined()
        expect(president.party).toBeDefined()
        expect(president.partyZh).toBeDefined()
        expect(president.termStart).toBeDefined()
        expect(president.termEnd).toBeDefined()
        expect(president.termNumber).toBeDefined()
        expect(president.vicePresident).toBeDefined()
        expect(president.portrait).toBeDefined()
        expect(president.biography).toBeDefined()
        expect(president.biographyZh).toBeDefined()
        expect(Array.isArray(president.achievements)).toBe(true)
        expect(Array.isArray(president.keyEvents)).toBe(true)
        expect(Array.isArray(president.relations)).toBe(true)
        expect(Array.isArray(president.media)).toBe(true)
      })
    })

    it('第一任总统应该是华盛顿', () => {
      const first = mockPresidents.find(p => p.termNumber === 1)
      expect(first?.name).toBe('George Washington')
    })
  })

  describe('日期格式', () => {
    it('出生日期应该是有效的日期格式', () => {
      mockPresidents.forEach(president => {
        const date = new Date(president.birthDate)
        expect(date.toString()).not.toBe('Invalid Date')
      })
    })

    it('任期开始日期应该是有效的日期格式', () => {
      mockPresidents.forEach(president => {
        const date = new Date(president.termStart)
        expect(date.toString()).not.toBe('Invalid Date')
      })
    })
  })

  describe('党派数据', () => {
    it('应该有7个党派选项', () => {
      expect(mockParties.length).toBe(7)
    })

    it('每个党派应该有value、label和labelZh', () => {
      mockParties.forEach(party => {
        expect(party.value).toBeDefined()
        expect(party.label).toBeDefined()
        expect(party.labelZh).toBeDefined()
      })
    })
  })

  describe('世纪数据', () => {
    it('应该有5个世纪选项', () => {
      expect(mockCenturies.length).toBe(5)
    })
  })

  describe('特殊总统', () => {
    it('林肯应该有解放奴隶宣言成就', () => {
      const lincoln = mockPresidents.find(p => p.termNumber === 16)
      const hasEmancipation = lincoln?.achievements.some(a =>
        a.title.includes('Emancipation') || a.titleZh.includes('解放')
      )
      expect(hasEmancipation).toBe(true)
    })

    it('肯尼迪应该有遇刺事件', () => {
      const kennedy = mockPresidents.find(p => p.termNumber === 35)
      const hasAssassination = kennedy?.keyEvents.some(e =>
        e.title.includes('Assassination') || e.titleZh.includes('遇刺')
      )
      expect(hasAssassination).toBe(true)
    })
  })

  describe('关系数据', () => {
    it('约翰·亚当斯和约翰·昆西·亚当斯应该有家族关系', () => {
      const johnAdams = mockPresidents.find(p => p.termNumber === 2)
      const jqAdams = mockPresidents.find(p => p.termNumber === 6)

      const hasRelation = johnAdams?.relations.some(r => r.targetId === 6) ||
                         jqAdams?.relations.some(r => r.targetId === 2)
      expect(hasRelation).toBe(true)
    })
  })
})
