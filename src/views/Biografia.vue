<template>
  <div class="biografia">
    <section class="bio-content">
      <BioTimeline />
      <BioQuote />
      <BioText />
      <NavigationButtons prev="/" next="/obras" prevText="Inicio" nextText="Obras" />
    </section>
  </div>
</template>

<script>
import BioTimeline from '@/components/biografia/BioTimeline.vue'
import BioQuote from '@/components/biografia/BioQuote.vue'
import BioText from '@/components/biografia/BioText.vue'
import NavigationButtons from '@/components/common/NavigationButtons.vue'

export default {
  name: 'BiografiaComponent',
  components: {
    BioTimeline,
    BioQuote,
    BioText,
    NavigationButtons
  }
}
</script>

<style scoped>
.biografia {
  min-height: 100vh;
  background-color: #000000;
  padding: 4rem 2rem;
}

.bio-content {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .biografia {
    padding: 2rem 1rem;
  }
}
</style>
