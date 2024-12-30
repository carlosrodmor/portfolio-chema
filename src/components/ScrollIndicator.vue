<template>
  <div class="scroll-indicator" :class="{ scrolled: hasScrolled }">
    <div class="scroll-dot"></div>
    <div class="scroll-line"></div>
    <div class="scroll-dot"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollIndicator',
  data() {
    return {
      hasScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrolled = window.scrollY
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.hasScrolled = scrolled > 50 && scrolled < windowHeight - 50
    }
  }
}
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-dot {
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.scroll-line {
  width: 2px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  animation: scrollProgress 2s ease-in-out infinite;
}

.scrolled .scroll-dot:first-child {
  transform: scale(0.8);
  opacity: 0.5;
}

.scrolled .scroll-dot:last-child {
  transform: scale(0.8);
  opacity: 0.5;
}

@keyframes scrollProgress {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@media (max-width: 768px) {
  .scroll-indicator {
    right: 10px;
  }
}
</style> 