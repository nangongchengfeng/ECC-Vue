<template>
  <footer class="footer">
    <div class="footer-content">
      <p>基于 <a href="https://github.com/affaan-m/everything-claude-code" target="_blank">Everything Claude Code</a> 创建 | MIT License</p>
      <p class="footer-stats">
        <span>访问量 <span class="pv-count">--</span></span>
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--surface-color);
  border-top: 1px solid var(--border-color);
  padding: 40px 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer a {
  color: var(--primary-color);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-stats {
  margin-top: 16px;
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>
