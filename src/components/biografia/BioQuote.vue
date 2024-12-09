<template>
  <div class="quote fade-in">
    "La ingeniería me enseñó a resolver problemas; la escritura, a entenderlos"
  </div>
</template>

<script>
export default {
  name: 'BioQuote'
}
</script>

<style scoped>
.quote {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 300;
  text-align: center;
  margin: 6rem 0;
  font-style: italic;
  line-height: 1.4;
  position: relative;
  padding: 2rem 0;
}

.quote::before,
.quote::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 100px;
  height: 1px;
  background-color: #333;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.quote::before {
  top: 0;
}
.quote::after {
  bottom: 0;
}

.quote:hover::before,
.quote:hover::after {
  width: 200px;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .quote {
    font-size: 1.5rem;
    margin: 3rem 0;
  }
}
</style>
