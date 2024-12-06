<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="nav-menu">
        <router-link to="/biografia" class="nav-link">Biografía</router-link>
        <router-link to="/obras" class="nav-link">Obras</router-link>

        <router-link to="/" class="home-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </router-link>

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
  background: transparent;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 1.5rem;
  background: #1a1a1a;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: fit-content;
  margin: 0 auto;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
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

.home-icon {
  color: #fff;
  margin: 0 1.5rem;
  padding: 0.5rem;
  transition: transform 0.5s ease-in-out;
}

.home-icon:hover {
  transform: scale(1.15);
}
</style>
