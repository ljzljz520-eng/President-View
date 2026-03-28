<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">{{ t('home.title') }}</h1>
          <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
          <p class="hero-description">{{ t('home.description') }}</p>
          <div class="hero-actions">
            <el-button type="primary" size="large" @click="router.push('/presidents')">
              <el-icon><User /></el-icon>
              <span>{{ t('home.explorePresidents') }}</span>
            </el-button>
            <el-button size="large" @click="router.push('/timeline')">
              <el-icon><Clock /></el-icon>
              <span>{{ t('home.viewTimeline') }}</span>
            </el-button>
          </div>
        </div>
        <div class="hero-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Seal_of_the_President_of_the_United_States.svg/600px-Seal_of_the_President_of_the_United_States.svg.png"
            alt="美国总统印章"
            @error="handleSealError"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <article class="stat-card">
            <div class="stat-icon">
              <el-icon :size="32"><User /></el-icon>
            </div>
            <div class="stat-value">{{ presidentsStore.presidents.length }}</div>
            <div class="stat-label">{{ t('home.totalPresidents') }}</div>
          </article>
          <article class="stat-card">
            <div class="stat-icon">
              <el-icon :size="32"><Calendar /></el-icon>
            </div>
            <div class="stat-value">{{ yearsOfHistory }}</div>
            <div class="stat-label">{{ t('home.yearsOfHistory') }}</div>
          </article>
          <article class="stat-card">
            <div class="stat-icon">
              <el-icon :size="32"><Flag /></el-icon>
            </div>
            <div class="stat-value">{{ uniqueParties }}</div>
            <div class="stat-label">{{ t('home.politicalParties') }}</div>
          </article>
          <article class="stat-card">
            <div class="stat-icon">
              <el-icon :size="32"><Star /></el-icon>
            </div>
            <div class="stat-value">{{ totalEvents }}</div>
            <div class="stat-label">{{ t('home.keyEvents') }}</div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured Presidents -->
    <section class="featured-section">
      <div class="container">
        <header class="section-header">
          <h2>{{ appStore.locale === 'zh' ? '著名总统' : 'Notable Presidents' }}</h2>
          <p>{{ appStore.locale === 'zh' ? '美国历史上最具影响力的总统' : 'The most influential presidents in American history' }}</p>
        </header>
        <div class="presidents-grid">
          <PresidentCard
            v-for="president in featuredPresidents"
            :key="president.id"
            :president="president"
          />
        </div>
        <div class="section-action">
          <el-button type="primary" size="large" @click="router.push('/presidents')">
            {{ appStore.locale === 'zh' ? '查看全部总统' : 'View All Presidents' }}
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { User, Calendar, Flag, Star, Clock, ArrowRight } from '@element-plus/icons-vue'
import { usePresidentsStore, useAppStore } from '@/stores'
import { PresidentCard } from '@/components/common'

const router = useRouter()
const { t } = useI18n()
const presidentsStore = usePresidentsStore()
const appStore = useAppStore()

const yearsOfHistory = computed(() => {
  const currentYear = new Date().getFullYear()
  return currentYear - 1789
})

const uniqueParties = computed(() => {
  const parties = new Set(presidentsStore.presidents.map(p => p.party))
  return parties.size
})

const totalEvents = computed(() => {
  return presidentsStore.presidents.reduce((sum, p) => sum + p.keyEvents.length, 0)
})

const featuredPresidents = computed(() => {
  const featuredIds = [1, 16, 32, 35] // Washington, Lincoln, FDR, JFK
  return presidentsStore.presidents.filter(p => featuredIds.includes(p.id))
})

const handleSealError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
}

// Hero Section - 深色背景区分
.hero-section {
  background: linear-gradient(135deg, $primary-color 0%, $primary-dark 100%);
  color: $text-inverse;
  padding: $spacing-3xl 0;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-2xl;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 $spacing-lg;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    text-align: center;
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: $font-size-5xl;
  font-weight: $font-weight-bold;
  color: $text-inverse;
  margin-bottom: $spacing-md;
  line-height: $line-height-tight;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-4xl;
  }
}

.hero-subtitle {
  font-size: $font-size-xl;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: $spacing-sm;
}

.hero-description {
  font-size: $font-size-base;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: $spacing-lg;
  line-height: $line-height-relaxed;
}

.hero-actions {
  display: flex;
  gap: $spacing-md;

  @media (max-width: $breakpoint-md) {
    justify-content: center;
    flex-wrap: wrap;
  }

  .el-button {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
  }

  // 浏览总统按钮 - 白色背景突出显示
  .el-button--primary {
    background: #ffffff;
    color: $primary-color;
    border-color: #ffffff;
    font-weight: $font-weight-semibold;

    &:hover {
      background: #f0f4f8;
      border-color: #f0f4f8;
      color: $primary-dark;
    }
  }

  // 查看时间线按钮 - 透明边框样式
  .el-button:not(.el-button--primary) {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.6);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #ffffff;
    }
  }
}

.hero-image {
  flex-shrink: 0;

  img {
    width: 280px;
    height: 280px;
    object-fit: contain;
    filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3));
    animation: float 6s ease-in-out infinite;

    @media (max-width: $breakpoint-md) {
      width: 200px;
      height: 200px;
    }
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

// Stats Section - 浅色背景区分
.stats-section {
  background: $bg-section;
  padding: $spacing-2xl 0;
  border-top: 1px solid $border-light;
  border-bottom: 1px solid $border-light;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-lg;
}

.stat-card {
  background: $bg-card;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  text-align: center;
  box-shadow: $shadow-card;
  border: 1px solid $border-light;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-card-hover;
  }
}

.stat-icon {
  color: $primary-color;
  margin-bottom: $spacing-sm;
}

.stat-value {
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
  color: $primary-color;
  margin-bottom: $spacing-xs;
}

.stat-label {
  font-size: $font-size-sm;
  color: $text-muted;
}

// Featured Section - 浅灰背景
.featured-section {
  background: $bg-page;
  padding: $spacing-2xl 0;
}

.section-header {
  text-align: center;
  margin-bottom: $spacing-xl;

  h2 {
    font-size: $font-size-2xl;
    color: $primary-color;
    margin-bottom: $spacing-sm;
  }

  p {
    font-size: $font-size-base;
    color: $text-secondary;
    margin: 0;
  }
}

.presidents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-lg;
}

.section-action {
  text-align: center;
  margin-top: $spacing-xl;

  .el-button {
    display: inline-flex;
    align-items: center;
    gap: $spacing-xs;
  }
}
</style>
