<template>
  <div class="presidents-list">
    <h1>美国历届总统列表</h1>
    <div class="president-grid">
      <div 
        v-for="president in presidents" 
        :key="president.id"
        class="president-card"
        @click="goToDetail(president.id)"
      >
        <div class="card-content">
          <h3>{{ president.name }}</h3>
          <p>第 {{ president.termNumber }} 任总统</p>
          <p>{{ president.term }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePresidentStore } from '@/stores/president'

const router = useRouter()
const presidentStore = usePresidentStore()
const { presidents } = presidentStore

const goToDetail = (id: number) => {
  router.push(`/presidents/${id}`)
}
</script>

<style scoped>
.presidents-list {
  padding: 20px;
}

.president-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.president-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.president-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
