<template>
  <div class="relation-graph" ref="chartRef"></div>
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

  // 合并同一个人的多个任期（如特朗普45和47）
  const uniquePresidentsMap = new Map<string, any>()
  props.presidents.forEach(p => {
    const key = p.name // 用名字作为唯一标识
    if (!uniquePresidentsMap.has(key)) {
      uniquePresidentsMap.set(key, {
        ...p,
        termNumbers: [p.termNumber]
      })
    } else {
      // 合并任期号
      const existing = uniquePresidentsMap.get(key)
      existing.termNumbers.push(p.termNumber)
      // 合并关系，去重
      p.relations.forEach(r => {
        if (!existing.relations.find((er: any) => er.targetId === r.targetId && er.relationType === r.relationType)) {
          existing.relations.push(r)
        }
      })
    }
  })

  const uniquePresidents = Array.from(uniquePresidentsMap.values())

  // Create nodes - 只包含有关系的总统
  const presidentIdsWithRelations = new Set<number>()
  uniquePresidents.forEach(p => {
    if (p.relations.length > 0) {
      presidentIdsWithRelations.add(p.id)
      p.relations.forEach((r: any) => {
        presidentIdsWithRelations.add(r.targetId)
      })
    }
  })

  const filteredPresidents = uniquePresidents.filter(p => presidentIdsWithRelations.has(p.id))

  const nodes = filteredPresidents.map(p => ({
    id: p.id.toString(),
    name: isZh ? p.nameZh : p.name,
    symbolSize: 45,
    category: getCategoryIndex(p.party),
    label: {
      show: true,
      fontSize: 11,
      color: '#333'
    }
  }))

  // Create links from relations - 去重双向关系
  const links: any[] = []
  const linkSet = new Set<string>()

  filteredPresidents.forEach(p => {
    p.relations.forEach((r: any) => {
      if (filteredPresidents.find(pr => pr.id === r.targetId)) {
        // 创建唯一的链接标识（排序确保 A-B 和 B-A 被视为相同）
        const ids = [p.id, r.targetId].sort((a, b) => a - b)
        const linkKey = `${ids[0]}-${ids[1]}-${r.relationType}`

        if (!linkSet.has(linkKey)) {
          linkSet.add(linkKey)
          links.push({
            source: p.id.toString(),
            target: r.targetId.toString(),
            label: {
              show: false,
              formatter: isZh ? r.descriptionZh : r.description
            },
            lineStyle: {
              color: getRelationColor(r.relationType),
              width: 2,
              curveness: 0.1
            }
          })
        }
      }
    })
  })

  const categories = [
    { name: isZh ? '民主党' : 'Democratic' },
    { name: isZh ? '共和党' : 'Republican' },
    { name: isZh ? '其他' : 'Other' }
  ]

  return {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        if (params.dataType === 'node') {
          return params.name
        }
        return ''
      }
    },
    legend: {
      data: categories.map(c => c.name),
      orient: 'vertical',
      left: 'left',
      top: 'center'
    },
    series: [{
      type: 'graph',
      layout: 'force',
      data: nodes,
      links: links,
      categories: categories,
      roam: true,
      draggable: true,
      label: {
        show: true,
        position: 'bottom',
        fontSize: 11,
        distance: 5
      },
      force: {
        repulsion: 800,
        edgeLength: [150, 250],
        gravity: 0.1,
        friction: 0.6,
        layoutAnimation: true
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 4
        }
      }
    }]
  }
}

const getCategoryIndex = (party: string): number => {
  if (party.toLowerCase().includes('democratic') && !party.toLowerCase().includes('republican')) return 0
  if (party.toLowerCase().includes('republican')) return 1
  return 2
}

const getRelationColor = (type: string): string => {
  const colors: Record<string, string> = {
    predecessor: '#10b981',
    successor: '#10b981',
    ally: '#3b82f6',
    opponent: '#ef4444',
    family: '#8b5cf6',
    mentor: '#f59e0b'
  }
  return colors[type] || '#6b7280'
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
.relation-graph {
  width: 100%;
  height: 600px;
}
</style>
