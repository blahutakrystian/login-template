<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Global styles */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure body takes full height */
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  background-color: var(
    --color-background-soft
  ); /* Apply background to entire page */
}

main {
  display: flex; /* Use Flexbox for layout */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh; /* Full viewport height */
  background-color: var(
    --color-background-soft
  ); /* Match background color with form */
}
</style>
