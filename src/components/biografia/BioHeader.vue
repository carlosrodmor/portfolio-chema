<template>
  <header class="bio-header fade-in">
    <h1>José María Rodríguez</h1>
    <p class="subtitle">Ingeniero & Escritor</p>
  </header>
</template>

<script>
export default {
  name: 'BioHeader'
}
</script>

<style scoped>
.bio-header {
  max-width: 800px;
  margin: 0 auto 6rem;
  text-align: center;
}

.bio-header h1 {
  font-size: 3rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.2rem;
  color: #999;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .bio-header h1 {
    font-size: 2rem;
  }
}
</style> 