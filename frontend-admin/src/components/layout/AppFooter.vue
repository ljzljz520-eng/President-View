<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo-icon">US</div>
          <span class="logo-text">Presidents</span>
        </div>
        <p class="footer-disclaimer">{{ t('footer.disclaimer') }}</p>

        <nav class="footer-nav" aria-label="页脚导航">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <router-link to="/presidents">{{ t('nav.presidents') }}</router-link>
          <router-link to="/timeline">{{ t('nav.timeline') }}</router-link>
          <router-link to="/mindmap">{{ t('nav.mindmap') }}</router-link>
        </nav>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-copyright">
        {{ t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.app-footer {
  background: $bg-footer;
  color: $text-inverse;
  margin-top: auto;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: $spacing-2xl $spacing-lg;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-md;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: $spacing-sm;

  .logo-icon {
    width: 36px;
    height: 36px;
    background: $text-inverse;
    color: $primary-color;
    border-radius: $radius-md;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: $font-weight-bold;
    font-size: $font-size-xs;
  }

  .logo-text {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
  }
}

.footer-disclaimer {
  color: $text-light;
  font-size: $font-size-sm;
  max-width: 400px;
  margin: 0;
}

.footer-nav {
  display: flex;
  gap: $spacing-lg;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: $text-light;
    font-size: $font-size-sm;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: $text-inverse;
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid rgba(255, 255, 255, 0.5);
      outline-offset: 2px;
    }
  }
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: $spacing-lg 0;
}

.footer-copyright {
  text-align: center;
  color: $text-light;
  font-size: $font-size-sm;
}
</style>
