<template>
  <main class="content">
    <h1>Bem-vindo ao {{ applicationName }}, {{ userName }}</h1>
  </main>
</template>

<script setup lang="ts">
const applicationName = import.meta.env.VITE_APPLICATION_NAME
const userName = 'Felipe'
</script>

<style lang="css" scoped>
.content {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
