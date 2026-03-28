import { mockPresidents } from './mockData'
import type { President } from '../types/president'

export const presidentApi = {
  async getAllPresidents(): Promise<President[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockPresidents])
      }, 300)
    })
  },

  async getPresidentById(id: number): Promise<President | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const president = mockPresidents.find(p => p.id === id)
        resolve(president || null)
      }, 200)
    })
  },

  async getPresidentsByParty(party: string): Promise<President[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mockPresidents.filter(p => p.party === party)
        resolve(filtered)
      }, 200)
    })
  },

  async searchPresidents(keyword: string): Promise<President[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lowerKeyword = keyword.toLowerCase()
        const filtered = mockPresidents.filter(p => 
          p.name.toLowerCase().includes(lowerKeyword) ||
          p.nameEn.toLowerCase().includes(lowerKeyword) ||
          p.party.toLowerCase().includes(lowerKeyword)
        )
        resolve(filtered)
      }, 200)
    })
  }
}
