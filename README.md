# 美国历届总统资料展示网站

## How to Run

### 使用 Docker Compose（推荐）

```bash
# 构建并启动服务
docker-compose up -d --build

# 访问应用
# 前端: http://localhost:8081
```

### 本地开发

```bash
# 进入前端目录
cd frontend-admin

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行单元测试
npm run test

# 运行 E2E 测试
npm run test:e2e
```

## Services

| 服务 | 端口 | 描述 |
|------|------|------|
| Frontend-Admin | 8081 | Vue3 前端应用 |

## 测试账号

本项目为纯前端展示类网站，无需登录账号即可访问所有功能。

## 题目内容

基于 Vue3、Vite、TypeScript 、Pinia技术栈，结合 Element Plus 组件库、ECharts 可视化工具，开发一款聚焦美国历届总统的资料展示类网站，核心要求如下：

一、技术能力支撑

集成国际化（I18n）能力，支持多语言切换，满足不同语言用户的访问需求；
支持PC、平板、移动端等多端显示

基于 Vite 构建工具保障项目的编译效率与开发体验，TypeScript 保障代码类型安全与可维护性；

借助 Element Plus 实现界面组件的统一化与交互标准化，ECharts 按需实现总统相关数据的可视化呈现（如任职周期、历史背景等维度）。

二、核心功能模块

总统列表页：展示美国历史上所有总统的基础信息列表，支持多维度检索（如姓名、任职时段、党派等），支持快速筛选与精准搜索；

总统详情页：点击列表项可进入对应总统的详情页面，完整呈现其个人资料（生平、政绩、历史背景等），并支持图片、视频等多媒体素材的展示与点击查看；
思维导图：展示美国总统历史人际关系等
时间线可视化：以时间线为核心载体，按历史时序梳理并展示每位总统的任职阶段、关键事件、核心成就等信息，直观呈现美国历任总统的历史脉络。
---

## 项目介绍

### 技术栈

- **框架**: Vue 3.4+ (Composition API)
- **构建工具**: Vite 5.x
- **语言**: TypeScript 5.x
- **状态管理**: Pinia
- **UI 组件库**: Element Plus
- **图表库**: ECharts 5.x
- **国际化**: Vue I18n
- **路由**: Vue Router 4.x
- **CSS 预处理器**: SCSS
- **单元测试**: Vitest + Vue Test Utils
- **E2E 测试**: Playwright

### 环境变量配置

项目使用 Vite 的环境变量功能，配置文件：

| 文件 | 说明 |
|------|------|
| `.env` | 基础配置（所有环境） |
| `.env.development` | 开发环境配置 |
| `.env.production` | 生产环境配置 |
| `.env.example` | 配置示例文件 |

主要环境变量：

```bash
VITE_APP_TITLE=美国总统信息网站    # 应用标题
VITE_APP_VERSION=1.0.0            # 应用版本
VITE_API_BASE_URL=/api            # API 地址
VITE_LOG_LEVEL=INFO               # 日志级别 (DEBUG|INFO|WARN|ERROR)
VITE_LOG_ENABLED=true             # 是否启用日志
```

### 总统头像图片

项目包含 46 位美国总统的本地头像图片，存放于 `frontend-admin/src/assets/img/presidents/` 目录。

图片命名规范：`姓-名.扩展名`（小写，连字符分隔）

| 总统 | 文件名 |
|------|--------|
| George Washington | washington.jpg |
| John Adams | adams-john.jpg |
| Thomas Jefferson | jefferson.jpg |
| James Madison | madison.jpg |
| James Monroe | monroe.jpg |
| John Quincy Adams | adams-john-quincy.webp |
| Andrew Jackson | jackson.jpg |
| Martin Van Buren | vanburen-martin.webp |
| William Henry Harrison | harrison-william.webp |
| John Tyler | tyler-john.webp |
| James K. Polk | polk-james.webp |
| Zachary Taylor | taylor-zachary.webp |
| Millard Fillmore | fillmore-millard.webp |
| Franklin Pierce | pierce-franklin.webp |
| James Buchanan | buchanan-james.jpeg |
| Abraham Lincoln | lincoln.jpg |
| Andrew Johnson | johnson-andrew.webp |
| Ulysses S. Grant | grant-ulysses.webp |
| Rutherford B. Hayes | hayes-rutherford.webp |
| James A. Garfield | garfield-james.webp |
| Chester A. Arthur | arthur-chester.webp |
| Grover Cleveland | cleveland-grover.webp |
| Benjamin Harrison | harrison-benjamin.webp |
| William McKinley | mckinley-william.webp |
| Theodore Roosevelt | roosevelt-theodore.webp |
| William Howard Taft | taft-william.webp |
| Woodrow Wilson | wilson-woodrow.webp |
| Warren G. Harding | harding-warren.webp |
| Calvin Coolidge | coolidge-calvin.webp |
| Herbert Hoover | hoover-herbert.webp |
| Franklin D. Roosevelt | roosevelt-franklin.jpg |
| Harry S. Truman | truman-harry.webp |
| Dwight D. Eisenhower | eisenhower-dwight.webp |
| John F. Kennedy | kennedy.jpg |
| Lyndon B. Johnson | johnson-lyndon.webp |
| Richard Nixon | nixon-richard.webp |
| Gerald Ford | ford-gerald.webp |
| Jimmy Carter | carter-jimmy.webp |
| Ronald Reagan | reagan-ronald.webp |
| George H. W. Bush | bush-george-hw.webp |
| Bill Clinton | clinton-bill.webp |
| George W. Bush | bush-george-w.webp |
| Barack Obama | obama.jpg |
| Donald Trump | trump.jpg |
| Joe Biden | biden.jpg |

### 项目结构

```
├── frontend-admin/                     # 前端项目
│   ├── src/
│   │   ├── assets/                     # 静态资源
│   │   │   ├── img/presidents/         # 46位总统头像图片
│   │   │   └── styles/                 # 全局样式
│   │   │       ├── global.scss
│   │   │       └── variables.scss
│   │   ├── components/                 # 公共组件
│   │   │   ├── charts/                 # 图表组件
│   │   │   │   ├── PartyPieChart.vue
│   │   │   │   ├── RelationGraph.vue
│   │   │   │   ├── TimelineChart.vue
│   │   │   │   └── index.ts
│   │   │   ├── common/                 # 通用组件
│   │   │   │   ├── EmptyState.vue
│   │   │   │   ├── LoadingSpinner.vue
│   │   │   │   ├── PresidentCard.vue
│   │   │   │   └── index.ts
│   │   │   └── layout/                 # 布局组件
│   │   │       ├── AppHeader.vue
│   │   │       ├── AppFooter.vue
│   │   │       └── index.ts
│   │   ├── config/                     # 配置文件
│   │   │   └── env.ts                  # 环境变量配置
│   │   ├── data/                       # 静态数据
│   │   │   ├── presidents.ts           # 46位总统完整数据
│   │   │   ├── timeline.ts             # 时间线数据
│   │   │   └── index.ts
│   │   ├── i18n/                       # 国际化配置
│   │   │   ├── locales/                # 语言包
│   │   │   │   ├── en.ts
│   │   │   │   └── zh.ts
│   │   │   └── index.ts
│   │   ├── router/                     # 路由配置
│   │   │   └── index.ts
│   │   ├── stores/                     # Pinia 状态管理
│   │   │   ├── app.ts
│   │   │   ├── presidents.ts
│   │   │   └── index.ts
│   │   ├── types/                      # TypeScript 类型定义
│   │   │   ├── president.ts
│   │   │   └── index.ts
│   │   ├── utils/                      # 工具函数
│   │   │   ├── errorHandler.ts         # 全局错误处理
│   │   │   ├── logger.ts               # 日志系统
│   │   │   └── index.ts
│   │   ├── views/                      # 页面视图
│   │   │   ├── home/HomePage.vue       # 首页
│   │   │   ├── presidents/PresidentsList.vue  # 总统列表页
│   │   │   ├── detail/PresidentDetail.vue     # 总统详情页
│   │   │   ├── timeline/TimelinePage.vue      # 时间线页面
│   │   │   ├── mindmap/MindMapPage.vue        # 关系图谱页面
│   │   │   └── error/NotFound.vue             # 404页面
│   │   ├── App.vue                     # 根组件
│   │   ├── main.ts                     # 入口文件
│   │   ├── env.d.ts                    # 环境类型声明
│   │   ├── auto-imports.d.ts           # 自动导入类型
│   │   └── components.d.ts             # 组件类型声明
│   ├── tests/                          # 测试文件
│   │   ├── unit/                       # 单元测试
│   │   │   ├── components/PresidentCard.spec.ts
│   │   │   ├── stores/presidents.spec.ts
│   │   │   ├── utils/logger.spec.ts
│   │   │   └── data/presidents.spec.ts
│   │   ├── e2e/                        # E2E 测试
│   │   │   ├── home.spec.ts
│   │   │   ├── presidents.spec.ts
│   │   │   ├── timeline.spec.ts
│   │   │   └── responsive.spec.ts
│   │   ├── __mocks__/                  # 测试 Mock
│   │   │   ├── fileMock.ts
│   │   │   └── presidents.ts
│   │   └── setup.ts                    # 测试配置
│   ├── public/                         # 公共资源
│   │   └── favicon.svg
│   ├── .env                            # 环境变量
│   ├── .env.development                # 开发环境变量
│   ├── .env.production                 # 生产环境变量
│   ├── .env.example                    # 环境变量示例
│   ├── .dockerignore                   # Docker 忽略文件
│   ├── index.html                      # HTML 入口
│   ├── package.json                    # 项目依赖
│   ├── vite.config.ts                  # Vite 配置
│   ├── vitest.config.ts                # Vitest 配置
│   ├── playwright.config.ts            # Playwright 配置
│   ├── tsconfig.json                   # TypeScript 配置
│   ├── tsconfig.node.json              # Node TypeScript 配置
│   ├── Dockerfile                      # Docker 构建文件
│   └── nginx.conf                      # Nginx 配置
├── docker-compose.yml                  # Docker Compose 配置
├── .gitignore                          # Git 忽略文件
└── README.md                           # 项目说明
```

### 功能特性

- ✅ 响应式设计，支持 PC/平板/移动端
- ✅ 中英文双语切换（默认中文）
- ✅ 完整的 46 位美国总统数据及本地头像
- ✅ 总统列表多维度筛选搜索
- ✅ 总统详情多媒体展示（图片/视频）
- ✅ 历史时间线可视化
- ✅ 总统关系图谱
- ✅ ECharts 数据可视化图表
- ✅ 全局错误处理与 404 页面
- ✅ 日志系统（支持多级别、存储、导出）
- ✅ 环境变量配置
- ✅ 单元测试 (Vitest) - 49 个测试用例
- ✅ E2E 测试 (Playwright)
- ✅ Docker 容器化部署

### 测试

```bash
# 运行所有单元测试
npm run test

# 监听模式运行测试
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage

# 运行 E2E 测试
npm run test:e2e

# E2E 测试 UI 模式
npm run test:e2e:ui
```

### 日志系统

项目内置日志系统，支持：

- 4 个日志级别：DEBUG、INFO、WARN、ERROR
- 控制台彩色输出
- localStorage 持久化存储
- 日志导出与下载
- 模块化日志器

```typescript
import { createModuleLogger } from '@/utils/logger'

const log = createModuleLogger('MyModule')
log.debug('调试信息')
log.info('普通信息')
log.warn('警告信息')
log.error('错误信息', error)
```
