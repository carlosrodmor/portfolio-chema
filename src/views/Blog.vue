<template>
  <div class="blog">
    <section class="blog-content">
      <BlogHeader />
      <BlogPosts />
    </section>
  </div>
</template>

<script>
import BlogHeader from '@/components/blog/BlogHeader.vue'
import BlogPosts from '@/components/blog/BlogPosts.vue'

export default {
  name: 'BlogView',
  components: {
    BlogHeader,
    BlogPosts
  }
}
</script>

<style scoped>
.blog {
  min-height: 100vh;
  background-color: #000000;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

/* Imagen de fondo para Blog */
.blog::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  filter: grayscale(100%) contrast(120%);
  transform: scale(1.1);
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.blog:hover::after {
  transform: scale(1);
  opacity: 0.12;
}

.blog-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .blog {
    padding: 2rem 1rem;
  }
}
</style>
