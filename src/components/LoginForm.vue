<script lang="ts">
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()

    return {
      username: '',
      password: '',
      errorMessage: authStore.errorMessage,
      login: authStore.login, // Use the login action from the store
    }
  },
}
</script>

<template>
  <div class="login-container">
    <form @submit.prevent="login(username, password)" class="login-form">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
/* Flex container for centering */
.login-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  min-height: 100vh; /* Ensure container takes full viewport height */
  background-color: var(
    --color-background-soft
  ); /* Keep consistent background */
  width: 100vw; /* Ensure it takes full width */
}

/* Login form styles */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%; /* Ensure the form takes full width of its container */
  max-width: 400px; /* Limit maximum width of the form */
}

input {
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  width: 100%; /* Make sure input takes full width */
}

input::placeholder {
  color: var(--color-text-light-2);
}

button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white);
  cursor: pointer;
}

button:hover {
  background-color: #1a2530;
}
</style>
