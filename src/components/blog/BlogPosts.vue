<template>
  <div class="blog-posts">
    <article v-for="(post, index) in posts" :key="index" class="post-card fade-in" :style="{ animationDelay: `${index * 0.2}s` }">
      <div class="post-date">{{ post.date }}</div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  data() {
    return {
      posts: [
        {
          title: 'La importancia de preservar el dialecto occidental',
          excerpt: 'Reflexiones sobre la conservación de nuestra lengua y su importancia en la identidad cultural.',
          date: 'Mayo 15, 2024',
          tags: ['Literatura', 'Cultura']
        },
        {
          title: 'Tecnología y tradición: un balance necesario',
          excerpt: 'Cómo la modernidad puede convivir con nuestras raíces culturales.',
          date: 'Abril 28, 2024',
          tags: ['Tecnología', 'Sociedad']
        }
      ]
    }
  }
}
</script>

<style scoped>
.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-card {
  background: rgba(17, 17, 17, 0.7);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.post-card:hover {
  transform: translateY(-5px);
  background: rgba(17, 17, 17, 0.8);
}

.post-date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

h2 {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

p {
  color: #999;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #666;
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