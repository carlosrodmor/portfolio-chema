<template>
  <Transition name="fade">
    <button
      v-show="showButton && !isHome"
      class="scroll-top-btn"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ScrollToTop',
  setup() {
    const showButton = ref(false)
    const route = useRoute()
    const isHome = computed(() => route.path === '/')

    const checkScroll = () => {
      showButton.value = window.scrollY > 500
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', checkScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll)
    })

    return {
      showButton,
      scrollToTop,
      isHome
    }
  }
}
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: rgba(17, 17, 17, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
}

.scroll-top-btn:hover {
  transform: translateY(-5px);
  background: rgba(17, 17, 17, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .scroll-top-btn {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 40px;
    height: 40px;
  }
}
</style>
