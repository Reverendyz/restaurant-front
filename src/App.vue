<script setup lang="ts"></script>

<template>
  <header class="site-header">
    <nav class="nav">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <span class="sep" aria-hidden="true">|</span>
      <RouterLink class="nav-link" to="/product">Products</RouterLink>
      <span class="sep" aria-hidden="true">|</span>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
    </nav>
  </header>

  <main class="content">
    <RouterView />
  </main>
  <footer class="footer">
    <p>RevzIT's property</p>
  </footer>
</template>

<style scoped>
:root {
  color-scheme: light dark;
}

.site-header {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.sep {
  opacity: 0.3;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem;
  border-radius: 9px;
  background: color-mix(in oklab, Canvas 85%, transparent);
  backdrop-filter: saturate(160%) blur(8px);
  box-shadow: 0 6px 24px rgb(0 0 0 / 0.08);
  border: 1px solid color-mix(in oklab, CanvasText 12%, transparent);
  width: max-content; /* deixa o bloco tão largo quanto os links */
}

.nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  color: color-mix(in oklab, CanvasText 90%, transparent);
  transition:
    background 0.15s ease,
    transform 0.1s ease;
}

.nav-link:hover {
  background: color-mix(in oklab, CanvasText 8%, transparent);
}
.nav-link:focus-visible {
  outline: 2px solid color-mix(in oklab, AccentColor 60%, CanvasText 20%);
  outline-offset: 2px;
}

.router-link-active {
  background: color-mix(in oklab, AccentColor 20%, Canvas 80%);
  color: color-mix(in oklab, AccentColor 80%, CanvasText 20%);
}

.content {
  max-width: 110ch;
  margin: 2rem auto;
  padding: 0 1rem;
  overflow: auto;
  word-wrap: none;
}
.footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
}
</style>
