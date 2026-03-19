<template>
  <section class="section" id="installation">
    <div class="section-header">
      <h2 class="section-title">安装指南</h2>
      <p class="section-subtitle">选择适合你的安装方式</p>
    </div>

    <div class="install-section">
      <div class="install-tabs">
        <button
          v-for="tab in installTabs"
          :key="tab.id"
          class="install-tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </div>

      <div v-for="tab in installTabs" :key="tab.id" class="tab-pane" :class="{ active: activeTab === tab.id }">
        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">{{ tab.lang }}</span>
            <button class="copy-btn" @click="copyCode(tab.code, $event)">
              {{ getCopyButtonText(tab.id) }}
            </button>
          </div>
          <div class="code-content">
            <pre><code>{{ tab.code }}</code></pre>
          </div>
        </div>
        <p class="note">{{ tab.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { installTabs } from '../data'

const activeTab = ref('plugin')
const copiedTabs = ref({})

function copyCode(code, event) {
  const tabId = activeTab.value
  navigator.clipboard.writeText(code).then(() => {
    copiedTabs.value[tabId] = true
    setTimeout(() => {
      copiedTabs.value[tabId] = false
    }, 2000)
  })
}

function getCopyButtonText(tabId) {
  return copiedTabs.value[tabId] ? '已复制!' : '复制'
}
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

.install-section {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 48px;
}

.install-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.install-tab {
  padding: 12px 24px;
  background: var(--surface-light);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-muted);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.install-tab.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.install-tab:hover:not(.active) {
  border-color: var(--primary-color);
  color: var(--text-color);
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

.code-block {
  background: var(--code-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: rgba(74, 144, 226, 0.05);
  border-bottom: 1px solid var(--border-color);
}

.code-lang {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-family: monospace;
}

.copy-btn {
  background: rgba(74, 144, 226, 0.15);
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: var(--primary-color);
  color: white;
}

.code-content {
  padding: 20px;
  overflow-x: auto;
}

.code-content pre {
  margin: 0;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-color);
}

.code-content code {
  font-family: inherit;
}

.note {
  color: var(--text-muted);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .section {
    margin-bottom: 50px;
  }

  .install-section {
    padding: 24px;
  }
}
</style>
