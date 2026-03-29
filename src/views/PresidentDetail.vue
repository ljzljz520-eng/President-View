<template>
  <div class="president-detail">
    <el-button @click="goBack" class="back-button">
      <el-icon><ArrowLeft /></el-icon>
      返回列表
    </el-button>

    <div v-if="loading" class="loading-container">
      <el-skeleton :rows="10" animated />
    </div>

    <div v-else-if="error" class="error-container">
      <el-empty description="加载失败">
        <el-button type="primary" @click="fetchData">重新加载</el-button>
      </el-empty>
    </div>

    <div v-else-if="president" class="detail-content">
      <div class="header-section">
        <div class="avatar-container">
          <img :src="president.image" :alt="president.name" class="avatar" />
          <el-tag :type="partyTagType" size="large" class="party-tag">
            {{ president.party }}
          </el-tag>
        </div>
        <div class="header-info">
          <h1>{{ president.name }}</h1>
          <h2>{{ president.nameEn }}</h2>
          <div class="term-info">
            <el-icon><Calendar /></el-icon>
            <span>第 {{ president.id }}任总统 · {{ president.term }}</span>
          </div>
        </div>
      </div>

      <el-divider />

      <div class="info-grid">
        <el-card class="info-card">
          <template #header>
            <div class="card-header">
              <el-icon><User /></el-icon>
              <span>基本信息</span>
            </div>
          </template>
          <div class="info-list">
            <div class="info-item">
              <span class="label">出生日期：</span>
              <span>{{ president.birthDate }}</span>
            </div>
            <div class="info-item">
              <span class="label">逝世日期：</span>
              <span>{{ president.deathDate }}</span>
            </div>
            <div class="info-item">
              <span class="label">出生地：</span>
              <span>{{ president.birthPlace }}</span>
            </div>
            <div class="info-item">
              <span class="label">教育背景：</span>
              <span>{{ president.education }}</span>
            </div>
            <div class="info-item">
              <span class="label">职业：</span>
              <span>{{ president.career }}</span>
            </div>
            <div class="info-item">
              <span class="label">副总统：</span>
              <span>{{ president.vicePresident }}</span>
            </div>
          </div>
        </el-card>

        <el-card class="info-card">
          <template #header>
            <div class="card-header">
              <el-icon><Trophy /></el-icon>
              <span>主要成就</span>
            </div>
          </template>
          <p class="achievements">{{ president.achievements }}</p>
        </el-card>
      </div>

      <el-card class="description-card">
        <template #header>
          <div class="card-header">
            <el-icon><Document /></el-icon>
            <span>人物简介</span>
          </div>
        </template>
        <p class="description">{{ president.description }}</p>
      </el-card>
    </div>

    <el-empty v-if="!loading && !error && !president" description="未找到该总统信息" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePresidentStore } from '../stores/presidentStore'
import { ArrowLeft, Calendar, User, Trophy, Document } from '@element-plus/icons-vue'
import type { President } from '../types/president'
import { partyColors } from '../api/mockData'

const route = useRoute()
const router = useRouter()
const store = usePresidentStore()

const president = ref<President | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const partyTagType = computed(() => {
  if (!president.value) return 'info'
  const party = president.value.party
  if (party === '民主党') return 'primary'
  if (party === '共和党') return 'danger'
  if (party === '民主共和党') return 'success'
  return 'info'
})

async function fetchData() {
  const id = Number(route.params.id)
  if (isNaN(id)) return

  loading.value = true
  error.value = null
  try {
    await store.fetchPresidentById(id)
    president.value = store.currentPresident
  } catch (err) {
    error.value = '加载失败'
    console.error(err)
  } finally {
    loading.value = false
  }
}

function goBack() {
  router.push('/presidents')
}

onMounted(() => {
  fetchData()
})

onUnmounted(() => {
  store.clearCurrentPresident()
})
</script>

<style scoped>
.president-detail {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  margin-bottom: 20px;
}

.loading-container,
.error-container {
  padding: 40px;
}

.header-section {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.avatar-container {
  flex-shrink: 0;
  position: relative;
}

.avatar {
  width: 200px;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.party-tag {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
}

.header-info {
  flex: 1;
  min-width: 300px;
}

.header-info h1 {
  margin: 0 0 8px 0;
  color: #1e3a8a;
  font-size: 36px;
}

.header-info h2 {
  margin: 0 0 16px 0;
  color: #64748b;
  font-weight: normal;
  font-size: 20px;
}

.term-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #475569;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: #1e3a8a;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
}

.info-item .label {
  font-weight: 500;
  color: #475569;
  min-width: 100px;
}

.achievements,
.description {
  line-height: 1.8;
  color: #334155;
  margin: 0;
  text-indent: 2em;
}

@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header-info h1 {
    font-size: 28px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
