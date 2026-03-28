<template>
  <div class="president-list">
    <div class="header">
      <h1>美国历届总统</h1>
      <el-input
        v-model="searchKeyword"
        placeholder="搜索总统姓名或政党..."
        :prefix-icon="Search"
        class="search-input"
        clearable
        @clear="handleSearch"
        @input="handleSearch"
      />
    </div>

    <div v-if="loading" class="loading-container">
      <el-skeleton :rows="5" animated />
    </div>

    <div v-else-if="error" class="error-container">
      <el-empty description="加载失败，请重试">
        <el-button type="primary" @click="fetchData">重新加载</el-button>
      </el-empty>
    </div>

    <div v-else class="card-grid">
      <PresidentCard
        v-for="president in presidents"
        :key="president.id"
        :president="president"
      />
    </div>

    <el-empty v-if="!loading && !error && presidents.length === 0" description="没有找到匹配的总统" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { usePresidentStore } from '../stores/presidentStore'
import { Search } from '@element-plus/icons-vue'
import PresidentCard from '../components/PresidentCard.vue'

const store = usePresidentStore()
const searchKeyword = ref('')

const presidents = ref(store.allPresidents)
const loading = ref(store.loading)
const error = ref(store.error)

async function fetchData() {
  await store.fetchAllPresidents()
  presidents.value = store.allPresidents
}

async function handleSearch() {
  if (searchKeyword.value.trim()) {
    await store.searchPresidents(searchKeyword.value)
  } else {
    await store.fetchAllPresidents()
  }
  presidents.value = store.allPresidents
}

watch(
  () => store.loading,
  (newVal) => {
    loading.value = newVal
  }
)

watch(
  () => store.error,
  (newVal) => {
    error.value = newVal
  }
)

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.president-list {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.header h1 {
  margin: 0;
  color: #1e3a8a;
}

.search-input {
  max-width: 400px;
  width: 100%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.loading-container,
.error-container {
  padding: 40px;
}
</style>
