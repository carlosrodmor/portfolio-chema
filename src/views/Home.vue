<template>
  <div class="home">
    <HeroComponent />
  </div>
</template>

<script>
import HeroComponent from '@/components/home/Hero.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComponent
  }
}
</script>
