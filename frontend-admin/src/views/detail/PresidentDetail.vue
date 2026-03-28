<template>
  <div class="detail-page" v-if="president">
    <div class="container">
      <!-- Back Button -->
      <nav class="breadcrumb" aria-label="返回导航">
        <el-button
          :icon="ArrowLeft"
          class="back-button"
          @click="router.back()"
        >
          {{ t('common.back') }}
        </el-button>
      </nav>

      <!-- Hero Section -->
      <section class="detail-hero" aria-label="总统基本信息">
        <div class="hero-image">
          <img
            v-if="!imageError"
            :src="president.portrait"
            :alt="`${localizedName} 肖像`"
            @error="handleImageError"
            @load="imageLoaded = true"
            :class="{ loaded: imageLoaded }"
          />
          <div v-else class="image-fallback">
            <el-icon :size="64"><User /></el-icon>
            <span>{{ localizedName }}</span>
          </div>
          <div class="term-badge">#{{ president.termNumber }}</div>
        </div>

        <div class="hero-info">
          <h1 class="president-name">{{ localizedName }}</h1>
          <div class="president-meta">
            <span class="party-tag" :class="partyClass">{{ localizedParty }}</span>
            <span class="term-period">{{ termPeriod }}</span>
          </div>

          <dl class="info-grid">
            <div class="info-item">
              <dt class="info-label">{{ t('detail.birthDate') }}</dt>
              <dd class="info-value">{{ formatDate(president.birthDate) }}</dd>
            </div>
            <div class="info-item">
              <dt class="info-label">{{ t('detail.deathDate') }}</dt>
              <dd class="info-value">{{ president.deathDate ? formatDate(president.deathDate) : t('detail.living') }}</dd>
            </div>
            <div class="info-item">
              <dt class="info-label">{{ t('detail.birthPlace') }}</dt>
              <dd class="info-value">{{ president.birthPlace }}</dd>
            </div>
            <div class="info-item">
              <dt class="info-label">{{ t('detail.vicePresident') }}</dt>
              <dd class="info-value">{{ president.vicePresident }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- Tabs Section -->
      <section class="detail-content" aria-label="详细信息">
        <el-tabs v-model="activeTab" class="detail-tabs">
          <!-- Biography Tab -->
          <el-tab-pane :label="t('detail.biography')" name="biography">
            <article class="tab-content">
              <div class="biography-card">
                <p>{{ localizedBio }}</p>
              </div>
            </article>
          </el-tab-pane>

          <!-- Achievements Tab -->
          <el-tab-pane :label="t('detail.achievements')" name="achievements">
            <div class="tab-content">
              <div v-if="president.achievements.length > 0" class="achievements-list">
                <article
                  v-for="achievement in president.achievements"
                  :key="achievement.id"
                  class="achievement-card"
                >
                  <div class="achievement-year">{{ achievement.year }}</div>
                  <div class="achievement-content">
                    <h4>{{ appStore.locale === 'zh' ? achievement.titleZh : achievement.title }}</h4>
                    <p>{{ appStore.locale === 'zh' ? achievement.descriptionZh : achievement.description }}</p>
                  </div>
                </article>
              </div>
              <EmptyState v-else :title="t('common.noData')" />
            </div>
          </el-tab-pane>

          <!-- Key Events Tab -->
          <el-tab-pane :label="t('detail.keyEvents')" name="events">
            <div class="tab-content">
              <div v-if="president.keyEvents.length > 0" class="events-timeline">
                <article
                  v-for="event in president.keyEvents"
                  :key="event.id"
                  class="event-item"
                >
                  <div class="event-marker" :class="event.type"></div>
                  <div class="event-content">
                    <time class="event-date">{{ formatDate(event.date) }}</time>
                    <h4>{{ appStore.locale === 'zh' ? event.titleZh : event.title }}</h4>
                    <p>{{ appStore.locale === 'zh' ? event.descriptionZh : event.description }}</p>
                    <el-tag size="small" :type="getEventTagType(event.type)">
                      {{ t(`detail.eventType.${event.type}`) }}
                    </el-tag>
                  </div>
                </article>
              </div>
              <EmptyState v-else :title="t('common.noData')" />
            </div>
          </el-tab-pane>

          <!-- Relations Tab -->
          <el-tab-pane :label="t('detail.relations')" name="relations">
            <div class="tab-content">
              <div v-if="president.relations.length > 0" class="relations-grid">
                <article
                  v-for="relation in president.relations"
                  :key="relation.id"
                  class="relation-card"
                  @click="navigateToPresident(relation.targetId)"
                  @keydown.enter="navigateToPresident(relation.targetId)"
                  tabindex="0"
                  role="button"
                  :aria-label="`查看 ${relation.targetName} 详情`"
                >
                  <div class="relation-type">
                    {{ t(`detail.relationType.${relation.relationType}`) }}
                  </div>
                  <h4>{{ relation.targetName }}</h4>
                  <p>{{ appStore.locale === 'zh' ? relation.descriptionZh : relation.description }}</p>
                  <el-icon class="relation-arrow"><ArrowRight /></el-icon>
                </article>
              </div>
              <EmptyState v-else :title="t('common.noData')" />
            </div>
          </el-tab-pane>

          <!-- Media Tab -->
          <el-tab-pane :label="t('detail.media')" name="media">
            <div class="tab-content">
              <div v-if="president.media && president.media.length > 0" class="media-gallery">
                <div
                  v-for="item in president.media"
                  :key="item.id"
                  class="media-item"
                  @click="openMedia(item)"
                  @keydown.enter="openMedia(item)"
                  tabindex="0"
                  role="button"
                  :aria-label="appStore.locale === 'zh' ? item.titleZh : item.title"
                >
                  <div class="media-thumbnail">
                    <img :src="item.thumbnail" :alt="appStore.locale === 'zh' ? item.titleZh : item.title" />
                    <div class="media-overlay">
                      <el-icon v-if="item.type === 'video'" :size="40"><VideoPlay /></el-icon>
                      <el-icon v-else :size="40"><ZoomIn /></el-icon>
                    </div>
                    <el-tag class="media-type-tag" :type="item.type === 'video' ? 'danger' : 'primary'" size="small">
                      {{ t(`detail.mediaType.${item.type}`) }}
                    </el-tag>
                  </div>
                  <div class="media-info">
                    <h4>{{ appStore.locale === 'zh' ? item.titleZh : item.title }}</h4>
                    <p>{{ appStore.locale === 'zh' ? item.descriptionZh : item.description }}</p>
                  </div>
                </div>
              </div>
              <EmptyState v-else :title="t('detail.noMedia')" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </section>
    </div>

    <!-- Image Preview Dialog -->
    <el-dialog
      v-model="imageDialogVisible"
      :title="currentMedia ? (appStore.locale === 'zh' ? currentMedia.titleZh : currentMedia.title) : ''"
      width="90%"
      class="media-dialog"
      destroy-on-close
    >
      <div class="image-preview">
        <img v-if="currentMedia" :src="currentMedia.url" :alt="currentMedia.title" />
      </div>
      <p v-if="currentMedia" class="media-description">
        {{ appStore.locale === 'zh' ? currentMedia.descriptionZh : currentMedia.description }}
      </p>
    </el-dialog>

    <!-- Video Dialog -->
    <el-dialog
      v-model="videoDialogVisible"
      :title="currentMedia ? (appStore.locale === 'zh' ? currentMedia.titleZh : currentMedia.title) : ''"
      width="90%"
      class="media-dialog video-dialog"
      destroy-on-close
    >
      <div class="video-container">
        <iframe
          v-if="currentMedia && videoDialogVisible"
          :src="currentMedia.url"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p v-if="currentMedia" class="media-description">
        {{ appStore.locale === 'zh' ? currentMedia.descriptionZh : currentMedia.description }}
      </p>
    </el-dialog>
  </div>

  <!-- Loading State -->
  <LoadingSpinner v-else :text="t('common.loading')" fullscreen />
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ArrowLeft, ArrowRight, User, VideoPlay, ZoomIn } from '@element-plus/icons-vue'
import { usePresidentsStore, useAppStore } from '@/stores'
import { LoadingSpinner, EmptyState } from '@/components/common'
import type { Media } from '@/types'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const presidentsStore = usePresidentsStore()
const appStore = useAppStore()

const activeTab = ref('biography')
const imageError = ref(false)
const imageLoaded = ref(false)

// Media dialog state
const imageDialogVisible = ref(false)
const videoDialogVisible = ref(false)
const currentMedia = ref<Media | null>(null)

const president = computed(() => {
  const id = parseInt(route.params.id as string)
  return presidentsStore.getPresidentById(id)
})

const localizedName = computed(() =>
  president.value ? (appStore.locale === 'zh' ? president.value.nameZh : president.value.name) : ''
)

const localizedParty = computed(() =>
  president.value ? (appStore.locale === 'zh' ? president.value.partyZh : president.value.party) : ''
)

const localizedBio = computed(() =>
  president.value ? (appStore.locale === 'zh' ? president.value.biographyZh : president.value.biography) : ''
)

const termPeriod = computed(() => {
  if (!president.value) return ''
  const start = new Date(president.value.termStart).getFullYear()
  const end = new Date(president.value.termEnd).getFullYear()
  return `${start} - ${end}`
})

const partyClass = computed(() => {
  if (!president.value) return ''
  const party = president.value.party.toLowerCase()
  if (party.includes('democratic') && !party.includes('republican')) return 'democratic'
  if (party.includes('republican') && !party.includes('democratic')) return 'republican'
  if (party.includes('federalist')) return 'federalist'
  if (party.includes('whig')) return 'whig'
  return 'independent'
})

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(appStore.locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getEventTagType = (type: string): 'primary' | 'success' | 'warning' | 'info' | 'danger' => {
  const types: Record<string, 'primary' | 'success' | 'warning' | 'info' | 'danger'> = {
    political: 'primary',
    economic: 'success',
    social: 'warning',
    foreign: 'info',
    military: 'danger'
  }
  return types[type] || 'primary'
}

const handleImageError = () => {
  imageError.value = true
}

const navigateToPresident = (id: number) => {
  router.push(`/president/${id}`)
}

const openMedia = (item: Media) => {
  currentMedia.value = item
  if (item.type === 'video') {
    videoDialogVisible.value = true
  } else {
    imageDialogVisible.value = true
  }
}

watch(() => route.params.id, () => {
  activeTab.value = 'biography'
  imageError.value = false
  imageLoaded.value = false
  currentMedia.value = null
  imageDialogVisible.value = false
  videoDialogVisible.value = false
})
</script>

<style lang="scss" scoped>
.detail-page {
  padding: $spacing-xl 0 $spacing-2xl;
  min-height: calc(100vh - 200px);
  background: $bg-page;
}

.breadcrumb {
  margin-bottom: $spacing-lg;
}

.back-button {
  transition: all $transition-fast;

  &:hover {
    background: $bg-hover;
    border-color: $primary-color;
    color: $primary-color;
  }
}

.detail-hero {
  display: flex;
  gap: $spacing-xl;
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  padding: $spacing-xl;
  margin-bottom: $spacing-xl;
  border: 1px solid $border-light;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.hero-image {
  position: relative;
  flex-shrink: 0;

  img {
    width: 250px;
    height: 300px;
    object-fit: cover;
    border-radius: $radius-lg;
    box-shadow: $shadow-lg;
    opacity: 0;
    transition: opacity $transition-base;

    &.loaded {
      opacity: 1;
    }
  }

  .image-fallback {
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $spacing-sm;
    background: linear-gradient(135deg, $bg-section 0%, $bg-hover 100%);
    border-radius: $radius-lg;
    color: $text-muted;

    span {
      font-size: $font-size-base;
      font-weight: $font-weight-medium;
    }
  }

  .term-badge {
    position: absolute;
    top: -$spacing-sm;
    right: -$spacing-sm;
    background: $primary-color;
    color: $text-inverse;
    padding: $spacing-sm $spacing-md;
    border-radius: $radius-full;
    font-weight: $font-weight-semibold;
    font-size: $font-size-lg;
    box-shadow: $shadow-md;
  }
}

.hero-info {
  flex: 1;
}

.president-name {
  font-size: $font-size-3xl;
  color: $primary-color;
  margin-bottom: $spacing-md;
}

.president-meta {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-bottom: $spacing-lg;
  flex-wrap: wrap;

  @media (max-width: $breakpoint-md) {
    justify-content: center;
  }
}

.party-tag {
  padding: $spacing-xs $spacing-md;
  border-radius: $radius-full;
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
  color: $text-secondary;
  font-size: $font-size-lg;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-md;
  margin: 0;
}

.info-item {
  .info-label {
    display: block;
    font-size: $font-size-sm;
    color: $text-muted;
    margin-bottom: $spacing-xs;
    font-weight: $font-weight-normal;
  }

  .info-value {
    font-weight: $font-weight-medium;
    color: $text-primary;
    margin: 0;
  }
}

.detail-content {
  background: $bg-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-card;
  border: 1px solid $border-light;
}

.detail-tabs {
  padding: $spacing-lg;
}

.tab-content {
  padding: $spacing-md 0;
}

.biography-card {
  background: $bg-section;
  border-radius: $radius-md;
  padding: $spacing-lg;
  line-height: $line-height-relaxed;
  color: $text-secondary;
  border: 1px solid $border-light;

  p {
    margin: 0;
  }
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.achievement-card {
  display: flex;
  gap: $spacing-md;
  background: $bg-section;
  border-radius: $radius-md;
  padding: $spacing-md;
  border-left: 4px solid $primary-color;
  transition: all $transition-fast;

  &:hover {
    background: $bg-hover;
  }

  .achievement-year {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $primary-color;
    min-width: 60px;
  }

  .achievement-content {
    h4 {
      color: $text-primary;
      margin-bottom: $spacing-xs;
      font-size: $font-size-base;
    }

    p {
      color: $text-secondary;
      font-size: $font-size-sm;
      margin: 0;
    }
  }
}

.events-timeline {
  position: relative;
  padding-left: $spacing-xl;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: $border-color;
  }
}

.event-item {
  position: relative;
  padding-bottom: $spacing-lg;

  .event-marker {
    position: absolute;
    left: -$spacing-xl + 4px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $primary-color;
    box-shadow: 0 0 0 3px $bg-card;

    &.political { background: $party-democratic; }
    &.economic { background: $color-success; }
    &.social { background: $color-warning; }
    &.foreign { background: $color-info; }
    &.military { background: $color-error; }
  }

  .event-content {
    background: $bg-section;
    border-radius: $radius-md;
    padding: $spacing-md;
    border: 1px solid $border-light;
    transition: all $transition-fast;

    &:hover {
      background: $bg-hover;
    }

    .event-date {
      display: block;
      font-size: $font-size-sm;
      color: $text-muted;
      margin-bottom: $spacing-xs;
    }

    h4 {
      color: $text-primary;
      margin-bottom: $spacing-xs;
      font-size: $font-size-base;
    }

    p {
      color: $text-secondary;
      font-size: $font-size-sm;
      margin-bottom: $spacing-sm;
    }
  }
}

.relations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: $spacing-md;
}

.relation-card {
  position: relative;
  background: $bg-section;
  border-radius: $radius-md;
  padding: $spacing-md;
  padding-right: $spacing-xl;
  cursor: pointer;
  transition: all $transition-base;
  border: 1px solid $border-light;
  outline: none;

  &:hover {
    border-color: $primary-color;
    background: $bg-hover;
    transform: translateX(4px);
  }

  &:focus {
    border-color: $primary-color;
    box-shadow: 0 0 0 3px rgba($primary-color, 0.2);
  }

  .relation-type {
    font-size: $font-size-xs;
    color: $primary-color;
    font-weight: $font-weight-semibold;
    text-transform: uppercase;
    margin-bottom: $spacing-xs;
  }

  h4 {
    color: $text-primary;
    margin-bottom: $spacing-xs;
    font-size: $font-size-base;
  }

  p {
    color: $text-secondary;
    font-size: $font-size-sm;
    margin: 0;
  }

  .relation-arrow {
    position: absolute;
    right: $spacing-md;
    top: 50%;
    transform: translateY(-50%);
    color: $text-light;
    transition: all $transition-fast;
  }

  &:hover .relation-arrow {
    color: $primary-color;
    transform: translateY(-50%) translateX(4px);
  }
}

// Media Gallery Styles
.media-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-lg;
}

.media-item {
  background: $bg-section;
  border-radius: $radius-md;
  overflow: hidden;
  cursor: pointer;
  transition: all $transition-base;
  border: 1px solid $border-light;
  outline: none;

  &:hover {
    border-color: $primary-color;
    transform: translateY(-4px);
    box-shadow: $shadow-lg;

    .media-overlay {
      opacity: 1;
    }
  }

  &:focus {
    border-color: $primary-color;
    box-shadow: 0 0 0 3px rgba($primary-color, 0.2);
  }
}

.media-thumbnail {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform $transition-base;
  }

  .media-item:hover & img {
    transform: scale(1.05);
  }
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity $transition-fast;
  color: white;
}

.media-type-tag {
  position: absolute;
  top: $spacing-sm;
  left: $spacing-sm;
}

.media-info {
  padding: $spacing-md;

  h4 {
    color: $text-primary;
    margin-bottom: $spacing-xs;
    font-size: $font-size-base;
    line-height: 1.4;
  }

  p {
    color: $text-secondary;
    font-size: $font-size-sm;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

// Media Dialog Styles
.media-dialog {
  .image-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 70vh;
    overflow: auto;

    img {
      max-width: 100%;
      max-height: 70vh;
      object-fit: contain;
      border-radius: $radius-md;
    }
  }

  .media-description {
    margin-top: $spacing-md;
    color: $text-secondary;
    text-align: center;
    font-size: $font-size-sm;
  }
}

.video-dialog {
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; // 16:9 aspect ratio

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: $radius-md;
    }
  }
}
</style>
