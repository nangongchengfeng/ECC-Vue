<template>
  <header class="hero-section">
    <div class="hero-container">
      <div class="hero-badge">Anthropic 黑客松冠军配置</div>
      <h1 class="hero-title">Everything Claude Code</h1>
      <p class="hero-subtitle">
        完整的 Claude Code 配置集合，包含 agents、skills、hooks、commands、rules 和 MCP 配置。
        经过 10+ 个月密集日常使用，在真实产品开发中不断演进的实战配置。
      </p>

      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="hero-actions">
        <a href="https://github.com/affaan-m/everything-claude-code" target="_blank" class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          查看源码
        </a>
        <a href="#installation" class="btn btn-secondary">
          快速开始
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { stats } from '../data'
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 100px 20px 80px;
  background: var(--gradient-dark);
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(80, 227, 194, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 107, 138, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(74, 144, 226, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74, 144, 226, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(74, 144, 226, 0.15);
  border: 1px solid rgba(74, 144, 226, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--primary-color);
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.hero-badge::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 700px;
  margin-bottom: 32px;
  line-height: 1.8;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background: rgba(74, 144, 226, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(74, 144, 226, 0.4);
}

.btn-secondary {
  background: white;
  color: var(--text-color);
  border: 2px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--surface-light);
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 16px 50px;
  }

  .hero-stats {
    gap: 12px;
  }

  .stat-item {
    padding: 12px 16px;
  }

  .stat-number {
    font-size: 1.35rem;
  }
}
</style>
