import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginView from '@/views/LoginView.vue'
import DocsView from '@/views/DocsView.vue'

function requireAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const authStore = useAuthStore()

  if (authStore.isTokenValid()) {
    next() // Proceed if the token is valid
  } else {
    next({ name: 'login' }) // Redirect to login if not authenticated
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/docs',
      name: 'docs',
      component: DocsView,
      beforeEnter: requireAuth, // Protect this route
    },
  ],
})

export default router
