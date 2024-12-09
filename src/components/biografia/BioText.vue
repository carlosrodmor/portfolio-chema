<template>
  <div class="text-block fade-in">
    <p v-for="(paragraph, index) in paragraphs" :key="index">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BioText',
  data() {
    return {
      paragraphs: [
        'Nacido en Bimeda, Cangas del Narcea, Xosé María Rodríguez ha desarrollado una destacada carrera dual como ingeniero de telecomunicaciones y escritor. Su trayectoria profesional alcanzó un punto destacado como Director del Centro de Emergencias 112 de Madrid, donde su experiencia técnica se puso al servicio de la seguridad ciudadana.',
        'En el ámbito literario, su obra cumbre "Tiempos de nublina" (traducida al castellano como "Tiempos de neblina"), obtuvo un notable éxito. En esta novela, ambientada en el occidente asturiano durante la Guerra Civil española, el autor teje una narrativa conmovedora que entrelaza las vidas cotidianas de los habitantes de un pueblo.',
        'Esta dualidad entre la precisión técnica de su trabajo como ingeniero y la sensibilidad artística de su obra literaria ha enriquecido ambas facetas de su vida, permitiéndole aportar una perspectiva única tanto a la gestión de emergencias como a la literatura asturiana.'
      ]
    }
  }
}
</script>

<style scoped>
.text-block {
  margin: 4rem 0;
}

.text-block p {
  color: #999;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.text-block p:hover {
  transform: translateX(10px);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
