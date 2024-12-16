<template>
  <form class="contact-form fade-in" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" v-model="formData.nombre" required />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>

    <div class="form-group">
      <label for="mensaje">Mensaje</label>
      <textarea id="mensaje" v-model="formData.mensaje" rows="5" required></textarea>
    </div>

    <button type="submit" class="submit-button">
      Enviar mensaje
      <span class="arrow">→</span>
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        nombre: '',
        email: '',
        mensaje: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', this.formData)
    }
  }
}
</script>

<style scoped>
.contact-form {
  background: rgba(17, 17, 17, 0.7);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #fff;
  font-family: inherit;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.3);
}

.submit-button {
  background: transparent;
  color: #fafafa;
  border: 1px solid #fafafa;
  padding: 0.8rem 2rem;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s ease;
  font-weight: 300;
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.4s ease;
}

.submit-button:hover {
  background-color: #fafafa;
  color: #000000;
  transform: translateY(-2px);
}

.submit-button:hover .arrow {
  transform: translateX(5px);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
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
</style> 