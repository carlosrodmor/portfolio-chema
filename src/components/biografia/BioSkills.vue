<template>
  <div class="skills fade-in">
    <h3>Obras y Reconocimientos</h3>
    <ul>
      <li v-for="(skill, index) in skills" :key="index">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BioSkills',
  data() {
    return {
      skills: [
        'Premio Nacional de Literatura Técnica (1998)',
        'Autor de "Entre Números y Letras" (1995)',
        'Colaborador en revistas especializadas',
        'Conferenciante internacional'
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  margin: 6rem 0;
  padding: 3rem;
  background-color: #111111;
}

.skills h3 {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 2rem;
}

.skills ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skills li {
  color: #999;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.skills li:hover {
  color: #ffffff;
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

@media (max-width: 768px) {
  .skills {
    padding: 2rem 1rem;
  }
}
</style>
