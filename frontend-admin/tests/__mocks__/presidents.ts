import type { President } from '@/types'

// Test data without image imports
export const mockPresidents: President[] = [
  {
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
    portrait: 'washington.jpg',
    biography: 'First president of the United States.',
    biographyZh: '美国第一任总统。',
    achievements: [
      { id: 1, title: 'First President', titleZh: '首任总统', description: 'First US President', descriptionZh: '首任美国总统', year: 1789 }
    ],
    keyEvents: [],
    relations: [
      { id: 1, targetId: 2, targetName: 'John Adams', relationType: 'successor', description: 'Successor', descriptionZh: '继任者' }
    ],
    media: []
  },
  {
    id: 2,
    name: 'John Adams',
    nameZh: '约翰·亚当斯',
    birthDate: '1735-10-30',
    deathDate: '1826-07-04',
    birthPlace: 'Massachusetts',
    party: 'Federalist',
    partyZh: '联邦党',
    termStart: '1797-03-04',
    termEnd: '1801-03-04',
    termNumber: 2,
    vicePresident: 'Thomas Jefferson',
    portrait: 'adams.jpg',
    biography: 'Second president.',
    biographyZh: '第二任总统。',
    achievements: [],
    keyEvents: [],
    relations: [
      { id: 1, targetId: 6, targetName: 'John Quincy Adams', relationType: 'family', description: 'Father', descriptionZh: '父亲' }
    ],
    media: []
  },
  {
    id: 6,
    name: 'John Quincy Adams',
    nameZh: '约翰·昆西·亚当斯',
    birthDate: '1767-07-11',
    deathDate: '1848-02-23',
    birthPlace: 'Massachusetts',
    party: 'Democratic-Republican',
    partyZh: '民主共和党',
    termStart: '1825-03-04',
    termEnd: '1829-03-04',
    termNumber: 6,
    vicePresident: 'John C. Calhoun',
    portrait: 'jqadams.jpg',
    biography: 'Sixth president, son of John Adams.',
    biographyZh: '第六任总统，约翰·亚当斯之子。',
    achievements: [],
    keyEvents: [],
    relations: [
      { id: 1, targetId: 2, targetName: 'John Adams', relationType: 'family', description: 'Son', descriptionZh: '儿子' }
    ],
    media: []
  },
  {
    id: 16,
    name: 'Abraham Lincoln',
    nameZh: '亚伯拉罕·林肯',
    birthDate: '1809-02-12',
    deathDate: '1865-04-15',
    birthPlace: 'Kentucky',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1861-03-04',
    termEnd: '1865-04-15',
    termNumber: 16,
    vicePresident: 'Andrew Johnson',
    portrait: 'lincoln.jpg',
    biography: '16th president who preserved the Union.',
    biographyZh: '维护联邦统一的第16任总统。',
    achievements: [
      { id: 1, title: 'Emancipation Proclamation', titleZh: '解放奴隶宣言', description: 'Freed slaves', descriptionZh: '解放奴隶', year: 1863 }
    ],
    keyEvents: [
      { id: 1, title: 'Assassination', titleZh: '遇刺', date: '1865-04-14', description: 'Assassinated', descriptionZh: '遇刺身亡', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 35,
    name: 'John F. Kennedy',
    nameZh: '约翰·F·肯尼迪',
    birthDate: '1917-05-29',
    deathDate: '1963-11-22',
    birthPlace: 'Massachusetts',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1961-01-20',
    termEnd: '1963-11-22',
    termNumber: 35,
    vicePresident: 'Lyndon B. Johnson',
    portrait: 'kennedy.jpg',
    biography: '35th president.',
    biographyZh: '第35任总统。',
    achievements: [],
    keyEvents: [
      { id: 1, title: 'Assassination', titleZh: '遇刺', date: '1963-11-22', description: 'Assassinated in Dallas', descriptionZh: '在达拉斯遇刺', type: 'political' }
    ],
    relations: [],
    media: []
  }
]

export const mockParties = [
  { value: '', label: 'All Parties', labelZh: '所有党派' },
  { value: 'Democratic', label: 'Democratic', labelZh: '民主党' },
  { value: 'Republican', label: 'Republican', labelZh: '共和党' },
  { value: 'Democratic-Republican', label: 'Democratic-Republican', labelZh: '民主共和党' },
  { value: 'Federalist', label: 'Federalist', labelZh: '联邦党' },
  { value: 'Whig', label: 'Whig', labelZh: '辉格党' },
  { value: 'Independent', label: 'Independent', labelZh: '无党派' }
]

export const mockCenturies = [
  { value: '', label: 'All Centuries', labelZh: '所有世纪' },
  { value: '18', label: '18th Century', labelZh: '18世纪' },
  { value: '19', label: '19th Century', labelZh: '19世纪' },
  { value: '20', label: '20th Century', labelZh: '20世纪' },
  { value: '21', label: '21st Century', labelZh: '21世纪' }
]
