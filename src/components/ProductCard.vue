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
      currency: props.currency ?? 'BRL',
    }).format(props.price)
  } catch {
    return String(props.price)
  }
})
</script>

<template>
  <v-card class="product-card" elevation="2">
    <v-img class="media align-end text-white" :src="imageSrc" :alt="imageAlt || name" cover>
      <v-card-title class="title">{{ name }}</v-card-title>
    </v-img>

    <div class="info">
      <v-card-subtitle class="pt-2 desc">{{ description }}</v-card-subtitle>
      <v-card-text class="price">{{ formattedPrice }}</v-card-text>

      <v-card-actions class="actions">
        <v-btn variant="tonal" :rounded="0" @click="quantity = Math.max(0, quantity - 1)">
          <v-icon icon="mdi-minus" />
        </v-btn>

        <div class="qty">{{ quantity }}</div>

        <v-btn variant="tonal" :rounded="0" @click="quantity++">
          <v-icon icon="mdi-plus" />
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped>
.product-card {
  --media-h: 250px;
  --info-h: 130px;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(var(--media-h) + var(--info-h));
  box-shadow: 5px 10px 18px #888888;
}
.product-card:hover .media {
  transform: scale(1.03);
}
.media {
  flex: 0 0 var(--media-h);
  transition: transform 0.25s ease;
}
.info {
  flex: 0 0 var(--info-h);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem 0.75rem;
}

.info :deep(.v-card-subtitle),
.info :deep(.v-card-text) {
  padding: 0 !important;
  margin: 0 !important;
  line-height: 1.25;
}

.title {
  background: rgba(0, 0, 0, 0.3);
  font-weight: bold;
}

.desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
.price {
  font-weight: 700;
  margin-top: 0.25rem;
}

.actions {
  margin-top: auto; /* encosta no rodapé do bloco de infos */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

/* deixa os botões compactos e não redondos */
.actions :deep(.v-btn) {
  min-width: 36px;
  height: 36px;
  padding: 0 0.5rem;
  border-radius: 6px;
}
.qty {
  min-width: 2ch;
  text-align: center;
}
</style>
