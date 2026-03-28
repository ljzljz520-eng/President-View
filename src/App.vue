<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2024 美国总统档案馆 | 数据仅供学习参考</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  background-color: #f8fafc;
  overflow-y: auto;
}

.footer {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  text-align: center;
  padding: 16px;
  font-size: 14px;
}

.footer p {
  margin: 0;
}
</style>
