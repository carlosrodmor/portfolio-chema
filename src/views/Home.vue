<template>
  <div class="home">
    <section class="hero">
      <h1>Nombre del Escritor</h1>
      <p class="hero-text">Autor de novelas contemporáneas y ensayos literarios</p>
      <button class="cta-button">Ver Obras</button>
    </section>

    <section class="features">
      <div class="feature-card">
        <h3>Novelas</h3>
        <p>
          Explora mis obras de ficción donde la realidad y la imaginación se entrelazan
        </p>
      </div>
      <div class="feature-card">
        <h3>Ensayos</h3>
        <p>Reflexiones sobre literatura, sociedad y el arte de escribir</p>
      </div>
      <div class="feature-card">
        <h3>Blog</h3>
        <p>Pensamientos, procesos creativos y actualizaciones sobre nuevos proyectos</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding-top: 80px;
  background-color: #000000;
}

.hero {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #3aa876;
}

.features {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  background-color: #000000;
}

.feature-card {
  padding: 2rem;
  background-color: #111111;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.feature-card h3 {
  color: #42b983;
  margin-bottom: 1rem;
}
</style>
