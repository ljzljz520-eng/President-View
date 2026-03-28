<template>
  <div class="loading-spinner" :class="{ fullscreen }">
    <div class="spinner-content">
      <el-icon class="spinner-icon" :size="size">
        <Loading />
      </el-icon>
      <span v-if="text" class="spinner-text">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loading } from '@element-plus/icons-vue'

withDefaults(defineProps<{
  text?: string
  size?: number
  fullscreen?: boolean
}>(), {
  size: 40,
  fullscreen: false
})
</script>

<style lang="scss" scoped>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-xl;

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: $z-modal;
  }
}

.spinner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-md;
}

.spinner-icon {
  animation: spin 1s linear infinite;
  color: $primary-color;
}

.spinner-text {
  color: $text-secondary;
  font-size: $font-size-sm;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
