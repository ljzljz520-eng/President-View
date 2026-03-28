<template>
  <el-card
    class="president-card"
    shadow="hover"
    @click="handleClick"
  >
    <div class="card-content">
      <div class="avatar-section">
        <img :src="president.image" :alt="president.name" class="avatar" />
        <div class="party-badge" :style="{ backgroundColor: partyColor }">
          {{ president.party }}
        </div>
      </div>
      <div class="info-section">
        <h3 class="name">{{ president.name }}</h3>
        <p class="name-en">{{ president.nameEn }}</p>
        <div class="term">
          <el-icon><Calendar /></el-icon>
          <span>{{ president.term }}</span>
        </div>
        <div class="achievement-preview">
          {{ president.achievements.slice(0, 50) }}...
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Calendar } from '@element-plus/icons-vue'
import type { President } from '../types/president'
import { partyColors } from '../api/mockData'

interface Props {
  president: President
}

const props = defineProps<Props>()
const router = useRouter()

const partyColor = computed(() => partyColors[props.president.party] || '#808080')

const handleClick = () => {
  router.push(`/presidents/${props.president.id}`)
}
</script>

<style scoped>
.president-card {
  cursor: pointer;
  height: 100%;
  transition: transform 0.3s;
}

.president-card:hover {
  transform: translateY(-5px);
}

.card-content {
  display: flex;
  gap: 16px;
}

.avatar-section {
  flex-shrink: 0;
  position: relative;
}

.avatar {
  width: 100px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.party-badge {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 8px;
  border-radius: 12px;
  color: white;
  font-size: 10px;
  white-space: nowrap;
}

.info-section {
  flex: 1;
  min-width: 0;
}

.name {
  margin: 0 0 4px 0;
  font-size: 18px;
  color: #1e3a8a;
}

.name-en {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #64748b;
}

.term {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #475569;
}

.achievement-preview {
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
}
</style>
