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
          year: '2024',
          title: 'El presente',
          description:
            'Continúa escribiendo y compartiendo su experiencia a través de ensayos sobre tecnología y humanidades, mientras asesora proyectos de ingeniería.'
        },
        {
          year: '1995',
          title: 'Primera publicación',
          description:
            'Publica su primer libro "Entre Números y Letras", una reflexión sobre la intersección entre la ingeniería y la literatura.'
        },
        {
          year: '1980',
          title: 'Inicio profesional',
          description:
            'Comienza su carrera como ingeniero industrial, mientras dedica sus noches a escribir relatos cortos y ensayos técnicos.'
        },
        {
          year: '1957',
          title: 'Nacimiento',
          description:
            'Nace en Madrid, en una familia donde la ingeniería y la literatura siempre estuvieron presentes.'
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
