<template>
  <div class="cta-container">
    <button class="cta-button" @click="navigateTo">Biografía</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'CallToAction',
  setup() {
    const router = useRouter()

    const navigateTo = () => {
      router.push('/biografia')
    }

    return {
      navigateTo
    }
  }
}
</script>

<style scoped>
.cta-container {
  margin-top: 3rem;
}

.cta-button {
  background: linear-gradient(90deg, #ff4b2b 0%, #ff416c 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease-in-out;
}

.cta-button:hover {
  background: linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%);
  transform: scale(1.05);
}

.plus-icon {
  font-size: 1.5rem;
}
</style>
