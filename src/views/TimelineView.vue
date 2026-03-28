<template>
  <div class="timeline-view">
    <h1>美国总统历史时间线</h1>
    
    <div class="view-controls">
      <el-radio-group v-model="viewMode" @change="updateChart">
        <el-radio-button value="timeline">时间线视图</el-radio-button>
        <el-radio-button value="party">政党分布</el-radio-button>
      </el-radio-group>
    </div>

    <div v-if="loading" class="loading-container">
      <el-skeleton :rows="10" animated />
    </div>

    <div v-else class="charts-container">
      <div v-show="viewMode === 'timeline'" class="chart-wrapper">
        <v-chart :option="timelineOption" autoresize />
      </div>
      <div v-show="viewMode === 'party'" class="chart-wrapper">
        <v-chart :option="partyChartOption" autoresize />
      </div>
    </div>

    <el-card class="stats-card">
      <template #header>
        <div class="card-header">
          <el-icon><DataAnalysis /></el-icon>
          <span>数据统计</span>
        </div>
      </template>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">{{ presidentCount }}</div>
          <div class="stat-label">总统总数</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ Object.keys(partyStats).length }}</div>
          <div class="stat-label">政党数量</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ yearRange }}</div>
          <div class="stat-label">时间跨度(年)</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { usePresidentStore } from '../stores/presidentStore'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import type { EChartsOption } from 'echarts'
import { DataAnalysis } from '@element-plus/icons-vue'
import { partyColors } from '../api/mockData'

use([CanvasRenderer, BarChart, PieChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent])

const store = usePresidentStore()
const viewMode = ref('timeline')

const presidents = computed(() => store.allPresidents)
const loading = computed(() => store.loading)
const presidentCount = computed(() => store.presidentCount)
const partyStats = computed(() => store.partyStats)

const yearRange = computed(() => {
  if (presidents.value.length === 0) return 0
  const years = presidents.value.flatMap(p => [p.termStart, p.termEnd])
  const max = Math.max(...years)
  const min = Math.min(...years)
  return max - min
})

const timelineOption = ref<EChartsOption>({})
const partyChartOption = ref<EChartsOption>({})

function updateTimelineChart() {
  const presidentNames = presidents.value.map(p => `${p.id}. ${p.name}`)
  
  const backgroundData = presidents.value.map(p => p.termStart)
  const barData = presidents.value.map(p => ({
    value: p.termEnd - p.termStart,
    itemStyle: {
      color: partyColors[p.party] || '#808080'
    },
    party: p.party,
    presidentId: p.id
  }))

  timelineOption.value = {
    title: {
      text: '美国总统任期时间线',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const president = presidents.value.find(p => p.id === params.data.presidentId)
        if (president) {
          return `${president.name} (${president.nameEn})<br/>任期: ${president.term}<br/>政党: ${president.party}`
        }
        return ''
      }
    },
    grid: {
      left: '15%',
      right: '3%',
      bottom: '10%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '年份',
      min: 1780,
      max: 2030
    },
    yAxis: {
      type: 'category',
      data: presidentNames,
      inverse: true,
      axisLabel: {
        fontSize: 10,
        width: 100,
        overflow: 'truncate'
      }
    },
    series: [
      {
        type: 'bar',
        data: backgroundData,
        barWidth: '60%',
        itemStyle: {
          color: 'transparent'
        },
        stack: 'total'
      },
      {
        type: 'bar',
        data: barData,
        barWidth: '60%',
        stack: 'total',
        label: {
          show: true,
          position: 'right',
          formatter: (params: any) => {
            return params.data.party || ''
          },
          fontSize: 9
        }
      }
    ]
  }
}

function updatePartyChart() {
  const data = Object.entries(partyStats.value).map(([name, value]) => ({
    name,
    value,
    itemStyle: {
      color: partyColors[name] || '#808080'
    }
  }))

  partyChartOption.value = {
    title: {
      text: '美国总统政党分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} 位 ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['60%', '50%'],
        data: data,
        label: {
          show: true,
          formatter: '{b}: {c}'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

function updateChart() {
  if (viewMode.value === 'timeline') {
    updateTimelineChart()
  } else {
    updatePartyChart()
  }
}

watch(
  () => presidents.value,
  () => {
    updateChart()
  },
  { deep: true }
)

onMounted(async () => {
  if (presidents.value.length === 0) {
    await store.fetchAllPresidents()
  }
  updateChart()
})
</script>

<style scoped>
.timeline-view {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.timeline-view h1 {
  color: #1e3a8a;
  margin-bottom: 20px;
}

.view-controls {
  margin-bottom: 20px;
}

.charts-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.chart-wrapper {
  height: 600px;
}

.stats-card {
  margin-top: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: #1e3a8a;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 8px;
}

.stat-value {
  font-size: 36px;
  font-weight: bold;
  color: #1e3a8a;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .chart-wrapper {
    height: 400px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
