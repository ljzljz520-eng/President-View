import type { President } from '@/types'

export const mockPresidents: President[] = [
  {
    id: 1,
    name: '乔治·华盛顿',
    termNumber: 1,
    term: '1789-1797',
    termStart: 1789,
    termEnd: 1797,
    party: '无党籍',
    description: '美国第一任总统，被称为"美国国父"。',
    imageUrl: ''
  },
  {
    id: 2,
    name: '约翰·亚当斯',
    termNumber: 2,
    term: '1797-1801',
    termStart: 1797,
    termEnd: 1801,
    party: '联邦党',
    description: '美国第二任总统，曾任副总统。',
    imageUrl: ''
  },
  {
    id: 3,
    name: '托马斯·杰斐逊',
    termNumber: 3,
    term: '1801-1809',
    termStart: 1801,
    termEnd: 1809,
    party: '民主共和党',
    description: '美国第三任总统，《独立宣言》主要起草人。',
    imageUrl: ''
  },
  {
    id: 4,
    name: '詹姆斯·麦迪逊',
    termNumber: 4,
    term: '1809-1817',
    termStart: 1809,
    termEnd: 1817,
    party: '民主共和党',
    description: '美国第四任总统，被称为"宪法之父"。',
    imageUrl: ''
  },
  {
    id: 5,
    name: '詹姆斯·门罗',
    termNumber: 5,
    term: '1817-1825',
    termStart: 1817,
    termEnd: 1825,
    party: '民主共和党',
    description: '美国第五任总统，提出"门罗主义"。',
    imageUrl: ''
  },
  {
    id: 6,
    name: '约翰·昆西·亚当斯',
    termNumber: 6,
    term: '1825-1829',
    termStart: 1825,
    termEnd: 1829,
    party: '民主共和党',
    description: '美国第六任总统，约翰·亚当斯之子。',
    imageUrl: ''
  },
  {
    id: 7,
    name: '安德鲁·杰克逊',
    termNumber: 7,
    term: '1829-1837',
    termStart: 1829,
    termEnd: 1837,
    party: '民主党',
    description: '美国第七任总统，民主党创始人之一。',
    imageUrl: ''
  },
  {
    id: 8,
    name: '马丁·范布伦',
    termNumber: 8,
    term: '1837-1841',
    termStart: 1837,
    termEnd: 1841,
    party: '民主党',
    description: '美国第八任总统。',
    imageUrl: ''
  },
  {
    id: 9,
    name: '威廉·亨利·哈里森',
    termNumber: 9,
    term: '1841',
    termStart: 1841,
    termEnd: 1841,
    party: '辉格党',
    description: '美国第九任总统，就职仅一个月后去世。',
    imageUrl: ''
  },
  {
    id: 10,
    name: '约翰·泰勒',
    termNumber: 10,
    term: '1841-1845',
    termStart: 1841,
    termEnd: 1845,
    party: '辉格党',
    description: '美国第十任总统。',
    imageUrl: ''
  }
]

export const fetchPresidents = (): Promise<President[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPresidents)
    }, 500)
  })
}
