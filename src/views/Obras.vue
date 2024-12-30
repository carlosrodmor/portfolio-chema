<template>
  <div class="obras">
    <section class="obras-content">
      <ObraDestacada />
      <ObrasList />
    </section>
  </div>
</template>

<script>
import ObraDestacada from '@/components/obras/ObraDestacada.vue'
import ObrasList from '@/components/obras/ObrasList.vue'

export default {
  name: 'ObrasView',
  components: {
    ObraDestacada,
    ObrasList
  }
}
</script>

<style scoped>
.obras {
  min-height: 100vh;
  background-color: #000000;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Imagen de fondo para Obras */
.obras::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  filter: grayscale(100%) contrast(120%);
  transform: scale(1.1);
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.obras:hover::after {
  transform: scale(1);
  opacity: 0.12;
}

.obras-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .obras {
    padding: 2rem 1rem;
  }
}
</style>
