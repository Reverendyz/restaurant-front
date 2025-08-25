<template>
  <header class="header">
    <h1>Products</h1>
  </header>
  <section class="products">
    <ProductCard
      name="Marmita"
      description="Tamanho M"
      :price="18.00"
      currency="BRL"
      imageSrc="marmita.jpg"
      badge="Novo"
      href=""
    />
    <ProductCard
      name="Refrigerante"
      description="Lata"
      :price="5.00"
      currency="BRL"
      imageSrc="refri-lata.jpeg"
      badge="Novo"
      href=""
    />
  </section>
  <footer class="footer">
    <p>RevzIT's property</p>
  </footer>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';
</script>

<style lang="css" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8rem;
  align-items: stretch;
}

.products :deep(.product-card) {
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>

