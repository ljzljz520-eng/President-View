<template>
  <div class="not-found-page">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">{{ t('error.notFound') }}</h2>
      <p class="error-description">{{ t('error.notFoundDesc') }}</p>
      <div class="error-actions">
        <el-button type="primary" size="large" @click="goHome">
          <el-icon><House /></el-icon>
          {{ t('error.backHome') }}
        </el-button>
        <el-button size="large" @click="goBack">
          <el-icon><Back /></el-icon>
          {{ t('error.goBack') }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { House, Back } from '@element-plus/icons-vue'

const router = useRouter()
const { t } = useI18n()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.not-found-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-xl;
  background: $bg-page;
}

.error-content {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: 120px;
  font-weight: $font-weight-bold;
  color: $primary-color;
  line-height: 1;
  margin-bottom: $spacing-md;

  @media (max-width: $breakpoint-sm) {
    font-size: 80px;
  }
}

.error-title {
  font-size: $font-size-2xl;
  color: $text-primary;
  margin-bottom: $spacing-md;
}

.error-description {
  font-size: $font-size-base;
  color: $text-secondary;
  margin-bottom: $spacing-xl;
}

.error-actions {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
