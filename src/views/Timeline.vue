<template>
  <div class="timeline-page">
    <h1>美国总统任期时间线</h1>
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { usePresidentStore } from '@/stores/president'

const chartRef = ref<HTMLElement | null>(null)
const presidentStore = usePresidentStore()

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value)
    
    const data = presidentStore.presidents.map(p => ({
      name: p.name,
      value: [p.termStart, p.termEnd, p.termNumber],
      itemStyle: {
        color: getPartyColor(p.party)
      }
    }))

    const option = {
      title: {
        text: '美国历届总统任期'
      },
      tooltip: {
        formatter: (params: any) => {
          return `${params.data.name}<br/>任期: ${params.data.value[0]} - ${params.data.value[1]}`
        }
      },
      xAxis: {
        type: 'time'
      },
      yAxis: {
        type: 'value',
        name: '任数'
      },
      series: [{
        type: 'scatter',
        data: data,
        symbolSize: 20
      }]
    }

    chart.setOption(option)
  }
})

const getPartyColor = (party: string) => {
  const colors: Record<string, string> = {
    '民主党': '#337ab7',
    '共和党': '#d9534f',
    '民主共和党': '#5cb85c',
    '辉格党': '#f0ad4e',
    '联邦党': '#5bc0de',
    '无党籍': '#777'
  }
  return colors[party] || '#777'
}
</script>

<style scoped>
.timeline-page {
  padding: 20px;
}

.chart-container {
  width: 100%;
  height: 600px;
  margin-top: 20px;
}
</style>
