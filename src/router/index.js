import { createRouter, createWebHistory } from 'vue-router'
import RedirectView from '../views/RedirectView.vue'

const routes = [
  {
    path: '/',
    name: 'redirect',
    component: RedirectView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
