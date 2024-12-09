<template>
  <div class="cta-container">
    <button class="cta-button" @click="navigateTo">
      Descubrir
      <span class="arrow">→</span>
    </button>
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
  margin-top: 4rem;
}

.cta-button {
  background: transparent;
  color: #fafafa;
  border: 1px solid #fafafa;
  padding: 0.8rem 2rem;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s ease;
  font-weight: 300;
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.4s ease;
}

.cta-button:hover {
  background-color: #fafafa;
  color: #000000;
  transform: translateY(-2px);
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

.cta-button:active {
  transform: translateY(0);
}
</style>
