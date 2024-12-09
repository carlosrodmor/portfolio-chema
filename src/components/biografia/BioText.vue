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
        'Durante más de cuatro décadas, José María ha mantenido un delicado equilibrio entre su profesión como ingeniero y su pasión por la escritura. Su experiencia en ambos campos le ha permitido desarrollar una perspectiva única sobre la tecnología y su impacto en la sociedad.',
        'Sus obras literarias, que incluyen cinco libros publicados y numerosos artículos técnicos, reflejan esta dualidad. En ellos, explora la intersección entre el pensamiento técnico y la expresión artística, demostrando cómo ambas disciplinas se complementan y enriquecen mutuamente.',
        'Actualmente, dedica gran parte de su tiempo a mentorizar a jóvenes ingenieros y escritores, animándoles a explorar ambos mundos sin prejuicios.'
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
