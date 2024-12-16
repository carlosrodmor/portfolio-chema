import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/biografia',
    name: 'Biografia',
    component: () => import('@/views/Biografia.vue')
  },
  {
    path: '/obras',
    name: 'Obras',
    component: () => import('@/views/Obras.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('@/views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
