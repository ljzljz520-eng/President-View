<template>
  <div class="mindmap-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1>{{ t('mindmap.title') }}</h1>
        <p>{{ t('mindmap.subtitle') }}</p>
      </header>

      <!-- Legend Section -->
      <section class="legend-section" aria-label="图例说明">
        <div class="legend-card">
          <h3 class="legend-title">{{ appStore.locale === 'zh' ? '图例' : 'Legend' }}</h3>

          <div class="legend-group">
            <h4>{{ appStore.locale === 'zh' ? '党派' : 'Party' }}</h4>
            <div class="legend-items">
              <div class="legend-item">
                <span class="legend-dot democratic"></span>
                <span>{{ appStore.locale === 'zh' ? '民主党' : 'Democratic' }}</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot republican"></span>
                <span>{{ appStore.locale === 'zh' ? '共和党' : 'Republican' }}</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot other"></span>
                <span>{{ appStore.locale === 'zh' ? '其他' : 'Other' }}</span>
              </div>
            </div>
          </div>

          <div class="legend-divider"></div>

          <div class="legend-group">
            <h4>{{ appStore.locale === 'zh' ? '关系类型' : 'Relation Types' }}</h4>
            <div class="legend-lines">
              <div class="legend-line">
                <span class="line predecessor"></span>
                <span>{{ t('mindmap.relationTypes.predecessor') }}/{{ t('mindmap.relationTypes.successor') }}</span>
              </div>
              <div class="legend-line">
                <span class="line ally"></span>
                <span>{{ t('mindmap.relationTypes.ally') }}</span>
              </div>
              <div class="legend-line">
                <span class="line family"></span>
                <span>{{ t('mindmap.relationTypes.family') }}</span>
              </div>
              <div class="legend-line">
                <span class="line opponent"></span>
                <span>{{ t('mindmap.relationTypes.opponent') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Graph Section -->
      <section class="graph-section" aria-label="关系图">
        <div class="graph-card">
          <RelationGraph :presidents="presidentsStore.presidents" />
        </div>
      </section>

      <!-- Instructions -->
      <aside class="instructions-card" role="note">
        <el-icon><InfoFilled /></el-icon>
        <span>{{ appStore.locale === 'zh'
          ? '提示：可以拖拽节点、滚轮缩放、点击节点查看关联关系'
          : 'Tip: Drag nodes, scroll to zoom, click nodes to see connections'
        }}</span>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { InfoFilled } from '@element-plus/icons-vue'
import { usePresidentsStore, useAppStore } from '@/stores'
import { RelationGraph } from '@/components/charts'

const { t } = useI18n()
const presidentsStore = usePresidentsStore()
const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.mindmap-page {
  padding: $spacing-xl 0 $spacing-2xl;
  min-height: calc(100vh - 200px);
  background: $bg-page;
}

.legend-section {
  margin-bottom: $spacing-lg;
}

.legend-card {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  padding: $spacing-lg;
  border: 1px solid $border-light;
}

.legend-title {
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $text-primary;
  margin-bottom: $spacing-md;
}

.legend-group {
  h4 {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $text-muted;
    margin-bottom: $spacing-sm;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.legend-items {
  display: flex;
  gap: $spacing-lg;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  font-size: $font-size-sm;
  color: $text-secondary;

  .legend-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: $shadow-sm;

    &.democratic { background: $party-democratic; }
    &.republican { background: $party-republican; }
    &.other { background: $party-other; }
  }
}

.legend-divider {
  height: 1px;
  background: $border-light;
  margin: $spacing-md 0;
}

.legend-lines {
  display: flex;
  gap: $spacing-lg;
  flex-wrap: wrap;
}

.legend-line {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  font-size: $font-size-sm;
  color: $text-secondary;

  .line {
    width: 28px;
    height: 3px;
    border-radius: 2px;

    &.predecessor { background: $color-success; }
    &.ally { background: $party-democratic; }
    &.family { background: #8b5cf6; }
    &.opponent { background: $color-error; }
  }
}

.graph-section {
  margin-bottom: $spacing-lg;
}

.graph-card {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  padding: $spacing-lg;
  border: 1px solid $border-light;
}

.instructions-card {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  background: rgba($primary-color, 0.05);
  border: 1px solid rgba($primary-color, 0.1);
  border-radius: $radius-md;
  padding: $spacing-md;
  color: $primary-color;
  font-size: $font-size-sm;
}
</style>
