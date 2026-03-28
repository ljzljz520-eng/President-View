<template>
  <div class="party-pie-chart" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import type { President } from '@/types'
import { useAppStore } from '@/stores'

const props = defineProps<{
  presidents: President[]
}>()

const appStore = useAppStore()
const chartRef = ref<HTMLElement>()
let chart: echarts.ECharts | null = null

const getOption = () => {
  const isZh = appStore.locale === 'zh'

  // Count by party
  const partyCounts: Record<string, number> = {}
  props.presidents.forEach(p => {
    const party = p.party
    partyCounts[party] = (partyCounts[party] || 0) + 1
  })

  const partyColors: Record<string, string> = {
    'Democratic': '#3b82f6',
    'Republican': '#ef4444',
    'Democratic-Republican': '#8b5cf6',
    'Federalist': '#10b981',
    'Whig': '#f59e0b',
    'Independent': '#6b7280'
  }

  const partyNamesZh: Record<string, string> = {
    'Democratic': '民主党',
    'Republican': '共和党',
    'Democratic-Republican': '民主共和党',
    'Federalist': '联邦党',
    'Whig': '辉格党',
    'Independent': '无党派'
  }

  const data = Object.entries(partyCounts).map(([party, count]) => ({
    name: isZh ? (partyNamesZh[party] || party) : party,
    value: count,
    itemStyle: {
      color: partyColors[party] || '#6b7280'
    }
  }))

  return {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'center'
    },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{b}\n{c}'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      data: data
    }]
  }
}

const initChart = () => {
  if (!chartRef.value) return

  chart = echarts.init(chartRef.value)
  chart.setOption(getOption())
}

const handleResize = () => {
  chart?.resize()
}

watch(() => [props.presidents, appStore.locale], () => {
  chart?.setOption(getOption())
})

onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
})
</script>

<style lang="scss" scoped>
.party-pie-chart {
  width: 100%;
  height: 300px;
}
</style>
