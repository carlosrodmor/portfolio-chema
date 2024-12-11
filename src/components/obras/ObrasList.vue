<template>
  <div class="obras-list">
    <h3>Otras obras</h3>
    <div class="obras-grid">
      <div
        v-for="(obra, index) in obras"
        :key="index"
        class="obra-card fade-in"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <h4>{{ obra.titulo }}</h4>
        <p>{{ obra.descripcion }}</p>
        <span class="año">{{ obra.año }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObrasList',
  data() {
    return {
      obras: [
        {
          titulo: 'Nueite de filandón',
          descripcion:
            'Una de las primeras obras en dialecto occidental asturiano, que recupera la tradición oral.',
          año: '1982'
        },
        {
          titulo: 'Xuan Canas',
          descripcion:
            "Nial d'alcurdanzas: Memorias y vivencias del mundo rural asturiano.",
          año: '1983'
        },
        {
          titulo: 'Cuentus de Nós',
          descripcion:
            'Colaboración en obra colectiva que enriquece el panorama literario asturiano.',
          año: '1983'
        },
        {
          titulo: 'El vatse lus teixus',
          descripcion:
            'Participación en obra colectiva que amplía las fronteras de la literatura asturiana.',
          año: '1984'
        }
      ]
    }
  }
}
</script>

<style scoped>
.obras-list {
  margin: 6rem 0;
}

h3 {
  font-size: 2rem;
  font-weight: 200;
  color: #ffffff;
  margin-bottom: 4rem;
  text-align: left;
  position: relative;
  display: inline-block;
}

h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 30px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

.obras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.obra-card {
  background: rgba(17, 17, 17, 0.7);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.obra-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.03));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.obra-card:hover {
  transform: translateY(-5px);
}

.obra-card:hover::before {
  opacity: 1;
}

h4 {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin: 0 0 1rem 0;
  transition: transform 0.3s ease;
}

.obra-card:hover h4 {
  transform: translateX(5px);
}

p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.año {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
  .obras-list {
    margin: 3rem 0;
  }

  .obra-card {
    padding: 1.5rem;
  }
}
</style>
