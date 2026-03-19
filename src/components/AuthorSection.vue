<template>
  <section class="section">
    <div class="author-section">
      <div class="author-avatar">{{ author.avatar }}</div>
      <h3 class="author-name">{{ author.name }}</h3>
      <p class="author-title">{{ author.title }}</p>
      <p class="author-bio">{{ author.bio }}</p>
      <div class="author-links">
        <a href="#" class="author-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          @nangongchengfeng
        </a>
        <a href="https://zenith.chat/" target="_blank" class="author-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          zenith.chat
        </a>
        <a href="https://github.com/affaan-m/everything-claude-code" target="_blank" class="author-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { author } from '../data'
</script>

<style scoped>
.section {
  margin-bottom: 80px;
}

.author-section {
  background: var(--gradient-dark);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.author-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(74, 144, 226, 0.1) 0%, transparent 60%);
  pointer-events: none;
}

.author-avatar {
  width: 100px;
  height: 100px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 24px;
  position: relative;
  z-index: 1;
}

.author-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

.author-title {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.author-bio {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 24px;
  position: relative;
  z-index: 1;
}

.author-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.author-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--surface-light);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.author-link:hover {
  border-color: var(--primary-color);
  background: rgba(74, 144, 226, 0.1);
}

@media (max-width: 768px) {
  .section {
    margin-bottom: 50px;
  }

  .author-section {
    padding: 32px 20px;
  }
}
</style>
