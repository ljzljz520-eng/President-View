<template>
  <div class="timeline-chart" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import type { TimelineItem } from '@/types'
import { useAppStore } from '@/stores'

const props = defineProps<{
  data: TimelineItem[]
}>()

const appStore = useAppStore()
const chartRef = ref<HTMLElement>()
let chart: echarts.ECharts | null = null

const getOption = () => {
  const isZh = appStore.locale === 'zh'

  const categories = ['inauguration', 'event', 'achievement', 'end']
  const categoryColors = {
    inauguration: '#10b981',
    event: '#f59e0b',
    achievement: '#3b82f6',
    end: '#ef4444'
  }

  const seriesData = props.data.map(item => ({
    name: isZh ? item.titleZh : item.title,
    value: [
      categories.indexOf(item.type),
      item.year,
      item.year,
      isZh ? item.descriptionZh : item.description
    ],
    itemStyle: {
      color: categoryColors[item.type]
    }
  }))

  return {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        return `<strong>${params.name}</strong><br/>
                ${params.value[1]}<br/>
                ${params.value[3]}`
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: isZh
        ? ['就职', '事件', '成就', '结束']
        : ['Inauguration', 'Event', 'Achievement', 'End'],
      axisLabel: {
        color: '#4a5568'
      }
    },
    yAxis: {
      type: 'value',
      min: 1780,
      max: 2030,
      axisLabel: {
        color: '#4a5568'
      }
    },
    series: [{
      type: 'scatter',
      symbolSize: 20,
      data: seriesData,
      emphasis: {
        focus: 'self',
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
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

watch(() => [props.data, appStore.locale], () => {
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
.timeline-chart {
  width: 100%;
  height: 400px;
}
</style>
