<template>
  <div class="empty-state">
    <el-icon class="empty-icon" :size="64">
      <component :is="icon" />
    </el-icon>
    <h3 class="empty-title">{{ title }}</h3>
    <p v-if="description" class="empty-description">{{ description }}</p>
    <slot name="action"></slot>
  </div>
</template>

<script setup lang="ts">
import { FolderOpened } from '@element-plus/icons-vue'
import type { Component } from 'vue'

withDefaults(defineProps<{
  title: string
  description?: string
  icon?: Component
}>(), {
  icon: FolderOpened
})
</script>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $spacing-2xl;
  text-align: center;
}

.empty-icon {
  color: $text-light;
  margin-bottom: $spacing-md;
}

.empty-title {
  font-size: $font-size-lg;
  color: $text-secondary;
  margin-bottom: $spacing-sm;
}

.empty-description {
  font-size: $font-size-sm;
  color: $text-muted;
  max-width: 300px;
  margin-bottom: $spacing-md;
}
</style>
