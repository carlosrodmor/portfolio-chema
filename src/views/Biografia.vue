<template>
  <div class="biografia-container">
    <div class="biografia">
      <section class="bio-content">
        <BioTimeline />
        <BioQuote />
        <BioText />
      </section>
    </div>
    <ScrollIndicator />
  </div>
</template>

<script>
import BioTimeline from '@/components/biografia/BioTimeline.vue'
import BioQuote from '@/components/biografia/BioQuote.vue'
import BioText from '@/components/biografia/BioText.vue'
import ScrollIndicator from '@/components/ScrollIndicator.vue'

export default {
  name: 'BiografiaView',
  components: {
    BioTimeline,
    BioQuote,
    BioText,
    ScrollIndicator
  }
}
</script>

<style scoped>
.biografia {
  min-height: 100vh;
  background-color: #000000;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Imagen de fondo para Biografía */
.biografia::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  filter: grayscale(100%) contrast(120%);
  transform: scale(1.1);
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.biografia:hover::after {
  transform: scale(1);
  opacity: 0.12;
}

.bio-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .biografia {
    padding: 2rem 1rem;
  }
}
</style>
