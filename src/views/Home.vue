<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text-left text-transition">
          <h1>Jose María</h1>
        </div>

        <div class="hero-image">
          <img src="@/assets/book.webp" alt="App mockup" class="book" />
        </div>

        <div class="hero-text-right text-transition">
          <h1>Rodríguez</h1>
          <h2>Fernández</h2>
        </div>
      </div>

      <div class="cta-container">
        <button class="cta-button">
          Get Early Access Now
          <span class="plus-icon">+</span>
        </button>
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
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #000000;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-text-left,
.hero-text-right {
  text-align: left;
}

h1 {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: #ffffff;
  transition: opacity 0.3s ease;
}

h2 {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  transition: opacity 0.3s ease;
}

.hero-text-left:hover h1,
.hero-text-left:hover h2,
.hero-text-right:hover h1,
.hero-text-right:hover h2 {
  opacity: 0.7;
}

.emoji {
  font-size: 5rem;
}

.phone-mockup {
  height: 600px;
  width: auto;
  transform: perspective(1000px) rotateY(-15deg);
}

.cta-container {
  margin-top: 3rem;
}

.cta-button {
  background: linear-gradient(90deg, #ff4b2b 0%, #ff416c 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.plus-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
  }

  h1,
  h2 {
    font-size: 4rem;
  }

  .emoji {
    font-size: 3.5rem;
  }

  .phone-mockup {
    height: 400px;
  }
}
</style>
