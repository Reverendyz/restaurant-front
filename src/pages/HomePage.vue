<template>
  <h1>Bem-vindo ao {{ applicationName }}, {{ userName }}</h1>
</template>

<script setup lang="ts">
const applicationName = import.meta.env.VITE_APPLICATION_NAME
const userName = 'Felipe'
</script>
