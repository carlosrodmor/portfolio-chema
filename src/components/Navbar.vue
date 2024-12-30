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
      isMenuOpen: false,
      isTransitioning: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        this.handleMenuClose()
      }
    },
    closeMenu() {
      if (this.isMenuOpen && !this.isTransitioning) {
        this.isTransitioning = true
        this.isMenuOpen = false
        this.handleMenuClose()
      }
    },
    handleMenuClose() {
      setTimeout(() => {
        document.body.style.overflow = ''
        this.isTransitioning = false
      }, 400)
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
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
  background: rgba(10, 10, 10, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 100px;
  padding: 0.75rem 2rem;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-menu:hover {
  background: rgba(10, 10, 10, 0.5);
  transform: translateY(5px);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  transition: all 0.4s ease;
  transform-origin: left;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: #fff;
  transition: all 0.4s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #fff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.nav-link:hover::before {
  width: 80%;
}

.home-icon {
  color: rgba(255, 255, 255, 0.85);
  padding: 0.3rem;
  transition: all 0.2s ease;
  transform: scale(0.9);
  position: relative;
}

.home-icon:hover {
  color: #fff;
  transform: scale(1);
}

.home-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.home-icon:hover::after {
  opacity: 1;
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
    background: rgba(18, 18, 18, 0.98);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 0;
    margin: 0;
    padding: 0;
    transform: translateX(-100%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
  }

  .nav-menu-active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 2.5rem;
    padding: 0;
    margin: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }

  .nav-menu-active .nav-links {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  }

  .nav-link {
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }

  .home-icon {
    transform: scale(1.5);
    margin: 1rem 0;
  }

  .home-icon:hover {
    transform: scale(1.7);
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
    cursor: pointer;
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

  /* Animación del botón hamburguesa */
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

/* Efecto de brillo en el menú */
.nav-menu::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 100%
  );
  z-index: -1;
  transition: transform 0.6s ease;
  transform: translateX(-100%);
}

.nav-menu:hover::before {
  transform: translateX(100%);
}
</style>
