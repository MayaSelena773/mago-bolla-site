import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpettacoliView from '../views/SpettacoliView.vue'
import CurriculumView from '../views/CurriculumView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Other pages
    {
      path: '/spettacoli',
      name: 'spettacoli',
      component: SpettacoliView
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: CurriculumView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
  ]
})

export default router
