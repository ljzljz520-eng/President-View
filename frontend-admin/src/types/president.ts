export interface President {
  id: number
  name: string
  nameZh: string
  birthDate: string
  deathDate: string | null
  birthPlace: string
  party: string
  partyZh: string
  termStart: string
  termEnd: string
  termNumber: number
  vicePresident: string
  portrait: string
  biography: string
  biographyZh: string
  achievements: Achievement[]
  keyEvents: KeyEvent[]
  relations: Relation[]
  media: Media[]
}

export interface Achievement {
  id: number
  title: string
  titleZh: string
  description: string
  descriptionZh: string
  year: number
}

export interface KeyEvent {
  id: number
  title: string
  titleZh: string
  date: string
  description: string
  descriptionZh: string
  type: 'political' | 'economic' | 'social' | 'foreign' | 'military'
}

export interface Relation {
  id: number
  targetId: number
  targetName: string
  relationType: 'predecessor' | 'successor' | 'ally' | 'opponent' | 'family' | 'mentor'
  description: string
  descriptionZh: string
}

export interface Media {
  id: number
  type: 'image' | 'video'
  url: string
  thumbnail: string
  title: string
  titleZh: string
  description: string
  descriptionZh: string
}

export interface TimelineItem {
  id: number
  presidentId: number
  presidentName: string
  year: number
  title: string
  titleZh: string
  description: string
  descriptionZh: string
  type: 'inauguration' | 'event' | 'achievement' | 'end'
}

export interface MindMapNode {
  id: string
  name: string
  nameZh: string
  category: number
  symbolSize: number
  x?: number
  y?: number
}

export interface MindMapLink {
  source: string
  target: string
  label: string
  labelZh: string
}

export interface FilterOptions {
  search: string
  party: string
  century: string
  sortBy: 'termNumber' | 'name' | 'birthDate'
  sortOrder: 'asc' | 'desc'
}
