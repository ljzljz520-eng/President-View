<template>
  <article
    class="president-card"
    @click="handleClick"
    @keydown.enter="handleClick"
    tabindex="0"
    role="button"
    :aria-label="`查看 ${localizedName} 详情`"
  >
    <div class="card-image">
      <img
        v-if="!imageError"
        :src="president.portrait"
        :alt="`${localizedName} 肖像`"
        @error="handleImageError"
        @load="imageLoaded = true"
        :class="{ loaded: imageLoaded }"
      />
      <div v-else class="image-fallback">
        <el-icon :size="48"><User /></el-icon>
        <span>{{ localizedName }}</span>
      </div>
      <div class="card-badge" :aria-label="`第 ${president.termNumber} 任总统`">
        #{{ president.termNumber }}
      </div>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ localizedName }}</h3>
      <div class="card-meta">
        <span class="party-tag" :class="partyClass">
          {{ localizedParty }}
        </span>
        <span class="term-period">{{ termPeriod }}</span>
      </div>
      <p class="card-description">{{ truncatedBio }}</p>
    </div>

    <div class="card-footer">
      <el-button type="primary" class="view-btn">
        <span>{{ t('common.viewDetails') }}</span>
        <el-icon><ArrowRight /></el-icon>
      </el-button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ArrowRight, User } from '@element-plus/icons-vue'
import type { President } from '@/types'
import { useAppStore } from '@/stores'

const props = defineProps<{
  president: President
}>()

const router = useRouter()
const { t } = useI18n()
const appStore = useAppStore()

const imageError = ref(false)
const imageLoaded = ref(false)

const localizedName = computed(() =>
  appStore.locale === 'zh' ? props.president.nameZh : props.president.name
)

const localizedParty = computed(() =>
  appStore.locale === 'zh' ? props.president.partyZh : props.president.party
)

const termPeriod = computed(() => {
  const start = new Date(props.president.termStart).getFullYear()
  const end = new Date(props.president.termEnd).getFullYear()
  return `${start} - ${end}`
})

const truncatedBio = computed(() => {
  const bio = appStore.locale === 'zh' ? props.president.biographyZh : props.president.biography
  return bio.length > 100 ? bio.substring(0, 100) + '...' : bio
})

const partyClass = computed(() => {
  const party = props.president.party.toLowerCase()
  if (party.includes('democratic') && !party.includes('republican')) return 'democratic'
  if (party.includes('republican') && !party.includes('democratic')) return 'republican'
  if (party.includes('federalist')) return 'federalist'
  if (party.includes('whig')) return 'whig'
  return 'independent'
})

const handleClick = () => {
  router.push(`/president/${props.president.id}`)
}

const handleImageError = () => {
  imageError.value = true
}
</script>

<style lang="scss" scoped>
.president-card {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  border: 1px solid $border-light;
  overflow: hidden;
  cursor: pointer;
  transition: all $transition-smooth;
  display: flex;
  flex-direction: column;
  outline: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-card-hover;
    border-color: $primary-light;

    .card-image img {
      transform: scale(1.05);
    }

    .view-btn {
      background: $primary-hover;
    }
  }

  &:focus {
    box-shadow: $shadow-card-hover, 0 0 0 3px rgba($primary-color, 0.2);
    border-color: $primary-color;
  }

  &:active {
    transform: translateY(-2px);
  }
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: $bg-section;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform $transition-slow, opacity $transition-base;
    opacity: 0;

    &.loaded {
      opacity: 1;
    }
  }

  .image-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $spacing-sm;
    background: linear-gradient(135deg, $bg-section 0%, $bg-hover 100%);
    color: $text-muted;

    span {
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
    }
  }

  .card-badge {
    position: absolute;
    top: $spacing-sm;
    right: $spacing-sm;
    background: $primary-color;
    color: $text-inverse;
    padding: $spacing-xs $spacing-sm;
    border-radius: $radius-full;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    box-shadow: $shadow-sm;
  }
}

.card-content {
  padding: $spacing-md;
  flex: 1;
}

.card-title {
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $text-primary;
  margin-bottom: $spacing-sm;
  line-height: $line-height-tight;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  margin-bottom: $spacing-sm;
  flex-wrap: wrap;
}

.party-tag {
  padding: 2px $spacing-sm;
  border-radius: $radius-full;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;

  &.democratic {
    background: rgba($party-democratic, 0.1);
    color: $party-democratic;
  }

  &.republican {
    background: rgba($party-republican, 0.1);
    color: $party-republican;
  }

  &.federalist {
    background: rgba(#6b46c1, 0.1);
    color: #6b46c1;
  }

  &.whig {
    background: rgba($color-warning, 0.1);
    color: #b7791f;
  }

  &.independent {
    background: rgba($party-other, 0.1);
    color: $party-other;
  }
}

.term-period {
  font-size: $font-size-sm;
  color: $text-muted;
}

.card-description {
  font-size: $font-size-sm;
  color: $text-secondary;
  line-height: $line-height-relaxed;
  margin: 0;
}

.card-footer {
  padding: 0 $spacing-md $spacing-md;
  background: $bg-card;
  display: flex;
  justify-content: flex-end;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-xs;
  padding: $spacing-sm $spacing-lg;
  height: 40px;
  font-size: $font-size-sm;
  transition: all $transition-fast;
}
</style>
