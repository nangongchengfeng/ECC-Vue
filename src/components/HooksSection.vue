<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">智能 Hooks 自动化</h2>
      <p class="section-subtitle">触发式自动化，提升开发效率</p>
    </div>

    <div class="hooks-showcase">
      <div v-for="(hook, index) in hooks" :key="index" class="hook-item">
        <div class="hook-name">{{ hook.name }}</div>
        <p class="hook-description">{{ hook.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hooks } from '../data'
</script>

<style scoped>
.section {
  margin-bottom: 80px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.hooks-showcase {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 32px;
}

.hook-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
}

.hook-item:last-child {
  border-bottom: none;
}

.hook-name {
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
  font-family: monospace;
  font-size: 1rem;
}

.hook-description {
  color: var(--text-muted);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .section {
    margin-bottom: 50px;
  }

  .hooks-showcase {
    padding: 24px;
  }
}
</style>
