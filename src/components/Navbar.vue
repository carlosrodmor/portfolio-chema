<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <router-link to="/">
          <!-- Aquí puedes agregar el nombre o iniciales del escritor como logo -->
        </router-link>
      </div>

      <div class="nav-menu">
        <router-link to="/obras" class="nav-link">Obras</router-link>
        <router-link to="/sobre-mi" class="nav-link">Sobre Mí</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  z-index: 1000;
  background: #000000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo-image {
  height: 2rem;
  width: auto;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  background: #111111;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  opacity: 0.7;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .navbar {
    padding: 1rem;
  }
}
</style>
