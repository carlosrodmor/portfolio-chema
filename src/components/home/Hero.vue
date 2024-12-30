<template>
  <section class="hero">
    <div class="background-image"></div>
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
  position: relative;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.08;
  filter: grayscale(100%) contrast(120%);
  transform: scale(1.1);
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero:hover .background-image {
  transform: scale(1);
  opacity: 0.12;
}

.hero-content {
  position: relative;
  z-index: 2;
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
  font-size: 5rem;
  font-weight: 200;
  margin: 0;
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2px;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

h2 {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem 0;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 4px;
  text-transform: uppercase;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-text-left:hover h1,
.hero-text-right:hover h1 {
  transform: translateX(-10px);
  opacity: 0.7;
}

.hero-text-right:hover h2 {
  letter-spacing: 8px;
  color: rgba(255, 255, 255, 0.7);
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

/* Asegúrate de que CallToAction también esté por encima de la imagen */
.hero > :last-child {
  position: relative;
  z-index: 2;
}

/* Efecto de partículas flotantes */
.hero::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 1%
  );
  background-size: 3px 3px;
  animation: particleFloat 20s linear infinite;
  opacity: 0.3;
}

@keyframes particleFloat {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}
</style>
