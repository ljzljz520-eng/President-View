<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    :ellipsis="false"
    router
    class="navbar"
  >
    <el-menu-item index="/presidents" class="logo-item">
      <span class="logo">🏛️ 美国总统档案馆</span>
    </el-menu-item>
    <el-menu-item index="/presidents">
      <el-icon><List /></el-icon>
      <span>总统列表</span>
    </el-menu-item>
    <el-menu-item index="/timeline">
      <el-icon><Clock /></el-icon>
      <span>时间线</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { List, Clock } from '@element-plus/icons-vue'

const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border: none;
}

.navbar :deep(.el-menu-item) {
  color: white;
}

.navbar :deep(.el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.2);
}

.navbar :deep(.el-menu-item.is-active) {
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom: 3px solid #ffd700;
}

.logo-item {
  font-weight: bold;
  font-size: 18px;
}

.logo {
  font-weight: bold;
}
</style>
