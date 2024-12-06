<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="nav-menu">
        <router-link to="/biografia" class="nav-link">Biografía</router-link>
        <router-link to="/obras" class="nav-link">Obras</router-link>

        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="Logo" class="logo-image" />
          </router-link>
        </div>

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

.logo {
  margin: 0 1.5rem;
}

.logo-image {
  height: 2rem;
  width: auto;
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
</style>
