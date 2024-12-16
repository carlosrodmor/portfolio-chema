<template>
  <div class="contacto">
    <section class="contacto-content">
      <ContactHeader />
      <ContactForm />
    </section>
  </div>
</template>

<script>
import ContactHeader from '@/components/contacto/ContactHeader.vue'
import ContactForm from '@/components/contacto/ContactForm.vue'

export default {
  name: 'ContactoView',
  components: {
    ContactHeader,
    ContactForm
  }
}
</script>

<style scoped>
.contacto {
  min-height: 100vh;
  background-color: #000000;
  padding: 4rem 2rem;
}

.contacto-content {
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contacto {
    padding: 2rem 1rem;
  }
}
</style> 