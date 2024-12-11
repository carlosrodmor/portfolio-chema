<template>
  <div class="obras">
    <section class="obras-content">
      <ObraDestacada />
      <ObrasList />
      <NavigationButtons
        prev="/biografia"
        next="/blog"
        prevText="Biografía"
        nextText="Blog"
      />
    </section>
  </div>
</template>

<script>
import NavigationButtons from '@/components/common/NavigationButtons.vue'
import ObraDestacada from '@/components/obras/ObraDestacada.vue'
import ObrasList from '@/components/obras/ObrasList.vue'

export default {
  name: 'ObrasView',
  components: {
    NavigationButtons,
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
}

.obras-content {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .obras {
    padding: 2rem 1rem;
  }
}
</style>
