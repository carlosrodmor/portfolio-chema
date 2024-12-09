<template>
  <div class="biografia">
    <header class="bio-header fade-in">
      <h1>José María Rodríguez</h1>
      <p class="subtitle">Ingeniero & Escritor</p>
    </header>

    <section class="bio-content">
      <div class="timeline slide-in">
        <div class="year">2024</div>
        <div class="description">
          <h3>El presente</h3>
          <p>
            Continúa escribiendo y compartiendo su experiencia a través de ensayos sobre
            tecnología y humanidades, mientras asesora proyectos de ingeniería.
          </p>
        </div>
      </div>

      <div class="timeline slide-in">
        <div class="year">1995</div>
        <div class="description">
          <h3>Primera publicación</h3>
          <p>
            Publica su primer libro "Entre Números y Letras", una reflexión sobre la
            intersección entre la ingeniería y la literatura.
          </p>
        </div>
      </div>

      <div class="timeline slide-in">
        <div class="year">1980</div>
        <div class="description">
          <h3>Inicio profesional</h3>
          <p>
            Comienza su carrera como ingeniero industrial, mientras dedica sus noches a
            escribir relatos cortos y ensayos técnicos.
          </p>
        </div>
      </div>

      <div class="timeline slide-in">
        <div class="year">1957</div>
        <div class="description">
          <h3>Nacimiento</h3>
          <p>
            Nace en Madrid, en una familia donde la ingeniería y la literatura siempre
            estuvieron presentes.
          </p>
        </div>
      </div>

      <div class="quote fade-in">
        "La ingeniería me enseñó a resolver problemas; la escritura, a entenderlos"
      </div>

      <div class="text-block fade-in">
        <p>
          Durante más de cuatro décadas, José María ha mantenido un delicado equilibrio
          entre su profesión como ingeniero y su pasión por la escritura. Su experiencia
          en ambos campos le ha permitido desarrollar una perspectiva única sobre la
          tecnología y su impacto en la sociedad.
        </p>

        <p>
          Sus obras literarias, que incluyen cinco libros publicados y numerosos artículos
          técnicos, reflejan esta dualidad. En ellos, explora la intersección entre el
          pensamiento técnico y la expresión artística, demostrando cómo ambas disciplinas
          se complementan y enriquecen mutuamente.
        </p>

        <p>
          Actualmente, dedica gran parte de su tiempo a mentorizar a jóvenes ingenieros y
          escritores, animándoles a explorar ambos mundos sin prejuicios.
        </p>
      </div>

      <div class="skills fade-in">
        <h3>Obras y Reconocimientos</h3>
        <ul>
          <li>Premio Nacional de Literatura Técnica (1998)</li>
          <li>Autor de "Entre Números y Letras" (1995)</li>
          <li>Colaborador en revistas especializadas</li>
          <li>Conferenciante internacional</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BiografiaComponent'
}
</script>

<style scoped>
.biografia {
  min-height: 100vh;
  padding: 4rem 2rem;
}

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

.bio-content {
  max-width: 800px;
  margin: 0 auto;
}

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

.quote {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 300;
  text-align: center;
  margin: 6rem 0;
  font-style: italic;
  line-height: 1.4;
}

.text-block {
  margin: 4rem 0;
}

.text-block p {
  color: #999;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

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
}

@media (max-width: 768px) {
  .biografia {
    padding: 2rem 1rem;
  }

  .bio-header h1 {
    font-size: 2rem;
  }

  .timeline {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .year {
    font-size: 1.2rem;
  }

  .quote {
    font-size: 1.5rem;
    margin: 3rem 0;
  }

  .skills {
    padding: 2rem 1rem;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.slide-in {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.8s ease-out forwards;
}

.timeline {
  opacity: 0;
  animation: slideIn 0.8s ease-out forwards;
}

.timeline:nth-child(1) {
  animation-delay: 0.2s;
}
.timeline:nth-child(2) {
  animation-delay: 0.4s;
}
.timeline:nth-child(3) {
  animation-delay: 0.6s;
}
.timeline:nth-child(4) {
  animation-delay: 0.8s;
}

.quote {
  position: relative;
  padding: 2rem 0;
}

.quote::before,
.quote::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 100px;
  height: 1px;
  background-color: #333;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.quote::before {
  top: 0;
}
.quote::after {
  bottom: 0;
}

.quote:hover::before,
.quote:hover::after {
  width: 200px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.text-block p {
  transition: transform 0.3s ease;
}

.text-block p:hover {
  transform: translateX(10px);
}

.skills li {
  transition: color 0.3s ease;
}

.skills li:hover {
  color: #ffffff;
}
</style>
