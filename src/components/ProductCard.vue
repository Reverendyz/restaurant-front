<script setup lang="ts">
import { computed, ref } from 'vue'

const quantity = ref(0)

const props = defineProps<{
  name: string
  description?: string
  price: number | string
  currency?: string
  imageSrc: string
  imageAlt?: string
  badge?: string
}>()

const formattedPrice = computed(() => {
  if (typeof props.price === 'string') return props.price
  try {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: props.currency ?? 'BRL'
    }).format(props.price)
  } catch {
    return String(props.price)
  }
})
</script>

<template>
  <v-card
    class="mx-auto"
    min-width="300"
    max-width="300"
  >
    <v-img
      class="align-end text-white"
      :src="imageSrc"
      cover
    >
      <v-card-title class="title">{{ name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ description }}
    </v-card-subtitle>
    <v-card-text>
    {{ formattedPrice }}
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-btn
        @click="quantity = Math.max(0, quantity - 1)">
        <v-icon
          icon="mdi-minus"
          start
        ></v-icon>
      </v-btn>
      {{ quantity }}
      <v-btn
        @click="quantity++">
        <v-icon
          icon="mdi-plus"
          end
        ></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.title {
  background-color: rgba(0,0,0,.3);
  font-weight: bold;
}
.card-actions {
  display: flex;
  justify-content: space-between;
}
</style>
