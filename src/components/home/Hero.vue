<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text-left text-transition">
        <h1>José M.</h1>
      </div>

      <div class="hero-text-right text-transition">
        <h1>Rodríguez</h1>
        <h2>Escritor e Ingeniero</h2>
      </div>
    </div>

    <CallToAction />
  </section>
</template>

<script>
import CallToAction from './CallToAction.vue'

export default {
  name: 'HeroComponent',
  components: {
    CallToAction
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.hero-text-left,
.hero-text-right {
  text-align: left;
}

h1 {
  font-size: 4.5rem;
  font-weight: 300;
  margin: 0;
  color: #ffffff;
  letter-spacing: -0.02em;
  transition: all 0.4s ease;
}

h2 {
  font-size: 2rem;
  font-weight: 300;
  margin: 0.5rem 0 0 0;
  color: #666;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.4s ease;
}

.hero-text-left:hover h1,
.hero-text-right:hover h1,
.hero-text-right:hover h2 {
  color: #000;
  transform: translateX(10px);
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}

.text-transition {
  opacity: 0;
  animation: slideInFromLeft 1.2s ease-out forwards;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.hero-text-right {
  animation: slideInFromRight 1.2s ease-out forwards;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
