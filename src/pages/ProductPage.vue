<template>
  <div class="page">
    <header class="header">
      <h1>Products</h1>
    </header>
    <section class="products">
      <ProductCard
        name="Marmita"
        description="Tamanho M"
        :price="18.0"
        currency="BRL"
        imageSrc="marmita.jpg"
        badge="Novo"
        href=""
      />
      <ProductCard
        name="Refrigerante"
        description="Lata"
        :price="5.0"
        currency="BRL"
        imageSrc="refri-lata.jpeg"
        badge="Novo"
        href=""
      />
      <ProductCard
        name="Marmita"
        description="Tamanho P"
        :price="15.0"
        currency="BRL"
        imageSrc="marmita.jpg"
        badge="Novo"
        href=""
      />
      <ProductCard
        name="Refrigerante"
        description="PET 600ml"
        :price="7.5"
        currency="BRL"
        imageSrc="refrigerante-600.jpg"
        badge="Novo"
        href=""
      />
    </section>
    <div class="cart" aria-label="Carrinho de compras">
      <h2><v-icon icon="mdi-cart-variant" />Carrinho</h2>
      <h3>Products</h3>
      <ul>
        <li class="cart-item" v-for="(item, index) in products" :key="item.name">
          {{ index + 1 }} - {{ item.quantity }} Un | {{ item.name }}
          <v-btn variant="text"><v-icon icon="mdi-trash-can-outline" /></v-btn>
        </li>
      </ul>
    </div>
    <v-btn class="floating-cta" :disabled="!haveItemSelected"> Adicionar ao carrinho </v-btn>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue'
const haveItemSelected = false
const products = [
  {
    name: 'Refrigerante 600',
    quantity: 3,
  },
  {
    name: 'Marmita M',
    quantity: 3,
  },
]
</script>

<style scoped>
.page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  align-items: start;
}

/* cada filho precisa poder encolher dentro da coluna */
.products > * {
  width: 100%;
  min-width: 0;
  min-height: 0;
}

.products :deep(.v-card) {
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.products :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header {
  display: flex;
  justify-content: center;
}

.cart {
  position: fixed;
  top: 16px;
  right: 100px;
  width: var(--rail-w);
  z-index: 20;

  background: #d1fae5;
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: #065f46;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.08);
}

.cart-item {
  list-style: none;
}

.floating-cta {
  position: fixed;
  right: 150px;
  bottom: 100px;
  width: var(--rail-w);
  z-index: 20;

  display: block;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  background: #10b981;
  color: white;
  font-weight: 700;
  opacity: 0.6;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.15);
}

@media (max-width: 900px) {
  .products {
    padding-right: 16px;
  }
  .cart,
  .floating-cta {
    display: none;
  }
}
</style>
