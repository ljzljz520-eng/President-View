export interface President {
  id: number
  name: string
  nameEn: string
  term: string
  termStart: number
  termEnd: number
  party: string
  vicePresident: string
  birthDate: string
  deathDate: string
  birthPlace: string
  education: string
  career: string
  achievements: string
  image: string
  description: string
}

export type PartyColor = {
  [key: string]: string
}
