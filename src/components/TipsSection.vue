<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">使用建议</h2>
      <p class="section-subtitle">来自作者的最佳实践建议</p>
    </div>

    <div class="tips-grid">
      <div v-for="(tip, index) in tips" :key="index" class="tip-card">
        <div class="tip-icon">{{ tip.icon }}</div>
        <h4 class="tip-title">{{ tip.title }}</h4>
        <p class="tip-content">{{ tip.content }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tips } from '../data'
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

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.tip-card {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tip-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: 0 20px 40px rgba(74, 144, 226, 0.15);
}

.tip-card:hover::before {
  opacity: 1;
}

.tip-icon {
  font-size: 2rem;
  margin-bottom: 16px;
  width: 56px;
  height: 56px;
  background: rgba(74, 144, 226, 0.15);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tip-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 12px;
}

.tip-content {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .section {
    margin-bottom: 50px;
  }
}
</style>
