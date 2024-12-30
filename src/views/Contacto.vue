<template>
  <div class="contacto-container">
    <div class="contacto">
      <section class="contacto-content">
        <div class="name-container">
          <h1 class="name-effect">José María Rodríguez</h1>
          <h2 class="name-asturian">Xosé María Rodríguez</h2>
        </div>

        <div class="location-container">
          <div class="location-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <p class="location-text">Torrelodones, Madrid</p>
        </div>

        <div class="email-container">
          <p class="email-intro">¿Tienes algo que compartir?</p>
          <a href="mailto:chemabimeda3@gmail.com" class="email-link">
            <span class="email-text">chemabimeda3@gmail.com</span>
            <span class="email-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
    <ScrollIndicator />
  </div>
</template>

<script>
import ScrollIndicator from '@/components/ScrollIndicator.vue'

export default {
  name: 'ContactoView',
  components: {
    ScrollIndicator
  }
}
</script>

<style scoped>
.contacto-container {
  min-height: 100vh;
  background-color: #000000;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Imagen de fondo para Contacto */
.contacto-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  filter: grayscale(100%) contrast(120%);
  transform: scale(1.1);
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.contacto-container:hover::after {
  transform: scale(1);
  opacity: 0.12;
}

.contacto-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.name-container {
  margin-bottom: 4rem;
  position: relative;
}

.name-effect {
  font-size: 4.5rem;
  font-weight: 200;
  color: #ffffff;
  margin: 0;
  letter-spacing: -2px;
  position: relative;
  animation: fadeInUp 1s ease-out;
  background: linear-gradient(to right, #ffffff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

.name-effect:hover {
  transform: translateY(-5px);
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.name-asturian {
  font-size: 2rem;
  color: #666;
  margin: 1rem 0;
  font-weight: 200;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.5s;
}

.location-container {
  margin: 2rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 1s;
}

.location-icon {
  color: #666;
}

.location-text {
  color: #999;
  font-size: 1.2rem;
}

.email-container {
  margin-top: 4rem;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 1.5s;
}

.email-intro {
  color: #999;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.email-text {
  background: linear-gradient(45deg, #fff, #666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.email-arrow {
  transition: transform 0.4s ease;
}

.email-link:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

.email-link:hover .email-arrow {
  transform: translateX(10px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .name-effect {
    font-size: 3rem;
  }

  .name-asturian {
    font-size: 1.5rem;
  }

  .email-link {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
