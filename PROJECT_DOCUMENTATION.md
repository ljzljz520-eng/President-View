# 美国历届总统资料展示站 - 项目文档

## 项目技术栈
- Vue 3
- TypeScript
- Vite
- Element Plus
- Pinia (状态管理)
- Vue Router
- ECharts + vue-echarts (数据可视化)

---

## 路由树

```
/
├── /presidents              # 总统列表页 (默认首页)
│   └── /presidents/:id      # 总统详情页 (动态路由)
└── /timeline                # 时间线可视化页
```

### 路由详情

| 路由路径 | 页面名称 | 组件位置 | 说明 |
|---------|---------|---------|------|
| `/` | 重定向 | - | 自动重定向到 `/presidents` |
| `/presidents` | 总统列表页 | `src/views/PresidentList.vue` | 展示所有总统的卡片列表，支持搜索功能 |
| `/presidents/:id` | 总统详情页 | `src/views/PresidentDetail.vue` | 展示单个总统的详细信息，接收 `id` 参数 |
| `/timeline` | 时间线可视化页 | `src/views/TimelineView.vue` | 使用 ECharts 可视化展示总统历史时间线和政党分布 |

---

## 页面数据来源

### 1. 总统列表页 (`/presidents`)

**数据来源文件**:
- `src/stores/presidentStore.ts` - Pinia 状态管理
- `src/api/presidentApi.ts` - API 接口层
- `src/api/mockData.ts` - Mock 数据

**数据获取流程**:
1. 页面挂载时调用 `presidentStore.fetchAllPresidents()`
2. 通过 `presidentApi.getAllPresidents()` 获取所有总统数据
3. 数据从 `mockPresidents` 数组中返回

**搜索功能**:
- 调用 `presidentStore.searchPresidents(keyword)`
- 通过 `presidentApi.searchPresidents(keyword)` 过滤数据
- 支持按姓名（中英文）、政党搜索

---

### 2. 总统详情页 (`/presidents/:id`)

**数据来源文件**:
- `src/stores/presidentStore.ts` - Pinia 状态管理
- `src/api/presidentApi.ts` - API 接口层
- `src/api/mockData.ts` - Mock 数据

**数据获取流程**:
1. 从路由参数中获取总统 `id`
2. 调用 `presidentStore.fetchPresidentById(id)`
3. 通过 `presidentApi.getPresidentById(id)` 获取单个总统数据
4. 数据从 `mockPresidents` 数组中按 `id` 过滤返回

**显示数据字段**:
- 基本信息：姓名、英文名、任期、政党、出生日期、逝世日期、出生地、教育背景、职业、副总统
- 主要成就
- 人物简介

---

### 3. 时间线可视化页 (`/timeline`)

**数据来源文件**:
- `src/stores/presidentStore.ts` - Pinia 状态管理
- `src/api/presidentApi.ts` - API 接口层
- `src/api/mockData.ts` - Mock 数据

**数据获取流程**:
1. 页面挂载时调用 `presidentStore.fetchAllPresidents()`（如果数据未加载）
2. 使用 `presidentStore.partyStats` 计算政党分布统计
3. 数据用于生成两种可视化图表：

**时间线视图**:
- X轴：年份（1780-2030）
- Y轴：总统姓名
- 每个条表示总统任期，颜色代表政党

**政党分布视图**:
- 饼图展示各政党总统数量占比
- 颜色与政党对应

---

## 数据层架构

### 数据流向

```
Mock Data (mockData.ts)
    ↓
API Layer (presidentApi.ts)
    ↓
Pinia Store (presidentStore.ts)
    ↓
Vue Components (Views)
```

### 数据文件说明

| 文件路径 | 作用 |
|---------|------|
| `src/types/president.ts` | TypeScript 类型定义，定义 `President` 接口 |
| `src/api/mockData.ts` | 存储模拟总统数据，包含 11 位总统的详细信息 |
| `src/api/presidentApi.ts` | API 接口层，封装数据获取方法，支持异步 |
| `src/stores/presidentStore.ts` | Pinia 状态管理，提供响应式数据和业务逻辑 |

---

## 项目目录结构

```
src/
├── api/
│   ├── mockData.ts          # 模拟数据
│   └── presidentApi.ts      # API 接口
├── components/
│   ├── Navbar.vue           # 导航栏组件
│   └── PresidentCard.vue    # 总统卡片组件
├── router/
│   └── index.ts             # 路由配置
├── stores/
│   └── presidentStore.ts    # Pinia 状态管理
├── types/
│   └── president.ts         # TypeScript 类型定义
├── views/
│   ├── PresidentList.vue    # 列表页
│   ├── PresidentDetail.vue  # 详情页
│   └── TimelineView.vue     # 时间线页
├── App.vue                  # 根组件
├── main.ts                  # 应用入口
└── vite-env.d.ts            # Vite 环境类型
```

---

## 运行说明

1. 安装依赖: `npm install`
2. 启动开发服务器: `npm run dev`
3. 构建生产版本: `npm run build`
4. 预览生产版本: `npm run preview`
