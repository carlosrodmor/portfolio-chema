<template>
  <nav class="navbar">
    <div class="navbar-container">
      <button class="menu-toggle" @click="toggleMenu" aria-label="Menú">
        <span class="hamburger"></span>
      </button>

      <div class="nav-menu" :class="{ 'nav-menu-active': isMenuOpen }">
        <div class="nav-links">
          <router-link to="/biografia" class="nav-link" @click="closeMenu"
            >Biografía</router-link
          >
          <router-link to="/obras" class="nav-link" @click="closeMenu">Obras</router-link>
          <router-link to="/" class="home-icon" @click="closeMenu">
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
          <router-link to="/blog" class="nav-link" @click="closeMenu">Blog</router-link>
          <router-link to="/contacto" class="nav-link" @click="closeMenu"
            >Contacto</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
/* Estilos base para escritorio */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
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
  gap: 2.5rem;
  padding: 0.75rem 2rem;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: fit-content;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.2s ease;
  padding: 0.3rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.2s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  width: 100%;
}

.home-icon {
  color: rgba(255, 255, 255, 0.85);
  padding: 0.3rem;
  transition: all 0.2s ease;
  transform: scale(0.9);
}

.home-icon:hover {
  color: #fff;
  transform: scale(1);
}

/* Ocultar botón de menú en escritorio */
.menu-toggle {
  display: none;
}

/* Estilos móviles */
@media (max-width: 768px) {
  .navbar {
    padding: 0;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(18, 18, 18, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 0;
    margin: 0;
    padding: 0;
    transform: translateX(-100%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    border: none;
    z-index: 1000;
  }

  .nav-links {
    flex-direction: column;
    padding: 120px 40px;
    gap: 3rem;
    max-width: 280px;
    margin: 0 auto;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1001;
    padding: 0.8rem;
    border: none;
    background: transparent;
  }

  .nav-menu-active {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    opacity: 0.85;
    padding: 0.5rem 0;
    text-align: left;
    height: auto;
    letter-spacing: 0.5px;
    font-weight: 300;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    opacity: 1;
    color: #fff;
    transform: translateX(5px);
  }

  .home-link {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    opacity: 0.6;
  }

  .home-link:hover {
    opacity: 1;
    transform: translateX(5px) scale(1.1);
  }

  /* Estilos del botón hamburguesa */
  .hamburger {
    position: relative;
    display: block;
    width: 26px;
    height: 1.5px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 1.5px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    left: 0;
  }

  .hamburger::before {
    transform: translateY(-8px);
    width: 16px;
    right: 0;
    left: auto;
  }

  .hamburger::after {
    transform: translateY(8px);
    width: 21px;
    right: 0;
    left: auto;
  }

  .menu-toggle:hover .hamburger::before,
  .menu-toggle:hover .hamburger::after {
    width: 26px;
  }

  .nav-menu-active ~ .menu-toggle .hamburger {
    background: transparent;
  }

  .nav-menu-active ~ .menu-toggle .hamburger::before {
    transform: rotate(45deg);
    width: 26px;
    left: 0;
  }

  .nav-menu-active ~ .menu-toggle .hamburger::after {
    transform: rotate(-45deg);
    width: 26px;
    left: 0;
  }

  .nav-menu-active ~ .menu-toggle {
    transform: rotate(90deg);
  }
}
</style>
