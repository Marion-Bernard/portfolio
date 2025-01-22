import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../components/PresentationComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Presentation,
    }
  ],
})

export default router
