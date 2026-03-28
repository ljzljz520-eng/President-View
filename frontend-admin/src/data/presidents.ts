import type { President } from '@/types'

// Import local president images
import washingtonImg from '@/assets/img/presidents/washington.jpg'
import adamsJohnImg from '@/assets/img/presidents/adams-john.jpg'
import jeffersonImg from '@/assets/img/presidents/jefferson.jpg'
import madisonImg from '@/assets/img/presidents/madison.jpg'
import monroeImg from '@/assets/img/presidents/monroe.jpg'
import adamsJohnQuincyImg from '@/assets/img/presidents/adams-john-quincy.webp'
import jacksonImg from '@/assets/img/presidents/jackson.jpg'
import vanburenImg from '@/assets/img/presidents/vanburen-martin.webp'
import harrisonWilliamImg from '@/assets/img/presidents/harrison-william.webp'
import tylerImg from '@/assets/img/presidents/tyler-john.webp'
import polkImg from '@/assets/img/presidents/polk-james.webp'
import taylorImg from '@/assets/img/presidents/taylor-zachary.webp'
import fillmoreImg from '@/assets/img/presidents/fillmore-millard.webp'
import pierceImg from '@/assets/img/presidents/pierce-franklin.webp'
import buchananImg from '@/assets/img/presidents/buchanan-james.jpeg'
import lincolnImg from '@/assets/img/presidents/lincoln.jpg'
import johnsonAndrewImg from '@/assets/img/presidents/johnson-andrew.webp'
import grantImg from '@/assets/img/presidents/grant-ulysses.webp'
import hayesImg from '@/assets/img/presidents/hayes-rutherford.webp'
import garfieldImg from '@/assets/img/presidents/garfield-james.webp'
import arthurImg from '@/assets/img/presidents/arthur-chester.webp'
import clevelandImg from '@/assets/img/presidents/cleveland-grover.webp'
import harrisonBenjaminImg from '@/assets/img/presidents/harrison-benjamin.webp'
import mckinleyImg from '@/assets/img/presidents/mckinley-william.webp'
import rooseveltTheodoreImg from '@/assets/img/presidents/roosevelt-theodore.webp'
import taftImg from '@/assets/img/presidents/taft-william.webp'
import wilsonImg from '@/assets/img/presidents/wilson-woodrow.webp'
import hardingImg from '@/assets/img/presidents/harding-warren.webp'
import coolidgeImg from '@/assets/img/presidents/coolidge-calvin.webp'
import hooverImg from '@/assets/img/presidents/hoover-herbert.webp'
import rooseveltFranklinImg from '@/assets/img/presidents/roosevelt-franklin.jpg'
import trumanImg from '@/assets/img/presidents/truman-harry.webp'
import eisenhowerImg from '@/assets/img/presidents/eisenhower-dwight.webp'
import kennedyImg from '@/assets/img/presidents/kennedy.jpg'
import johnsonLyndonImg from '@/assets/img/presidents/johnson-lyndon.webp'
import nixonImg from '@/assets/img/presidents/nixon-richard.webp'
import fordImg from '@/assets/img/presidents/ford-gerald.webp'
import carterImg from '@/assets/img/presidents/carter-jimmy.webp'
import reaganImg from '@/assets/img/presidents/reagan-ronald.webp'
import bushGeorgeHWImg from '@/assets/img/presidents/bush-george-hw.webp'
import clintonImg from '@/assets/img/presidents/clinton-bill.webp'
import bushGeorgeWImg from '@/assets/img/presidents/bush-george-w.webp'
import obamaImg from '@/assets/img/presidents/obama.jpg'
import trumpImg from '@/assets/img/presidents/trump.jpg'
import bidenImg from '@/assets/img/presidents/biden.jpg'

export const presidents: President[] = [
  {
    id: 1,
    name: 'George Washington',
    nameZh: '乔治·华盛顿',
    birthDate: '1732-02-22',
    deathDate: '1799-12-14',
    birthPlace: 'Westmoreland County, Virginia',
    party: 'Independent',
    partyZh: '无党派',
    termStart: '1789-04-30',
    termEnd: '1797-03-04',
    termNumber: 1,
    vicePresident: 'John Adams',
    portrait: washingtonImg,
    biography: 'George Washington was an American military officer, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797. He led Patriot forces to victory in the American Revolutionary War and presided over the Constitutional Convention of 1787.',
    biographyZh: '乔治·华盛顿是美国军事将领、政治家和开国元勋，于1789年至1797年担任美国第一任总统。他领导爱国者军队在美国独立战争中取得胜利，并主持了1787年的制宪会议。',
    achievements: [
      { id: 1, title: 'First U.S. President', titleZh: '首任美国总统', description: 'Established many precedents for the presidency', descriptionZh: '为总统职位确立了许多先例', year: 1789 },
      { id: 2, title: 'Farewell Address', titleZh: '告别演说', description: 'Warned against political parties and foreign alliances', descriptionZh: '警告反对政党和外国联盟', year: 1796 }
    ],
    keyEvents: [
      { id: 1, title: 'Inauguration', titleZh: '就职典礼', date: '1789-04-30', description: 'First presidential inauguration in New York City', descriptionZh: '在纽约市举行首次总统就职典礼', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 2, targetName: 'John Adams', relationType: 'successor', description: 'Adams served as VP and succeeded Washington', descriptionZh: '亚当斯担任副总统并继任华盛顿' }
    ],
    media: [
      { id: 1, type: 'image', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/220px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg', title: 'Gilbert Stuart Portrait', titleZh: '吉尔伯特·斯图尔特肖像', description: 'The famous unfinished portrait by Gilbert Stuart', descriptionZh: '吉尔伯特·斯图尔特著名的未完成肖像' }
    ]
  },
  {
    id: 2,
    name: 'John Adams',
    nameZh: '约翰·亚当斯',
    birthDate: '1735-10-30',
    deathDate: '1826-07-04',
    birthPlace: 'Braintree, Massachusetts',
    party: 'Federalist',
    partyZh: '联邦党',
    termStart: '1797-03-04',
    termEnd: '1801-03-04',
    termNumber: 2,
    vicePresident: 'Thomas Jefferson',
    portrait: adamsJohnImg,
    biography: 'John Adams was an American statesman, attorney, diplomat, writer, and Founding Father who served as the second president of the United States from 1797 to 1801. He was a leader of the American Revolution and helped negotiate the Treaty of Paris.',
    biographyZh: '约翰·亚当斯是美国政治家、律师、外交官、作家和开国元勋，于1797年至1801年担任美国第二任总统。他是美国革命的领导人之一，并帮助谈判了《巴黎条约》。',
    achievements: [
      { id: 1, title: 'Avoided War with France', titleZh: '避免与法国开战', description: 'Negotiated peace during the Quasi-War', descriptionZh: '在准战争期间谈判和平', year: 1800 }
    ],
    keyEvents: [
      { id: 1, title: 'Alien and Sedition Acts', titleZh: '外侨与煽动叛乱法', date: '1798-07-14', description: 'Controversial laws restricting immigration and speech', descriptionZh: '限制移民和言论的争议性法律', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 1, targetName: 'George Washington', relationType: 'predecessor', description: 'Served as Washington\'s Vice President', descriptionZh: '担任华盛顿的副总统' },
      { id: 2, targetId: 6, targetName: 'John Quincy Adams', relationType: 'family', description: 'Father of John Quincy Adams', descriptionZh: '约翰·昆西·亚当斯之父' }
    ],
    media: []
  },
  {
    id: 3,
    name: 'Thomas Jefferson',
    nameZh: '托马斯·杰斐逊',
    birthDate: '1743-04-13',
    deathDate: '1826-07-04',
    birthPlace: 'Shadwell, Virginia',
    party: 'Democratic-Republican',
    partyZh: '民主共和党',
    termStart: '1801-03-04',
    termEnd: '1809-03-04',
    termNumber: 3,
    vicePresident: 'Aaron Burr, George Clinton',
    portrait: jeffersonImg,
    biography: 'Thomas Jefferson was an American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809. He was the principal author of the Declaration of Independence.',
    biographyZh: '托马斯·杰斐逊是美国政治家、外交官、律师、建筑师、哲学家和开国元勋，于1801年至1809年担任美国第三任总统。他是《独立宣言》的主要起草人。',
    achievements: [
      { id: 1, title: 'Louisiana Purchase', titleZh: '路易斯安那购地', description: 'Doubled the size of the United States', descriptionZh: '使美国领土面积翻倍', year: 1803 },
      { id: 2, title: 'Declaration of Independence', titleZh: '独立宣言', description: 'Primary author of the Declaration', descriptionZh: '独立宣言的主要起草人', year: 1776 }
    ],
    keyEvents: [
      { id: 1, title: 'Lewis and Clark Expedition', titleZh: '刘易斯与克拉克远征', date: '1804-05-14', description: 'Commissioned exploration of the western territories', descriptionZh: '委托探索西部领土', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 2, targetName: 'John Adams', relationType: 'predecessor', description: 'Defeated Adams in the election of 1800', descriptionZh: '在1800年选举中击败亚当斯' },
      { id: 2, targetId: 4, targetName: 'James Madison', relationType: 'ally', description: 'Close friend and political ally', descriptionZh: '亲密朋友和政治盟友' }
    ],
    media: []
  },
  {
    id: 4,
    name: 'James Madison',
    nameZh: '詹姆斯·麦迪逊',
    birthDate: '1751-03-16',
    deathDate: '1836-06-28',
    birthPlace: 'Port Conway, Virginia',
    party: 'Democratic-Republican',
    partyZh: '民主共和党',
    termStart: '1809-03-04',
    termEnd: '1817-03-04',
    termNumber: 4,
    vicePresident: 'George Clinton, Elbridge Gerry',
    portrait: madisonImg,
    biography: 'James Madison was an American statesman, diplomat, and Founding Father who served as the fourth president of the United States from 1809 to 1817. He is hailed as the "Father of the Constitution" for his pivotal role in drafting and promoting the Constitution and the Bill of Rights.',
    biographyZh: '詹姆斯·麦迪逊是美国政治家、外交官和开国元勋，于1809年至1817年担任美国第四任总统。他因在起草和推动宪法及权利法案方面的关键作用而被誉为"宪法之父"。',
    achievements: [
      { id: 1, title: 'Father of the Constitution', titleZh: '宪法之父', description: 'Primary architect of the U.S. Constitution', descriptionZh: '美国宪法的主要设计者', year: 1787 },
      { id: 2, title: 'Bill of Rights', titleZh: '权利法案', description: 'Introduced the Bill of Rights to Congress', descriptionZh: '向国会提出权利法案', year: 1789 }
    ],
    keyEvents: [
      { id: 1, title: 'War of 1812', titleZh: '1812年战争', date: '1812-06-18', description: 'Led the nation through the War of 1812 against Britain', descriptionZh: '领导国家度过与英国的1812年战争', type: 'military' }
    ],
    relations: [
      { id: 1, targetId: 3, targetName: 'Thomas Jefferson', relationType: 'predecessor', description: 'Succeeded Jefferson as president', descriptionZh: '继杰斐逊之后担任总统' }
    ],
    media: []
  },
  {
    id: 5,
    name: 'James Monroe',
    nameZh: '詹姆斯·门罗',
    birthDate: '1758-04-28',
    deathDate: '1831-07-04',
    birthPlace: 'Monroe Hall, Virginia',
    party: 'Democratic-Republican',
    partyZh: '民主共和党',
    termStart: '1817-03-04',
    termEnd: '1825-03-04',
    termNumber: 5,
    vicePresident: 'Daniel D. Tompkins',
    portrait: monroeImg,
    biography: 'James Monroe was an American statesman, lawyer, diplomat, and Founding Father who served as the fifth president of the United States from 1817 to 1825. His presidency was known as the "Era of Good Feelings" and he is best known for the Monroe Doctrine.',
    biographyZh: '詹姆斯·门罗是美国政治家、律师、外交官和开国元勋，于1817年至1825年担任美国第五任总统。他的总统任期被称为"和谐时代"，他最著名的是门罗主义。',
    achievements: [
      { id: 1, title: 'Monroe Doctrine', titleZh: '门罗主义', description: 'Established U.S. foreign policy opposing European colonialism in the Americas', descriptionZh: '确立了反对欧洲在美洲殖民主义的美国外交政策', year: 1823 },
      { id: 2, title: 'Missouri Compromise', titleZh: '密苏里妥协案', description: 'Maintained balance between slave and free states', descriptionZh: '维持了蓄奴州和自由州之间的平衡', year: 1820 }
    ],
    keyEvents: [
      { id: 1, title: 'Era of Good Feelings', titleZh: '和谐时代', date: '1817-03-04', description: 'Period of national unity and political harmony', descriptionZh: '国家统一和政治和谐时期', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 4, targetName: 'James Madison', relationType: 'predecessor', description: 'Succeeded Madison as president', descriptionZh: '继麦迪逊之后担任总统' }
    ],
    media: []
  },
  {
    id: 6,
    name: 'John Quincy Adams',
    nameZh: '约翰·昆西·亚当斯',
    birthDate: '1767-07-11',
    deathDate: '1848-02-23',
    birthPlace: 'Braintree, Massachusetts',
    party: 'Democratic-Republican',
    partyZh: '民主共和党',
    termStart: '1825-03-04',
    termEnd: '1829-03-04',
    termNumber: 6,
    vicePresident: 'John C. Calhoun',
    portrait: adamsJohnQuincyImg,
    biography: 'John Quincy Adams was an American statesman, diplomat, lawyer, and diarist who served as the sixth president of the United States from 1825 to 1829. He was the son of John Adams and later served in the House of Representatives where he became a leading opponent of slavery.',
    biographyZh: '约翰·昆西·亚当斯是美国政治家、外交官、律师和日记作家，于1825年至1829年担任美国第六任总统。他是约翰·亚当斯的儿子，后来在众议院任职，成为反对奴隶制的领导人。',
    achievements: [
      { id: 1, title: 'Infrastructure Development', titleZh: '基础设施发展', description: 'Advocated for roads, canals, and national university', descriptionZh: '倡导修建道路、运河和国立大学', year: 1825 }
    ],
    keyEvents: [
      { id: 1, title: 'Corrupt Bargain', titleZh: '腐败交易', date: '1825-02-09', description: 'Controversial election decided by House of Representatives', descriptionZh: '由众议院决定的有争议的选举', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 2, targetName: 'John Adams', relationType: 'family', description: 'Son of President John Adams', descriptionZh: '约翰·亚当斯总统之子' }
    ],
    media: []
  },
  {
    id: 7,
    name: 'Andrew Jackson',
    nameZh: '安德鲁·杰克逊',
    birthDate: '1767-03-15',
    deathDate: '1845-06-08',
    birthPlace: 'Waxhaws Region, Carolinas',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1829-03-04',
    termEnd: '1837-03-04',
    termNumber: 7,
    vicePresident: 'John C. Calhoun, Martin Van Buren',
    portrait: jacksonImg,
    biography: 'Andrew Jackson was an American lawyer, planter, general, and statesman who served as the seventh president of the United States from 1829 to 1837. He was a populist who founded the Democratic Party and expanded voting rights to all white men.',
    biographyZh: '安德鲁·杰克逊是美国律师、种植园主、将军和政治家，于1829年至1837年担任美国第七任总统。他是一位民粹主义者，创立了民主党，并将投票权扩大到所有白人男性。',
    achievements: [
      { id: 1, title: 'Jacksonian Democracy', titleZh: '杰克逊民主', description: 'Expanded voting rights to all white men', descriptionZh: '将投票权扩大到所有白人男性', year: 1829 },
      { id: 2, title: 'Killed the National Bank', titleZh: '废除国家银行', description: 'Vetoed the recharter of the Second Bank of the United States', descriptionZh: '否决了美国第二银行的续期', year: 1832 }
    ],
    keyEvents: [
      { id: 1, title: 'Indian Removal Act', titleZh: '印第安人迁移法', date: '1830-05-28', description: 'Forced relocation of Native Americans (Trail of Tears)', descriptionZh: '强制迁移美洲原住民（血泪之路）', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 8,
    name: 'Martin Van Buren',
    nameZh: '马丁·范布伦',
    birthDate: '1782-12-05',
    deathDate: '1862-07-24',
    birthPlace: 'Kinderhook, New York',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1837-03-04',
    termEnd: '1841-03-04',
    termNumber: 8,
    vicePresident: 'Richard Mentor Johnson',
    portrait: vanburenImg,
    biography: 'Martin Van Buren was an American statesman who served as the eighth president of the United States from 1837 to 1841. He was the first president born as a U.S. citizen and a key organizer of the Democratic Party.',
    biographyZh: '马丁·范布伦是美国政治家，于1837年至1841年担任美国第八任总统。他是第一位出生时即为美国公民的总统，也是民主党的关键组织者。',
    achievements: [
      { id: 1, title: 'Independent Treasury', titleZh: '独立国库', description: 'Established the Independent Treasury System', descriptionZh: '建立了独立国库制度', year: 1840 }
    ],
    keyEvents: [
      { id: 1, title: 'Panic of 1837', titleZh: '1837年恐慌', date: '1837-05-10', description: 'Major financial crisis during his presidency', descriptionZh: '他任期内的重大金融危机', type: 'economic' }
    ],
    relations: [
      { id: 1, targetId: 7, targetName: 'Andrew Jackson', relationType: 'predecessor', description: 'Served as Jackson\'s Vice President', descriptionZh: '担任杰克逊的副总统' }
    ],
    media: []
  },
  {
    id: 9,
    name: 'William Henry Harrison',
    nameZh: '威廉·亨利·哈里森',
    birthDate: '1773-02-09',
    deathDate: '1841-04-04',
    birthPlace: 'Charles City County, Virginia',
    party: 'Whig',
    partyZh: '辉格党',
    termStart: '1841-03-04',
    termEnd: '1841-04-04',
    termNumber: 9,
    vicePresident: 'John Tyler',
    portrait: harrisonWilliamImg,
    biography: 'William Henry Harrison was an American military officer and politician who served as the ninth president of the United States. He died just 31 days into his term, the shortest presidency in U.S. history.',
    biographyZh: '威廉·亨利·哈里森是美国军官和政治家，担任美国第九任总统。他在任仅31天就去世了，是美国历史上任期最短的总统。',
    achievements: [
      { id: 1, title: 'Battle of Tippecanoe', titleZh: '蒂珀卡努战役', description: 'Famous military victory against Native Americans', descriptionZh: '对抗美洲原住民的著名军事胜利', year: 1811 }
    ],
    keyEvents: [
      { id: 1, title: 'Death in Office', titleZh: '任内去世', date: '1841-04-04', description: 'First president to die in office', descriptionZh: '第一位在任内去世的总统', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 23, targetName: 'Benjamin Harrison', relationType: 'family', description: 'Grandfather of Benjamin Harrison', descriptionZh: '本杰明·哈里森的祖父' }
    ],
    media: []
  },
  {
    id: 10,
    name: 'John Tyler',
    nameZh: '约翰·泰勒',
    birthDate: '1790-03-29',
    deathDate: '1862-01-18',
    birthPlace: 'Charles City County, Virginia',
    party: 'Whig',
    partyZh: '辉格党',
    termStart: '1841-04-04',
    termEnd: '1845-03-04',
    termNumber: 10,
    vicePresident: 'None',
    portrait: tylerImg,
    biography: 'John Tyler was an American politician who served as the tenth president of the United States from 1841 to 1845. He was the first vice president to assume the presidency upon the death of a president.',
    biographyZh: '约翰·泰勒是美国政治家，于1841年至1845年担任美国第十任总统。他是第一位因总统去世而继任的副总统。',
    achievements: [
      { id: 1, title: 'Texas Annexation', titleZh: '吞并德克萨斯', description: 'Signed the resolution to annex Texas', descriptionZh: '签署了吞并德克萨斯的决议', year: 1845 },
      { id: 2, title: 'Presidential Succession', titleZh: '总统继任', description: 'Established precedent for vice presidential succession', descriptionZh: '确立了副总统继任的先例', year: 1841 }
    ],
    keyEvents: [
      { id: 1, title: 'Expelled from Whig Party', titleZh: '被辉格党开除', date: '1841-09-13', description: 'Expelled from his own party for vetoing bank bills', descriptionZh: '因否决银行法案而被自己的党开除', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 11,
    name: 'James K. Polk',
    nameZh: '詹姆斯·K·波尔克',
    birthDate: '1795-11-02',
    deathDate: '1849-06-15',
    birthPlace: 'Pineville, North Carolina',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1845-03-04',
    termEnd: '1849-03-04',
    termNumber: 11,
    vicePresident: 'George M. Dallas',
    portrait: polkImg,
    biography: 'James Knox Polk was an American politician who served as the 11th president of the United States from 1845 to 1849. He is known for his expansionist policies and overseeing the largest territorial expansion in American history.',
    biographyZh: '詹姆斯·诺克斯·波尔克是美国政治家，于1845年至1849年担任美国第11任总统。他以扩张主义政策著称，监督了美国历史上最大规模的领土扩张。',
    achievements: [
      { id: 1, title: 'Mexican-American War Victory', titleZh: '美墨战争胜利', description: 'Won the war and acquired vast western territories', descriptionZh: '赢得战争并获得广阔的西部领土', year: 1848 },
      { id: 2, title: 'Oregon Treaty', titleZh: '俄勒冈条约', description: 'Settled the Oregon boundary dispute with Britain', descriptionZh: '解决了与英国的俄勒冈边界争端', year: 1846 }
    ],
    keyEvents: [
      { id: 1, title: 'Mexican-American War', titleZh: '美墨战争', date: '1846-04-25', description: 'War that resulted in U.S. acquisition of California and Southwest', descriptionZh: '导致美国获得加利福尼亚和西南部的战争', type: 'military' }
    ],
    relations: [],
    media: []
  },
  {
    id: 12,
    name: 'Zachary Taylor',
    nameZh: '扎卡里·泰勒',
    birthDate: '1784-11-24',
    deathDate: '1850-07-09',
    birthPlace: 'Barboursville, Virginia',
    party: 'Whig',
    partyZh: '辉格党',
    termStart: '1849-03-04',
    termEnd: '1850-07-09',
    termNumber: 12,
    vicePresident: 'Millard Fillmore',
    portrait: taylorImg,
    biography: 'Zachary Taylor was an American military leader and politician who served as the 12th president of the United States from 1849 until his death in 1850. He was a national hero for his victories in the Mexican-American War.',
    biographyZh: '扎卡里·泰勒是美国军事领袖和政治家，于1849年至1850年去世前担任美国第12任总统。他因在美墨战争中的胜利而成为民族英雄。',
    achievements: [
      { id: 1, title: 'Mexican-American War Hero', titleZh: '美墨战争英雄', description: 'Won major battles including Buena Vista', descriptionZh: '赢得了包括布埃纳维斯塔在内的重大战役', year: 1847 }
    ],
    keyEvents: [
      { id: 1, title: 'Death in Office', titleZh: '任内去世', date: '1850-07-09', description: 'Died suddenly after 16 months in office', descriptionZh: '在任16个月后突然去世', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 13,
    name: 'Millard Fillmore',
    nameZh: '米勒德·菲尔莫尔',
    birthDate: '1800-01-07',
    deathDate: '1874-03-08',
    birthPlace: 'Moravia, New York',
    party: 'Whig',
    partyZh: '辉格党',
    termStart: '1850-07-09',
    termEnd: '1853-03-04',
    termNumber: 13,
    vicePresident: 'None',
    portrait: fillmoreImg,
    biography: 'Millard Fillmore was an American politician who served as the 13th president of the United States from 1850 to 1853. He assumed the presidency after Taylor\'s death and signed the Compromise of 1850.',
    biographyZh: '米勒德·菲尔莫尔是美国政治家，于1850年至1853年担任美国第13任总统。他在泰勒去世后继任总统，并签署了1850年妥协案。',
    achievements: [
      { id: 1, title: 'Compromise of 1850', titleZh: '1850年妥协案', description: 'Signed legislation attempting to resolve slavery disputes', descriptionZh: '签署了试图解决奴隶制争端的立法', year: 1850 },
      { id: 2, title: 'Perry Expedition', titleZh: '佩里远征', description: 'Sent Commodore Perry to open trade with Japan', descriptionZh: '派遣佩里准将打开与日本的贸易', year: 1852 }
    ],
    keyEvents: [
      { id: 1, title: 'Fugitive Slave Act', titleZh: '逃奴法', date: '1850-09-18', description: 'Signed controversial law requiring return of escaped slaves', descriptionZh: '签署了要求归还逃亡奴隶的争议性法律', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 14,
    name: 'Franklin Pierce',
    nameZh: '富兰克林·皮尔斯',
    birthDate: '1804-11-23',
    deathDate: '1869-10-08',
    birthPlace: 'Hillsborough, New Hampshire',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1853-03-04',
    termEnd: '1857-03-04',
    termNumber: 14,
    vicePresident: 'William R. King',
    portrait: pierceImg,
    biography: 'Franklin Pierce was an American politician who served as the 14th president of the United States from 1853 to 1857. His presidency was marked by the Kansas-Nebraska Act which intensified the slavery debate.',
    biographyZh: '富兰克林·皮尔斯是美国政治家，于1853年至1857年担任美国第14任总统。他的总统任期以《堪萨斯-内布拉斯加法案》为标志，该法案加剧了奴隶制辩论。',
    achievements: [
      { id: 1, title: 'Gadsden Purchase', titleZh: '加兹登购地', description: 'Acquired land from Mexico for railroad route', descriptionZh: '从墨西哥购买土地用于铁路线路', year: 1853 }
    ],
    keyEvents: [
      { id: 1, title: 'Kansas-Nebraska Act', titleZh: '堪萨斯-内布拉斯加法案', date: '1854-05-30', description: 'Allowed popular sovereignty on slavery in new territories', descriptionZh: '允许新领土上的人民主权决定奴隶制', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 15,
    name: 'James Buchanan',
    nameZh: '詹姆斯·布坎南',
    birthDate: '1791-04-23',
    deathDate: '1868-06-01',
    birthPlace: 'Cove Gap, Pennsylvania',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1857-03-04',
    termEnd: '1861-03-04',
    termNumber: 15,
    vicePresident: 'John C. Breckinridge',
    portrait: buchananImg,
    biography: 'James Buchanan was an American politician who served as the 15th president of the United States from 1857 to 1861. He is often ranked as one of the worst presidents for his failure to prevent the Civil War.',
    biographyZh: '詹姆斯·布坎南是美国政治家，于1857年至1861年担任美国第15任总统。他因未能阻止内战而常被评为最差的总统之一。',
    achievements: [],
    keyEvents: [
      { id: 1, title: 'Dred Scott Decision', titleZh: '德雷德·斯科特案', date: '1857-03-06', description: 'Supreme Court ruling that intensified slavery debate', descriptionZh: '加剧奴隶制辩论的最高法院裁决', type: 'political' },
      { id: 2, title: 'Secession Crisis', titleZh: '分裂危机', date: '1860-12-20', description: 'Southern states began seceding during his term', descriptionZh: '南方各州在他任期内开始脱离联邦', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 16,
    name: 'Abraham Lincoln',
    nameZh: '亚伯拉罕·林肯',
    birthDate: '1809-02-12',
    deathDate: '1865-04-15',
    birthPlace: 'Hodgenville, Kentucky',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1861-03-04',
    termEnd: '1865-04-15',
    termNumber: 16,
    vicePresident: 'Hannibal Hamlin, Andrew Johnson',
    portrait: lincolnImg,
    biography: 'Abraham Lincoln was an American lawyer, politician, and statesman who served as the 16th president of the United States from 1861 until his assassination in 1865. He led the nation through the Civil War, preserved the Union, and abolished slavery.',
    biographyZh: '亚伯拉罕·林肯是美国律师、政治家和政治家，于1861年至1865年遇刺身亡前担任美国第16任总统。他领导国家度过内战，维护了联邦统一，并废除了奴隶制。',
    achievements: [
      { id: 1, title: 'Emancipation Proclamation', titleZh: '解放奴隶宣言', description: 'Freed slaves in Confederate states', descriptionZh: '解放了邦联各州的奴隶', year: 1863 },
      { id: 2, title: 'Preserved the Union', titleZh: '维护联邦统一', description: 'Led the Union to victory in the Civil War', descriptionZh: '领导联邦在内战中取得胜利', year: 1865 },
      { id: 3, title: '13th Amendment', titleZh: '第十三修正案', description: 'Abolished slavery throughout the United States', descriptionZh: '在全美废除奴隶制', year: 1865 }
    ],
    keyEvents: [
      { id: 1, title: 'Gettysburg Address', titleZh: '葛底斯堡演说', date: '1863-11-19', description: 'Famous speech redefining the Civil War', descriptionZh: '重新定义内战的著名演讲', type: 'political' },
      { id: 2, title: 'Assassination', titleZh: '遇刺', date: '1865-04-14', description: 'Shot by John Wilkes Booth at Ford\'s Theatre', descriptionZh: '在福特剧院被约翰·威尔克斯·布斯枪杀', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 17, targetName: 'Andrew Johnson', relationType: 'successor', description: 'Johnson succeeded Lincoln after assassination', descriptionZh: '约翰逊在林肯遇刺后继任' }
    ],
    media: [
      { id: 1, type: 'image', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Abraham_Lincoln_November_1863.jpg', thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Abraham_Lincoln_November_1863.jpg/220px-Abraham_Lincoln_November_1863.jpg', title: 'Lincoln in 1863', titleZh: '1863年的林肯', description: 'Photograph taken in November 1863', descriptionZh: '1863年11月拍摄的照片' }
    ]
  },
  {
    id: 17,
    name: 'Andrew Johnson',
    nameZh: '安德鲁·约翰逊',
    birthDate: '1808-12-29',
    deathDate: '1875-07-31',
    birthPlace: 'Raleigh, North Carolina',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1865-04-15',
    termEnd: '1869-03-04',
    termNumber: 17,
    vicePresident: 'None',
    portrait: johnsonAndrewImg,
    biography: 'Andrew Johnson was an American politician who served as the 17th president of the United States from 1865 to 1869. He assumed the presidency after Lincoln\'s assassination and was the first president to be impeached.',
    biographyZh: '安德鲁·约翰逊是美国政治家，于1865年至1869年担任美国第17任总统。他在林肯遇刺后继任总统，是第一位被弹劾的总统。',
    achievements: [
      { id: 1, title: 'Alaska Purchase', titleZh: '购买阿拉斯加', description: 'Acquired Alaska from Russia', descriptionZh: '从俄罗斯购买阿拉斯加', year: 1867 }
    ],
    keyEvents: [
      { id: 1, title: 'First Presidential Impeachment', titleZh: '首次总统弹劾', date: '1868-02-24', description: 'Impeached by House but acquitted by Senate', descriptionZh: '被众议院弹劾但被参议院宣判无罪', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 16, targetName: 'Abraham Lincoln', relationType: 'predecessor', description: 'Succeeded Lincoln after assassination', descriptionZh: '在林肯遇刺后继任' }
    ],
    media: []
  },
  {
    id: 18,
    name: 'Ulysses S. Grant',
    nameZh: '尤利西斯·S·格兰特',
    birthDate: '1822-04-27',
    deathDate: '1885-07-23',
    birthPlace: 'Point Pleasant, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1869-03-04',
    termEnd: '1877-03-04',
    termNumber: 18,
    vicePresident: 'Schuyler Colfax, Henry Wilson',
    portrait: grantImg,
    biography: 'Ulysses S. Grant was an American military officer and politician who served as the 18th president of the United States from 1869 to 1877. He led the Union Army to victory in the Civil War and worked to implement Reconstruction.',
    biographyZh: '尤利西斯·S·格兰特是美国军官和政治家，于1869年至1877年担任美国第18任总统。他领导联邦军队在内战中取得胜利，并致力于实施重建。',
    achievements: [
      { id: 1, title: 'Civil War Victory', titleZh: '内战胜利', description: 'Led Union forces to victory as Commanding General', descriptionZh: '作为总司令领导联邦军队取得胜利', year: 1865 },
      { id: 2, title: '15th Amendment', titleZh: '第十五修正案', description: 'Ratified amendment protecting voting rights', descriptionZh: '批准保护投票权的修正案', year: 1870 }
    ],
    keyEvents: [
      { id: 1, title: 'Reconstruction', titleZh: '重建时期', date: '1869-03-04', description: 'Enforced civil rights in the South', descriptionZh: '在南方执行公民权利', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 19,
    name: 'Rutherford B. Hayes',
    nameZh: '拉瑟福德·B·海斯',
    birthDate: '1822-10-04',
    deathDate: '1893-01-17',
    birthPlace: 'Delaware, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1877-03-04',
    termEnd: '1881-03-04',
    termNumber: 19,
    vicePresident: 'William A. Wheeler',
    portrait: hayesImg,
    biography: 'Rutherford Birchard Hayes was an American politician who served as the 19th president of the United States from 1877 to 1881. He ended Reconstruction and attempted civil service reform.',
    biographyZh: '拉瑟福德·伯查德·海斯是美国政治家，于1877年至1881年担任美国第19任总统。他结束了重建时期并尝试进行公务员制度改革。',
    achievements: [
      { id: 1, title: 'Civil Service Reform', titleZh: '公务员制度改革', description: 'Began efforts to reform the spoils system', descriptionZh: '开始努力改革分赃制度', year: 1877 }
    ],
    keyEvents: [
      { id: 1, title: 'End of Reconstruction', titleZh: '重建结束', date: '1877-04-24', description: 'Withdrew federal troops from the South', descriptionZh: '从南方撤出联邦军队', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 20,
    name: 'James A. Garfield',
    nameZh: '詹姆斯·A·加菲尔德',
    birthDate: '1831-11-19',
    deathDate: '1881-09-19',
    birthPlace: 'Moreland Hills, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1881-03-04',
    termEnd: '1881-09-19',
    termNumber: 20,
    vicePresident: 'Chester A. Arthur',
    portrait: garfieldImg,
    biography: 'James Abram Garfield was an American politician who served as the 20th president of the United States. He was assassinated after only 200 days in office, the second shortest presidency.',
    biographyZh: '詹姆斯·艾布拉姆·加菲尔德是美国政治家，担任美国第20任总统。他在任仅200天后遇刺身亡，是任期第二短的总统。',
    achievements: [
      { id: 1, title: 'Civil Service Reform Advocate', titleZh: '公务员制度改革倡导者', description: 'Advocated for merit-based civil service', descriptionZh: '倡导基于能力的公务员制度', year: 1881 }
    ],
    keyEvents: [
      { id: 1, title: 'Assassination', titleZh: '遇刺', date: '1881-07-02', description: 'Shot by Charles Guiteau, died September 19', descriptionZh: '被查尔斯·吉托枪击，9月19日去世', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 21,
    name: 'Chester A. Arthur',
    nameZh: '切斯特·A·阿瑟',
    birthDate: '1829-10-05',
    deathDate: '1886-11-18',
    birthPlace: 'Fairfield, Vermont',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1881-09-19',
    termEnd: '1885-03-04',
    termNumber: 21,
    vicePresident: 'None',
    portrait: arthurImg,
    biography: 'Chester Alan Arthur was an American politician who served as the 21st president of the United States from 1881 to 1885. He assumed the presidency after Garfield\'s assassination and signed the Pendleton Civil Service Reform Act.',
    biographyZh: '切斯特·艾伦·阿瑟是美国政治家，于1881年至1885年担任美国第21任总统。他在加菲尔德遇刺后继任总统，并签署了《彭德尔顿公务员制度改革法》。',
    achievements: [
      { id: 1, title: 'Pendleton Act', titleZh: '彭德尔顿法案', description: 'Signed civil service reform legislation', descriptionZh: '签署公务员制度改革立法', year: 1883 }
    ],
    keyEvents: [
      { id: 1, title: 'Civil Service Reform', titleZh: '公务员制度改革', date: '1883-01-16', description: 'Signed the Pendleton Civil Service Reform Act', descriptionZh: '签署《彭德尔顿公务员制度改革法》', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 22,
    name: 'Grover Cleveland',
    nameZh: '格罗弗·克利夫兰',
    birthDate: '1837-03-18',
    deathDate: '1908-06-24',
    birthPlace: 'Caldwell, New Jersey',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1885-03-04',
    termEnd: '1889-03-04',
    termNumber: 22,
    vicePresident: 'Thomas A. Hendricks',
    portrait: clevelandImg,
    biography: 'Grover Cleveland was an American politician who served as the 22nd and 24th president of the United States. He is the only president to serve two non-consecutive terms.',
    biographyZh: '格罗弗·克利夫兰是美国政治家，担任美国第22任和第24任总统。他是唯一一位任职两个非连续任期的总统。',
    achievements: [
      { id: 1, title: 'Interstate Commerce Act', titleZh: '州际商业法', description: 'Signed first federal regulation of railroads', descriptionZh: '签署了第一部联邦铁路监管法', year: 1887 }
    ],
    keyEvents: [
      { id: 1, title: 'Statue of Liberty Dedication', titleZh: '自由女神像落成', date: '1886-10-28', description: 'Dedicated the Statue of Liberty', descriptionZh: '主持自由女神像落成典礼', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 23,
    name: 'Benjamin Harrison',
    nameZh: '本杰明·哈里森',
    birthDate: '1833-08-20',
    deathDate: '1901-03-13',
    birthPlace: 'North Bend, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1889-03-04',
    termEnd: '1893-03-04',
    termNumber: 23,
    vicePresident: 'Levi P. Morton',
    portrait: harrisonBenjaminImg,
    biography: 'Benjamin Harrison was an American politician who served as the 23rd president of the United States from 1889 to 1893. He was the grandson of President William Henry Harrison.',
    biographyZh: '本杰明·哈里森是美国政治家，于1889年至1893年担任美国第23任总统。他是威廉·亨利·哈里森总统的孙子。',
    achievements: [
      { id: 1, title: 'Sherman Antitrust Act', titleZh: '谢尔曼反托拉斯法', description: 'Signed first federal antitrust legislation', descriptionZh: '签署了第一部联邦反托拉斯立法', year: 1890 },
      { id: 2, title: 'Six New States', titleZh: '六个新州', description: 'Admitted six states to the Union', descriptionZh: '接纳六个州加入联邦', year: 1889 }
    ],
    keyEvents: [
      { id: 1, title: 'McKinley Tariff', titleZh: '麦金利关税', date: '1890-10-01', description: 'Signed protective tariff legislation', descriptionZh: '签署保护性关税立法', type: 'economic' }
    ],
    relations: [
      { id: 1, targetId: 9, targetName: 'William Henry Harrison', relationType: 'family', description: 'Grandson of William Henry Harrison', descriptionZh: '威廉·亨利·哈里森的孙子' }
    ],
    media: []
  },
  {
    id: 24,
    name: 'Grover Cleveland',
    nameZh: '格罗弗·克利夫兰',
    birthDate: '1837-03-18',
    deathDate: '1908-06-24',
    birthPlace: 'Caldwell, New Jersey',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1893-03-04',
    termEnd: '1897-03-04',
    termNumber: 24,
    vicePresident: 'Adlai Stevenson I',
    portrait: clevelandImg,
    biography: 'Grover Cleveland served his second non-consecutive term as the 24th president. His second term was marked by the Panic of 1893 and labor unrest.',
    biographyZh: '格罗弗·克利夫兰作为第24任总统任职第二个非连续任期。他的第二任期以1893年恐慌和劳工动荡为标志。',
    achievements: [
      { id: 1, title: 'Gold Standard Defense', titleZh: '捍卫金本位', description: 'Maintained the gold standard during economic crisis', descriptionZh: '在经济危机期间维持金本位', year: 1893 }
    ],
    keyEvents: [
      { id: 1, title: 'Panic of 1893', titleZh: '1893年恐慌', date: '1893-05-05', description: 'Major economic depression during his term', descriptionZh: '他任期内的重大经济萧条', type: 'economic' },
      { id: 2, title: 'Pullman Strike', titleZh: '普尔曼罢工', date: '1894-05-11', description: 'Used federal troops to break railroad strike', descriptionZh: '使用联邦军队镇压铁路罢工', type: 'social' }
    ],
    relations: [],
    media: []
  },
  {
    id: 25,
    name: 'William McKinley',
    nameZh: '威廉·麦金利',
    birthDate: '1843-01-29',
    deathDate: '1901-09-14',
    birthPlace: 'Niles, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1897-03-04',
    termEnd: '1901-09-14',
    termNumber: 25,
    vicePresident: 'Garret Hobart, Theodore Roosevelt',
    portrait: mckinleyImg,
    biography: 'William McKinley was an American politician who served as the 25th president of the United States from 1897 until his assassination in 1901. He led the nation to victory in the Spanish-American War.',
    biographyZh: '威廉·麦金利是美国政治家，于1897年至1901年遇刺身亡前担任美国第25任总统。他领导国家在美西战争中取得胜利。',
    achievements: [
      { id: 1, title: 'Spanish-American War Victory', titleZh: '美西战争胜利', description: 'Won war and acquired Philippines, Puerto Rico, Guam', descriptionZh: '赢得战争并获得菲律宾、波多黎各、关岛', year: 1898 },
      { id: 2, title: 'Gold Standard Act', titleZh: '金本位法', description: 'Established gold as the only standard for currency', descriptionZh: '确立黄金为唯一的货币标准', year: 1900 }
    ],
    keyEvents: [
      { id: 1, title: 'Assassination', titleZh: '遇刺', date: '1901-09-06', description: 'Shot by anarchist Leon Czolgosz', descriptionZh: '被无政府主义者莱昂·乔尔戈什枪击', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 26, targetName: 'Theodore Roosevelt', relationType: 'successor', description: 'Roosevelt succeeded McKinley after assassination', descriptionZh: '罗斯福在麦金利遇刺后继任' }
    ],
    media: []
  },
  {
    id: 26,
    name: 'Theodore Roosevelt',
    nameZh: '西奥多·罗斯福',
    birthDate: '1858-10-27',
    deathDate: '1919-01-06',
    birthPlace: 'New York City, New York',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1901-09-14',
    termEnd: '1909-03-04',
    termNumber: 26,
    vicePresident: 'Charles W. Fairbanks',
    portrait: rooseveltTheodoreImg,
    biography: 'Theodore Roosevelt was an American politician, statesman, conservationist, naturalist, historian, and writer who served as the 26th president of the United States from 1901 to 1909. He was a leader of the Progressive Movement.',
    biographyZh: '西奥多·罗斯福是美国政治家、政治家、环保主义者、博物学家、历史学家和作家，于1901年至1909年担任美国第26任总统。他是进步运动的领导人。',
    achievements: [
      { id: 1, title: 'Panama Canal', titleZh: '巴拿马运河', description: 'Oversaw construction of the Panama Canal', descriptionZh: '监督巴拿马运河的建设', year: 1904 },
      { id: 2, title: 'Nobel Peace Prize', titleZh: '诺贝尔和平奖', description: 'First American to win Nobel Prize for mediating Russo-Japanese War', descriptionZh: '因调解日俄战争成为第一位获得诺贝尔奖的美国人', year: 1906 },
      { id: 3, title: 'National Parks', titleZh: '国家公园', description: 'Established numerous national parks and forests', descriptionZh: '建立了众多国家公园和森林', year: 1906 }
    ],
    keyEvents: [
      { id: 1, title: 'Square Deal', titleZh: '公平交易', date: '1902-01-01', description: 'Domestic program for fairness in business and labor', descriptionZh: '商业和劳工公平的国内计划', type: 'economic' }
    ],
    relations: [
      { id: 1, targetId: 32, targetName: 'Franklin D. Roosevelt', relationType: 'family', description: 'Fifth cousin of FDR', descriptionZh: 'FDR的远房堂兄' },
      { id: 2, targetId: 25, targetName: 'William McKinley', relationType: 'predecessor', description: 'Succeeded McKinley after assassination', descriptionZh: '在麦金利遇刺后继任' }
    ],
    media: []
  },
  {
    id: 27,
    name: 'William Howard Taft',
    nameZh: '威廉·霍华德·塔夫脱',
    birthDate: '1857-09-15',
    deathDate: '1930-03-08',
    birthPlace: 'Cincinnati, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1909-03-04',
    termEnd: '1913-03-04',
    termNumber: 27,
    vicePresident: 'James S. Sherman',
    portrait: taftImg,
    biography: 'William Howard Taft was an American politician who served as the 27th president of the United States from 1909 to 1913. He later served as Chief Justice of the Supreme Court, the only person to hold both offices.',
    biographyZh: '威廉·霍华德·塔夫脱是美国政治家，于1909年至1913年担任美国第27任总统。他后来担任最高法院首席大法官，是唯一一位同时担任这两个职位的人。',
    achievements: [
      { id: 1, title: 'Trust Busting', titleZh: '反托拉斯', description: 'Broke up more trusts than Roosevelt', descriptionZh: '打破的托拉斯比罗斯福还多', year: 1911 },
      { id: 2, title: 'Chief Justice', titleZh: '首席大法官', description: 'Later served as Chief Justice of Supreme Court', descriptionZh: '后来担任最高法院首席大法官', year: 1921 }
    ],
    keyEvents: [
      { id: 1, title: '16th Amendment', titleZh: '第十六修正案', date: '1913-02-03', description: 'Ratified amendment allowing federal income tax', descriptionZh: '批准允许联邦所得税的修正案', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 28,
    name: 'Woodrow Wilson',
    nameZh: '伍德罗·威尔逊',
    birthDate: '1856-12-28',
    deathDate: '1924-02-03',
    birthPlace: 'Staunton, Virginia',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1913-03-04',
    termEnd: '1921-03-04',
    termNumber: 28,
    vicePresident: 'Thomas R. Marshall',
    portrait: wilsonImg,
    biography: 'Woodrow Wilson was an American politician who served as the 28th president of the United States from 1913 to 1921. He led America through World War I and championed the League of Nations.',
    biographyZh: '伍德罗·威尔逊是美国政治家，于1913年至1921年担任美国第28任总统。他领导美国度过第一次世界大战，并倡导国际联盟。',
    achievements: [
      { id: 1, title: 'Federal Reserve Act', titleZh: '联邦储备法', description: 'Created the Federal Reserve System', descriptionZh: '创建了联邦储备系统', year: 1913 },
      { id: 2, title: 'World War I Victory', titleZh: '一战胜利', description: 'Led America to victory in WWI', descriptionZh: '领导美国在一战中取得胜利', year: 1918 },
      { id: 3, title: 'Nobel Peace Prize', titleZh: '诺贝尔和平奖', description: 'Won Nobel Prize for League of Nations efforts', descriptionZh: '因国际联盟努力获得诺贝尔奖', year: 1919 }
    ],
    keyEvents: [
      { id: 1, title: 'U.S. Enters WWI', titleZh: '美国参加一战', date: '1917-04-06', description: 'Declared war on Germany', descriptionZh: '对德国宣战', type: 'military' },
      { id: 2, title: '19th Amendment', titleZh: '第十九修正案', date: '1920-08-18', description: 'Women\'s suffrage ratified', descriptionZh: '妇女选举权获得批准', type: 'social' }
    ],
    relations: [],
    media: []
  },
  {
    id: 29,
    name: 'Warren G. Harding',
    nameZh: '沃伦·G·哈定',
    birthDate: '1865-11-02',
    deathDate: '1923-08-02',
    birthPlace: 'Blooming Grove, Ohio',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1921-03-04',
    termEnd: '1923-08-02',
    termNumber: 29,
    vicePresident: 'Calvin Coolidge',
    portrait: hardingImg,
    biography: 'Warren Gamaliel Harding was an American politician who served as the 29th president of the United States from 1921 until his death in 1923. His administration was marred by scandals including Teapot Dome.',
    biographyZh: '沃伦·加马利尔·哈定是美国政治家，于1921年至1923年去世前担任美国第29任总统。他的政府因茶壶山丑闻等丑闻而蒙羞。',
    achievements: [
      { id: 1, title: 'Return to Normalcy', titleZh: '回归常态', description: 'Post-WWI economic recovery policies', descriptionZh: '一战后经济复苏政策', year: 1921 }
    ],
    keyEvents: [
      { id: 1, title: 'Teapot Dome Scandal', titleZh: '茶壶山丑闻', date: '1922-04-07', description: 'Major corruption scandal in his administration', descriptionZh: '他政府中的重大腐败丑闻', type: 'political' },
      { id: 2, title: 'Death in Office', titleZh: '任内去世', date: '1923-08-02', description: 'Died suddenly in San Francisco', descriptionZh: '在旧金山突然去世', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 30,
    name: 'Calvin Coolidge',
    nameZh: '卡尔文·柯立芝',
    birthDate: '1872-07-04',
    deathDate: '1933-01-05',
    birthPlace: 'Plymouth, Vermont',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1923-08-02',
    termEnd: '1929-03-04',
    termNumber: 30,
    vicePresident: 'Charles G. Dawes',
    portrait: coolidgeImg,
    biography: 'Calvin Coolidge was an American politician who served as the 30th president of the United States from 1923 to 1929. Known as "Silent Cal," he presided over the prosperous Roaring Twenties.',
    biographyZh: '卡尔文·柯立芝是美国政治家，于1923年至1929年担任美国第30任总统。他被称为"沉默的卡尔"，主持了繁荣的咆哮的二十年代。',
    achievements: [
      { id: 1, title: 'Economic Prosperity', titleZh: '经济繁荣', description: 'Presided over the Roaring Twenties boom', descriptionZh: '主持了咆哮的二十年代的繁荣', year: 1925 },
      { id: 2, title: 'Immigration Act', titleZh: '移民法', description: 'Signed restrictive immigration legislation', descriptionZh: '签署限制性移民立法', year: 1924 }
    ],
    keyEvents: [
      { id: 1, title: 'Kellogg-Briand Pact', titleZh: '凯洛格-白里安公约', date: '1928-08-27', description: 'International agreement to outlaw war', descriptionZh: '禁止战争的国际协议', type: 'foreign' }
    ],
    relations: [],
    media: []
  },
  {
    id: 31,
    name: 'Herbert Hoover',
    nameZh: '赫伯特·胡佛',
    birthDate: '1874-08-10',
    deathDate: '1964-10-20',
    birthPlace: 'West Branch, Iowa',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1929-03-04',
    termEnd: '1933-03-04',
    termNumber: 31,
    vicePresident: 'Charles Curtis',
    portrait: hooverImg,
    biography: 'Herbert Hoover was an American politician who served as the 31st president of the United States from 1929 to 1933. His presidency was dominated by the onset of the Great Depression.',
    biographyZh: '赫伯特·胡佛是美国政治家，于1929年至1933年担任美国第31任总统。他的总统任期以大萧条的开始为主导。',
    achievements: [
      { id: 1, title: 'Humanitarian Work', titleZh: '人道主义工作', description: 'Led relief efforts in Europe after WWI', descriptionZh: '一战后领导欧洲救济工作', year: 1919 }
    ],
    keyEvents: [
      { id: 1, title: 'Stock Market Crash', titleZh: '股市崩盘', date: '1929-10-29', description: 'Black Tuesday began the Great Depression', descriptionZh: '黑色星期二开始了大萧条', type: 'economic' }
    ],
    relations: [],
    media: []
  },
  {
    id: 32,
    name: 'Franklin D. Roosevelt',
    nameZh: '富兰克林·D·罗斯福',
    birthDate: '1882-01-30',
    deathDate: '1945-04-12',
    birthPlace: 'Hyde Park, New York',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1933-03-04',
    termEnd: '1945-04-12',
    termNumber: 32,
    vicePresident: 'John Nance Garner, Henry A. Wallace, Harry S. Truman',
    portrait: rooseveltFranklinImg,
    biography: 'Franklin Delano Roosevelt was an American politician and attorney who served as the 32nd president of the United States from 1933 until his death in 1945. He is the only president to serve more than two terms and led the nation through the Great Depression and World War II.',
    biographyZh: '富兰克林·德拉诺·罗斯福是美国政治家和律师，于1933年至1945年去世前担任美国第32任总统。他是唯一一位任职超过两届的总统，领导国家度过了大萧条和第二次世界大战。',
    achievements: [
      { id: 1, title: 'New Deal', titleZh: '新政', description: 'Programs to recover from Great Depression', descriptionZh: '从大萧条中恢复的计划', year: 1933 },
      { id: 2, title: 'Social Security', titleZh: '社会保障', description: 'Created the Social Security system', descriptionZh: '创建了社会保障制度', year: 1935 },
      { id: 3, title: 'World War II Leadership', titleZh: '二战领导', description: 'Led America through most of WWII', descriptionZh: '领导美国度过二战大部分时期', year: 1941 }
    ],
    keyEvents: [
      { id: 1, title: 'Pearl Harbor', titleZh: '珍珠港事件', date: '1941-12-07', description: 'Declared war after Japanese attack', descriptionZh: '日本袭击后宣战', type: 'military' },
      { id: 2, title: 'D-Day', titleZh: '诺曼底登陆', date: '1944-06-06', description: 'Allied invasion of Normandy', descriptionZh: '盟军诺曼底登陆', type: 'military' }
    ],
    relations: [
      { id: 1, targetId: 26, targetName: 'Theodore Roosevelt', relationType: 'family', description: 'Fifth cousin of Theodore Roosevelt', descriptionZh: '西奥多·罗斯福的远房堂弟' },
      { id: 2, targetId: 33, targetName: 'Harry S. Truman', relationType: 'successor', description: 'Truman succeeded FDR after his death', descriptionZh: '杜鲁门在FDR去世后继任' }
    ],
    media: []
  },
  {
    id: 33,
    name: 'Harry S. Truman',
    nameZh: '哈里·S·杜鲁门',
    birthDate: '1884-05-08',
    deathDate: '1972-12-26',
    birthPlace: 'Lamar, Missouri',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1945-04-12',
    termEnd: '1953-01-20',
    termNumber: 33,
    vicePresident: 'Alben W. Barkley',
    portrait: trumanImg,
    biography: 'Harry S. Truman was an American politician who served as the 33rd president of the United States from 1945 to 1953. He made the decision to use atomic bombs on Japan and led the nation into the Cold War.',
    biographyZh: '哈里·S·杜鲁门是美国政治家，于1945年至1953年担任美国第33任总统。他做出了对日本使用原子弹的决定，并领导国家进入冷战。',
    achievements: [
      { id: 1, title: 'End of WWII', titleZh: '二战结束', description: 'Ended WWII with atomic bombs on Japan', descriptionZh: '用原子弹结束二战', year: 1945 },
      { id: 2, title: 'Marshall Plan', titleZh: '马歇尔计划', description: 'European recovery program', descriptionZh: '欧洲复兴计划', year: 1948 },
      { id: 3, title: 'NATO', titleZh: '北约', description: 'Founded the North Atlantic Treaty Organization', descriptionZh: '创建北大西洋公约组织', year: 1949 }
    ],
    keyEvents: [
      { id: 1, title: 'Atomic Bombs', titleZh: '原子弹', date: '1945-08-06', description: 'Ordered atomic bombs dropped on Hiroshima and Nagasaki', descriptionZh: '下令在广岛和长崎投下原子弹', type: 'military' },
      { id: 2, title: 'Korean War', titleZh: '朝鲜战争', date: '1950-06-25', description: 'Led U.S. into Korean War', descriptionZh: '领导美国参加朝鲜战争', type: 'military' }
    ],
    relations: [
      { id: 1, targetId: 32, targetName: 'Franklin D. Roosevelt', relationType: 'predecessor', description: 'Succeeded FDR after his death', descriptionZh: '在FDR去世后继任' }
    ],
    media: []
  },
  {
    id: 34,
    name: 'Dwight D. Eisenhower',
    nameZh: '德怀特·D·艾森豪威尔',
    birthDate: '1890-10-14',
    deathDate: '1969-03-28',
    birthPlace: 'Denison, Texas',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1953-01-20',
    termEnd: '1961-01-20',
    termNumber: 34,
    vicePresident: 'Richard Nixon',
    portrait: eisenhowerImg,
    biography: 'Dwight David Eisenhower was an American military officer and politician who served as the 34th president of the United States from 1953 to 1961. He was Supreme Commander of Allied Forces in Europe during WWII.',
    biographyZh: '德怀特·戴维·艾森豪威尔是美国军官和政治家，于1953年至1961年担任美国第34任总统。他是二战期间欧洲盟军最高统帅。',
    achievements: [
      { id: 1, title: 'Interstate Highway System', titleZh: '州际公路系统', description: 'Created the Interstate Highway System', descriptionZh: '创建了州际公路系统', year: 1956 },
      { id: 2, title: 'D-Day Commander', titleZh: '诺曼底登陆指挥官', description: 'Led Allied invasion of Normandy', descriptionZh: '领导盟军诺曼底登陆', year: 1944 },
      { id: 3, title: 'NASA', titleZh: '美国宇航局', description: 'Created NASA in response to Sputnik', descriptionZh: '为应对人造卫星创建NASA', year: 1958 }
    ],
    keyEvents: [
      { id: 1, title: 'Korean War Armistice', titleZh: '朝鲜战争停战', date: '1953-07-27', description: 'Ended the Korean War', descriptionZh: '结束朝鲜战争', type: 'military' },
      { id: 2, title: 'Little Rock Crisis', titleZh: '小石城危机', date: '1957-09-24', description: 'Sent troops to enforce school desegregation', descriptionZh: '派遣军队执行学校废除种族隔离', type: 'social' }
    ],
    relations: [
      { id: 1, targetId: 37, targetName: 'Richard Nixon', relationType: 'ally', description: 'Nixon served as Eisenhower\'s Vice President', descriptionZh: '尼克松担任艾森豪威尔的副总统' }
    ],
    media: []
  },
  {
    id: 35,
    name: 'John F. Kennedy',
    nameZh: '约翰·F·肯尼迪',
    birthDate: '1917-05-29',
    deathDate: '1963-11-22',
    birthPlace: 'Brookline, Massachusetts',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1961-01-20',
    termEnd: '1963-11-22',
    termNumber: 35,
    vicePresident: 'Lyndon B. Johnson',
    portrait: kennedyImg,
    biography: 'John Fitzgerald Kennedy was an American politician who served as the 35th president of the United States from 1961 until his assassination in 1963. He was the youngest elected president and inspired a generation with his vision.',
    biographyZh: '约翰·菲茨杰拉德·肯尼迪是美国政治家，于1961年至1963年遇刺身亡前担任美国第35任总统。他是最年轻的当选总统，以其愿景激励了一代人。',
    achievements: [
      { id: 1, title: 'Space Program', titleZh: '太空计划', description: 'Committed to landing on the Moon by end of decade', descriptionZh: '承诺在十年内登月', year: 1961 },
      { id: 2, title: 'Cuban Missile Crisis', titleZh: '古巴导弹危机', description: 'Resolved nuclear standoff with USSR', descriptionZh: '解决了与苏联的核对峙', year: 1962 },
      { id: 3, title: 'Peace Corps', titleZh: '和平队', description: 'Created the Peace Corps volunteer program', descriptionZh: '创建了和平队志愿者计划', year: 1961 }
    ],
    keyEvents: [
      { id: 1, title: 'Bay of Pigs', titleZh: '猪湾事件', date: '1961-04-17', description: 'Failed invasion of Cuba', descriptionZh: '入侵古巴失败', type: 'military' },
      { id: 2, title: 'Assassination', titleZh: '遇刺', date: '1963-11-22', description: 'Assassinated in Dallas, Texas', descriptionZh: '在德克萨斯州达拉斯遇刺', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 36, targetName: 'Lyndon B. Johnson', relationType: 'successor', description: 'Johnson succeeded Kennedy after assassination', descriptionZh: '约翰逊在肯尼迪遇刺后继任' }
    ],
    media: []
  },
  {
    id: 36,
    name: 'Lyndon B. Johnson',
    nameZh: '林登·B·约翰逊',
    birthDate: '1908-08-27',
    deathDate: '1973-01-22',
    birthPlace: 'Stonewall, Texas',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1963-11-22',
    termEnd: '1969-01-20',
    termNumber: 36,
    vicePresident: 'Hubert Humphrey',
    portrait: johnsonLyndonImg,
    biography: 'Lyndon Baines Johnson was an American politician who served as the 36th president of the United States from 1963 to 1969. He championed the Great Society and civil rights but was overshadowed by the Vietnam War.',
    biographyZh: '林登·贝恩斯·约翰逊是美国政治家，于1963年至1969年担任美国第36任总统。他倡导伟大社会和民权，但被越南战争所掩盖。',
    achievements: [
      { id: 1, title: 'Civil Rights Act', titleZh: '民权法案', description: 'Signed landmark civil rights legislation', descriptionZh: '签署具有里程碑意义的民权立法', year: 1964 },
      { id: 2, title: 'Medicare & Medicaid', titleZh: '医疗保险和医疗补助', description: 'Created Medicare and Medicaid programs', descriptionZh: '创建医疗保险和医疗补助计划', year: 1965 },
      { id: 3, title: 'Voting Rights Act', titleZh: '投票权法案', description: 'Signed Voting Rights Act', descriptionZh: '签署投票权法案', year: 1965 }
    ],
    keyEvents: [
      { id: 1, title: 'Vietnam War Escalation', titleZh: '越战升级', date: '1965-03-08', description: 'Escalated U.S. involvement in Vietnam', descriptionZh: '升级美国在越南的介入', type: 'military' }
    ],
    relations: [
      { id: 1, targetId: 35, targetName: 'John F. Kennedy', relationType: 'predecessor', description: 'Succeeded Kennedy after assassination', descriptionZh: '在肯尼迪遇刺后继任' }
    ],
    media: []
  },
  {
    id: 37,
    name: 'Richard Nixon',
    nameZh: '理查德·尼克松',
    birthDate: '1913-01-09',
    deathDate: '1994-04-22',
    birthPlace: 'Yorba Linda, California',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1969-01-20',
    termEnd: '1974-08-09',
    termNumber: 37,
    vicePresident: 'Spiro Agnew, Gerald Ford',
    portrait: nixonImg,
    biography: 'Richard Milhous Nixon was an American politician who served as the 37th president of the United States from 1969 to 1974. He resigned due to the Watergate scandal but achieved significant foreign policy successes.',
    biographyZh: '理查德·米尔豪斯·尼克松是美国政治家，于1969年至1974年担任美国第37任总统。他因水门事件辞职，但在外交政策上取得了重大成功。',
    achievements: [
      { id: 1, title: 'Opening to China', titleZh: '打开中国大门', description: 'Historic visit to Communist China', descriptionZh: '历史性访问共产主义中国', year: 1972 },
      { id: 2, title: 'EPA Creation', titleZh: '创建环保署', description: 'Created the Environmental Protection Agency', descriptionZh: '创建了环境保护署', year: 1970 },
      { id: 3, title: 'End of Vietnam War', titleZh: '结束越战', description: 'Negotiated end to U.S. involvement in Vietnam', descriptionZh: '谈判结束美国在越南的介入', year: 1973 }
    ],
    keyEvents: [
      { id: 1, title: 'Moon Landing', titleZh: '登月', date: '1969-07-20', description: 'Apollo 11 landed on the Moon', descriptionZh: '阿波罗11号登月', type: 'political' },
      { id: 2, title: 'Watergate Scandal', titleZh: '水门事件', date: '1972-06-17', description: 'Break-in that led to his resignation', descriptionZh: '导致他辞职的闯入事件', type: 'political' },
      { id: 3, title: 'Resignation', titleZh: '辞职', date: '1974-08-09', description: 'First president to resign from office', descriptionZh: '第一位辞职的总统', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 34, targetName: 'Dwight D. Eisenhower', relationType: 'ally', description: 'Served as Eisenhower\'s Vice President', descriptionZh: '担任艾森豪威尔的副总统' }
    ],
    media: []
  },
  {
    id: 38,
    name: 'Gerald Ford',
    nameZh: '杰拉尔德·福特',
    birthDate: '1913-07-14',
    deathDate: '2006-12-26',
    birthPlace: 'Omaha, Nebraska',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1974-08-09',
    termEnd: '1977-01-20',
    termNumber: 38,
    vicePresident: 'Nelson Rockefeller',
    portrait: fordImg,
    biography: 'Gerald Rudolph Ford Jr. was an American politician who served as the 38th president of the United States from 1974 to 1977. He was the only president never elected to either the presidency or vice presidency.',
    biographyZh: '小杰拉尔德·鲁道夫·福特是美国政治家，于1974年至1977年担任美国第38任总统。他是唯一一位从未当选总统或副总统的总统。',
    achievements: [
      { id: 1, title: 'Healing the Nation', titleZh: '治愈国家', description: 'Restored trust in government after Watergate', descriptionZh: '在水门事件后恢复对政府的信任', year: 1974 },
      { id: 2, title: 'Helsinki Accords', titleZh: '赫尔辛基协议', description: 'Signed human rights agreement with USSR', descriptionZh: '与苏联签署人权协议', year: 1975 }
    ],
    keyEvents: [
      { id: 1, title: 'Nixon Pardon', titleZh: '赦免尼克松', date: '1974-09-08', description: 'Controversial pardon of Richard Nixon', descriptionZh: '有争议地赦免理查德·尼克松', type: 'political' },
      { id: 2, title: 'Fall of Saigon', titleZh: '西贡陷落', date: '1975-04-30', description: 'End of Vietnam War with communist victory', descriptionZh: '越南战争以共产党胜利结束', type: 'military' }
    ],
    relations: [],
    media: []
  },
  {
    id: 39,
    name: 'Jimmy Carter',
    nameZh: '吉米·卡特',
    birthDate: '1924-10-01',
    deathDate: '2024-12-29',
    birthPlace: 'Plains, Georgia',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1977-01-20',
    termEnd: '1981-01-20',
    termNumber: 39,
    vicePresident: 'Walter Mondale',
    portrait: carterImg,
    biography: 'James Earl Carter Jr. was an American politician who served as the 39th president of the United States from 1977 to 1981. He won the Nobel Peace Prize in 2002 for his humanitarian work.',
    biographyZh: '小詹姆斯·厄尔·卡特是美国政治家，于1977年至1981年担任美国第39任总统。他因人道主义工作于2002年获得诺贝尔和平奖。',
    achievements: [
      { id: 1, title: 'Camp David Accords', titleZh: '戴维营协议', description: 'Brokered peace between Egypt and Israel', descriptionZh: '促成埃及和以色列之间的和平', year: 1978 },
      { id: 2, title: 'Nobel Peace Prize', titleZh: '诺贝尔和平奖', description: 'Won Nobel Prize for humanitarian work', descriptionZh: '因人道主义工作获得诺贝尔奖', year: 2002 },
      { id: 3, title: 'Department of Energy', titleZh: '能源部', description: 'Created the Department of Energy', descriptionZh: '创建能源部', year: 1977 }
    ],
    keyEvents: [
      { id: 1, title: 'Iran Hostage Crisis', titleZh: '伊朗人质危机', date: '1979-11-04', description: '52 Americans held hostage for 444 days', descriptionZh: '52名美国人被扣押444天', type: 'foreign' }
    ],
    relations: [],
    media: []
  },
  {
    id: 40,
    name: 'Ronald Reagan',
    nameZh: '罗纳德·里根',
    birthDate: '1911-02-06',
    deathDate: '2004-06-05',
    birthPlace: 'Tampico, Illinois',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1981-01-20',
    termEnd: '1989-01-20',
    termNumber: 40,
    vicePresident: 'George H. W. Bush',
    portrait: reaganImg,
    biography: 'Ronald Wilson Reagan was an American politician and actor who served as the 40th president of the United States from 1981 to 1989. He is credited with helping end the Cold War and reviving the American economy.',
    biographyZh: '罗纳德·威尔逊·里根是美国政治家和演员，于1981年至1989年担任美国第40任总统。他被认为帮助结束了冷战并振兴了美国经济。',
    achievements: [
      { id: 1, title: 'End of Cold War', titleZh: '结束冷战', description: 'Policies that contributed to Soviet collapse', descriptionZh: '促成苏联解体的政策', year: 1989 },
      { id: 2, title: 'Reaganomics', titleZh: '里根经济学', description: 'Tax cuts and deregulation policies', descriptionZh: '减税和放松管制政策', year: 1981 },
      { id: 3, title: 'INF Treaty', titleZh: '中导条约', description: 'Nuclear arms reduction treaty with USSR', descriptionZh: '与苏联的核武器削减条约', year: 1987 }
    ],
    keyEvents: [
      { id: 1, title: 'Assassination Attempt', titleZh: '暗杀未遂', date: '1981-03-30', description: 'Shot by John Hinckley Jr.', descriptionZh: '被小约翰·欣克利枪击', type: 'political' },
      { id: 2, title: 'Berlin Wall Speech', titleZh: '柏林墙演讲', date: '1987-06-12', description: '"Mr. Gorbachev, tear down this wall!"', descriptionZh: '"戈尔巴乔夫先生，拆掉这堵墙！"', type: 'foreign' }
    ],
    relations: [
      { id: 1, targetId: 41, targetName: 'George H. W. Bush', relationType: 'successor', description: 'Bush served as Reagan\'s Vice President', descriptionZh: '布什担任里根的副总统' }
    ],
    media: []
  },
  {
    id: 41,
    name: 'George H. W. Bush',
    nameZh: '乔治·H·W·布什',
    birthDate: '1924-06-12',
    deathDate: '2018-11-30',
    birthPlace: 'Milton, Massachusetts',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '1989-01-20',
    termEnd: '1993-01-20',
    termNumber: 41,
    vicePresident: 'Dan Quayle',
    portrait: bushGeorgeHWImg,
    biography: 'George Herbert Walker Bush was an American politician who served as the 41st president of the United States from 1989 to 1993. He led the nation during the end of the Cold War and the Gulf War.',
    biographyZh: '乔治·赫伯特·沃克·布什是美国政治家，于1989年至1993年担任美国第41任总统。他在冷战结束和海湾战争期间领导国家。',
    achievements: [
      { id: 1, title: 'Gulf War Victory', titleZh: '海湾战争胜利', description: 'Led coalition to liberate Kuwait', descriptionZh: '领导联军解放科威特', year: 1991 },
      { id: 2, title: 'Americans with Disabilities Act', titleZh: '美国残疾人法案', description: 'Signed landmark disability rights legislation', descriptionZh: '签署具有里程碑意义的残疾人权利立法', year: 1990 },
      { id: 3, title: 'End of Cold War', titleZh: '冷战结束', description: 'Oversaw peaceful end of Cold War', descriptionZh: '监督冷战和平结束', year: 1991 }
    ],
    keyEvents: [
      { id: 1, title: 'Fall of Berlin Wall', titleZh: '柏林墙倒塌', date: '1989-11-09', description: 'Berlin Wall fell during his presidency', descriptionZh: '柏林墙在他任期内倒塌', type: 'foreign' },
      { id: 2, title: 'Soviet Union Collapse', titleZh: '苏联解体', date: '1991-12-26', description: 'Soviet Union dissolved', descriptionZh: '苏联解体', type: 'foreign' }
    ],
    relations: [
      { id: 1, targetId: 40, targetName: 'Ronald Reagan', relationType: 'predecessor', description: 'Served as Reagan\'s Vice President', descriptionZh: '担任里根的副总统' },
      { id: 2, targetId: 43, targetName: 'George W. Bush', relationType: 'family', description: 'Father of George W. Bush', descriptionZh: '乔治·W·布什之父' }
    ],
    media: []
  },
  {
    id: 42,
    name: 'Bill Clinton',
    nameZh: '比尔·克林顿',
    birthDate: '1946-08-19',
    deathDate: null,
    birthPlace: 'Hope, Arkansas',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '1993-01-20',
    termEnd: '2001-01-20',
    termNumber: 42,
    vicePresident: 'Al Gore',
    portrait: clintonImg,
    biography: 'William Jefferson Clinton is an American politician who served as the 42nd president of the United States from 1993 to 2001. His presidency was marked by economic prosperity and the Monica Lewinsky scandal.',
    biographyZh: '威廉·杰斐逊·克林顿是美国政治家，于1993年至2001年担任美国第42任总统。他的总统任期以经济繁荣和莫妮卡·莱温斯基丑闻为标志。',
    achievements: [
      { id: 1, title: 'Economic Prosperity', titleZh: '经济繁荣', description: 'Longest peacetime economic expansion', descriptionZh: '最长的和平时期经济扩张', year: 1998 },
      { id: 2, title: 'Budget Surplus', titleZh: '预算盈余', description: 'First budget surplus since 1969', descriptionZh: '自1969年以来首次预算盈余', year: 1998 },
      { id: 3, title: 'NAFTA', titleZh: '北美自由贸易协定', description: 'Signed North American Free Trade Agreement', descriptionZh: '签署北美自由贸易协定', year: 1993 }
    ],
    keyEvents: [
      { id: 1, title: 'Impeachment', titleZh: '弹劾', date: '1998-12-19', description: 'Impeached by House but acquitted by Senate', descriptionZh: '被众议院弹劾但被参议院宣判无罪', type: 'political' }
    ],
    relations: [],
    media: []
  },
  {
    id: 43,
    name: 'George W. Bush',
    nameZh: '乔治·W·布什',
    birthDate: '1946-07-06',
    deathDate: null,
    birthPlace: 'New Haven, Connecticut',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '2001-01-20',
    termEnd: '2009-01-20',
    termNumber: 43,
    vicePresident: 'Dick Cheney',
    portrait: bushGeorgeWImg,
    biography: 'George Walker Bush is an American politician who served as the 43rd president of the United States from 2001 to 2009. His presidency was defined by the September 11 attacks and the subsequent War on Terror.',
    biographyZh: '乔治·沃克·布什是美国政治家，于2001年至2009年担任美国第43任总统。他的总统任期以9·11袭击和随后的反恐战争为标志。',
    achievements: [
      { id: 1, title: 'No Child Left Behind', titleZh: '不让一个孩子掉队', description: 'Education reform legislation', descriptionZh: '教育改革立法', year: 2002 },
      { id: 2, title: 'Medicare Part D', titleZh: '医疗保险D部分', description: 'Prescription drug benefit for seniors', descriptionZh: '老年人处方药福利', year: 2003 },
      { id: 3, title: 'PEPFAR', titleZh: '总统防治艾滋病紧急救援计划', description: 'Global AIDS relief program', descriptionZh: '全球艾滋病救济计划', year: 2003 }
    ],
    keyEvents: [
      { id: 1, title: 'September 11 Attacks', titleZh: '9·11袭击', date: '2001-09-11', description: 'Terrorist attacks on World Trade Center and Pentagon', descriptionZh: '对世贸中心和五角大楼的恐怖袭击', type: 'military' },
      { id: 2, title: 'Iraq War', titleZh: '伊拉克战争', date: '2003-03-20', description: 'Invasion of Iraq', descriptionZh: '入侵伊拉克', type: 'military' },
      { id: 3, title: 'Financial Crisis', titleZh: '金融危机', date: '2008-09-15', description: 'Global financial crisis began', descriptionZh: '全球金融危机开始', type: 'economic' }
    ],
    relations: [
      { id: 1, targetId: 41, targetName: 'George H. W. Bush', relationType: 'family', description: 'Son of George H. W. Bush', descriptionZh: '乔治·H·W·布什之子' }
    ],
    media: []
  },
  {
    id: 44,
    name: 'Barack Obama',
    nameZh: '贝拉克·奥巴马',
    birthDate: '1961-08-04',
    deathDate: null,
    birthPlace: 'Honolulu, Hawaii',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '2009-01-20',
    termEnd: '2017-01-20',
    termNumber: 44,
    vicePresident: 'Joe Biden',
    portrait: obamaImg,
    biography: 'Barack Hussein Obama II is an American politician and attorney who served as the 44th president of the United States from 2009 to 2017. He was the first African American president and won the Nobel Peace Prize in 2009.',
    biographyZh: '贝拉克·侯赛因·奥巴马二世是美国政治家和律师，于2009年至2017年担任美国第44任总统。他是第一位非裔美国总统，并于2009年获得诺贝尔和平奖。',
    achievements: [
      { id: 1, title: 'Affordable Care Act', titleZh: '平价医疗法案', description: 'Major healthcare reform legislation', descriptionZh: '重大医疗改革立法', year: 2010 },
      { id: 2, title: 'Osama bin Laden', titleZh: '击毙本·拉登', description: 'Ordered operation that killed bin Laden', descriptionZh: '下令击毙本·拉登的行动', year: 2011 },
      { id: 3, title: 'Paris Climate Agreement', titleZh: '巴黎气候协定', description: 'Signed international climate agreement', descriptionZh: '签署国际气候协议', year: 2015 },
      { id: 4, title: 'Nobel Peace Prize', titleZh: '诺贝尔和平奖', description: 'Won Nobel Peace Prize', descriptionZh: '获得诺贝尔和平奖', year: 2009 }
    ],
    keyEvents: [
      { id: 1, title: 'First African American President', titleZh: '首位非裔美国总统', date: '2009-01-20', description: 'Made history as first Black president', descriptionZh: '成为首位黑人总统创造历史', type: 'political' },
      { id: 2, title: 'Same-Sex Marriage', titleZh: '同性婚姻', date: '2015-06-26', description: 'Supreme Court legalized same-sex marriage', descriptionZh: '最高法院使同性婚姻合法化', type: 'social' }
    ],
    relations: [
      { id: 1, targetId: 46, targetName: 'Joe Biden', relationType: 'ally', description: 'Biden served as Obama\'s Vice President', descriptionZh: '拜登担任奥巴马的副总统' }
    ],
    media: []
  },
  {
    id: 45,
    name: 'Donald Trump',
    nameZh: '唐纳德·特朗普',
    birthDate: '1946-06-14',
    deathDate: null,
    birthPlace: 'Queens, New York City',
    party: 'Republican',
    partyZh: '共和党',
    termStart: '2017-01-20',
    termEnd: '2021-01-20',
    termNumber: 45,
    vicePresident: 'Mike Pence',
    portrait: trumpImg,
    biography: 'Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. He was the first president with no prior political or military experience.',
    biographyZh: '唐纳德·约翰·特朗普是美国政治家、媒体人物和商人，于2017年至2021年担任美国第45任总统。他是第一位没有政治或军事经验的总统。',
    achievements: [
      { id: 1, title: 'Tax Cuts and Jobs Act', titleZh: '减税与就业法案', description: 'Major tax reform legislation', descriptionZh: '重大税收改革立法', year: 2017 },
      { id: 2, title: 'Abraham Accords', titleZh: '亚伯拉罕协议', description: 'Middle East peace agreements', descriptionZh: '中东和平协议', year: 2020 },
      { id: 3, title: 'Operation Warp Speed', titleZh: '曲速行动', description: 'Accelerated COVID-19 vaccine development', descriptionZh: '加速新冠疫苗开发', year: 2020 }
    ],
    keyEvents: [
      { id: 1, title: 'First Impeachment', titleZh: '首次弹劾', date: '2019-12-18', description: 'Impeached for abuse of power', descriptionZh: '因滥用权力被弹劾', type: 'political' },
      { id: 2, title: 'COVID-19 Pandemic', titleZh: '新冠疫情', date: '2020-03-13', description: 'Declared national emergency', descriptionZh: '宣布国家紧急状态', type: 'social' },
      { id: 3, title: 'Second Impeachment', titleZh: '第二次弹劾', date: '2021-01-13', description: 'Impeached for incitement of insurrection', descriptionZh: '因煽动叛乱被弹劾', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 46, targetName: 'Joe Biden', relationType: 'successor', description: 'Succeeded by Biden in 2021', descriptionZh: '2021年由拜登继任' }
    ],
    media: []
  },
  {
    id: 46,
    name: 'Joe Biden',
    nameZh: '乔·拜登',
    birthDate: '1942-11-20',
    deathDate: null,
    birthPlace: 'Scranton, Pennsylvania',
    party: 'Democratic',
    partyZh: '民主党',
    termStart: '2021-01-20',
    termEnd: '2025-01-20',
    termNumber: 46,
    vicePresident: 'Kamala Harris',
    portrait: bidenImg,
    biography: 'Joseph Robinette Biden Jr. is an American politician who served as the 46th president of the United States from 2021 to 2025. He was the oldest person to assume the presidency and previously served as Vice President under Obama.',
    biographyZh: '小约瑟夫·罗比内特·拜登是美国政治家，于2021年至2025年担任美国第46任总统。他是就任总统时年龄最大的人，此前曾在奥巴马手下担任副总统。',
    achievements: [
      { id: 1, title: 'American Rescue Plan', titleZh: '美国救援计划', description: 'COVID-19 relief legislation', descriptionZh: '新冠疫情救济立法', year: 2021 },
      { id: 2, title: 'Infrastructure Investment', titleZh: '基础设施投资', description: 'Bipartisan infrastructure law', descriptionZh: '两党基础设施法', year: 2021 },
      { id: 3, title: 'CHIPS and Science Act', titleZh: '芯片与科学法案', description: 'Boosted domestic semiconductor manufacturing', descriptionZh: '促进国内半导体制造', year: 2022 },
      { id: 4, title: 'Inflation Reduction Act', titleZh: '通胀削减法案', description: 'Climate and healthcare legislation', descriptionZh: '气候和医疗立法', year: 2022 }
    ],
    keyEvents: [
      { id: 1, title: 'Oldest President', titleZh: '最年长总统', date: '2021-01-20', description: 'Became oldest person to assume presidency', descriptionZh: '成为就任总统时年龄最大的人', type: 'political' },
      { id: 2, title: 'Afghanistan Withdrawal', titleZh: '阿富汗撤军', date: '2021-08-30', description: 'Completed withdrawal from Afghanistan', descriptionZh: '完成从阿富汗撤军', type: 'military' },
      { id: 3, title: 'Withdrew from 2024 Race', titleZh: '退出2024年竞选', date: '2024-07-21', description: 'Announced withdrawal from presidential race', descriptionZh: '宣布退出总统竞选', type: 'political' }
    ],
    relations: [
      { id: 1, targetId: 44, targetName: 'Barack Obama', relationType: 'ally', description: 'Served as Obama\'s Vice President', descriptionZh: '担任奥巴马的副总统' },
      { id: 2, targetId: 45, targetName: 'Donald Trump', relationType: 'predecessor', description: 'Succeeded Trump as president', descriptionZh: '继特朗普之后担任总统' }
    ],
    media: []
  }
]

export const parties = [
  { value: '', label: 'All Parties', labelZh: '所有党派' },
  { value: 'Democratic', label: 'Democratic', labelZh: '民主党' },
  { value: 'Republican', label: 'Republican', labelZh: '共和党' },
  { value: 'Democratic-Republican', label: 'Democratic-Republican', labelZh: '民主共和党' },
  { value: 'Federalist', label: 'Federalist', labelZh: '联邦党' },
  { value: 'Whig', label: 'Whig', labelZh: '辉格党' },
  { value: 'Independent', label: 'Independent', labelZh: '无党派' }
]

export const centuries = [
  { value: '', label: 'All Centuries', labelZh: '所有世纪' },
  { value: '18', label: '18th Century', labelZh: '18世纪' },
  { value: '19', label: '19th Century', labelZh: '19世纪' },
  { value: '20', label: '20th Century', labelZh: '20世纪' },
  { value: '21', label: '21st Century', labelZh: '21世纪' }
]
