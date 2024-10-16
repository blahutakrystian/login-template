import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '', // Get JWT from local storage if available
    errorMessage: '',
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await axios.post('https://your-api-url.com/login', {
          username,
          password,
        })

        const token = response.data.token

        // Decode JWT (without verifying signature)
        const payload = JSON.parse(atob(token.split('.')[1]))

        // Check if the token has the 'docs' role
        if (payload.roles && payload.roles.includes('docs')) {
          // Store token in state and local storage
          this.token = token
          localStorage.setItem('token', token)

          const router = useRouter()
          router.push({ name: 'docs' }) // Navigate to the protected page
        } else {
          this.errorMessage = 'You do not have access to this section.'
        }
      } catch {
        this.errorMessage = 'Invalid login credentials or server error.'
      }
    },

    logout() {
      // Clear token from state and local storage
      this.token = ''
      localStorage.removeItem('token')

      const router = useRouter()
      router.push({ name: 'login' }) // Redirect to the login page
    },

    isTokenValid() {
      if (this.token) {
        const payload = JSON.parse(atob(this.token.split('.')[1]))
        const currentTime = Math.floor(Date.now() / 1000)
        return payload.exp > currentTime
      }
      return false
    },
  },
})
