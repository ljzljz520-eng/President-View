export * from './president'

export interface AppState {
  loading: boolean
  error: string | null
}

export interface Pagination {
  page: number
  pageSize: number
  total: number
}

export type Locale = 'en' | 'zh'

export interface NavItem {
  path: string
  name: string
  icon: string
}
