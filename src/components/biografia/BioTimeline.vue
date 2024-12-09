<template>
  <div class="timeline-container">
    <div
      v-for="(event, index) in timelineEvents"
      :key="event.year"
      class="timeline slide-in"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <div class="year">{{ event.year }}</div>
      <div class="description">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BioTimeline',
  data() {
    return {
      timelineEvents: [
        {
          year: '2014',
          title: 'Tiempos de neblina',
          description:
            'Publicación de su obra más aclamada, una novela sobre la vida durante la Guerra Civil en el occidente asturiano.'
        },
        {
          year: '2000',
          title: 'Director del 112 Madrid',
          description:
            'Asume la dirección del Centro de Emergencias 112 de la Comunidad de Madrid.'
        },
        {
          year: '1984',
          title: 'Carrera dual',
          description:
            'Compagina su trabajo como ingeniero de telecomunicaciones con su pasión por la literatura asturiana.'
        },
        {
          year: '1956',
          title: 'Nacimiento',
          description:
            'Nace en Bimeda, Cangas del Narcea, iniciando un camino que combinaría tecnología y literatura.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

.year {
  font-size: 1.5rem;
  color: #666;
  font-weight: 300;
}

.description h3 {
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1rem;
}

.description p {
  color: #999;
  line-height: 1.6;
}

.slide-in {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.8s ease-out forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .timeline {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .year {
    font-size: 1.2rem;
  }
}
</style>
