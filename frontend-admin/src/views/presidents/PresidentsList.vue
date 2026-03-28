<template>
  <div class="presidents-page">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1>{{ t('presidents.title') }}</h1>
        <p>{{ t('presidents.subtitle') }}</p>
      </header>

      <!-- Filters Card -->
      <section class="filters-section" aria-label="筛选条件">
        <div class="filters-card">
          <div class="filters-grid">
            <el-input
              v-model="presidentsStore.filters.search"
              :placeholder="t('presidents.searchPlaceholder')"
              :prefix-icon="Search"
              clearable
              size="large"
              aria-label="搜索总统姓名"
            />

            <el-select
              v-model="presidentsStore.filters.party"
              :placeholder="t('presidents.filterByParty')"
              clearable
              size="large"
              aria-label="按党派筛选"
            >
              <el-option
                v-for="party in parties"
                :key="party.value"
                :label="appStore.locale === 'zh' ? party.labelZh : party.label"
                :value="party.value"
              />
            </el-select>

            <el-select
              v-model="presidentsStore.filters.century"
              :placeholder="t('presidents.filterByCentury')"
              clearable
              size="large"
              aria-label="按世纪筛选"
            >
              <el-option
                v-for="century in centuries"
                :key="century.value"
                :label="appStore.locale === 'zh' ? century.labelZh : century.label"
                :value="century.value"
              />
            </el-select>

            <div class="sort-controls">
              <el-select
                v-model="presidentsStore.filters.sortBy"
                size="large"
                aria-label="排序方式"
              >
                <el-option value="termNumber" :label="t('presidents.termNumber')" />
                <el-option value="name" :label="t('presidents.name')" />
                <el-option value="birthDate" :label="t('presidents.birthDate')" />
              </el-select>
              <el-button
                :icon="presidentsStore.filters.sortOrder === 'asc' ? SortUp : SortDown"
                size="large"
                @click="toggleSortOrder"
                :aria-label="presidentsStore.filters.sortOrder === 'asc' ? '升序排列' : '降序排列'"
              />
            </div>

            <el-button
              :icon="RefreshLeft"
              size="large"
              @click="presidentsStore.resetFilters"
              class="reset-btn"
            >
              {{ t('common.reset') }}
            </el-button>
          </div>
        </div>
      </section>

      <!-- Results Info -->
      <div class="results-info" role="status" aria-live="polite">
        <span class="results-count">
          {{ presidentsStore.filteredPresidents.length }}
          {{ appStore.locale === 'zh' ? '位总统' : 'presidents' }}
        </span>
      </div>

      <!-- Presidents Grid -->
      <section
        v-if="presidentsStore.filteredPresidents.length > 0"
        class="presidents-section"
        aria-label="总统列表"
      >
        <div class="presidents-grid">
          <PresidentCard
            v-for="president in presidentsStore.filteredPresidents"
            :key="president.id"
            :president="president"
          />
        </div>
      </section>

      <!-- Empty State -->
      <section v-else class="empty-section">
        <EmptyState
          :title="t('presidents.noResults')"
          :icon="Search"
        >
          <template #action>
            <el-button type="primary" @click="presidentsStore.resetFilters">
              {{ t('common.reset') }}
            </el-button>
          </template>
        </EmptyState>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Search, RefreshLeft, SortUp, SortDown } from '@element-plus/icons-vue'
import { usePresidentsStore, useAppStore } from '@/stores'
import { PresidentCard, EmptyState } from '@/components/common'
import { parties, centuries } from '@/data'

const { t } = useI18n()
const presidentsStore = usePresidentsStore()
const appStore = useAppStore()

const toggleSortOrder = () => {
  presidentsStore.setFilters({
    sortOrder: presidentsStore.filters.sortOrder === 'asc' ? 'desc' : 'asc'
  })
}
</script>

<style lang="scss" scoped>
.presidents-page {
  padding: $spacing-xl 0 $spacing-2xl;
  min-height: calc(100vh - 200px);
  background: $bg-page;
}

.filters-section {
  margin-bottom: $spacing-lg;
}

.filters-card {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  padding: $spacing-lg;
  border: 1px solid $border-light;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-md;
  align-items: center;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.sort-controls {
  display: flex;
  gap: $spacing-sm;

  .el-select {
    flex: 1;
  }

  .el-button {
    flex-shrink: 0;
    transition: all $transition-fast;

    &:hover {
      background: $bg-hover;
    }
  }
}

.reset-btn {
  transition: all $transition-fast;

  &:hover {
    background: $bg-hover;
    border-color: $primary-color;
    color: $primary-color;
  }
}

.results-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-md;
  padding: 0 $spacing-xs;
}

.results-count {
  font-size: $font-size-sm;
  color: $text-secondary;
  font-weight: $font-weight-medium;
}

.presidents-section {
  background: $bg-section;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid $border-light;
}

.presidents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: $spacing-lg;
}

.empty-section {
  background: $bg-card;
  border-radius: $radius-lg;
  padding: $spacing-2xl;
  border: 1px solid $border-light;
}
</style>
