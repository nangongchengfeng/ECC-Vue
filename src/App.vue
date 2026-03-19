<template>
  <div class="app">
    <HeroSection />
    <main class="main-content">
      <FeaturesSection />
      <ComponentsSection />
      <HooksSection />
      <InstallationSection />
      <TipsSection />
      <LearningSection />
      <AuthorSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import ComponentsSection from './components/ComponentsSection.vue'
import HooksSection from './components/HooksSection.vue'
import InstallationSection from './components/InstallationSection.vue'
import TipsSection from './components/TipsSection.vue'
import LearningSection from './components/LearningSection.vue'
import AuthorSection from './components/AuthorSection.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})
</script>

<style>
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 50px 16px;
  }
}
</style>
