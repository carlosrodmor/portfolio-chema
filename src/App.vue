<template>
  <NavbarComponent />
  <router-view />
</template>

<script>
import NavbarComponent from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>
#app {
  font-family: Manrope, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background-color: #000000;
  min-height: 100vh;
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: #000000;
}
</style>
