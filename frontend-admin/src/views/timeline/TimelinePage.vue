<template>
  <div class="timeline-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1>{{ t('timeline.title') }}</h1>
        <p>{{ t('timeline.subtitle') }}</p>
      </header>

      <!-- Filter Section -->
      <section class="filter-section" aria-label="筛选条件">
        <div class="filter-card">
          <el-select
            v-model="selectedType"
            :placeholder="t('timeline.filterByType')"
            clearable
            size="large"
            aria-label="按事件类型筛选"
          >
            <el-option value="" :label="t('timeline.eventTypes.all')" />
            <el-option value="inauguration" :label="t('timeline.eventTypes.inauguration')" />
            <el-option value="event" :label="t('timeline.eventTypes.event')" />
            <el-option value="achievement" :label="t('timeline.eventTypes.achievement')" />
            <el-option value="end" :label="t('timeline.eventTypes.end')" />
          </el-select>

          <div class="filter-legend">
            <span class="legend-item">
              <span class="legend-dot inauguration"></span>
              {{ t('timeline.eventTypes.inauguration') }}
            </span>
            <span class="legend-item">
              <span class="legend-dot event"></span>
              {{ t('timeline.eventTypes.event') }}
            </span>
            <span class="legend-item">
              <span class="legend-dot achievement"></span>
              {{ t('timeline.eventTypes.achievement') }}
            </span>
            <span class="legend-item">
              <span class="legend-dot end"></span>
              {{ t('timeline.eventTypes.end') }}
            </span>
          </div>
        </div>
      </section>

      <!-- Timeline List -->
      <section class="timeline-section" aria-label="事件列表">
        <div class="timeline-list">
          <article
            v-for="item in filteredTimeline"
            :key="item.id"
            class="timeline-item"
            @click="navigateToPresident(item.presidentId)"
            @keydown.enter="navigateToPresident(item.presidentId)"
            tabindex="0"
            role="button"
            :aria-label="`${item.year}年 - ${appStore.locale === 'zh' ? item.titleZh : item.title}`"
          >
            <time class="timeline-year">{{ item.year }}</time>
            <div class="timeline-marker" :class="item.type"></div>
            <div class="timeline-content">
              <span class="timeline-president">{{ item.presidentName }}</span>
              <h3>{{ appStore.locale === 'zh' ? item.titleZh : item.title }}</h3>
              <p>{{ appStore.locale === 'zh' ? item.descriptionZh : item.description }}</p>
              <el-tag size="small" :type="getTagType(item.type)">
                {{ t(`timeline.eventTypes.${item.type}`) }}
              </el-tag>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores'
import { timelineData } from '@/data'

const router = useRouter()
const { t } = useI18n()
const appStore = useAppStore()

const selectedType = ref('')

const filteredTimeline = computed(() => {
  if (!selectedType.value) return timelineData
  return timelineData.filter(item => item.type === selectedType.value)
})

const getTagType = (type: string): 'primary' | 'success' | 'warning' | 'info' | 'danger' => {
  const types: Record<string, 'primary' | 'success' | 'warning' | 'info' | 'danger'> = {
    inauguration: 'success',
    event: 'warning',
    achievement: 'primary',
    end: 'danger'
  }
  return types[type] || 'primary'
}

const navigateToPresident = (id: number) => {
  router.push(`/president/${id}`)
}
</script>

<style lang="scss" scoped>
.timeline-page {
  padding: $spacing-xl 0 $spacing-2xl;
  min-height: calc(100vh - 200px);
  background: $bg-page;
}

.filter-section {
  margin-bottom: $spacing-lg;
}

.filter-card {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  padding: $spacing-lg;
  border: 1px solid $border-light;
  display: flex;
  align-items: center;
  gap: $spacing-lg;
  flex-wrap: wrap;

  .el-select {
    min-width: 200px;
  }
}

.filter-legend {
  display: flex;
  gap: $spacing-md;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: $font-size-sm;
  color: $text-secondary;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &.inauguration { background: $color-success; }
  &.event { background: $color-warning; }
  &.achievement { background: $party-democratic; }
  &.end { background: $color-error; }
}

.timeline-section {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  padding: $spacing-lg;
  border: 1px solid $border-light;
}

.timeline-list {
  position: relative;
  padding-left: 100px;

  @media (max-width: $breakpoint-md) {
    padding-left: 70px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 72px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, $primary-color, $primary-light);
    border-radius: $radius-full;

    @media (max-width: $breakpoint-md) {
      left: 42px;
    }
  }
}

.timeline-item {
  position: relative;
  padding-bottom: $spacing-xl;
  cursor: pointer;
  outline: none;

  &:last-child {
    padding-bottom: 0;
  }

  &:hover .timeline-content,
  &:focus .timeline-content {
    transform: translateX(4px);
    border-color: $primary-color;
    background: $bg-hover;
  }

  &:focus .timeline-content {
    box-shadow: 0 0 0 3px rgba($primary-color, 0.2);
  }
}

.timeline-year {
  position: absolute;
  left: -100px;
  top: 0;
  width: 55px;
  text-align: right;
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: $primary-color;

  @media (max-width: $breakpoint-md) {
    left: -70px;
    width: 45px;
    font-size: $font-size-sm;
  }
}

.timeline-marker {
  position: absolute;
  left: -37px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: $primary-color;
  border: 4px solid $bg-card;
  box-shadow: $shadow-md;
  z-index: 1;

  @media (max-width: $breakpoint-md) {
    left: -37px;
  }

  &.inauguration { background: $color-success; }
  &.event { background: $color-warning; }
  &.achievement { background: $party-democratic; }
  &.end { background: $color-error; }
}

.timeline-content {
  background: $bg-section;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid $border-light;
  transition: all $transition-base;

  .timeline-president {
    display: block;
    font-size: $font-size-sm;
    color: $text-muted;
    margin-bottom: $spacing-xs;
  }

  h3 {
    font-size: $font-size-lg;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }

  p {
    color: $text-secondary;
    margin-bottom: $spacing-sm;
    line-height: $line-height-relaxed;
  }
}
</style>
