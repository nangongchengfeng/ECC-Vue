<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">指南涵盖主题</h2>
      <p class="section-subtitle">从简明指南和长篇指南中学习</p>
    </div>

    <div class="features-grid">
      <div v-for="(topic, index) in learningTopics" :key="index" class="feature-card">
        <div class="feature-icon">{{ topic.icon }}</div>
        <h3 class="feature-title">{{ topic.title }}</h3>
        <p class="feature-description">{{ topic.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { learningTopics } from '../data'
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
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

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
  box-shadow: 0 20px 40px rgba(74, 144, 226, 0.15);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: rgba(74, 144, 226, 0.15);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 12px;
}

.feature-description {
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
