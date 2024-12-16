<template>
  <div class="contact-header fade-in">
    <h1>Contacto</h1>
    <p>¿Tienes algo que compartir? Me encantaría escucharte</p>
  </div>
</template>

<style scoped>
.contact-header {
  text-align: left;
  margin-bottom: 4rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 200;
  margin: 0;
  color: #ffffff;
  letter-spacing: -1px;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-top: 1rem;
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
  h1 {
    font-size: 2.5rem;
  }
}
</style> 