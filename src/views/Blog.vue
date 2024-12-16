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
}

.blog-content {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .blog {
    padding: 2rem 1rem;
  }
}
</style> 