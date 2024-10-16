<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <main class="login-view">
    <LoginForm />
  </main>
</template>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(
    --color-background-soft
  ); /* Ensure the entire page background is consistent */
}
</style>
