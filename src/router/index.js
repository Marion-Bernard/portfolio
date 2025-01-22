import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../components/PresentationComponent.vue'
import Experience from '../components/Experiences/ExperiencesComponent.vue'
import Skills from '../components/Skills/SkillsComponent.vue'
import Projects from '../components/Projects/ProjectsComponent.vue'
import Contact from '../components/ContactComponent.vue'
import Credits from '../components/CreditsComponent.vue'
import Study from '../components/Studies/StudiesComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Presentation },
  { path: '/experience', component: Experience },
  { path: '/study', component: Study },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/credits', component: Credits },
  ],
})

export default router
