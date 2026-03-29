<template>
  <div class="president-detail">
    <el-button @click="goBack" style="margin-bottom: 20px;">
      返回列表
    </el-button>
    
    <div v-if="president" class="detail-card">
      <h1>{{ president.name }}</h1>
      <div class="detail-info">
        <p><strong>第 {{ president.termNumber }} 任总统</strong></p>
        <p><strong>任期：</strong>{{ president.term }}</p>
        <p><strong>政党：</strong>{{ president.party }}</p>
        <p><strong>简介：</strong>{{ president.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { usePresidentStore } from '@/stores/president'

const route = useRoute()
const router = useRouter()
const presidentStore = usePresidentStore()

const president = presidentStore.getPresidentById(Number(route.params.id))

const goBack = () => {
  router.push('/presidents')
}
</script>

<style scoped>
.president-detail {
  padding: 20px;
}

.detail-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.detail-info p {
  margin: 10px 0;
}
</style>
