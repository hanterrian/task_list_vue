<script setup lang="ts">
const route = useRoute()
async function submit() {
  const { body } = await $fetch('/api/login', {
    method: 'post',
    body: { test: 123 }
  })

  console.log(body)
}
</script>

<template>
  <div v-on:click="submit">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
