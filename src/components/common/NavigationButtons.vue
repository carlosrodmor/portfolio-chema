<template>
  <div class="nav-buttons fade-in">
    <button v-if="prev" class="nav-btn prev" @click="navigate(prev)">
      <span class="arrow">←</span>
      {{ prevText }}
    </button>
    <button v-if="next" class="nav-btn next" @click="navigate(next)">
      {{ nextText }}
      <span class="arrow">→</span>
    </button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'NavigationButtons',
  props: {
    prev: {
      type: String,
      default: ''
    },
    next: {
      type: String,
      default: ''
    },
    prevText: {
      type: String,
      default: 'Anterior'
    },
    nextText: {
      type: String,
      default: 'Siguiente'
    }
  },
  setup() {
    const router = useRouter()
    
    const navigate = async (route) => {
      await router.push(route)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return { navigate }
  }
}
</script>

<style scoped>
.nav-buttons {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 6rem auto;
  max-width: 600px;
}

.nav-btn {
  background: transparent;
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  backdrop-filter: blur(10px);
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.4s ease;
}

.next:hover .arrow {
  transform: translateX(5px);
}

.prev:hover .arrow {
  transform: translateX(-5px);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav-buttons {
    flex-direction: column;
    margin: 3rem auto;
  }
}
</style>
