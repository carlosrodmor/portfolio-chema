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
          title: 'El futuro de la literatura asturiana',
          excerpt: 'Un análisis sobre las nuevas tendencias y voces emergentes en la literatura asturiana contemporánea.',
          date: 'Marzo 15, 2025',
          tags: ['Literatura', 'Cultura']
        },
        {
          title: 'La poesía en el occidente asturiano',
          excerpt: 'Explorando las raíces y la evolución de la tradición poética en nuestra región.',
          date: 'Febrero 28, 2025',
          tags: ['Poesía', 'Tradición']
        },
        {
          title: 'Memoria y narrativa: escribir sobre el pasado',
          excerpt: 'Reflexiones sobre cómo la memoria colectiva influye en la creación literaria contemporánea.',
          date: 'Enero 20, 2025',
          tags: ['Escritura', 'Memoria']
        },
        {
          title: 'Los dialectos asturianos en la era digital',
          excerpt: 'Un vistazo a cómo las nuevas tecnologías pueden ayudar a preservar y difundir nuestras lenguas.',
          date: 'Enero 5, 2025',
          tags: ['Tecnología', 'Lengua']
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