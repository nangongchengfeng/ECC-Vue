<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">核心组件</h2>
      <p class="section-subtitle">完整的 Claude Code 配置组件清单</p>
    </div>

    <div class="components-grid">
      <div v-for="(component, index) in components" :key="index" class="component-card">
        <div class="component-header">
          <div class="component-icon">{{ component.icon }}</div>
          <span class="component-name">{{ component.name }}</span>
        </div>
        <ul class="component-list">
          <li v-for="(item, itemIndex) in component.items" :key="itemIndex">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { components } from '../data'
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

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.component-card {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.component-card:hover {
  border-color: var(--primary-color);
  background: var(--surface-light);
}

.component-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.component-icon {
  width: 40px;
  height: 40px;
  background: rgba(74, 144, 226, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.component-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
}

.component-list {
  list-style: none;
}

.component-list li {
  padding: 8px 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 10px;
}

.component-list li:last-child {
  border-bottom: none;
}

.component-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--primary-color);
  border-radius: 50%;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .section {
    margin-bottom: 50px;
  }
}
</style>
