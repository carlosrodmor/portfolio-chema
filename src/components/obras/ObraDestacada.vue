<template>
  <div class="obra-destacada fade-in">
    <div class="obra-info">
      <h2>Tiempos de nublina</h2>
      <h3>Tiempos de neblina</h3>
      <p class="descripcion">
        Una novela que narra la vida en el occidente asturiano durante la Guerra Civil
        española, donde las historias personales se entrelazan con los acontecimientos
        históricos en un relato conmovedor sobre la supervivencia, el amor y la lucha por
        los ideales.
      </p>
      <div class="detalles">
        <span>2014</span>
        <span>Editorial Trabe</span>
      </div>
    </div>
    <div class="obra-imagen">
      <img src="@/assets/tiempos-de-neblina.webp" alt="Portada de Tiempos de neblina" />
    </div>
  </div>
</template>

<style scoped>
.obra-destacada {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 4rem auto;
  padding: 3rem;
  max-width: 1000px;
  background: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.obra-destacada::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  transform: translate(-100%, -100%);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.obra-destacada:hover::before {
  transform: translate(0, 0);
}

.obra-info {
  text-align: left;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 3.5rem;
  font-weight: 200;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.6s ease;
}

h3 {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.4);
  margin: 0.5rem 0 2rem 0;
  font-weight: 300;
  letter-spacing: 1px;
}

.descripcion {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  transition: opacity 0.3s ease;
  position: relative;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(0);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.detalles {
  display: flex;
  gap: 2rem;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.detalles span {
  position: relative;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  transition: all 0.4s ease;
}

.detalles span:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.obra-imagen {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  margin: 0 auto;
}

.obra-imagen img {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: grayscale(20%);
}

.obra-destacada:hover .obra-imagen img {
  transform: scale(1.05) rotate(2deg);
  filter: grayscale(0%);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@media (max-width: 768px) {
  .obra-destacada {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
    margin: 2rem auto;
  }

  .obra-info {
    padding: 1rem;
    text-align: center;
  }

  .obra-imagen {
    order: -1;
  }

  h2 {
    font-size: 2.5rem;
  }

  .obra-imagen {
    max-width: 280px;
    margin: 0 auto;
  }

  .obra-imagen img {
    max-height: 380px;
  }
}

.obra-destacada:hover h2 {
  letter-spacing: 2px;
}

.obra-destacada:hover .descripcion {
  border-left-color: rgba(255, 255, 255, 0.3);
  transform: translateX(10px);
}
</style>
