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
        'Ingeniero de Telecomunicaciones',
        'Director del Centro de Emergencias 112 de Madrid',
        'Autor de Tiempos de nublina/Tiempos de neblina',
        'Autor de Nueite de filandón',
        'Narrador de la Guerra Civil en el occidente asturiano',
        'Pionero en la literatura en dialecto occidental asturiano',
        "Miembro del Conceyu d'Asturies en Madrid"
      ]
    }
  }
}
</script>

<style scoped>
.skills {
  margin: 4rem auto;
  padding: 4rem;
  background-color: rgba(17, 17, 17, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}

.skills h3 {
  font-size: 2rem;
  font-weight: 200;
  color: #ffffff;
  margin-bottom: 3rem;
  letter-spacing: 1px;
  position: relative;
}

.skills h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, #ffffff, transparent);
}

.skills ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skills li {
  color: #b3b3b3;
  font-size: 1.1rem;
  padding: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  border-radius: 4px;
}

.skills li:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.05);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  60% {
    transform: translateY(-5px) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 2.5rem 1.5rem;
    margin: 2rem auto;
  }

  .skills h3 {
    font-size: 1.75rem;
  }
}
</style>
